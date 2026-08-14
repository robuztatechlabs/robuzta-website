'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, RotateCcw, MousePointerClick, Layers, ShieldCheck, ZoomIn, ZoomOut, Cpu, Wrench } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { COMPONENT_DATA } from '@/data/laptopComponents';

const LaptopExplorer = dynamic(
  () => import('@/components/3d/LaptopExplorer').then(mod => mod.LaptopExplorer),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full flex items-center justify-center bg-slate-100 dark:bg-[#070e1a] min-h-[450px]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 dark:border-slate-700 border-t-[#0E7C7B]" />
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Loading 3D Hardware Model…</span>
        </div>
      </div>
    ),
  }
);

export function LaptopExplorerSection() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isExploded, setIsExploded] = useState(true);
  const [zoomAction, setZoomAction] = useState(null);
  const resetFnRef = useRef(null);

  const handleComponentSelect = useCallback((id) => {
    setSelectedComponent(id);
  }, []);

  const handleResetView = useCallback((resetFn) => {
    resetFnRef.current = resetFn;
  }, []);

  const handleReset = useCallback(() => {
    setSelectedComponent(null);
    if (resetFnRef.current) resetFnRef.current();
  }, []);

  const triggerZoom = (direction) => {
    setZoomAction(direction);
    setTimeout(() => setZoomAction(null), 100);
  };

  const selectedData = selectedComponent ? COMPONENT_DATA[selectedComponent] : null;

  return (
    <section
      id="laptop-explorer"
      className="relative overflow-hidden bg-slate-50 dark:bg-[#070e1a] border-b border-slate-200 dark:border-slate-800 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 transition-colors duration-300"
    >
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0E7C7B]/5 dark:bg-[#0E7C7B]/10 rounded-full blur-[160px]" />

      {/* Section Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
            Interactive Hardware Explorer
          </h2>
        </motion.div>
      </div>

      {/* Main Container: Horizontal Side-by-Side Split Layout */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* LEFT COLUMN: 3D Canvas Viewport Box (lg:col-span-7) */}
          <div className="lg:col-span-7 relative rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xl flex flex-col justify-between min-h-[250px] xs:min-h-[280px] sm:min-h-[440px] lg:min-h-[580px] transition-colors duration-300">

            {/* Top Controls Bar (Top Left) */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-30 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={() => setIsExploded(!isExploded)}
                className={`flex items-center gap-2 text-[11px] sm:text-xs font-bold px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border backdrop-blur-md transition-all cursor-pointer ${
                  isExploded
                    ? 'bg-[#0E7C7B] border-teal-500 text-white shadow-md'
                    : 'bg-white/90 dark:bg-slate-900/90 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-teal-500'
                }`}
              >
                <Layers size={14} />
                <span>{isExploded ? 'Deck Lifted' : 'Reveal Internals'}</span>
              </button>

              {selectedComponent && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:border-[#0E7C7B] text-slate-900 dark:text-white text-[11px] sm:text-xs font-bold px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Quick Zoom Controls (Bottom Left Overlay) */}
            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-30 flex items-center gap-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-1 rounded-xl shadow-md">
              <button
                type="button"
                onClick={() => triggerZoom('in')}
                className="p-1.5 sm:p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn size={15} />
              </button>
              <div className="w-[1px] h-4 bg-slate-200 dark:bg-slate-800" />
              <button
                type="button"
                onClick={() => triggerZoom('out')}
                className="p-1.5 sm:p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut size={15} />
              </button>
            </div>

            {/* 3D Canvas Frame */}
            <div
              className="relative w-full h-full min-h-[350px] sm:min-h-[440px] lg:min-h-[580px] overflow-hidden bg-slate-100 dark:bg-slate-950"
              data-lenis-prevent="true"
            >
              <LaptopExplorer
                onComponentSelect={handleComponentSelect}
                selectedComponent={selectedComponent}
                onResetView={handleResetView}
                isExploded={isExploded}
                zoomAction={zoomAction}
              />

              {/* Interaction Hint Badge */}
              {!selectedComponent && (
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-4 pointer-events-none px-4 z-20">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl">
                    <MousePointerClick size={14} className="text-[#0E7C7B] dark:text-teal-400 animate-bounce" />
                    <span>Click any IC to inspect details</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Component Inspector Card (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 xs:p-5 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden min-h-[440px] sm:min-h-[480px] transition-colors duration-300">

              {/* Background ambient glow inside card */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-[#0E7C7B]/10 rounded-full blur-3xl" />

              {/* Active Component Details or Default Prompt */}
              <AnimatePresence mode="wait">
                {selectedData ? (
                  <motion.div
                    key={selectedComponent}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-5 sm:space-y-6 flex-1 flex flex-col justify-between relative z-10"
                  >
                    {/* Header with Icon & Close */}
                    <div className="space-y-3.5 sm:space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl text-2xl sm:text-3xl shadow-md shrink-0"
                            style={{ backgroundColor: selectedData.color + '20', border: `1px solid ${selectedData.color}44` }}
                          >
                            {selectedData.icon}
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base sm:text-xl font-black text-slate-900 dark:text-white tracking-tight truncate">
                              {selectedData.name}
                            </h3>
                            <span
                              className="inline-flex text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-2.5 py-0.5 rounded-md mt-1"
                              style={{ backgroundColor: selectedData.color + '20', color: selectedData.color }}
                            >
                              {selectedData.badge}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="p-1.5 sm:p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all border border-slate-200 dark:border-slate-700 shrink-0 cursor-pointer"
                          title="Reset Inspection"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      {/* Technical Description */}
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium bg-slate-50 dark:bg-slate-950 p-3.5 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                        {selectedData.description}
                      </p>
                    </div>

                    {/* Repair Capability Box & CTA */}
                    <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                      <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-3.5 sm:p-5 space-y-1.5 sm:space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={15} className="text-[#0E7C7B] dark:text-emerald-400 shrink-0" />
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-emerald-400">
                            ROBUZTA LAB REPAIR CAPABILITY
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                          {selectedData.repair}
                        </p>
                      </div>

                      {/* CTA Link */}
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-white px-5 sm:px-6 py-3.5 sm:py-4 text-xs font-black uppercase tracking-wider shadow-lg shadow-[#0E7C7B]/20 transition-all hover:scale-[1.02]"
                      >
                        <span>Get Repair Quote For This Component</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default-prompt"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 flex flex-col justify-between space-y-5 sm:space-y-6 relative z-10"
                  >
                    {/* Header */}
                    <div className="space-y-2.5 sm:space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-[#0E7C7B]/10 dark:bg-teal-500/15 border border-[#0E7C7B]/20 dark:border-teal-500/30 text-[#0E7C7B] dark:text-teal-400 shrink-0">
                          <Cpu size={20} className="sm:w-[24px] sm:h-[24px]" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight leading-snug">
                            Select Any Hardware Component
                          </h3>
                          <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 block font-medium">
                            Click on the 3D model or select from below
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                        Our lab specializes in component-level micro-soldering, liquid damage restoration, and IC replacements across Apple MacBooks, gaming laptops, and mobile PCBs.
                      </p>
                    </div>

                    {/* Quick Selection List */}
                    <div className="space-y-2">
                      <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 block">
                        EXPLORE HARDWARE COMPONENTS
                      </span>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                        {Object.entries(COMPONENT_DATA).map(([id, data]) => {
                          const shortLabels = {
                            cpu: 'CPU Processor',
                            gpu: 'GPU Graphics',
                            ram1: 'Primary RAM',
                            ram2: 'Dual RAM',
                            ssd: 'NVMe SSD',
                            battery: 'OEM Battery',
                            wifi: 'Wi-Fi & BT',
                            fan: 'Cooling Fan'
                          };
                          const label = shortLabels[id] || data.name.split('(')[0].split('—')[0].trim();

                          return (
                            <button
                              key={id}
                              type="button"
                              onClick={() => handleComponentSelect(id)}
                              className="flex items-center gap-1.5 sm:gap-2 text-left text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-800 p-2 sm:p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#0E7C7B] transition-all cursor-pointer min-w-0"
                            >
                              <span className="text-sm sm:text-base shrink-0">{data.icon}</span>
                              <span className="truncate">{label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Lab Guarantee Note */}
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-3 sm:p-3.5 rounded-2xl text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">
                      <Wrench size={15} className="text-[#0E7C7B] dark:text-teal-400 shrink-0" />
                      <span>Certified Micro-Soldering Lab &bull; No Fix, No Fee Guarantee</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
