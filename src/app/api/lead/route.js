import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
      email,
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

    // 2. GOOGLE SHEETS WEBHOOK DISPATCH (IF CONFIGURED)
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhook) {
      try {
        await fetch(sheetsWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        });
      } catch (err) {
        console.error('Google Sheets Webhook error:', err);
      }
    }

    // 3. EMAIL NOTIFICATION DISPATCH (IF CONFIGURED)
    const emailWebhook = process.env.EMAIL_WEBHOOK_URL;
    if (emailWebhook) {
      try {
        await fetch(emailWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: process.env.LEAD_NOTIFICATION_EMAIL || 'info@robuzta.com',
            subject: `🚨 New Lead: ${formType} - ${name} (${phone})`,
            leadData
          })
        });
      } catch (err) {
        console.error('Email Webhook error:', err);
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
