'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Flame,
  Wrench
} from 'lucide-react';
import { siteConfig } from '@/data/site';
import { services } from '@/data/services';
import { MegaMenu } from '@/components/layout/MegaMenu';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { useBookingModal } from '@/context/BookingModalContext';

const serviceIcons = {
  'laptop-repair': Laptop,
  'mobile-repair': Smartphone,
  'macbook-repair': Cpu,
  'surface-repair': Monitor,
  'gaming-pc-repair': Flame,
  'desktop-repair': Wrench
};

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', isDropdown: true },
  { name: 'Locations', href: '/locations' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' }
];

export function Header() {
  const { openModal } = useBookingModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-all duration-300 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3">
          <BrandLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 text-sm font-tech">
          {navItems.map((item) => {
            const isHovered = hoveredNav === item.name || (item.isDropdown && megaMenuOpen);
            
            if (item.isDropdown) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredNav(item.name);
                    handleMouseEnter();
                  }}
                  onMouseLeave={() => {
                    setHoveredNav(null);
                    handleMouseLeave();
                  }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all font-tech font-bold text-sm tracking-wide ${
                      isHovered
                        ? 'text-[#0E7C7B] dark:text-teal-400 bg-[#0E7C7B]/10 dark:bg-teal-400/10'
                        : 'text-slate-700 dark:text-slate-300 hover:text-[#0E7C7B] dark:hover:text-teal-400 bg-transparent'
                    }`}
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    aria-expanded={megaMenuOpen}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-[#0E7C7B] dark:text-teal-400' : ''}`}
                    />
                  </Link>

                  {megaMenuOpen && <MegaMenu onClose={() => setMegaMenuOpen(false)} />}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                onMouseEnter={() => setHoveredNav(item.name)}
                onMouseLeave={() => setHoveredNav(null)}
                className={`px-3.5 py-2 rounded-xl transition-all font-tech font-bold text-sm tracking-wide ${
                  isHovered
                    ? 'text-[#0E7C7B] dark:text-teal-400 bg-[#0E7C7B]/10 dark:bg-teal-400/10'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#0E7C7B] dark:hover:text-teal-400 bg-transparent'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2.5">



          {/* Primary CTA Button: Book Diagnosis (Desktop & Tablet) */}
          <button
            type="button"
            onClick={() => openModal({ formType: 'Header Book Diagnosis' })}
            className="hidden sm:inline-flex items-center justify-center rounded-xl px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black shadow-md transition-all hover:scale-[1.03] bg-[#0E7C7B] dark:bg-teal-600 text-white cursor-pointer"
          >
            <span className="font-black text-white">Book Diagnosis</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-700 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2 font-extrabold text-slate-900 dark:text-slate-100 text-sm">
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 font-bold"
              >
                {item.name}
              </Link>
            ))}

            <div className="py-2.5 border-y border-slate-100 dark:border-slate-800 space-y-2 my-1">
              <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider block px-1">
                Hardware Repair Services
              </span>
              <div className="grid grid-cols-2 gap-2">
                {services.map((srv) => {
                  const IconComp = serviceIcons[srv.slug] || Wrench;
                  const targetHref =
                    srv.slug === 'laptop-repair'
                      ? '/laptop-repair/'
                      : srv.slug === 'mobile-repair'
                      ? '/mobile-repair/'
                      : srv.slug === 'macbook-repair'
                      ? '/laptop-repair/macbook/'
                      : srv.slug === 'gaming-pc-repair' || srv.slug === 'gaming-desktop'
                      ? '/gaming-desktop/repair/'
                      : srv.slug === 'data-recovery'
                      ? '/data-recovery/'
                      : srv.slug === 'software-services'
                      ? '/software-services/'
                      : srv.slug === 'cleaning-tune-up'
                      ? '/cleaning-tune-up/'
                      : `/services/${srv.slug}`;

                  return (
                    <Link
                      key={srv.slug}
                      href={targetHref}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <IconComp size={14} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                      <span className="truncate">{srv.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl text-white font-black text-sm shadow-md bg-[#0E7C7B] dark:bg-teal-600"
              >
                <span className="font-black text-white">Book Diagnosis</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
