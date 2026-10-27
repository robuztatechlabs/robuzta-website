import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import nodemailer from 'nodemailer';

const PRODUCTION_GOOGLE_SHEETS_WEBHOOK = 'https://script.google.com/macros/s/AKfycbwUubMl7HlaqvuA5c5xgoEUjecmAkXerc_TjaqV9A7YARPFYf8bg_FPF_5ylcIVkug/exec';
const PRODUCTION_NOTIFICATION_EMAIL = 'Robuzta.tech@gmail.com';

/**
 * Build a Nodemailer SMTP transporter using Hostinger credentials from .env.local
 * Returns null if SMTP is not configured (graceful fallback).
 */
function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    console.warn('[Lead API] SMTP not configured — email notifications disabled. Set SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });
}

/**
 * Build a professional HTML email body for the lead notification.
 */
function buildEmailHtml(leadData) {
  const rows = [
    ['Lead ID', leadData.id],
    ['Timestamp', leadData.timestamp],
    ['Form Type', leadData.formType],
    ['Name', leadData.name],
    ['Phone', leadData.phone],
    ['Email', leadData.email],
    ['Device', leadData.device],
    ['Issue', leadData.issue],
    ['Locality', leadData.locality],
    ['Notes', leadData.notes]
  ]
    .filter(([, val]) => val && val !== PRODUCTION_NOTIFICATION_EMAIL)
    .map(
      ([label, val]) =>
        `<tr><td style="padding:10px 14px;font-weight:700;color:#334155;border-bottom:1px solid #e2e8f0;width:140px;white-space:nowrap;">${label}</td><td style="padding:10px 14px;color:#0f172a;border-bottom:1px solid #e2e8f0;">${val}</td></tr>`
    )
    .join('');

  return `
    <div style="font-family:'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,#0E7C7B,#0d6b6a);padding:24px 28px;">
        <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:800;letter-spacing:-0.3px;">🚨 New Robuzta Lead</h1>
        <p style="margin:6px 0 0;color:#a7f3d0;font-size:13px;font-weight:600;">${leadData.formType} — ${leadData.name || 'Unknown'}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        ${rows}
      </table>
      <div style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0;text-align:center;">
        <p style="margin:0;color:#94a3b8;font-size:11px;font-weight:600;">Robuzta Techlabs Lead System — Automated Notification</p>
      </div>
    </div>
  `;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      formType = 'General Lead',
      name = '',
      phone = '',
      email = '',
      device = '',
      issue = '',
      locality = '',
      notes = ''
    } = body;

    const timestamp = new Date().toISOString();
    const leadData = {
      id: `LEAD-${Date.now()}`,
      timestamp,
      formType,
      name,
      phone,
      email: email || '',
      device,
      issue,
      locality,
      notes
    };

    // 1. FAIL-SAFE LOCAL STORAGE BACKUP
    try {
      const dataDir = path.join(process.cwd(), 'src', 'data');
      const filePath = path.join(dataDir, 'leads-backup.json');

      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      let existingLeads = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
          existingLeads = JSON.parse(fileContent);
        } catch {
          existingLeads = [];
        }
      }

      existingLeads.unshift(leadData);
      fs.writeFileSync(filePath, JSON.stringify(existingLeads, null, 2));
    } catch (err) {
      console.error('Local lead backup save error:', err);
    }

    // 2. GOOGLE SHEETS WEBHOOK DISPATCH
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL || PRODUCTION_GOOGLE_SHEETS_WEBHOOK;
    if (sheetsWebhook) {
      try {
        await fetch(sheetsWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        });
      } catch (err) {
        console.error('Google Sheets Webhook dispatch error:', err);
      }
    }

    // 3. EMAIL NOTIFICATION VIA NODEMAILER (Hostinger SMTP)
    const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || PRODUCTION_NOTIFICATION_EMAIL;
    const transporter = getMailTransporter();

    if (transporter) {
      try {
        await transporter.sendMail({
          from: `"Robuzta Lead System" <${process.env.SMTP_USER}>`,
          to: toEmail,
          subject: `🚨 New Robuzta Lead: ${formType} — ${name} (${phone})`,
          html: buildEmailHtml(leadData)
        });
        console.log(`[Lead API] Email sent to ${toEmail} for lead ${leadData.id}`);
      } catch (err) {
        console.error('[Lead API] Email send error:', err);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead recorded successfully in system, Google Sheets & Email queue.',
      leadId: leadData.id
    });
  } catch (error) {
    console.error('Lead processing error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to record lead details' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'leads-backup.json');
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ success: true, count: 0, leads: [] });
    }
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const leads = JSON.parse(fileContent);
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to fetch leads' }, { status: 500 });
  }
}
