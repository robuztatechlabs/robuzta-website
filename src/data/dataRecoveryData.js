/**
 * Data definitions for Data Recovery Services in Ahmedabad.
 * Adheres strictly to Robuzta Techlabs brand standards and realistic recovery capabilities.
 */

export const RECOVERY_BRANDS = [
  { name: 'Western Digital', logo: '/assets/brands/wd.svg', tag: 'My Passport, Black & Blue HDDs/SSDs' },
  { name: 'Seagate', logo: '/assets/brands/seagate.svg', tag: 'BarraCuda, FireCuda & One Touch' },
  { name: 'Samsung Memory', logo: '/assets/brands/samsung.webp', tag: '990 Pro, 980 NVMe & EVO SSDs' },
  { name: 'Apple Mac & iPhone', logo: '/assets/brands/apples.webp', tag: 'T2 / M-Series Encrypted Storage & iPhones' },
  { name: 'Dell Laptops', logo: '/assets/brands/dell.webp', tag: 'XPS, Latitude & Inspiron Hard Drives' },
  { name: 'HP Laptops', logo: '/assets/brands/hp.webp', tag: 'Spectre, Envy & Pavilion Storage' }
];

export const DATA_RECOVERY_PAGE_DATA = {
  h1: 'Professional Data Recovery Services in Ahmedabad',
  tagline: 'Component-level data extraction for damaged laptop HDDs, NVMe SSDs, liquid-damaged motherboards, and dead mobile phones. 100% Zero-OTP privacy guaranteed.',
  metaTitle: 'Data Recovery Services in Ahmedabad | HDD, SSD, Dead Laptop & Mobile | Robuzta',
  metaDescription: 'Certified data recovery in Ahmedabad. Expert recovery for clicking HDDs, dead NVMe SSDs, liquid damaged laptops & dead smartphones with No Recovery No Fee guarantee.',
  canonicalUrl: 'https://robuzta.com/data-recovery/',

  services: [
    {
      id: 'laptop-hdd-ssd',
      title: 'Laptop HDD / SSD Data Recovery',
      summary: 'Accidentally formatted drive, mechanical clicking hard drive, or unrecognized NVMe M.2 SSD? Raw sector-by-sector drive imaging.',
      details: [
        'Recovery from corrupted NTFS, APFS, EXT4 & FAT32 file system partitions',
        'PC-3000 sector-by-sector imaging for hard drives with bad sectors & clicking heads',
        'NVMe M.2 SSD controller chip re-soldering & NAND flash chip reading'
      ],
      turnaround: '24 – 48 Hours',
      price: 'Starts ₹1,499 (No Data, No Fee)'
    },
    {
      id: 'dead-laptop-recovery',
      title: 'Dead Laptop Data Recovery',
      summary: 'Laptop won’t power on or motherboard completely dead? Direct power rail bypass & drive extraction.',
      details: [
        'Safe removal of soldered & M.2 NVMe SSD storage from unrepairable laptops',
        'Power rail micro-soldering to temporarily power onboard storage chips',
        'Transfer of recovered files to high-speed USB 3.2 external backup drive'
      ],
      turnaround: '24 Hours',
      price: 'Starts ₹1,999'
    },
    {
      id: 'liquid-damage-recovery',
      title: 'Data Recovery After Liquid Damage',
      summary: 'Water, tea, or coffee spilled on your laptop or phone? Emergency ultrasonic solvent cleaning to prevent data corruption.',
      details: [
        '45x optical microscope inspection for corroded copper trace connections',
        'Ultrasonic chemical cleaning bath to dissolve mineral deposits on storage circuits',
        'Micro-soldering replacement of shorted power capacitors near storage NAND'
      ],
      turnaround: '24 – 48 Hours',
      price: 'Starts ₹2,499'
    },
    {
      id: 'mobile-phone-recovery',
      title: 'Mobile Phone Data Recovery',
      summary: 'Photos, contacts, and WhatsApp chats locked inside a dead, water-damaged, or smashed iPhone or Android smartphone.',
      details: [
        'Logic board BGA chip-off & PMIC micro-soldering for dead smartphones',
        'Extraction of encrypted internal eMMC / UFS storage chips',
        'Zero-OTP policy — your personal photos and chats remain 100% private'
      ],
      turnaround: '24 – 72 Hours',
      price: 'Starts ₹1,999'
    }
  ],

  faqs: [
    {
      question: 'What is your No Data, No Fee guarantee?',
      answer: 'If our lab is unable to recover your critical files, photos, or documents from your hard drive, SSD, or phone, you pay zero diagnostic or recovery fee.'
    },
    {
      question: 'How do you protect my data privacy during the recovery process?',
      answer: 'We strictly enforce a Zero-OTP & Zero-Password policy. All recovered data is stored on encrypted local bench servers and transferred directly to your external drive without cloud uploads.'
    },
    {
      question: 'My hard drive is making a clicking or grinding noise. Should I keep plugging it in?',
      answer: 'No! Disconnect it immediately. Clicking noises indicate read/write head collision against magnetic platters. Further power attempts can cause permanent platter scratching.'
    },
    {
      question: 'Can data be recovered from a dead M.2 NVMe SSD that is not recognized in BIOS?',
      answer: 'Yes! Unrecognized SSDs often suffer from corrupted firmware translation tables or shorted power controller ICs. We repair the power rail or read NAND flash directly.'
    }
  ]
};
