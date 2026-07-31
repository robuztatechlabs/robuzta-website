'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function QuoteForm({ title = 'Get a Free Fast Repair Quote', defaultDevice = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: defaultDevice || 'Laptop',
    serviceType: 'Doorstep Pickup',
    issue: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hi Robuzta Techlabs! My name is ${formData.name}. I need repair for my ${formData.device}.\n\n*Service Option:* ${formData.serviceType}\n*Issue:* ${formData.issue}\n*Phone:* ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 p-6 sm:p-8 shadow-2xl shadow-slate-900/10 space-y-6">
      
      <div className="space-y-1.5 border-b border-slate-100 dark:border-slate-800 pb-4">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 leading-tight">
          {title}
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Get an immediate diagnostic estimate. No OTP or passwords required.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4">
          <CheckCircle2 size={40} className="text-emerald-600 mx-auto" />
          <div className="space-y-1">
            <h4 className="text-lg font-black text-slate-900 dark:text-slate-100">Quote Request Sent!</h4>
            <p className="text-xs text-emerald-800 font-medium">
              Opening WhatsApp to connect you directly with a Robuzta Senior Technician...
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="w-full rounded-xl bg-slate-900 hover:bg-slate-800 py-3 text-xs font-black text-white shadow-md transition-all cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Your Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs text-slate-900 dark:text-slate-100 font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:bg-white focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs text-slate-900 dark:text-slate-100 font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:bg-white focus:outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Device Type *
            </label>
            <select
              name="device"
              value={formData.device}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs text-slate-900 dark:text-slate-100 font-medium focus:border-[#0E7C7B] focus:bg-white focus:outline-none"
            >
              <option value="Laptop">Laptop (Dell, HP, Lenovo, ASUS, Acer)</option>
              <option value="MacBook">MacBook (Pro, Air, M1/M2/M3)</option>
              <option value="Mobile">Smartphone (iPhone, Samsung, OnePlus)</option>
              <option value="Microsoft Surface">Microsoft Surface</option>
              <option value="Gaming PC">Gaming PC / Desktop</option>
              <option value="Data Recovery">Data Recovery (HDD/SSD/NVMe)</option>
              <option value="Other">Other Electronic Hardware</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Service Preference
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs text-slate-900 dark:text-slate-100 font-medium focus:border-[#0E7C7B] focus:bg-white focus:outline-none"
            >
              <option value="Doorstep Pickup">Free Doorstep Pickup (Ahmedabad)</option>
              <option value="Lab Visit">Lab Carry-In Visit (South Bopal / Tragad)</option>
              <option value="Courier Repair">Pan-India Insured Courier Repair</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Describe the Problem *
            </label>
            <textarea
              name="issue"
              rows={3}
              required
              placeholder="e.g. Broken screen, water spill, laptop not turning on, battery swelling..."
              value={formData.issue}
              onChange={handleChange}
              className="w-full rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-3 text-xs text-slate-900 dark:text-slate-100 font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:bg-white focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-xs font-black text-white shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
          >
            <WhatsappIcon size={18} className="text-white" />
            <span>Get Instant Quote on WhatsApp</span>
          </button>

          <p className="text-[11px] font-semibold text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck size={14} className="text-[#0E7C7B]" />
            <span>Your data is 100% safe. Zero OTP required.</span>
          </p>
        </form>
      )}
    </div>
  );
}
