import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Robuzta Techlabs',
  description: 'Privacy policy and Zero-OTP data safety commitment of Robuzta Techlabs Ahmedabad.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Header />

      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E7C7B]/10 border border-[#0E7C7B]/20 text-xs font-bold text-[#0E7C7B] dark:text-teal-400">
              <ShieldCheck size={14} />
              <span>ZERO-OTP DATA PRIVACY GUARANTEE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Privacy Policy</h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            <section className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. Zero-OTP Data Protection Policy</h2>
              <p>
                At Robuzta Techlabs, your personal data privacy is absolute. Technicians operate under strict ESD-safe and Zero-OTP access protocols. We never request device passwords, personal PINs, or cloud credentials for hardware repairs.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Information Collection & Usage</h2>
              <p>
                Information submitted via repair booking forms (name, mobile number, device model, and pickup location) is exclusively used to organize diagnostic inspections and doorstep logistics.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. Third-Party Sharing</h2>
              <p>
                Robuzta Techlabs does not sell, rent, or trade customer contact details to third-party marketing entities.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
