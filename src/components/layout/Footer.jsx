'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { Phone, Mail, MapPin, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { SocialBar } from '@/components/ui/SocialBar';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 bg-[#0F172A] text-slate-300 pt-12 sm:pt-16 pb-28 lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 sm:pb-16 border-b border-slate-800">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            <div className="bg-white dark:bg-slate-950 p-2 rounded-xl inline-block shadow-sm">
              <BrandLogo />
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400 max-w-md">
              Ahmedabad’s premier multi-device repair lab. Specialized in chip-level laptop, MacBook, smartphone, Surface, and gaming PC diagnostics with transparent pricing and live workbench repairs under strict Zero-OTP privacy.
            </p>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-[11px] sm:text-xs text-slate-200 font-bold max-w-full">
              <ShieldCheck size={15} className="text-[#0E7C7B] shrink-0" />
              <span className="truncate">Zero-OTP Privacy &bull; ISO 27001 ESD Safe Lab</span>
            </div>

            {/* Unique Animated Social Media Links */}
            <div className="space-y-2 pt-1 sm:pt-2">
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#EA580C] shrink-0" />
                Connect With Robuzta
              </span>
              <SocialBar size="md" />
            </div>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Hardware Repair Services
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-semibold">
              {services.map((service) => {
                const dedicatedUrls = {
                  'laptop-repair': '/laptop-repair/',
                  'mobile-repair': '/mobile-repair/',
                  'macbook-repair': '/laptop-repair/macbook/',
                  'surface-repair': '/laptop-repair/surface/',
                  'gaming-pc-repair': '/gaming-desktop/repair/',
                  'desktop-repair': '/gaming-desktop/repair/',
                  'data-recovery': '/data-recovery/',
                  'software-services': '/software-services/',
                  'cleaning-tune-up': '/cleaning-tune-up/'
                };
                const href = dedicatedUrls[service.slug] || `/services/${service.slug}`;
                return (
                  <li key={service.slug}>
                    <Link href={href} className="hover:text-[#0E7C7B] transition-colors">
                      {service.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Robuzta Lab Links
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-semibold">
              <li>
                <Link href="/services" className="hover:text-[#0E7C7B] transition-colors">All Services Overview</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0E7C7B] transition-colors">About Robuzta Lab</Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-[#0E7C7B] transition-colors">Lab Locations</Link>
              </li>
              <li>
                <Link href="/franchise" className="hover:text-[#0E7C7B] transition-colors">Franchise Opportunity</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#0E7C7B] transition-colors">Repair Guides & Blog</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#0E7C7B] transition-colors">Help Center & FAQ</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0E7C7B] transition-colors">Book Doorstep Pickup</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Lab HQ */}
          <div>
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Contact & HQ Lab
            </h3>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm font-medium">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="text-[#0E7C7B] mt-0.5 flex-shrink-0" />
                <a href={siteConfig.phoneHref} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#0E7C7B] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={15} className="text-[#0E7C7B] mt-0.5 flex-shrink-0" />
                <span>11:00 AM – 7:00 PM (Mon – Sat)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-[11px] sm:text-xs leading-normal">
                  {locations[0]?.address || 'South Bopal & Satellite, Ahmedabad, Gujarat'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Robuzta Techlabs. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
              Workbench Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
