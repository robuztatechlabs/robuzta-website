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
  { name: 'Services', href: '/#services', isDropdown: true },
  { name: 'Locations', href: '/locations' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' }
];

export function Header() {
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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <BrandLogo />
          <span className="hidden xl:inline-flex items-center gap-1.5 text-[10px] font-extrabold text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-2.5 py-0.5 rounded-full ml-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0E7C7B] animate-pulse"></span>
            Precision Hardware Lab
          </span>
        </div>

        {/* Desktop Navigation - Black Hover Highlight */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-extrabold">
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
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all font-black text-sm"
                    style={{
                      color: isHovered ? '#000000' : '#475569',
                      backgroundColor: isHovered ? '#f1f5f9' : 'transparent'
                    }}
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    aria-expanded={megaMenuOpen}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                      style={{ color: isHovered ? '#000000' : '#475569' }}
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
                className="px-3.5 py-2 rounded-xl transition-all font-black text-sm"
                style={{
                  color: isHovered ? '#000000' : '#475569',
                  backgroundColor: isHovered ? '#f1f5f9' : 'transparent'
                }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Action Buttons */}
        <div className="flex items-center gap-2.5">
          
          {/* Call Hotline Icon Button */}
          <a
            href={siteConfig.phoneHref}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 transition-all shadow-sm hover:bg-slate-200"
            style={{ color: '#0f172a' }}
            aria-label="Call Robuzta Techlabs"
            title="Call Hotline"
          >
            <Phone size={17} style={{ color: '#0f172a' }} />
          </a>

          {/* Official WhatsApp Logo Icon Button */}
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-700 transition-all shadow-md hover:scale-105"
            style={{ backgroundColor: '#16a34a', color: '#ffffff' }}
            aria-label="WhatsApp Robuzta Techlabs"
            title="WhatsApp Support"
          >
            <WhatsappIcon size={20} style={{ color: '#ffffff' }} />
          </a>

          {/* Primary CTA Button: Book Diagnosis */}
          <MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black shadow-md transition-all hover:scale-[1.03]"
              style={{
                backgroundColor: '#0E7C7B',
                color: '#ffffff'
              }}
            >
              <span style={{ color: '#ffffff', fontWeight: 900 }}>Book Diagnosis</span>
            </Link>
          </MagneticButton>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:bg-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2 font-extrabold text-slate-900 text-sm">
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl hover:bg-slate-100 font-bold"
                style={{ color: '#0f172a' }}
              >
                {item.name}
              </Link>
            ))}

            <div className="py-2.5 border-y border-slate-100 space-y-2 my-1">
              <span className="text-xs font-black text-slate-400 uppercase tracking-wider block px-1">
                Hardware Repair Services
              </span>
              <div className="grid grid-cols-2 gap-2">
                {services.map((srv) => {
                  const IconComp = serviceIcons[srv.slug] || Wrench;
                  return (
                    <Link
                      key={srv.slug}
                      href={`/services/${srv.slug}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-900 hover:bg-slate-100"
                    >
                      <IconComp size={14} className="text-[#0E7C7B] shrink-0" />
                      <span className="truncate">{srv.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white font-extrabold text-sm shadow-md shrink-0"
                style={{ backgroundColor: '#16a34a', color: '#ffffff' }}
                title="WhatsApp Support"
              >
                <WhatsappIcon size={22} style={{ color: '#ffffff' }} />
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-black text-sm shadow-md"
                style={{ backgroundColor: '#0E7C7B', color: '#ffffff' }}
              >
                <span style={{ color: '#ffffff', fontWeight: 900 }}>Book Diagnosis</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
