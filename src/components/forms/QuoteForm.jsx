'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';
import { Send, CheckCircle2 } from 'lucide-react';

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

    // Format WhatsApp message redirect for instant lead conversion
    const message = `Hi Robuzta Techlabs! My name is ${formData.name}. I need repair for my ${formData.device}.\n\n*Service Option:* ${formData.serviceType}\n*Issue:* ${formData.issue}\n*Phone:* ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <div className="form-card">
      <h3 className="form-title">{title}</h3>
      <p className="form-subtitle">
        Get an immediate diagnostic estimate. No OTP or login needed.
      </p>

      {submitted ? (
        <div className="form-success-box" role="alert">
          <CheckCircle2 size={36} className="text-teal" />
          <h4>Quote Request Sent!</h4>
          <p>
            Opening WhatsApp to connect you directly with a Robuzta Senior Technician...
          </p>
          <button
            type="button"
            className="button button-primary"
            onClick={() => setSubmitted(false)}
            style={{ marginTop: '16px' }}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label htmlFor="quote-name">Your Full Name *</label>
            <input
              id="quote-name"
              type="text"
              name="name"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-phone">Phone / WhatsApp Number *</label>
            <input
              id="quote-phone"
              type="tel"
              name="phone"
              required
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-device">Device Type *</label>
            <select
              id="quote-device"
              name="device"
              value={formData.device}
              onChange={handleChange}
              className="form-input"
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

          <div className="form-group">
            <label htmlFor="quote-serviceType">Service Preference</label>
            <select
              id="quote-serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="form-input"
            >
              <option value="Doorstep Pickup">Free Doorstep Pickup (Ahmedabad)</option>
              <option value="Lab Visit">Lab Carry-In Visit (South Bopal / Tragad)</option>
              <option value="Courier Repair">Pan-India Insured Courier Repair</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quote-issue">Describe the Problem *</label>
            <textarea
              id="quote-issue"
              name="issue"
              rows={3}
              required
              placeholder="e.g. Broken screen, water spill, laptop not turning on, battery swelling..."
              value={formData.issue}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Send size={18} />
            Get Instant Quote on WhatsApp
          </Button>

          <p className="form-disclaimer">
            🔒 Your data is 100% safe. No OTP or device passwords required for quotes.
          </p>
        </form>
      )}
    </div>
  );
}
