'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ArrowRight, ArrowLeft, Sparkles, Building, User, Mail, Phone, MapPin, DollarSign, Briefcase, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

export function FranchiseMultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    city: '',
    state: 'Gujarat',
    budget: '₹8.5L - ₹15L',
    experience: 'Business Owner / Entrepreneur',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
      const whatsappMsg = `Hi Robuzta Techlabs! I submitted a Franchise Application:\n\n- Name: ${formData.fullName}\n- Company: ${formData.companyName}\n- Phone: ${formData.phone}\n- Email: ${formData.email}\n- City/State: ${formData.city}, ${formData.state}\n- Budget: ${formData.budget}\n- Experience: ${formData.experience}\n- Message: ${formData.message}\n\nPlease contact me for Franchise Consultation.`;
      const whatsappUrl = `${siteConfig.whatsappHref}?text=${encodeURIComponent(whatsappMsg)}`;

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 800);
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <section id="franchise-application-form" className="relative bg-white dark:bg-slate-950 py-24 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300 overflow-hidden">
      
      {/* Background Lighting Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0E7C7B]/10 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-black uppercase tracking-widest text-[#0E7C7B] dark:text-teal-300 bg-[#0E7C7B]/10 dark:bg-teal-400/10 border border-[#0E7C7B]/20 dark:border-teal-400/30 px-4 py-1.5 rounded-full inline-block">
            CONFIDENTIAL FRANCHISE APPLICATION
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Apply for Robuzta Franchise Partnership
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
            Fill out the multi-step evaluation form below. Our franchise expansion board responds within 24 hours.
          </p>
        </div>

        {/* Step Progress Bar Header */}
        {!isSubmitted && (
          <div className="flex items-center justify-between gap-2 max-w-md mx-auto p-2 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-extrabold">
            <div className={`flex-1 text-center py-2 rounded-xl transition-all ${
              step === 1 ? 'bg-[#0E7C7B] text-white shadow-md' : 'text-slate-600 dark:text-slate-400'
            }`}>
              1. Contact
            </div>
            <div className={`flex-1 text-center py-2 rounded-xl transition-all ${
              step === 2 ? 'bg-[#0E7C7B] text-white shadow-md' : 'text-slate-600 dark:text-slate-400'
            }`}>
              2. Territory & Budget
            </div>
            <div className={`flex-1 text-center py-2 rounded-xl transition-all ${
              step === 3 ? 'bg-[#0E7C7B] text-white shadow-md' : 'text-slate-600 dark:text-slate-400'
            }`}>
              3. Experience & Submit
            </div>
          </div>
        )}

        {/* Multi-Step Wizard Container */}
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="h-20 w-20 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 size={44} />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                  Application Submitted Successfully!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your franchise evaluation inquiry for <strong>{formData.city}, {formData.state}</strong> has been logged. We are opening WhatsApp to share full prospectus details...
                </p>
              </div>

              <div className="pt-4 flex justify-center">
                <a
                  href={siteConfig.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-black text-white shadow-xl hover:bg-emerald-700 transition-all"
                >
                  <WhatsappIcon size={20} className="text-white" />
                  <span>Connect Immediately on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleNext} className="space-y-6">
              
              {/* STEP 1: CONTACT INFO */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-base font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2">
                    <User size={18} className="text-[#0E7C7B] dark:text-teal-400" /> Step 1: Personal & Contact Information
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Shah"
                        value={formData.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Company Name (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. Shah Electronics Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => updateField('companyName', e.target.value)}
                        className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. vikram@gmail.com"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98980 12345"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: TERRITORY & BUDGET */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-base font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-[#EA580C]" /> Step 2: Target Territory & Investment Capacity
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Target City / Area *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Surat, Vadodara, Rajkot, Ahmedabad"
                        value={formData.city}
                        onChange={(e) => updateField('city', e.target.value)}
                        className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">State *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Gujarat"
                        value={formData.state}
                        onChange={(e) => updateField('state', e.target.value)}
                        className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Investment Budget Range *</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => updateField('budget', e.target.value)}
                      className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                    >
                      <option value="₹8.5L - ₹15L">Standard Lab Model (₹8.5 Lakhs - ₹15 Lakhs)</option>
                      <option value="₹15L - ₹25L">Flagship Enterprise Hub (₹15 Lakhs - ₹25 Lakhs)</option>
                      <option value="₹25L+">Multi-Store State Master Franchise (₹25 Lakhs+)</option>
                    </select>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: EXPERIENCE & SUBMIT */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-base font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center gap-2">
                    <Briefcase size={18} className="text-[#0E7C7B] dark:text-teal-400" /> Step 3: Experience & Additional Notes
                  </h4>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Previous Business Experience</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => updateField('experience', e.target.value)}
                      className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium focus:border-[#0E7C7B] focus:outline-none"
                    >
                      <option value="Business Owner / Entrepreneur">Existing Business Owner / Entrepreneur</option>
                      <option value="IT / Electronics Hardware Repair">IT / Electronics Retail & Service Background</option>
                      <option value="Corporate Executive">Corporate Executive / First-Time Franchisee</option>
                      <option value="Investor">Investor / Capital Partner</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase text-slate-500 dark:text-slate-400 tracking-wider">Message / Specific Questions</label>
                    <textarea
                      rows={3}
                      placeholder="Share any preferred store location, launching timeline, or specific questions..."
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 px-4 py-3.5 text-sm text-slate-900 dark:text-white font-medium placeholder-slate-400 focus:border-[#0E7C7B] focus:outline-none"
                    />
                  </div>
                </motion.div>
              )}

              {/* Wizard Nav Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-xs font-extrabold text-slate-800 dark:text-slate-200 transition-all cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    <span>Previous</span>
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#0E7C7B] hover:bg-teal-600 text-xs font-black text-white shadow-lg shadow-[#0E7C7B]/25 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <span>{step === 3 ? 'Submit Franchise Application' : 'Next Step'}</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
