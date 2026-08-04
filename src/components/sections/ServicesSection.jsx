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
    id: 'doorstep-pickup',
    slug: 'contact',
    icon: Truck,
    badge: '05 // DOORSTEP PICKUP',
    title: 'Anti-Static Doorstep Pickup Across Ahmedabad',
    description: 'Dedicated Robuzta pickup executive collects your broken laptop, Mac, or phone directly from your home or office in South Bopal, Satellite, Vastrapur, Motera, or Tragad with anti-static padding and zero OTP privacy.',
    time: 'Same-Day Dispatch',
    warranty: 'Insured Transit',
    highlights: [
      'Doorstep Pickup in South Bopal & Satellite',
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

  const whatsappMsg = `Hi Robuzta Techlabs! I need a custom quote for ${activeTab.title}:\n\nRequirement: Zero-cost inspection & doorstep pickup.`;
  const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="services" className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#0E7C7B]/5 via-blue-500/5 to-orange-500/5 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            Specialized Diagnostics & Precision Repairs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium"
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
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 hover:text-slate-900'
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
            className="rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-xl space-y-8 max-w-4xl mx-auto"
          >
            <div className="space-y-6">
              

              <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {activeTab.title}
              </h3>

              {/* Key Spec Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {activeTab.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-bold text-slate-800 bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm">
                    <CheckCircle2 size={16} className="text-[#0E7C7B] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-200">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full sm:w-auto rounded-2xl bg-emerald-600 px-7 py-4 text-xs font-black text-white shadow-xl shadow-emerald-600/20 hover:bg-emerald-700 transition-all"
                >
                  <WhatsappIcon size={20} className="text-white shrink-0" />
                  <span className="text-white font-extrabold">Book Diagnostic via WhatsApp</span>
                </a>

                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto rounded-2xl px-6 py-4 text-xs font-black shadow-sm bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-tech"
                >
                  <Phone size={16} className="text-[#0E7C7B]" />
                  <span>+91 999 998 8885</span>
                </a>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
