/**
 * Data definitions for Cleaning & Tune-Up Services (Basic vs Pro).
 * Adheres strictly to Robuzta Techlabs brand standards and realistic servicing capabilities in Ahmedabad.
 */

export const CLEANING_PAGE_DATA = {
  h1: 'Laptop & PC Cleaning & Tune-Up Services in Ahmedabad',
  tagline: 'Professional thermal servicing, ultrasonic dust extraction, Thermal Grizzly repasting, and OS speed optimization for laptops & desktop PCs.',
  metaTitle: 'Laptop & PC Cleaning & Tune-Up in Ahmedabad | Basic vs Pro Plan | Robuzta',
  metaDescription: 'Expert laptop & PC cleaning in Ahmedabad. Professional dust removal, Thermal Grizzly repasting, fan servicing & OS optimization. Compare Basic vs Pro plans.',
  canonicalUrl: 'https://robuzta.com/cleaning-tune-up/',

  basicPlan: {
    name: 'Basic Cleaning & Tune-Up',
    badge: 'Standard Servicing',
    price: '₹499',
    turnaround: '45 – 60 Mins',
    summary: 'Essential exterior cleaning, vent dust extraction, thermal check, and basic software cleanup for everyday laptops.',
    features: [
      { text: 'Exterior body & screen anti-static cleaning', included: true },
      { text: 'Cooling vent & exhaust fan dust blowing', included: true },
      { text: 'Thermal paste temperature inspection check', included: true },
      { text: 'Temp files, cache & startup software cleanup', included: true },
      { text: 'Basic 5-point performance & thermal check', included: true },
      { text: 'Full device disassembly & internal motherboard bath', included: false },
      { text: 'Thermal paste replacement (Thermal Grizzly Kryonaut)', included: false },
      { text: 'Deep keyboard keycaps & trackpad groove cleaning', included: false },
      { text: 'Before vs After thermal benchmark report', included: false }
    ]
  },

  proPlan: {
    name: 'Pro Deep Cleaning & Overhaul',
    badge: 'Recommended for Gaming & Heavy Work',
    price: '₹899',
    turnaround: '1.5 – 2 Hours',
    summary: 'Full disassembly, ultrasonic internal dust bath, Thermal Grizzly repasting, OS optimization & benchmark report.',
    features: [
      { text: 'Exterior body & screen anti-static cleaning', included: true },
      { text: 'Cooling vent & exhaust fan dust blowing', included: true },
      { text: 'Thermal paste temperature inspection check', included: true },
      { text: 'Temp files, cache & startup software cleanup', included: true },
      { text: 'Basic 5-point performance & thermal check', included: true },
      { text: 'Full device disassembly & internal motherboard bath', included: true },
      { text: 'Thermal paste replacement (Thermal Grizzly Kryonaut)', included: true },
      { text: 'Deep keyboard keycaps & trackpad groove cleaning', included: true },
      { text: 'Before vs After thermal benchmark report', included: true }
    ]
  },

  symptoms: [
    'Laptop fan makes loud grinding, rattling, or high-pitched squealing noise',
    'Keyboard or palm rest gets uncomfortably hot within 10 minutes of use',
    'Laptop shuts down suddenly while gaming, editing, or video calling',
    'System runs extremely slow, takes minutes to boot, or freezes under light load'
  ],

  faqs: [
    {
      question: 'How often should a laptop undergo thermal cleaning & repasting?',
      answer: 'We recommend thermal servicing every 12 to 18 months, especially in dusty environments or for heavy gaming/editing use.'
    },
    {
      question: 'What thermal paste do you use for Pro Deep Cleaning?',
      answer: 'We exclusively apply premium high-conductivity thermal compounds such as Thermal Grizzly Kryonaut, Noctua NT-H2, or Arctic MX-6.'
    },
    {
      question: 'Will cleaning fix my laptop shutting down due to overheating?',
      answer: 'Yes! Overheating shutdowns occur when dried thermal paste and clogged fan heatsinks push CPU temperatures over 95°C. Deep cleaning restores optimal 60°C – 75°C thermals.'
    }
  ]
};
