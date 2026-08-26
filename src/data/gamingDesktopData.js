/**
 * Data definitions for Gaming Desktop Services (Repair & Build).
 * Adheres strictly to Robuzta Techlabs brand guidelines and PDF specifications.
 */

export const GAMING_BRANDS = [
  { name: 'NVIDIA GeForce', logo: '/assets/brands/nvidia.svg', tag: 'RTX 4090, 4080, 4070 Ti, 4060' },
  { name: 'AMD Radeon & Ryzen', logo: '/assets/brands/amd.svg', tag: 'Ryzen 9, 7, 5 & RX 7900 XTX' },
  { name: 'Intel Core', logo: '/assets/brands/intel.svg', tag: 'Core i9, i7, i5 14th/13th Gen' },
  { name: 'ASUS ROG & TUF', logo: '/assets/brands/asus.png', tag: 'Strix Motherboards & GPUs' },
  { name: 'MSI Gaming', logo: '/assets/brands/msi.svg', tag: 'MEG, MPG & Ventus GPUs' },
  { name: 'Corsair', logo: '/assets/brands/corsair.svg', tag: '80+ Gold PSUs, RAM & AIOs' }
];

export const GAMING_REPAIR_DATA = {
  slug: 'repair',
  h1: 'Gaming PC Repair & Custom PC Build Services in Ahmedabad',
  tagline: 'Gaming PC repair and custom PC building services in Ahmedabad for gaming, streaming, editing, and high-performance systems. We diagnose GPU problems, overheating, crashes, blue screens, boot failures, power issues, RAM and SSD faults, and build performance-focused PCs based on your budget and requirements.',
  metaTitle: 'Gaming PC Repair in Ahmedabad | Power Supply, GPU & Thermal Fix | Robuzta',
  metaDescription: 'Gaming PC repair and custom PC building services in Ahmedabad for gaming, streaming, editing, and high-performance systems.',
  canonicalUrl: 'https://robuzta.com/gaming-desktop/repair/',

  whyChooseUsTitle: 'Why Choose Us?',
  whyChooseUs: [
    'Gaming PC Repair Specialists',
    'Custom PC Build & Upgrade',
    'GPU & Motherboard Diagnostics',
    'Performance & Thermal Optimization',
    'Quality Components',
    'Transparent Build & Repair Estimates',
    'Cable Management & Testing',
    'Warranty on Eligible Repairs'
  ],

  servicesBadge: 'GAMING PC REPAIR & BUILD SERVICES',
  servicesTitle: 'Is Your Gaming PC Not Performing the Way It Should?',
  servicesDescription: 'From sudden black screens and FPS drops to overheating, crashes, hardware failures, and complete system builds, we diagnose your PC properly and provide the right repair, upgrade, or build solution.',

  repairProblems: [
    {
      title: '1. Gaming PC Turning On but No Display?',
      description: 'PC powers on but your monitor shows no signal? We diagnose the GPU, RAM, motherboard, PSU, display connection, and other hardware components.'
    },
    {
      title: '2. Gaming PC Shutting Down During Gaming?',
      description: 'Sudden shutdowns under heavy gaming load can be caused by overheating, PSU problems, GPU issues, or unstable hardware. We identify the actual cause.'
    },
    {
      title: '3. GPU Overheating or Fan Not Working?',
      description: 'High GPU temperatures, noisy fans, or GPU fans not spinning properly can affect gaming performance. We diagnose cooling and graphics-related issues.'
    },
    {
      title: '4. Gaming PC FPS Drops or Stuttering?',
      description: 'Unexpected FPS drops, micro-stuttering, or inconsistent gaming performance can be caused by thermal throttling, drivers, RAM, storage, GPU, or CPU limitations.'
    },
    {
      title: '5. Gaming PC Randomly Restarting or Crashing?',
      description: 'Random restarts, freezes, game crashes, and blue screens can point to unstable RAM, GPU, PSU, CPU, storage, or software problems.'
    },
    {
      title: '6. Gaming PC Not Booting?',
      description: "If your PC gets stuck on the motherboard logo, shows a boot error, or doesn't load Windows, we diagnose SSD, RAM, BIOS, motherboard, and operating system issues."
    },
    {
      title: '7. Gaming PC Overheating?',
      description: 'High CPU or GPU temperatures can reduce performance and cause system instability. We provide thermal servicing, thermal paste replacement, fan cleaning, and cooling optimization.'
    },
    {
      title: '8. Gaming PC Build & Custom PC Assembly?',
      description: 'Planning a new gaming PC? We select compatible CPU, GPU, motherboard, RAM, SSD, PSU, cabinet, and cooling according to your games, workload, and budget.'
    },
    {
      title: '9. Gaming PC Upgrade?',
      description: 'Upgrade your existing PC with a better GPU, more RAM, faster SSD, improved cooling, or a suitable power supply to increase performance without replacing the entire system.'
    }
  ],

  customBuildsBadge: 'CUSTOM GAMING PC BUILDS',
  customBuildsTitle: 'Build a Gaming PC Around Your Budget',
  customBuildsDescription: 'Whether you need a budget gaming PC, high-end gaming system, streaming setup, or a powerful editing workstation, we configure the components according to your requirements and expected performance.',
  customBuildTiers: [
    {
      title: 'Budget Gaming PC',
      description: 'Balanced components for popular games and everyday gaming.'
    },
    {
      title: 'High-End Gaming PC',
      description: 'Powerful CPU and GPU combinations for high-resolution and demanding games.'
    },
    {
      title: 'Streaming & Gaming PC',
      description: 'Designed to handle gaming, live streaming, recording, and multitasking.'
    },
    {
      title: 'Gaming & Video Editing PC',
      description: 'Performance-focused builds for Premiere Pro, DaVinci Resolve, After Effects, and gaming.'
    }
  ],

  faqsTitle: 'Gaming PC Repair Questions Answered',
  faqs: [
    {
      question: '1. Why does my gaming PC turn on but show no display?',
      answer: 'The issue can be related to the GPU, RAM, motherboard, PSU, BIOS, or display connection. We test the major components to identify the fault.'
    },
    {
      question: '2. Why does my PC shut down while playing games?',
      answer: 'Overheating, PSU limitations, GPU problems, unstable hardware, or power-related faults can cause shutdowns during gaming.'
    },
    {
      question: '3. Can you build a gaming PC according to my budget?',
      answer: 'Yes. We can recommend compatible components based on your budget, games, resolution, performance requirements, and future upgrade plans.'
    },
    {
      question: '4. Can you upgrade my existing gaming PC?',
      answer: 'Yes. We check your current hardware first and recommend upgrades for the components that are actually limiting performance.'
    },
    {
      question: '5. Why is my gaming PC getting very hot?',
      answer: 'Dust, poor airflow, old thermal paste, inadequate cooling, high workload, or faulty fans can cause high temperatures.'
    },
    {
      question: '6. Why am I getting low FPS even with a powerful GPU?',
      answer: 'Low FPS can be caused by CPU limitations, thermal throttling, insufficient RAM, drivers, game settings, background processes, or hardware configuration.'
    },
    {
      question: '7. Can you diagnose GPU problems?',
      answer: 'Yes. We test graphics cards for display issues, crashes, overheating, artifacting, fan problems, and other performance-related faults.'
    }
  ]
};

