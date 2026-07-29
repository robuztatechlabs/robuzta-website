'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site';
import { Building2, CheckCircle2 } from 'lucide-react';

export function FranchiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    investment: '₹10L - ₹20L',
    background: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hi Robuzta Franchise Team! My name is ${formData.name}. I am interested in opening a Robuzta Techlabs franchise in ${formData.city}.\n\n*Investment Capacity:* ${formData.investment}\n*Background:* ${formData.background}\n*Phone:* ${formData.phone}\n*Note:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  return (
    <div className="form-card">
      <h3 className="form-title">Apply for Robuzta Franchise</h3>
      <p className="form-subtitle">
        Partner with India&apos;s fastest-growing multi-device repair lab network.
      </p>

      {submitted ? (
        <div className="form-success-box" role="alert">
          <CheckCircle2 size={36} className="text-teal" />
          <h4>Franchise Application Received!</h4>
          <p>
            Connecting you directly with the Robuzta Business Development Director on WhatsApp...
          </p>
          <button
            type="button"
            className="button button-primary"
            onClick={() => setSubmitted(false)}
            style={{ marginTop: '16px' }}
          >
            Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="quote-form">
          <div className="form-group">
            <label htmlFor="franchise-name">Full Name *</label>
            <input
              id="franchise-name"
              type="text"
              name="name"
              required
              placeholder="e.g. Vikram Patel"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="franchise-phone">Phone / WhatsApp Number *</label>
            <input
              id="franchise-phone"
              type="tel"
              name="phone"
              required
              placeholder="e.g. +91 98250 12345"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="franchise-city">Target City / Area *</label>
            <input
              id="franchise-city"
              type="text"
              name="city"
              required
              placeholder="e.g. Vadodara, Surat, Rajkot, Ahmedabad West"
              value={formData.city}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="franchise-investment">Investment Capacity *</label>
            <select
              id="franchise-investment"
              name="investment"
              value={formData.investment}
              onChange={handleChange}
              className="form-input"
            >
              <option value="₹5L - ₹10L">₹5 Lakhs – ₹10 Lakhs</option>
              <option value="₹10L - ₹20L">₹10 Lakhs – ₹20 Lakhs</option>
              <option value="₹20L+">₹20 Lakhs+</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="franchise-background">Current Business / Career Background</label>
            <input
              id="franchise-background"
              type="text"
              name="background"
              placeholder="e.g. Retail Store Owner, IT Engineer, Entrepreneur"
              value={formData.background}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="franchise-message">Additional Questions / Notes</label>
            <textarea
              id="franchise-message"
              name="message"
              rows={3}
              placeholder="Tell us about your preferred store location or timelines..."
              value={formData.message}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Building2 size={18} />
            Submit Franchise Inquiry
          </Button>
        </form>
      )}
    </div>
  );
}
