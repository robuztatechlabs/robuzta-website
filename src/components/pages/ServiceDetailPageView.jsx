'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Plus,
  Minus,
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  Flame,
  Wrench,
  Sparkles,
  Clock,
  Award,
  Star,
} from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FinalCta } from '@/components/sections/FinalCta';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';
import { getServiceBySlug, services } from '@/data/services';
import { getModelShowcasesForService } from '@/data/serviceModels';
import { repairProcess } from '@/data/process';
import { siteConfig } from '@/data/site';
import { ServiceModelShowcase } from '@/components/cards/ServiceModelShowcase';
import { useBookingModal } from '@/context/BookingModalContext';

/* ─── Per-service icon map ──────────────────────────────────────── */
const serviceIcons = {
  'laptop-repair': Laptop,
  'mobile-repair': Smartphone,
  'macbook-repair': Cpu,
  'surface-repair': Monitor,
  'gaming-pc-repair': Flame,
  'desktop-repair': Wrench,
};

/* ─── Step icon map for process ────────────────────────────────── */
const processIcons = [ShieldCheck, MessageCircle, CheckCircle2, Wrench, Star, Award];

/* ─── Reusable animation variants ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ─── FAQ Accordion Item ────────────────────────────────────────── */
function FaqItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`rounded-2xl border bg-white dark:bg-slate-950 overflow-hidden transition-all duration-300 ${
        open ? 'border-[#0E7C7B]/40 shadow-lg shadow-[#0E7C7B]/8' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
            open ? 'bg-[#0E7C7B] text-white rotate-0' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
          }`}
        >
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────────────────── */
export function ServiceDetailPageView({ slug }) {
  const { openModal } = useBookingModal();
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const ServiceIcon = serviceIcons[service.slug] || Wrench;
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const modelShowcases = getModelShowcasesForService(service.slug);

  return (
    <>
      <Header />
      <main>

        {/* ══════════════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════════════ */}
        <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-18 lg:py-22 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[950px] h-[450px] bg-[#0E7C7B]/10 rounded-full blur-[170px]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left — Hero copy */}
              <div className="lg:col-span-7 space-y-7">

                {/* Eyebrow pill */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1 text-xs font-black text-[#0E7C7B] dark:text-teal-300 uppercase tracking-widest"
                >
                  <ServiceIcon size={14} className="text-[#0E7C7B]" />
                  <span>ROBUZTA PRECISION SERVICE</span>
                  <Sparkles size={13} className="text-amber-500" />
                </motion.div>

                {/* H1 */}
                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight"
                >
                  {service.title}{' '}
                  <span className="block mt-1 text-[#0E7C7B]">
                    in Ahmedabad
                  </span>
                </motion.h1>

                {/* Direct answer */}
                <motion.p
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-2xl"
                >
                  {service.directAnswer}
                </motion.p>

                {/* CTA row */}
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  <button
                    type="button"
                    onClick={() => openModal({ formType: service.title + ' Free Quote', device: service.title })}
                    className="inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#0E7C7B] to-teal-500 px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#0E7C7B]/30 hover:shadow-[#0E7C7B]/50 hover:scale-[1.03] transition-all cursor-pointer"
                  >
                    <span>Get Free Quote</span>
                    <ArrowRight size={18} />
                  </button>

                  <MagneticButton>
                    <a
                      href={siteConfig.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm px-6 py-4 text-base font-bold text-white hover:bg-emerald-600 hover:border-emerald-500 transition-all"
                    >
                      <WhatsappIcon size={18} className="text-emerald-400" />
                      <span>WhatsApp Estimate</span>
                    </a>
                  </MagneticButton>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-5 pt-2 text-xs font-semibold text-slate-400"
                >
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-[#0E7C7B]" />
                    Zero Password / Zero OTP
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-orange-400" />
                    180-Day Warranty
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-blue-400" />
                    Same-Day Turnaround
                  </span>
                </motion.div>
              </div>

              {/* Right — Proof panel (glassmorphism card) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5"
              >
                <div className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur-2xl p-8 space-y-6 shadow-2xl">

                  {/* Panel header */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-lg shadow-[#0E7C7B]/30">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#0E7C7B]">Robuzta Lab Guarantee</p>
                      <h2 className="text-xl font-extrabold text-white leading-tight">{service.title} Promise</h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">{service.proof}</p>

                  {/* Guarantee checklist */}
                  <ul className="space-y-3">
                    {[
                      'Zero password or PIN required',
                      'Customer approval before repair',
                      'Genuine serial-verified parts',
                      'Digital invoice with warranty',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0E7C7B]/20 border border-[#0E7C7B]/40">
                          <CheckCircle2 size={12} className="text-[#0E7C7B]" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Trust metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-2xl bg-white/8 border border-white/10 p-4 text-center">
                      <div className="text-2xl font-black text-white">15,000+</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Devices Restored</div>
                    </div>
                    <div className="rounded-2xl bg-white/8 border border-white/10 p-4 text-center">
                      <div className="text-2xl font-black text-white">99.8%</div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">Success Rate</div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 1.5 — BRAND & PROBLEM REDIRECTION HUB (FOR LAPTOP REPAIR)
        ══════════════════════════════════════════════ */}
        {slug === 'laptop-repair' && (
          <section className="py-12 bg-slate-900 border-y border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B]">
                    BRAND & PROBLEM DIRECT ROUTING
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    Select Your Laptop Brand or Issue
                  </h2>
                </div>
                <Link
                  href="/laptop-repair/"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0E7C7B] hover:bg-teal-600 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-md self-start md:self-auto"
                >
                  <span>Explore Full Laptop Repair Hub</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Brand Links Grid */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-400 block">Select Laptop Brand:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                  {[
                    { name: 'Dell', slug: 'dell', desc: 'XPS, Inspiron, Vostro' },
                    { name: 'HP', slug: 'hp', desc: 'Pavilion, Spectre, Omen' },
                    { name: 'Acer', slug: 'acer', desc: 'Nitro, Predator, Swift' },
                    { name: 'ASUS', slug: 'asus', desc: 'ROG, TUF, ZenBook' },
                    { name: 'MSI', slug: 'msi', desc: 'Katana, Raider, Stealth' },
                    { name: 'Surface', slug: 'surface', desc: 'Pro, Laptop, Studio' },
                    { name: 'MacBook', slug: 'macbook', desc: 'M1/M2/M3 & Intel' }
                  ].map((b) => (
                    <Link
                      key={b.slug}
                      href={`/laptop-repair/${b.slug}/`}
                      className="group p-3.5 rounded-2xl bg-slate-800/80 hover:bg-[#0E7C7B]/20 border border-slate-700 hover:border-[#0E7C7B] transition-all text-center"
                    >
                      <span className="text-sm font-black text-white group-hover:text-teal-400 block">
                        {b.name}
                      </span>
                      <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                        {b.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Problem Links Grid */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-slate-400 block">Select Laptop Problem / Hardware Fix:</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {[
                    { name: 'Motherboard Repair', slug: 'motherboard-repair' },
                    { name: 'Screen Replacement', slug: 'screen-replacement' },
                    { name: 'Battery Replacement', slug: 'battery-replacement' },
                    { name: 'Keyboard Repair', slug: 'keyboard-replacement' },
                    { name: 'Hinge & Body Fix', slug: 'body-panel-repair' },
                    { name: 'Charging Port Fix', slug: 'charging-port-repair' },
                    { name: 'RAM & SSD Upgrade', slug: 'ram-ssd-upgrade' },
                    { name: 'Overheating / Fan', slug: 'fan-repair' },
                    { name: 'Water / Liquid Spill', slug: 'liquid-damage-repair' }
                  ].map((p) => (
                    <Link
                      key={p.slug}
                      href={`/laptop-repair/${p.slug}/`}
                      className="group p-3 rounded-xl bg-slate-800/50 hover:bg-[#0E7C7B]/20 border border-slate-700/80 hover:border-[#0E7C7B] transition-all flex items-center justify-between text-xs font-bold text-slate-200 hover:text-teal-300"
                    >
                      <span>{p.name}</span>
                      <ArrowRight size={12} className="text-[#0E7C7B] group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════
            SECTION 1.5 — 3D HARDWARE SHOWCASE
        ══════════════════════════════════════════════ */}
        {modelShowcases.length > 0 && (
          <section className="relative bg-slate-50 dark:bg-slate-900 py-24 border-b border-slate-200 dark:border-slate-700" id="hardware-showcase">
            <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-[120px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs font-bold uppercase tracking-widest text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1.5 rounded-full"
                >
                  Interactive Hardware Preview
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
                >
                  What We Repair & Build
                </motion.h2>
              </div>

              <div className="space-y-8">
                {modelShowcases.map((showcase, idx) => (
                  <ServiceModelShowcase
                    key={showcase.modelPath}
                    {...showcase}
                    ctaHref="/contact"
                    index={idx}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ══════════════════════════════════════════════
            SECTION 2 — SYMPTOMS
        ══════════════════════════════════════════════ */}
        <section className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-700" id="symptoms">
          {/* Background glow */}
          <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#0E7C7B]/5 rounded-full blur-[120px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section heading */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold uppercase tracking-widest text-[#0E7C7B] bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 px-3.5 py-1.5 rounded-full"
              >
                Common Symptoms
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
              >
                Common Hardware Issues We Fix
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 }}
                className="text-slate-500 dark:text-slate-400 text-base leading-relaxed"
              >
                Recognise any of these symptoms? Our senior technicians can diagnose and resolve these precisely.
              </motion.p>
            </div>

            {/* Symptom cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.symptoms.map((item, idx) => (
                <motion.div
                  key={item}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-5 hover:border-[#0E7C7B]/40 hover:shadow-xl hover:shadow-[#0E7C7B]/8 transition-all cursor-default"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 group-hover:bg-[#0E7C7B] group-hover:border-[#0E7C7B] transition-all">
                    <CheckCircle2 size={18} className="text-[#0E7C7B] group-hover:text-white transition-colors" />
                  </span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 3 — REPAIR PROCESS
        ══════════════════════════════════════════════ */}
        <section className="relative bg-slate-50 dark:bg-slate-900 py-24 border-b border-slate-200 dark:border-slate-700" id="process">
          <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full"
              >
                Simple Workflow
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
              >
                Our Transparent 6-Step Repair Process
              </motion.h2>
            </div>

            {/* Timeline grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repairProcess.map((step, index) => {
                const StepIcon = processIcons[index] || CheckCircle2;
                return (
                  <motion.article
                    key={step.title}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="group relative rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 p-7 space-y-4 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all"
                  >
                    {/* Step number badge */}
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white text-sm font-black group-hover:bg-blue-600 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all">
                        <StepIcon size={18} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">{step.text}</p>
                    </div>

                    {/* Accent line at bottom */}
                    <div className="absolute bottom-0 left-7 right-7 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all" />
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 4 — SERVICES INCLUDED
        ══════════════════════════════════════════════ */}
        <section className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-700" id="included">
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-[120px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold uppercase tracking-widest text-orange-700 bg-orange-50 border border-orange-200 px-3.5 py-1.5 rounded-full"
              >
                Comprehensive Scope
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
              >
                Services Included in {service.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.14 }}
                className="text-slate-500 dark:text-slate-400 text-base leading-relaxed"
              >
                Every service below is delivered with a diagnosis-first approach, transparent quote, and customer approval before work begins.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.included.map((item, idx) => (
                <motion.article
                  key={item}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="group relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 overflow-hidden hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/10 transition-all"
                >
                  {/* Gradient accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#0E7C7B] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6 space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 group-hover:bg-[#0E7C7B] group-hover:border-[#0E7C7B] transition-all">
                      <ServiceIcon size={18} className="text-[#0E7C7B] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0E7C7B] transition-colors">
                      {item}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Diagnosis-first support with transparent quote, customer approval, and certified lab handling.
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 5 — FAQ
        ══════════════════════════════════════════════ */}
        <section className="relative bg-slate-50 dark:bg-slate-900 py-24 border-b border-slate-200 dark:border-slate-700" id="faq">

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Heading */}
              <div className="text-center space-y-4 mb-12">
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 px-3.5 py-1.5 rounded-full shadow-sm"
                >
                  Service FAQ
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
                >
                  Frequently Asked Questions
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.14 }}
                  className="text-slate-500 dark:text-slate-400 text-base"
                >
                  Everything you need to know about {service.title} at Robuzta Techlabs.
                </motion.p>
              </div>

              {/* FAQ accordion items */}
              <div className="space-y-3">
                {service.faqs.map((item, idx) => (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    index={idx}
                  />
                ))}
              </div>

              {/* Bottom CTA nudge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Still have questions?</p>
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  <WhatsappIcon size={16} className="text-white" />
                  Ask on WhatsApp
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            SECTION 6 — RELATED SERVICES
        ══════════════════════════════════════════════ */}
        <section className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-700" id="related">
          <div className="pointer-events-none absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full"
              >
                Related Hardware
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
              >
                Other Repair Services Available
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((item, idx) => {
                const RelatedIcon = serviceIcons[item.slug] || Wrench;
                return (
                  <motion.article
                    key={item.slug}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="group rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-8 space-y-5 hover:border-blue-300 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E7C7B] text-white shadow-md shadow-[#0E7C7B]/20 group-hover:scale-110 transition-all">
                        <RelatedIcon size={22} />
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.summary}</p>
                    </div>

                    {/* CTA link */}
                    <Link
                      href={`/services/${item.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0E7C7B] group-hover:text-blue-600 transition-colors"
                    >
                      View service details
                      <ArrowRight size={13} />
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
