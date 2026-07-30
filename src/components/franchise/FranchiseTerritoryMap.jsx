'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

const cities = [
  {
    name: 'Ahmedabad (South Bopal)',
    state: 'Gujarat',
    status: 'ACTIVE_LAB',
    badge: '🔵 Active Flagship Lab',
    pop: '850K+ Population Zone',
    opp: '100% Demand Met (Existing Store)'
  },
  {
    name: 'Ahmedabad (Tragad & Motera)',
    state: 'Gujarat',
    status: 'ACTIVE_LAB',
    badge: '🔵 Active Lab Hub',
    pop: '650K+ Population Zone',
    opp: '100% Demand Met (Existing Store)'
  },
  {
    name: 'Surat (Vesu & Adajan)',
    state: 'Gujarat',
    status: 'AVAILABLE',
    badge: '🟢 AVAILABLE (Priority 1)',
    pop: '1.2M+ IT & Residential Hub',
    opp: 'High-Demand Uncapped Zone'
  },
  {
    name: 'Vadodara (Alkapuri & Gotri)',
    state: 'Gujarat',
    status: 'AVAILABLE',
    badge: '🟢 AVAILABLE (Priority 1)',
    pop: '900K+ IT & Student Zone',
    opp: 'Immediate Opening'
  },
  {
    name: 'Rajkot (Yagnik Road & University)',
    state: 'Gujarat',
    status: 'AVAILABLE',
    badge: '🟢 AVAILABLE (Priority 1)',
    pop: '750K+ Commercial Hub',
    opp: 'Immediate Opening'
  },
  {
    name: 'Gandhinagar (Infocity & Sector 11)',
    state: 'Gujarat',
    status: 'RESERVED',
    badge: '🟡 RESERVED (In Review)',
    pop: '500K+ Tech & University',
    opp: 'Final Stage Screening'
  },
  {
    name: 'Jaipur (Malviya Nagar & C-Scheme)',
    state: 'Rajasthan',
    status: 'AVAILABLE',
    badge: '🟢 AVAILABLE (Outstation)',
    pop: '1.5M+ Metro Zone',
    opp: 'State Master Franchise Available'
  },
  {
    name: 'Indore (Vijay Nagar & Palasia)',
    state: 'Madhya Pradesh',
    status: 'AVAILABLE',
    badge: '🟢 AVAILABLE (Outstation)',
    pop: '1.4M+ IT & Commercial Zone',
    opp: 'State Master Franchise Available'
  }
];

export function FranchiseTerritoryMap() {
  const [selectedCity, setSelectedCity] = useState(cities[2]);

  return (
    <section className="relative bg-white py-24 border-b border-slate-200 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-black uppercase tracking-widest text-[#2563EB] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block"
          >
            TERRITORY AVAILABILITY MATRIX
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Find Open Territories & Reserve Your City Zone
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium"
          >
            Territories are granted exclusively on a first-come, first-served basis. Click any city below to inspect live territory availability status.
          </motion.p>
        </div>

        {/* Territory Matrix & Info Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* City Selection Buttons (Col 7) */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-slate-400 pb-1">
              <span>Select Target Location:</span>
              <span>8 Major Zones Monitored</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cities.map((city) => {
                const active = selectedCity.name === city.name;
                return (
                  <button
                    key={city.name}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer border flex flex-col justify-between space-y-2.5 ${
                      active
                        ? 'bg-blue-50/90 border-[#2563EB] shadow-md ring-2 ring-[#2563EB]/20'
                        : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-extrabold text-slate-900 text-sm">
                        <MapPin size={16} className={active ? 'text-[#2563EB]' : 'text-slate-500'} />
                        <span className="truncate">{city.name}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-bold text-slate-500">{city.state}</span>
                      <span className={`font-mono font-black px-2 py-0.5 rounded-full ${
                        city.status === 'AVAILABLE'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : city.status === 'RESERVED'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-blue-100 text-blue-800 border border-blue-300'
                      }`}>
                        {city.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected City Detail Card (Col 5) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0B132B] to-[#070D1B] text-white p-8 space-y-6 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-[#2563EB] uppercase tracking-widest">
                  TERRITORY STATUS REPORT
                </span>
                <span className="text-xs font-mono font-black text-amber-400">
                  {selectedCity.state}
                </span>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-extrabold text-white">{selectedCity.name}</div>
                <div className="text-xs font-mono font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1 rounded-full inline-block">
                  {selectedCity.badge}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Demographics Profile</div>
                  <div className="text-sm font-bold text-slate-200">{selectedCity.pop}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/70 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Opportunity Assessment</div>
                  <div className="text-sm font-bold text-teal-300">{selectedCity.opp}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 relative z-10 space-y-3">
              <a
                href="#franchise-application-form"
                className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#2563EB] px-6 py-4 text-xs font-black text-white shadow-xl shadow-blue-500/25 hover:bg-blue-600 hover:scale-[1.02] transition-all text-center"
              >
                <span>Reserve Territory for {selectedCity.name.split(' ')[0]}</span>
                <ArrowRight size={15} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
