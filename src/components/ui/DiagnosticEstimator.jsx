'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Wrench, ShieldCheck, Clock, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const diagnosticData = {
  Laptop: {
    brands: ['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'MSI'],
    issues: [
      { name: 'Cracked Screen / Display Bleed', price: '₹2,499 – ₹4,999', time: '2 to 3 Hours', warranty: '180 Days' },
      { name: 'Battery Not Charging / Draining', price: '₹1,799 – ₹3,299', time: '1 to 2 Hours', warranty: '180 Days' },
      { name: 'Keyboard / Touchpad Failure', price: '₹1,299 – ₹2,499', time: '2 Hours', warranty: '90 Days' },
      { name: 'Motherboard No Power / Dead', price: '₹2,999 – ₹6,499', time: '24 to 48 Hours', warranty: '90 Days' },
      { name: 'Slow Boot / Hard Drive Failure', price: '₹1,999 – ₹4,499', time: '1 Hour', warranty: '3 Years (SSD)' },
      { name: 'Overheating / Fan Noise', price: '₹899 – ₹1,499', time: '1 Hour', warranty: '90 Days' }
    ]
  },
  MacBook: {
    brands: ['MacBook Air M1/M2/M3', 'MacBook Pro 13"/14"/16"', 'Intel MacBook Air', 'Intel MacBook Pro'],
    issues: [
      { name: 'Retina Display Replacement', price: '₹8,999 – ₹18,999', time: '3 to 4 Hours', warranty: '180 Days' },
      { name: 'Battery Service Warning', price: '₹4,999 – ₹8,999', time: '2 Hours', warranty: '180 Days' },
      { name: 'Logic Board Micro-Soldering', price: '₹6,499 – ₹14,999', time: '24 to 48 Hours', warranty: '90 Days' },
      { name: 'Liquid Damage Clean & Repair', price: '₹4,499 – ₹9,999', time: '24 Hours', warranty: '90 Days' },
      { name: 'Keyboard / Butterfly Key Fix', price: '₹3,999 – ₹7,499', time: '3 Hours', warranty: '90 Days' },
      { name: 'USB-C Charging Port Repair', price: '₹2,999 – ₹5,499', time: '2 Hours', warranty: '90 Days' }
    ]
  },
  Smartphone: {
    brands: ['iPhone (All Series)', 'Samsung Galaxy S/A Series', 'OnePlus', 'Google Pixel', 'Xiaomi / Realme'],
    issues: [
      { name: 'Original Screen Replacement', price: '₹1,999 – ₹9,999', time: '1 Hour', warranty: '180 Days' },
      { name: 'Battery Health Replacement', price: '₹1,299 – ₹3,999', time: '45 Mins', warranty: '180 Days' },
      { name: 'Charging Port / Flex Cable', price: '₹899 – ₹1,999', time: '45 Mins', warranty: '90 Days' },
      { name: 'Speaker / Mic / Earpiece', price: '₹799 – ₹1,799', time: '45 Mins', warranty: '90 Days' },
      { name: 'Water Spill Treatment', price: '₹1,499 – ₹3,499', time: '12 Hours', warranty: '90 Days' }
    ]
  },
  Surface: {
    brands: ['Surface Pro 7/8/9', 'Surface Laptop 3/4/5', 'Surface Book 2/3', 'Surface Go'],
    issues: [
      { name: 'Touchscreen Digitizer Panel', price: '₹7,999 – ₹15,999', time: '4 Hours', warranty: '180 Days' },
      { name: 'Battery Replacement', price: '₹4,499 – ₹8,499', time: '3 Hours', warranty: '180 Days' },
      { name: 'Charging Port & Power IC', price: '₹3,999 – ₹7,999', time: '24 Hours', warranty: '90 Days' }
    ]
  },
  'Gaming PC': {
    brands: ['Custom Intel/AMD Rig', 'ASUS ROG', 'MSI Gaming', 'Alienware / Dell G Series'],
    issues: [
      { name: 'GPU Crash / Artifact Repair', price: '₹3,499 – ₹8,999', time: '24 Hours', warranty: '90 Days' },
      { name: 'Thermal Paste & Liquid Cooler', price: '₹1,199 – ₹2,499', time: '1 Hour', warranty: '90 Days' },
      { name: 'Power Supply (PSU) Swap', price: '₹2,499 – ₹5,999', time: '1 Hour', warranty: '3 Years (PSU)' }
    ]
  }
};

export function DiagnosticEstimator() {
  const [device, setDevice] = useState('Laptop');
  const [brand, setBrand] = useState(diagnosticData.Laptop.brands[0]);
  const [selectedIssue, setSelectedIssue] = useState(diagnosticData.Laptop.issues[0]);

  const handleDeviceChange = (dev) => {
    setDevice(dev);
    setBrand(diagnosticData[dev].brands[0]);
    setSelectedIssue(diagnosticData[dev].issues[0]);
  };

  const whatsappMsg = `Hi Robuzta Techlabs! I used your Interactive Diagnostic Estimator:\n\n*Device:* ${device} (${brand})\n*Issue:* ${selectedIssue.name}\n*Estimated Quote:* ${selectedIssue.price}\n\nI want to book free doorstep pickup / lab inspection.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="estimator-card glass-card">
      <div className="estimator-header">
        <Wrench className="text-teal" size={28} />
        <div>
          <h3>Interactive Device Repair Cost Estimator</h3>
          <p>Select your device and fault for an immediate diagnostic price estimate.</p>
        </div>
      </div>

      <div className="estimator-body">
        {/* Step 1: Select Category */}
        <div className="estimator-step">
          <label>1. Select Device Category:</label>
          <div className="category-pills">
            {Object.keys(diagnosticData).map((cat) => (
              <button
                key={cat}
                type="button"
                className={`pill-btn ${device === cat ? 'active' : ''}`}
                onClick={() => handleDeviceChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Brand */}
        <div className="estimator-step">
          <label>2. Select Brand / Model Series:</label>
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="form-input"
          >
            {diagnosticData[device].brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Step 3: Select Issue */}
        <div className="estimator-step">
          <label>3. Select Hardware Problem:</label>
          <div className="issue-grid">
            {diagnosticData[device].issues.map((iss) => (
              <button
                key={iss.name}
                type="button"
                className={`issue-card ${selectedIssue.name === iss.name ? 'active' : ''}`}
                onClick={() => setSelectedIssue(iss)}
              >
                <div className="issue-card-content">
                  <strong>{iss.name}</strong>
                  <span className="issue-price">{iss.price}</span>
                </div>
                {selectedIssue.name === iss.name && <CheckCircle2 size={18} className="text-teal" />}
              </button>
            ))}
          </div>
        </div>

        {/* Output Calculation Result Box */}
        <div className="result-card">
          <div className="result-header">
            <div>
              <span className="result-tag">Estimated Cost Range</span>
              <h4 className="result-price">{selectedIssue.price}</h4>
            </div>
            <div className="result-badge">
              <ShieldCheck size={16} />
              <span>{selectedIssue.warranty} Warranty</span>
            </div>
          </div>

          <div className="result-meta">
            <div>
              <Clock size={16} className="text-teal" />
              <span>Est. Turnaround: <strong>{selectedIssue.time}</strong></span>
            </div>
            <div>
              <CheckCircle2 size={16} className="text-teal" />
              <span>Zero-OTP Data Protection Included</span>
            </div>
          </div>

          <div className="result-actions">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-whatsapp"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Book Pickup with This Quote on WhatsApp <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
