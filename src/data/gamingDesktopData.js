/**
 * Data definitions for Gaming Desktop Services (Repair & Build).
 * Adheres strictly to Robuzta Techlabs brand guidelines and realistic hardware capabilities in Ahmedabad.
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
  h1: 'Gaming Desktop PC Repair Services in Ahmedabad',
  tagline: 'Component-level motherboard repair, 80+ Gold SMPS replacement, liquid cooling thermal overhauls, and GPU BGA diagnostics for custom gaming rigs.',
  metaTitle: 'Gaming PC Repair in Ahmedabad | Power Supply, GPU & Thermal Fix | Robuzta',
  metaDescription: 'Expert gaming desktop repair in Ahmedabad. Fast SMPS replacement, liquid cooler maintenance, RAM/SSD upgrades & GPU short-circuit repair with live workbench transparency.',
  canonicalUrl: 'https://robuzta.com/gaming-desktop/repair/',
  
  services: [
    {
      id: 'smps-replacement',
      title: 'SMPS / Power Supply Replacement',
      summary: 'PC won’t power on, shuts down during gaming, or smells burnt? Certified 80+ Gold modular PSU installation.',
      details: [
        'Diagnostics for shorted 12V EPS power rails and tripped PSU protection circuits',
        'Installation of Tier-A 80+ Gold modular power supplies (Corsair, Cooler Master, Antec, DeepCool)',
        '12VHPWR connector installation for NVIDIA RTX 40-Series GPUs'
      ],
      turnaround: '1 – 3 Hours',
      price: 'Starts ₹999'
    },
    {
      id: 'overheating-cooling',
      title: 'Overheating & Cooling Maintenance',
      summary: 'CPU reaching 95°C, thermal throttling, or noisy AIO pump? Complete liquid cooling overhaul & repasting.',
      details: [
        'AIO liquid cooler pump vacuum test, gunk flushing, and coolant refilling',
        'Application of premium Thermal Grizzly Kryonaut / Arctic MX-6 thermal paste',
        'High-static pressure ARGB fan installation & PWM curve optimization'
      ],
      turnaround: '2 – 4 Hours',
      price: 'Starts ₹799'
    },
    {
      id: 'ram-ssd-upgrade',
      title: 'RAM & NVMe SSD Upgrade',
      summary: 'Expand memory for heavy gaming/streaming or speed up game load times with PCIe 4.0 NVMe SSDs.',
      details: [
        'DDR4 / DDR5 dual-channel XMP & EXPO high-speed profile tuning up to 7200MHz',
        'PCIe Gen4 / Gen5 M.2 NVMe SSD installation with heavy heatsink mounting',
        'OS migration & 100% zero-data-loss clone service'
      ],
      turnaround: '1 Hour',
      price: 'Starts ₹499'
    },
    {
      id: 'cpu-servicing',
      title: 'CPU Servicing & Socket Repair',
      summary: 'Bent LGA motherboard pins, processor upgrades, or VRM overheating fixes for Intel & AMD platforms.',
      details: [
        'Microscopic alignment & repair of bent Intel LGA 1700 / AMD AM5 socket pins',
        'Processor upgrades (Intel 13th/14th Gen & AMD Ryzen 7000/9000 3D Series)',
        'Motherboard BIOS updating & VRM thermal pad restoration'
      ],
      turnaround: '2 – 6 Hours',
      price: 'Starts ₹1,299'
    },
    {
      id: 'pc-diagnostics',
      title: 'Full Gaming PC Diagnostics & Stress Test',
      summary: 'Random BSOD crashes, display freeze during gameplay, or artifacting graphics card troubleshooting.',
      details: [
        'FLIR thermal imaging to locate shorted motherboard MOSFETs and capacitors',
        '3DMark & FurMark GPU stress testing for stability verification',
        'MemTest86 hardware RAM error isolation'
      ],
      turnaround: '24 Hours',
      price: 'Starts ₹999 (Waived on Repair)'
    }
  ],

  faqs: [
    {
      question: 'Why does my gaming PC shut off suddenly when launching heavy games?',
      answer: 'Sudden shut-offs under load are almost always caused by PSU power rail trip (insufficient wattage/worn caps) or CPU/GPU thermal overload exceeding 95°C.'
    },
    {
      question: 'Can you repair liquid damage or leaking AIO coolers in custom PCs?',
      answer: 'Yes! We perform ultrasonic chemical board baths to remove dried coolant residue, inspect VRM power phases under microscopes, and replace shorted components.'
    },
    {
      question: 'Do you bring spare power supplies and GPUs for diagnostic testing?',
      answer: 'Yes, our bench in South Bopal and Tragad is equipped with test-bench PSUs, RTX GPUs, and test RAM to isolate exact hardware faults instantly.'
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

  services: [
    {
      id: 'custom-pc-builds',
      title: 'Custom Gaming PC Build Tiers',
      summary: 'Tailor-made rigs built for 1080p Esports, 1440p High Refresh Rate, 4K Ultra Gaming, or Heavy AI/3D Workstations.',
      details: [
        'Esports Tier: High FPS 1080p gaming for Valorant, CS2, GTA V & Fortnite',
        '1440p Ultra Tier: Max settings gaming for Cyberpunk 2077 & AAA titles',
        'Creator & AI Tier: Multi-core Threadripper / Ryzen 9 + Dual RTX 4090 setups'
      ],
      turnaround: 'Same Day / 24 Hours',
      price: 'Consultation Free'
    },
    {
      id: 'cabinet-assembly',
      title: 'Cabinet & Component Assembly',
      summary: 'Precision assembly of motherboard, CPU, GPU anti-sag support, and tempered glass cabinet mounting.',
      details: [
        'Dual-chamber & fish-tank glass cabinet assembly (Lian Li, HYTE, NZXT, Corsair)',
        'GPU vertical mounting & heavy graphics card anti-sag bracket installation',
        'Dust filter sealing and positive air pressure fan configuration'
      ],
      turnaround: '2 – 4 Hours',
      price: 'Starts ₹1,499'
    },
    {
      id: 'component-consultation',
      title: 'Component Consultation & Bottleneck Check',
      summary: 'Avoid buying incompatible parts. We audit CPU-GPU bottlenecks, PSU wattage, and RAM clearance before purchase.',
      details: [
        'Verification of CPU cooler clearance vs tall RAM heatspreaders',
        'Power supply wattage headroom calculation for peak GPU transient spikes',
        'Motherboard VRM phase matching for high-wattage CPUs'
      ],
      turnaround: 'Instant / 30 Mins',
      price: 'Free with Build'
    },
    {
      id: 'cooling-rgb-setup',
      title: 'Cooling, ARGB Sync & Cable Management',
      summary: 'Ultra-clean hidden cable routing, ARGB lighting controller sync, and push-pull radiator fan setups.',
      details: [
        'Hidden velcro tie & custom sleeved cable routing behind motherboard tray',
        'ARGB hub controller wiring synced via SignalRGB / ASUS Armoury Crate',
        'Optimized intake/exhaust air flow balance to keep thermals under 70°C'
      ],
      turnaround: '2 – 3 Hours',
      price: 'Starts ₹999'
    },
    {
      id: 'office-to-gaming-upgrade',
      title: 'Upgrade Existing PC to Gaming Specification',
      summary: 'Transform your standard office desktop into a high-performance gaming computer.',
      details: [
        'Graphics card addition with dedicated PCIe power line routing',
        'Power supply upgrade from standard 250W to 80+ Gold 650W/750W',
        'High-speed NVMe SSD boot drive installation with Windows 11 optimization'
      ],
      turnaround: '2 Hours',
      price: 'Starts ₹799 + Parts'
    }
  ],

  faqs: [
    {
      question: 'Can I purchase components myself and bring them to Robuzta for assembly?',
      answer: 'Absolutely! You can purchase parts online or from any distributor, and bring them to our lab in South Bopal or Tragad for professional assembly, cable management, and stress testing.'
    },
    {
      question: 'Do custom PC builds include Windows OS installation and driver setup?',
      answer: 'Yes! Every PC build assembled at Robuzta includes clean Windows installation, latest motherboard chipset drivers, GPU drivers, and 2-hour 3DMark stress testing.'
    },
    {
      question: 'What warranty do I get on custom PC builds assembled at Robuzta?',
      answer: 'You get full official manufacturer warranty on individual parts, plus Robuzta’s 1-Year Free Labor & Diagnostics Support warranty.'
    }
  ]
};
