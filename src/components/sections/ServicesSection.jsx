'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Laptop,
  Smartphone,
  Cpu,
  Flame,
  Truck,
  Headphones,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Wrench,
  Activity,
  Phone
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const serviceTabs = [
  {
    id: 'laptop-repair',
    slug: 'laptop-repair',
    icon: Laptop,
    badge: '01 // LAPTOP & MACBOOK',
    title: 'Laptop & MacBook Precision Hardware Repair',
    description: 'Chip-level motherboard logic soldering, BGA GPU rework, cracked Retina display replacement, battery swap, and liquid spill decontamination for Dell, HP, Lenovo, ASUS, Acer, MSI, and Apple MacBook Air/Pro.',
    time: '2 to 4 Hours',
    warranty: '180 Days Warranty',
    highlights: [
      'Original Retina & IPS Screen Swap',
      'Motherboard Micro-Soldering (BGA Rework)',
      'Battery & High-Speed NVMe SSD Upgrade',
      'Hinge Re-anchoring & Chassis Repair',
      'Thermal Repasting & Fan Dust Decontamination'
    ],
    accentColor: '#0E7C7B',
    ctaUrl: '/services/laptop-repair'
  },
  {
    id: 'mobile-repair',
    slug: 'mobile-repair',
    icon: Smartphone,
    badge: '02 // MOBILE & SMARTPHONE',
    title: 'Smartphone OLED Display & Component Care',
    description: 'Genuine OLED/AMOLED screen replacement, battery health service, charging port flex swap, camera sensor alignment, and water damage treatment for iPhone, Samsung Galaxy, OnePlus, Google Pixel, and Android tablets.',
    time: '45 to 90 Mins',
    warranty: '180 Days Warranty',
    highlights: [
      'Original OLED 120Hz Touch Display',
      'Battery Health & Capacity Replacement',
      'Type-C / Lightning Port Flex Swap',
      'Earpiece & Loudspeaker Mesh Cleaning',
      'Chemical Liquid Spill Board Wash'
    ],
    accentColor: '#ea580c',
    ctaUrl: '/services/mobile-repair'
  },
  {
    id: 'macbook-repair',
    slug: 'macbook-repair',
    icon: Cpu,
    badge: '03 // MACBOOK & SURFACE',
    title: 'MacBook & Microsoft Surface Specialist Care',
    description: 'Specialized ESD-safe disassembly and logic board repair for Apple Silicon MacBook Air/Pro (M1, M2, M3, Intel), Microsoft Surface Pro, Surface Laptop, Surface Book, and All-in-One workstations.',
    time: '3 to 24 Hours',
    warranty: '180 Days Warranty',
    highlights: [
      'Apple M1/M2/M3 Power IC Soldering',
      'Surface Digitizer Glass Bonding',
      'Thunderbolt & USB-4 Port Repair',
      'macOS/Windows OS Recovery',
      'Trackpad & Butterfly Keyboard Fix'
    ],
    accentColor: '#0E7C7B',
    ctaUrl: '/services/macbook-repair'
  },
  {
    id: 'gaming-pc-repair',
    slug: 'gaming-pc-repair',
    icon: Flame,
    badge: '04 // GAMING RIGS',
    title: 'Gaming PC & Custom Rig Thermal Tuning',
    description: 'GPU crash diagnostic, VRAM micro-soldering, Arctic MX-6 thermal repasting, custom liquid cooling loop flushing, PSU voltage load testing, and 3DMark stability benchmarking.',
    time: '1 to 24 Hours',
    warranty: '90 to 365 Days',
    highlights: [
      'NVIDIA/AMD GPU Micro-Soldering',
      'Custom AIO & Liquid Loop Maintenance',
      'CPU Thermal Throttling Remediation',
      'Modular PSU & Cable Cable Management',
      '3DMark Stress Testing & Benchmarking'
    ],
    accentColor: '#ea580c',
    ctaUrl: '/services/gaming-pc-repair'
  },
  {
    id: 'free-pickup',
    slug: 'contact',
    icon: Truck,
    badge: '05 // DOORSTEP PICKUP',
    title: 'Free Anti-Static Pickup Across Ahmedabad',
    description: 'Dedicated Robuzta pickup executive collects your broken laptop, Mac, or phone directly from your home or office in South Bopal, Satellite, Vastrapur, Motera, or Tragad with anti-static padding and zero OTP privacy.',
    time: 'Same-Day Dispatch',
    warranty: 'Insured Transit',
    highlights: [
      'Free Pickup in South Bopal & Satellite',
      'Anti-Static Padded Transport Box',
      'Zero OTP & Zero Password Policy',
      'Live Video Unboxing Logged',
      'Pan-India Express Ship-In Service'
    ],
    accentColor: '#0E7C7B',
    ctaUrl: '/contact'
  },
  {
    id: 'remote-support',
    slug: 'contact',
    icon: Headphones,
    badge: '06 // REMOTE TECH SUPPORT',
    title: 'Remote Technical Support & Live Consultation',
    description: 'Instant remote OS troubleshooting, driver installation, software diagnostics, and live video hardware inspection with senior technicians before shipping your device.',
    time: 'Instant Remote',
    warranty: 'Zero Cost Inspection',
    highlights: [
      'Live Video Call Hardware Check',
      'Remote Windows & macOS Recovery',
      'Driver & Firmware Optimization',
      'Antivirus & Malware Cleanup',
      'Senior Tech Consultation'
    ],
    accentColor: '#2563eb',
    ctaUrl: '/contact'
  }
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0]);

  const whatsappMsg = `Hi Robuzta Techlabs! I need a custom quote for ${activeTab.title}:\n\nRequirement: Free inspection & doorstep pickup.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="services" className="relative bg-white py-24 border-b border-slate-200 overflow-hidden">
      
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#0E7C7B]/5 via-blue-500/5 to-orange-500/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1.5 text-xs font-black text-[#0E7C7B] uppercase tracking-widest"
          >
            <Sparkles size={14} className="text-[#0E7C7B]" />
            INTERACTIVE HARDWARE LAB NAVIGATOR
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Specialized Diagnostics & Precision Repairs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium"
          >
            Click any device division below to inspect lab capabilities, turnaround times, and verified specifications.
          </motion.p>
        </div>

        {/* Interactive Segmented Device Selector Bar (Linear Style) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
          {serviceTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center gap-2 px-4 py-3 rounded-2xl text-xs font-extrabold transition-all shrink-0 border ${
                  isActive
                    ? 'bg-[#0E7C7B] text-white border-[#0E7C7B] shadow-lg shadow-[#0E7C7B]/25 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-[#0E7C7B]'} />
                <span>{tab.title.split(' ')[0]} {tab.title.split(' ')[1]}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-2xl border-2 border-white/30 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Showcase Board */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-gradient-to-br from-slate-50 via-white to-teal-50/20 border border-slate-200 p-6 sm:p-10 shadow-2xl space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Spec Details & Capabilities */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-black text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3 py-1 rounded-full">
                    {activeTab.badge}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Activity size={13} className="text-[#0E7C7B] animate-pulse" />
                    ESD Anti-Static Bench Active
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {activeTab.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                    {activeTab.description}
                  </p>
                </div>

                {/* Key Spec Highlights */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400 block">
                    Verified Lab Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeTab.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white border border-slate-200/80 p-3 rounded-xl shadow-sm">
                        <CheckCircle2 size={16} className="text-[#0E7C7B] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200 text-xs font-extrabold text-slate-700">
                  <span className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg">
                    <Clock size={15} className="text-[#0E7C7B]" /> {activeTab.time}
                  </span>
                  <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg">
                    <ShieldCheck size={15} className="text-emerald-700" /> {activeTab.warranty}
                  </span>
                  <span className="flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 px-3 py-1.5 rounded-lg">
                    <Zap size={15} className="text-amber-600" /> Zero-OTP Protected
                  </span>
                </div>

                {/* Action CTAs with Explicit High-Contrast Colors */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-2xl bg-emerald-600 px-7 py-4 text-xs font-black text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 hover:scale-[1.02] transition-all"
                  >
                    <WhatsappIcon size={20} className="text-white shrink-0" />
                    <span className="text-white font-extrabold">Book Diagnostic via WhatsApp</span>
                  </a>

                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-2xl px-6 py-4 text-xs font-black shadow-md hover:bg-slate-200 transition-all"
                    style={{ backgroundColor: '#f1f5f9', color: '#0f172a' }}
                  >
                    <Phone size={16} style={{ color: '#0E7C7B' }} />
                    <span style={{ color: '#0f172a', fontWeight: 900 }}>Call Senior Tech Directly</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Visual Lab Inspection Card */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0E7C7B] to-[#0F172A] text-white p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                  
                  {/* Card Glow */}
                  <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl" />

                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div className="flex items-center gap-2">
                      <Wrench size={18} className="text-teal-300" />
                      <span className="text-xs font-mono font-extrabold uppercase text-teal-100">ROBUZTA HARDWARE STATION</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/15 space-y-2">
                      <div className="text-[10px] font-mono font-bold text-teal-200 uppercase tracking-widest">Inspection Protocol</div>
                      <div className="text-lg font-black text-white">{activeTab.title}</div>
                      <div className="text-xs text-teal-100 leading-relaxed font-medium">
                        ISO 27001 Certified Anti-Static ESD Bench • Live HD Video Inspection Logged • Zero Password Needed.
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-xl bg-white/10 p-3 border border-white/15 space-y-1">
                        <span className="text-[10px] text-teal-200 font-mono">Part Serial:</span>
                        <div className="font-extrabold text-white">100% Verified OEM</div>
                      </div>
                      <div className="rounded-xl bg-white/10 p-3 border border-white/15 space-y-1">
                        <span className="text-[10px] text-teal-200 font-mono">Diagnosis Fee:</span>
                        <div className="font-extrabold text-emerald-300">₹0 (Free Check)</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-center border-t border-white/15">
                    <span className="text-[11px] font-bold text-teal-100">
                      Doorstep Pickup & Pan-India Ship-In Available
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