export const GAMING_BUILD_DATA = {
  slug: 'build',
  h1: 'Custom Gaming PC Build & Assembly Services in Ahmedabad',
  tagline: 'Custom gaming PC builds, ultra-clean cabinet wiring, ARGB liquid cooling setup, and stress-tested component selection for gamers & creators.',
  metaTitle: 'Custom Gaming PC Build in Ahmedabad | Rig Assembly & Cable Setup | Robuzta',
  metaDescription: 'Custom gaming PC build and assembly service in Ahmedabad. Expert component selection, ARGB liquid cooling setup, cable management & 3DMark stress testing.',
  canonicalUrl: 'https://robuzta.com/gaming-desktop/build/',

  whyChooseUsTitle: 'Why Choose Us?',
  whyChooseUs: [
    'Gaming PC Repair Specialists',
    'Custom PC Build & Upgrade',
    'GPU & Motherboard Diagnostics',
    'Performance & Thermal Optimization',
    'Quality Components',
    'Transparent Build & Repair Estimates',
    'Cable Management & Testing',
    'Warranty on Eligible Repairs'
  ],

  servicesBadge: 'CUSTOM GAMING PC BUILDS',
  servicesTitle: 'Build a Gaming PC Around Your Budget',
  servicesDescription: 'Whether you need a budget gaming PC, high-end gaming system, streaming setup, or a powerful editing workstation, we configure the components according to your requirements and expected performance.',

  repairProblems: [
    {
      title: '1. Budget Gaming PC',
      description: 'Balanced components for popular games and everyday gaming.'
    },
    {
      title: '2. High-End Gaming PC',
      description: 'Powerful CPU and GPU combinations for high-resolution and demanding games.'
    },
    {
      title: '3. Streaming & Gaming PC',
      description: 'Designed to handle gaming, live streaming, recording, and multitasking.'
    },
    {
      title: '4. Gaming & Video Editing PC',
      description: 'Performance-focused builds for Premiere Pro, DaVinci Resolve, After Effects, and gaming.'
    }
  ],

  customBuildsBadge: 'CUSTOM GAMING PC BUILDS',
  customBuildsTitle: 'Build a Gaming PC Around Your Budget',
  customBuildsDescription: 'Whether you need a budget gaming PC, high-end gaming system, streaming setup, or a powerful editing workstation, we configure the components according to your requirements and expected performance.',
  customBuildTiers: [
    {
      title: 'Budget Gaming PC',
      description: 'Balanced components for popular games and everyday gaming.'
    },
    {
      title: 'High-End Gaming PC',
      description: 'Powerful CPU and GPU combinations for high-resolution and demanding games.'
    },
    {
      title: 'Streaming & Gaming PC',
      description: 'Designed to handle gaming, live streaming, recording, and multitasking.'
    },
    {
      title: 'Gaming & Video Editing PC',
      description: 'Performance-focused builds for Premiere Pro, DaVinci Resolve, After Effects, and gaming.'
    }
  ],

  faqsTitle: 'Gaming PC Build Questions Answered',
  faqs: [
    {
      question: '1. Why does my gaming PC turn on but show no display?',
      answer: 'The issue can be related to the GPU, RAM, motherboard, PSU, BIOS, or display connection. We test the major components to identify the fault.'
    },
    {
      question: '2. Why does my PC shut down while playing games?',
      answer: 'Overheating, PSU limitations, GPU problems, unstable hardware, or power-related faults can cause shutdowns during gaming.'
    },
    {
      question: '3. Can you build a gaming PC according to my budget?',
      answer: 'Yes. We can recommend compatible components based on your budget, games, resolution, performance requirements, and future upgrade plans.'
    },
    {
      question: '4. Can you upgrade my existing gaming PC?',
      answer: 'Yes. We check your current hardware first and recommend upgrades for the components that are actually limiting performance.'
    },
    {
      question: '5. Why is my gaming PC getting very hot?',
      answer: 'Dust, poor airflow, old thermal paste, inadequate cooling, high workload, or faulty fans can cause high temperatures.'
    },
    {
      question: '6. Why am I getting low FPS even with a powerful GPU?',
      answer: 'Low FPS can be caused by CPU limitations, thermal throttling, insufficient RAM, drivers, game settings, background processes, or hardware configuration.'
    },
    {
      question: '7. Can you diagnose GPU problems?',
      answer: 'Yes. We test graphics cards for display issues, crashes, overheating, artifacting, fan problems, and other performance-related faults.'
    }
  ]
};
