/** 3D model showcases mapped to relevant service pages */
export const serviceModelShowcases = {
  'laptop-repair': [
    {
      modelPath: '/models/laptop.glb',
      title: 'Laptop Precision Hardware Repair',
      description:
        'Complete diagnosis and repair for cracked displays, swollen batteries, keyboard faults, hinge damage, and chip-level motherboard issues across Dell, HP, Lenovo, ASUS, Acer, and MSI.',
      calloutTitle: 'Chip-Level Diagnostics:',
      calloutText:
        'Our ESD-safe bench uses FLIR thermal imaging and micro-soldering stations to trace short circuits and restore power rails without replacing the entire motherboard.',
      badge: '2–4H EXPRESS',
      scale: 1.4,
    },
  ],
  'gaming-pc-repair': [
    {
      modelPath: '/models/Gaming Computer.glb',
      title: 'Custom Gaming PC',
      description:
        'Complete assembly of custom gaming rigs with optimized cable routing, thermal paste application, liquid cooling loop setup, and operating system tuning.',
      calloutTitle: 'Thermodynamics & Airflow:',
      calloutText:
        'Optimal thermodynamics inside the chassis — we configure fan curves, repaste CPUs/GPUs, and install custom loop liquid cooling for maximum stability under load.',
      badge: 'OPTIMIZED AIRFLOW',
      scale: 1.1,
    },
    {
      modelPath: '/models/Graphics card.glb',
      title: 'GPU Repair & Upgrades',
      description:
        'Addressing artifacts, black screens, or thermal throttling. Graphics card diagnostics and chip reflowing services for NVIDIA and AMD GPUs.',
      calloutTitle: 'Thermal Dynamics:',
      calloutText:
        'Modern GPUs operate under extreme thermal loads. Precision micro-soldering restores BGA connections that degrade due to heat cycling.',
      price: 'Starts ₹1,499',
      scale: 2.5,
    },
  ],
  'macbook-repair': [
    {
      modelPath: '/models/Circuit board 1.glb',
      title: 'Logic Board & Circuit Repair',
      description:
        'Apple Silicon and Intel MacBook logic board micro-soldering — power IC replacement, liquid damage recovery, and trace repair under microscope.',
      calloutTitle: 'Micro-Soldering Precision:',
      calloutText:
        'Rather than costly full logic board swaps, we replace faulty SMC chips, capacitors, and charging ICs at the component level with BGA rework stations.',
      badge: 'APPLE-GRADE CARE',
      scale: 1.6,
    },
  ],
  'desktop-repair': [
    {
      modelPath: '/models/SSD.glb',
      title: 'SSD & Storage Upgrades',
      description:
        'NVMe and SATA SSD installation, data migration, and boot optimization — transform a slow desktop into a responsive workstation in hours.',
      calloutTitle: 'Performance Gains:',
      calloutText:
        'Upgrading from a spinning HDD to NVMe storage delivers up to 5× faster boot times and dramatically improved application load speeds.',
      badge: 'SAME-DAY UPGRADE',
      scale: 2.2,
    },
    {
      modelPath: '/models/super computer.glb',
      title: 'Enterprise & Workstation Systems',
      description:
        'Motherboard, RAM, PSU, and cooling diagnostics for office desktops, all-in-one workstations, and high-performance computing setups.',
      calloutTitle: 'Business-Grade Support:',
      calloutText:
        'We service commercial office fleets and enterprise workstations with serial-verified parts, digital invoicing, and minimal downtime protocols.',
      price: 'Fleet pricing available',
      scale: 0.9,
    },
  ],
};

export const techLabModelShowcase = {
  modelPath: '/models/Microchip.glb',
  title: 'BGA Micro-Soldering & IC Rework',
  description:
    'Lab-grade BGA optical rework stations and stereo microscopes enable precision chip-level repairs on logic boards, GPUs, and mobile device PCBs.',
  calloutTitle: 'Component-Level Repair:',
  calloutText:
    'Delicate microchips and power ICs are replaced under 45× magnification with ESD-safe isolation — protecting your data while fixing hardware at the source.',
  badge: 'LAB-GRADE GEAR',
  scale: 2,
};

export function getModelShowcasesForService(slug) {
  return serviceModelShowcases[slug] || [];
}

export function encodeModelPath(path) {
  if (!path) return '';
  return encodeURI(path);
}
