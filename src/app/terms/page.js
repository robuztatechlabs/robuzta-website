import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | Robuzta Techlabs',
  description: 'Terms of service and warranty policy for Robuzta Techlabs hardware repair lab.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 text-xs font-bold text-[#0E7C7B] dark:text-teal-400">
              <ShieldCheck size={14} />
              <span>180-DAY WARRANTY COVERAGE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Terms of Service</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Diagnostic Inspections</h2>
              <p>
                Initial hardware inspections across laptop, MacBook, mobile, Surface, and gaming PC devices carry zero cost. Estimates are provided before work begins.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Repair Warranty</h2>
              <p>
                Replaced components and chip-level micro-soldering services include up to 180 days of hardware warranty protection unless stated otherwise on your invoice.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Customer Authorization</h2>
              <p>
                By proceeding with repair orders, customers authorize Robuzta Techlabs certified technicians to perform necessary hardware diagnostics and component replacements.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
