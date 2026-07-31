'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Globe,
  Megaphone,
  Users,
  Briefcase,
  BookOpen,
  Headphones,
  Truck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export function FranchiseBentoBenefits() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-24 border-b border-slate-200 dark:border-slate-700 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block"
          >
            END-TO-END FRANCHISE SUPPORT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight"
          >
            The 8 Pillars of Robuzta Partner Success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium"
          >
            Everything required to launch, manage, and scale a high-volume precision repair lab is provided directly by our central operations team.
          </motion.p>
        </div>

        {/* Large Apple/Stripe Style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Bento Tile 1: Complete Brand Support (Spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-slate-50 to-blue-50/40 border border-slate-200/90 p-8 shadow-lg hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-md shadow-blue-500/20">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                01 // BRAND EQUITY
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] transition-colors">
                Complete Brand Support & Store Interior SOP
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-medium">
                Get full access to official Robuzta Techlabs trademarks, 3D retail store architectural blueprints, ESD anti-static workbench layouts, and signage specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                <span>3D Store Design Blueprints</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                <span>ISO ESD Workbench Setup</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <CheckCircle2 size={16} className="text-[#2563EB] shrink-0" />
                <span>Trademark & Signage License</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Tile 2: Custom Website & CRM */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 p-8 shadow-lg hover:shadow-2xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EA580C] text-white shadow-md shadow-orange-500/20">
                <Globe size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                02 // DIGITAL TECH
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#EA580C] transition-colors">
                Dedicated Partner Portal & CRM
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Cloud repair tracking CRM, automated customer WhatsApp status updates, digital warranty generation, and financial accounting tools out of the box.
              </p>
            </div>
          </motion.div>

          {/* Bento Tile 3: Marketing Material */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 p-8 shadow-lg hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB] text-white shadow-md shadow-blue-500/20">
                <Megaphone size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                03 // MARKETING
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#2563EB] transition-colors">
                Hyper-Local Marketing Assets
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                High-converting Meta video ad templates, Google Maps SEO campaign execution, print collateral, flyers, and regional newspaper PR releases.
              </p>
            </div>
          </motion.div>

          {/* Bento Tile 4: Technical Team Support */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/90 p-8 shadow-lg hover:shadow-2xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EA580C] text-white shadow-md shadow-orange-500/20">
                <Users size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                04 // LAB SUPPORT
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#EA580C] transition-colors">
                On-Demand Master Tech Escalation
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                For complex motherboard liquid damage or CPU power rail faults, escalate hardware directly to Robuzta’s central Master Soldering Lab.
              </p>
            </div>
          </motion.div>

          {/* Bento Tile 5: Sales Guidance */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-orange-50/40 border border-slate-200/90 p-8 shadow-lg hover:shadow-2xl hover:border-orange-300 hover:-translate-y-1 transition-all duration-300 space-y-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EA580C] text-white shadow-md shadow-orange-500/20">
                <Briefcase size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                05 // B2B & RETAIL SALES
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#EA580C] transition-colors">
                Corporate & Institutional Lead Blueprint
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-medium">
                Secure high-margin corporate IT maintenance contracts with IT parks, schools, and offices in your city zone with our pre-vetted corporate sales kit.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <CheckCircle2 size={16} className="text-[#EA580C] shrink-0" />
                <span>Corporate AMC Contract Templates</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <CheckCircle2 size={16} className="text-[#EA580C] shrink-0" />
                <span>Doorstep Pickup Executive System</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
