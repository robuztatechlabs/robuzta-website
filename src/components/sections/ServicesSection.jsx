'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Laptop,
  Smartphone,
  Flame,
  Monitor,
  Cpu,
  ShieldCheck,
  Wrench,
  Sparkles,
  ArrowRight,
  Clock,
  Phone
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { useBookingModal } from '@/context/BookingModalContext';

const servicesList = [
  {
    id: 'laptop-repair',
    title: 'Laptop Repair',
    icon: Laptop,
    description: 'Screen, battery & logic board repairs',
    link: '/services/laptop-repair',
    color: 'from-teal-500/10 to-teal-500/5 text-[#0E7C7B] border-[#0E7C7B]/20'
  },
  {
    id: 'mobile-repair',
    title: 'Mobile Repair',
    icon: Smartphone,
    description: 'OLED screens, batteries & charging ports',
    link: '/services/mobile-repair',
    color: 'from-amber-500/10 to-amber-500/5 text-amber-600 border-amber-500/20'
  },
  {
    id: 'macbook-repair',
    title: 'MacBook Repair',
    icon: Laptop,
    description: 'Logic board micro-soldering & screens',
    link: '/services/macbook-repair',
    color: 'from-blue-500/10 to-blue-500/5 text-blue-600 border-blue-500/20'
  },
  {
    id: 'surface-repair',
    title: 'Surface Repair',
    icon: Monitor,
    description: 'Surface screen & battery replacements',
    link: '/services/surface-repair',
    color: 'from-emerald-500/10 to-emerald-500/5 text-emerald-600 border-emerald-500/20'
  },
  {
    id: 'gaming-pc-repair',
    title: 'Gaming PC Repair',
    icon: Flame,
    description: 'GPU diagnostic & liquid cooling service',
    link: '/services/gaming-pc-repair',
    color: 'from-purple-500/10 to-purple-500/5 text-purple-600 border-purple-500/20'
  },
  {
    id: 'desktop-repair',
    title: 'Desktop Repair',
    icon: Cpu,
    description: 'Motherboard, RAM & SSD upgrades',
    link: '/services/desktop-repair',
    color: 'from-[#0E7C7B]/10 to-[#0E7C7B]/5 text-[#0E7C7B] border-[#0E7C7B]/20'
  }
];

export function ServicesSection() {
  const { openModal } = useBookingModal();

  return (
    <section id="services" className="relative bg-white dark:bg-slate-950 py-16 sm:py-24 lg:py-32 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-24">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Our Repair Services
          </h2>
        </div>

        {/* 6 Clean Minimal Service Cards 2-Column Mobile App Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 lg:gap-8">
          {servicesList.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href={service.link}
                className="group relative rounded-2xl sm:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3.5 sm:p-7 flex flex-col justify-between hover:border-[#0E7C7B] hover:bg-white dark:hover:bg-slate-950 hover:shadow-xl transition-all duration-300 space-y-3"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className={`h-9 w-9 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center border shadow-sm group-hover:scale-105 transition-transform shrink-0`}>
                    <Icon size={18} className="sm:w-[24px] sm:h-[24px]" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xs xs:text-sm sm:text-base font-black text-slate-900 dark:text-white group-hover:text-[#0E7C7B] dark:group-hover:text-teal-400 transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-1 text-[10px] sm:text-xs font-black text-[#0E7C7B] dark:text-teal-400 group-hover:translate-x-1 transition-all">
                  <span>Explore</span>
                  <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
