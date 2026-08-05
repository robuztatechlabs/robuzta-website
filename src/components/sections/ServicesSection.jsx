'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Laptop,
  Smartphone,
  Flame,
  Database,
  Wrench,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Phone
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useBookingModal } from '@/context/BookingModalContext';

const servicesList = [
  {
    id: 'laptop-repair',
    title: 'Laptop & MacBook Repair',
    icon: Laptop,
    description: 'Screen replacement, battery swap, motherboard micro-soldering, hinge repair, and liquid damage recovery for all laptop brands and MacBooks.',
    link: '/services/laptop-repair',
    badge: 'Same-Day Service',
    color: 'from-teal-500/10 to-teal-500/5 text-[#0E7C7B] border-[#0E7C7B]/20'
  },
  {
    id: 'mobile-repair',
    title: 'Mobile & Smartphone Repair',
    icon: Smartphone,
    description: 'Original OLED screen replacement, battery health service, charging port fix, and camera repair for iPhone, Samsung, OnePlus & Pixel.',
    link: '/services/mobile-repair',
    badge: '30-45 Mins Express',
    color: 'from-amber-500/10 to-amber-500/5 text-amber-600 border-amber-500/20'
  },
  {
    id: 'gaming-pc',
    title: 'Gaming PC & Custom Rigs',
    icon: Flame,
    description: 'GPU diagnostic, VRAM repair, thermal repasting, AIO liquid cooling maintenance, PSU testing, and custom gaming rig performance tuning.',
    link: '/services/gaming-pc-repair',
    badge: 'High Performance',
    color: 'from-purple-500/10 to-purple-500/5 text-purple-600 border-purple-500/20'
  },
  {
    id: 'data-recovery',
    title: 'Data Recovery Services',
    icon: Database,
    description: 'Professional hardware data recovery from dead hard drives, corrupted SSDs, NVMe drives, formatted partitions, and water-damaged devices.',
    link: '/services/laptop-repair',
    badge: 'Strict Privacy',
    color: 'from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-500/20'
  },
  {
    id: 'software-services',
    title: 'Software & OS Recovery',
    icon: Wrench,
    description: 'Windows 11 & macOS installation, malware removal, driver troubleshooting, system optimization, and remote tech assistance.',
    link: '/services/laptop-repair',
    badge: 'Instant Support',
    color: 'from-blue-500/10 to-blue-500/5 text-blue-600 border-blue-500/20'
  },
  {
    id: 'cleaning-tuneup',
    title: 'Cleaning & Thermal Tune-Up',
    icon: Sparkles,
    description: 'Complete internal dust decontamination, high-grade Arctic MX thermal paste replacement, and fan lubrication to prevent overheating.',
    link: '/services/laptop-repair',
    badge: 'Overheat Protection',
    color: 'from-[#0E7C7B]/10 to-[#0E7C7B]/5 text-[#0E7C7B] border-[#0E7C7B]/20'
  }
];

export function ServicesSection() {
  const { openModal } = useBookingModal();

  return (
    <section id="services" className="relative bg-white dark:bg-slate-950 py-28 lg:py-36 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-4 py-1.5 text-xs font-black text-[#0E7C7B] uppercase tracking-widest">
            <Wrench size={14} className="text-[#0E7C7B]" />
            <span>OUR EXPERT REPAIR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Fast, Certified Repair Services for Every Device
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            From cracked screens and dead batteries to component-level motherboard soldering, we fix it all with genuine parts and written warranty.
          </p>
        </div>

        {/* 6 Modern Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-9 flex flex-col justify-between hover:border-[#0E7C7B] hover:bg-white dark:hover:bg-slate-950 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 space-y-6"
              >
                <div className="space-y-5">
                  
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon size={26} />
                    </div>

                    <span className="text-[11px] font-black text-[#0E7C7B] dark:text-teal-400 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Card Actions: Learn More & Book Modal */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#0E7C7B] dark:text-teal-400 hover:underline group-hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openModal({ formType: `Services Section - ${service.title}`, device: service.title })}
                    className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-[#0E7C7B] dark:hover:bg-teal-600 text-white text-xs font-black transition-all cursor-pointer shadow-sm"
                  >
                    Book Repair
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-950 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="text-lg font-black text-white">Not Sure What Is Wrong With Your Device?</h4>
              <p className="text-xs text-slate-300 font-medium">Get a zero-cost hardware inspection and transparent price estimate before any work begins.</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openModal({ formType: 'Services Section Free Inspection' })}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 px-7 py-3.5 text-xs font-black text-white shadow-lg shrink-0 cursor-pointer"
          >
            <span>Get Free Diagnostic Estimate</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}
