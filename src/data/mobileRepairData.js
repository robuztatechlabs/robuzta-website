/**
 * Data definitions for Mobile Repair Hub, 10 Brand Pages, 4 Problem Pages, and 1 Specialty Page.
 * Adheres strictly to Robuzta Techlabs brand standards and realistic repair capabilities in Ahmedabad.
 */

export const MOBILE_BRANDS = [
  {
    slug: 'iphone',
    name: 'iPhone',
    fullName: 'Apple iPhone Repair Services',
    h1: 'iPhone Repair Services in Ahmedabad',
    tagline: 'Component-level logic board diagnostics, OEM display, battery & camera module replacements for all Apple iPhone models.',
    metaTitle: 'iPhone Repair in Ahmedabad | Screen, Battery & Logic Board | Robuzta',
    metaDescription: 'Expert iPhone repair in Ahmedabad. Certified screen replacement, battery swap, water damage & logic board repair for iPhone 11 to 16 Pro Max.',
    logoImage: '/assets/brands/iphone.png',
    shortTag: 'iPhone 11, 12, 13, 14, 15 & 16 Pro Max',
    supportedModels: [
      'iPhone 16 / 16 Plus / 16 Pro / 16 Pro Max',
      'iPhone 15 / 15 Plus / 15 Pro / 15 Pro Max',
      'iPhone 14 / 14 Plus / 14 Pro / 14 Pro Max',
      'iPhone 13 / 13 mini / 13 Pro / 13 Pro Max',
      'iPhone 12 / 12 Pro / 12 Pro Max / 11 / SE Series'
    ],
    brandHighlights: [
      'Original OEM Super Retina XDR OLED display assembly replacement',
      'High-capacity battery swap with zero warning popups',
      'Face ID & TrueTone sensor calibration after glass repair',
      'Logic board power IC micro-soldering for liquid damaged iPhones'
    ],
    faqs: [
      {
        question: 'How long does an iPhone screen or battery replacement take at Robuzta?',
        answer: 'iPhone display and battery replacements are performed live in 30 to 45 minutes at our ESD-safe workbenches in South Bopal and Tragad.'
      },
      {
        question: 'Will TrueTone and Face ID continue to work after screen repair?',
        answer: 'Yes! We transfer original EEPROM display data and ambient light sensors to preserve TrueTone, Face ID, and auto-brightness functionality.'
      },
      {
        question: 'Can you fix an iPhone that shows Apple logo loop or won’t power on?',
        answer: 'Yes, reboot loops often stem from shorted NAND power rails, faulty audio IC, or damaged charging IC (Tristar/Hydra). We repair the logic board without wiping your data.'
      }
    ]
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    fullName: 'Samsung Galaxy Mobile Repair Services',
    h1: 'Samsung Galaxy Mobile Repair Services in Ahmedabad',
    tagline: 'Authorized-grade repairs for Samsung Galaxy S Series, Z Fold/Flip, A Series, and Note devices with genuine AMOLED displays.',
    metaTitle: 'Samsung Mobile Repair in Ahmedabad | Galaxy S, Fold & A Series | Robuzta',
    metaDescription: 'Specialized Samsung Galaxy repair in Ahmedabad. Original Dynamic AMOLED screen replacement, battery swap, charging port & motherboard repair.',
    logoImage: '/assets/brands/samsung.webp',
    shortTag: 'Galaxy S24, S23, Ultra, Z Fold & Flip',
    supportedModels: [
      'Samsung Galaxy S24 / S24+ / S24 Ultra',
      'Samsung Galaxy S23 / S22 / S21 Ultra Series',
      'Samsung Galaxy Z Fold 5 / Z Flip 5 Series',
      'Samsung Galaxy A54 / A34 / A53 / A73 5G',
      'Samsung Galaxy Note 20 Ultra / Note 10+'
    ],
    brandHighlights: [
      'Original Samsung Service Pack Dynamic AMOLED 2X panel installation',
      'Z Fold & Z Flip inner flex screen cable restoration',
      'UFS storage & Exynos/Snapdragon PMIC power chip micro-soldering',
      'IP68 water resistant gasket seal re-application'
    ],
    faqs: [
      {
        question: 'Do you use original Samsung displays for Galaxy S Series repairs?',
        answer: 'Yes, we only install genuine OEM Samsung Service Pack displays complete with original frame assembly and fingerprint sensor calibration.'
      },
      {
        question: 'Can you repair fold line display issues on Samsung Galaxy Z Fold or Flip?',
        answer: 'Yes, we replace internal flexible OLED screens and hinge mechanism flex cables to restore seamless folding functionality.'
      }
    ]
  },
  {
    slug: 'google-pixel',
    name: 'Google Pixel',
    fullName: 'Google Pixel Smartphone Repair Services',
    h1: 'Google Pixel Phone Repair Services in Ahmedabad',
    tagline: 'Precision hardware repair for Google Pixel 6, 7, 8, and 9 Series including OLED displays, Tensor PMIC, and camera sensors.',
    metaTitle: 'Google Pixel Phone Repair in Ahmedabad | Pixel 6, 7, 8 & 9 | Robuzta',
    metaDescription: 'Expert Google Pixel repair in Ahmedabad. Screen replacement, battery repair, Tensor chip logic board diagnostics & charging port fix.',
    logoImage: '/assets/brands/google-pixel.webp',
    shortTag: 'Pixel 9, 8 Pro, 7a, 6 Pro & Pixel Fold',
    supportedModels: [
      'Google Pixel 9 / 9 Pro / 9 Pro XL / 9 Fold',
      'Google Pixel 8 / 8 Pro / 8a Series',
      'Google Pixel 7 / 7 Pro / 7a Series',
      'Google Pixel 6 / 6 Pro / 6a Series',
      'Google Pixel 5 / 4a / 3a Series'
    ],
    brandHighlights: [
      'Genuine Google Pixel Actua & Smooth Display OLED panel replacement',
      'Optical under-display fingerprint sensor re-calibration',
      'Tensor processor thermal throttling and battery drain fixes',
      'Type-C PD charging controller chip replacement'
    ],
    faqs: [
      {
        question: 'Will the fingerprint scanner work after a Google Pixel screen replacement?',
        answer: 'Yes! We run official Google optical fingerprint calibration software after screen swaps to ensure 100% instant unlocking.'
      },
      {
        question: 'My Pixel phone charges very slowly or gets hot while charging. Can it be fixed?',
        answer: 'This is usually caused by a damaged USB-C PD power negotiation chip or swollen battery cell. We replace the port IC and battery with genuine parts.'
      }
    ]
  },
  {
    slug: 'oneplus',
    name: 'OnePlus',
    fullName: 'OnePlus Mobile Repair Services',
    h1: 'OnePlus Mobile Repair Services in Ahmedabad',
    tagline: 'Specialized repairs for OnePlus 12, 11, 10 Pro, Nord Series, and Open including green line screen fixes and Warp Charging ports.',
    metaTitle: 'OnePlus Mobile Repair in Ahmedabad | Screen, Battery & Board | Robuzta',
    metaDescription: 'Professional OnePlus phone repair in Ahmedabad. Green line screen fix, SuperVOOC charging port, battery swap & motherboard BGA repair.',
    logoImage: '/assets/brands/oneplus.svg',
    shortTag: 'OnePlus 12, 11, 10 Pro, Nord & Open',
    supportedModels: [
      'OnePlus 12 / 12R / 11 / 11R Series',
      'OnePlus 10 Pro / 10T / 9 Pro / 9R Series',
      'OnePlus Nord 4 / Nord CE 4 / Nord 3 Series',
      'OnePlus Open Foldable Smartphone',
      'OnePlus 8T / 8 Pro / 7T Pro Series'
    ],
    brandHighlights: [
      'Fluid AMOLED display panel replacement for green line screen issues',
      'SuperVOOC / Warp Charge high-amperage Type-C port repair',
      'Dual-cell battery replacement for instant fast charging recovery',
      'CPU reballing for OnePlus Qualcomm Snapdragon power loops'
    ],
    faqs: [
      {
        question: 'Can you fix vertical green lines on OnePlus AMOLED screens?',
        answer: 'Vertical green lines indicate damaged RGB subpixel ribbon traces. We replace the display panel with an original high-refresh rate Fluid AMOLED screen.'
      },
      {
        question: 'My OnePlus stopped Warp / SuperVOOC charging. What is the fix?',
        answer: 'SuperVOOC requires dedicated fast-charge ID pins inside the USB-C port. We replace worn connector pins or the internal charging board in 30 minutes.'
      }
    ]
  },
  {
    slug: 'oppo',
    name: 'OPPO',
    fullName: 'OPPO Mobile Repair Services',
    h1: 'OPPO Mobile Repair Services in Ahmedabad',
    tagline: 'Fast and reliable repair solutions for OPPO Reno, Find X, and A Series smartphones.',
    metaTitle: 'OPPO Mobile Repair in Ahmedabad | Reno & Find Series | Robuzta',
    metaDescription: 'Expert OPPO mobile repair in Ahmedabad. Display screen replacement, battery swap, camera glass & charging port repair.',
    logoImage: '/assets/brands/oppo.svg',
    shortTag: 'Reno 12, Find X6, F & A Series',
    supportedModels: [
      'OPPO Reno 12 Pro / Reno 11 / Reno 10 Pro',
      'OPPO Find X6 Pro / Find N3 Flip',
      'OPPO F25 Pro / F23 / F21 Pro Series',
      'OPPO A79 / A58 / A38 / A18 5G Series'
    ],
    brandHighlights: [
      'Original 3D Curved AMOLED screen replacement',
      'SUPERVOOC battery swap with full charging cycle check',
      'Periscope telephoto camera glass repair',
      'Volume & Power flex cable replacement'
    ],
    faqs: [
      {
        question: 'How long does OPPO screen replacement take at Robuzta?',
        answer: 'Screen replacements for OPPO Reno and F-series models are completed in 30 to 60 minutes with 180-day warranty.'
      }
    ]
  },
  {
    slug: 'vivo',
    name: 'Vivo',
    fullName: 'Vivo Smartphone Repair Services',
    h1: 'Vivo Smartphone Repair Services in Ahmedabad',
    tagline: 'Comprehensive hardware repair for Vivo X Series, V Series, and Y Series camera smartphones.',
    metaTitle: 'Vivo Phone Repair in Ahmedabad | V & X Series Repair | Robuzta',
    metaDescription: 'Certified Vivo mobile repair in Ahmedabad. Curved AMOLED display, FlashCharge battery, ZEISS camera lens & logic board fix.',
    logoImage: '/assets/brands/vivo.svg',
    shortTag: 'Vivo X100 Pro, V30, V29 & Y Series',
    supportedModels: [
      'Vivo X100 Pro / X90 Pro / X80 Series',
      'Vivo V30 Pro / V29 / V27 Series',
      'Vivo T3 / T2 Pro 5G Series',
      'Vivo Y200 / Y56 / Y28 5G Series'
    ],
    brandHighlights: [
      'ZEISS optics camera glass lens replacement',
      'Curved 120Hz Ultra Vision AMOLED display restoration',
      'FlashCharge power circuit and USB-C port repair',
      'In-display fingerprint sensor alignment'
    ],
    faqs: [
      {
        question: 'Do you replace cracked camera lens glass on Vivo X and V series phones?',
        answer: 'Yes! We replace sapphire camera glass covers cleanly without opening or damaging the underlying optical OIS sensor modules.'
      }
    ]
  },
  {
    slug: 'realme',
    name: 'Realme',
    fullName: 'Realme Mobile Repair Services',
    h1: 'Realme Mobile Repair Services in Ahmedabad',
    tagline: 'Affordable OEM repair for Realme GT, Number Series, and Narzo smartphones.',
    metaTitle: 'Realme Mobile Repair in Ahmedabad | GT & Narzo Series | Robuzta',
    metaDescription: 'Fast Realme phone repair in Ahmedabad. Screen glass replacement, battery swap, speaker fix & motherboard short repair.',
    logoImage: '/assets/brands/realme.svg',
    shortTag: 'Realme GT 6, 12 Pro+, Narzo 70',
    supportedModels: [
      'Realme GT 6 / GT 5 Pro / GT Neo Series',
      'Realme 12 Pro+ / 12 5G / 11 Pro Series',
      'Realme Narzo 70 Pro / Narzo 60 Series',
      'Realme C65 / C55 / C35 Budget Series'
    ],
    brandHighlights: [
      'Original Realme 120Hz curved display panel replacement',
      'High-capacity Li-Polymer battery swap',
      'Earpiece & loud speaker module replacement',
      'Water damage PCB drying & chip micro-soldering'
    ],
    faqs: [
      {
        question: 'My Realme phone is not powering on after dropping in water. Can it be saved?',
        answer: 'Yes, bring it immediately for ultrasonic chemical cleaning and power rail short-circuit diagnostics. Recovery rate is 90%+ within 24 hours.'
      }
    ]
  },
  {
    slug: 'motorola',
    name: 'Motorola',
    fullName: 'Motorola Mobile Repair Services',
    h1: 'Motorola Mobile Repair Services in Ahmedabad',
    tagline: 'Expert repairs for Motorola Edge Series, Razr Foldable, and Moto G Series smartphones.',
    metaTitle: 'Motorola Mobile Repair in Ahmedabad | Moto Edge & Razr | Robuzta',
    metaDescription: 'Specialized Motorola repair in Ahmedabad for Moto Edge, Razr & Moto G series. pOLED screen, battery & charging port repair.',
    logoImage: '/assets/brands/motorola.svg',
    shortTag: 'Moto Edge 50, Razr 50 Ultra, Moto G',
    supportedModels: [
      'Motorola Razr 50 Ultra / Razr 40',
      'Motorola Edge 50 Pro / Edge 40 Neo',
      'Moto G84 / G54 / G34 5G Series',
      'Moto E Series & Older Moto G Models'
    ],
    brandHighlights: [
      'pOLED Endless Edge screen replacement',
      'Razr foldable hinge flex cable repair',
      'TurboPower charging port IC replacement',
      'Stock Android bootloop firmware recovery'
    ],
    faqs: [
      {
        question: 'Do you replace curved pOLED screens for Moto Edge laptops & phones?',
        answer: 'Yes, we stock original pOLED curved display assemblies for Moto Edge 50/40 series with 100% touch sensitivity.'
      }
    ]
  },
  {
    slug: 'nothing',
    name: 'Nothing',
    fullName: 'Nothing Phone Repair Services',
    h1: 'Nothing Phone Repair Services in Ahmedabad',
    tagline: 'Specialized hardware repair for Nothing Phone (1), Phone (2), and Phone (2a) including Glyph interface LED restoration.',
    metaTitle: 'Nothing Phone Repair in Ahmedabad | Phone 1, 2 & 2a | Robuzta',
    metaDescription: 'Expert Nothing Phone repair in Ahmedabad. Glyph lighting repair, transparent back glass swap, OLED screen & battery replacement.',
    logoImage: '/assets/brands/nothing.svg',
    shortTag: 'Nothing Phone (2), Phone (2a), Phone (1)',
    supportedModels: [
      'Nothing Phone (2a) / Phone (2a) Plus',
      'Nothing Phone (2) Flagship',
      'Nothing Phone (1) Original',
      'CMF Phone 1 by Nothing'
    ],
    brandHighlights: [
      'Glyph Interface LED ribbon cable & controller repair',
      'Transparent back glass panel replacement',
      'Flexible OLED 120Hz LTPO screen replacement',
      'Wireless charging coil soldering & thermal paste check'
    ],
    faqs: [
      {
        question: 'Can you repair broken back glass on Nothing Phone (2) without damaging Glyph lights?',
        answer: 'Yes! We use specialized laser removal tools to replace transparent rear glass while preserving all LED Glyph lighting zones.'
      }
    ]
  },
  {
    slug: 'iqoo',
    name: 'iQOO',
    fullName: 'iQOO Gaming Mobile Repair Services',
    h1: 'iQOO Gaming Mobile Repair Services in Ahmedabad',
    tagline: 'High-performance repairs for iQOO 12, 11, Neo 9 Pro, and Z Series gaming smartphones.',
    metaTitle: 'iQOO Mobile Repair in Ahmedabad | iQOO 12, Neo & Z Series | Robuzta',
    metaDescription: 'Specialized iQOO gaming phone repair in Ahmedabad. 144Hz AMOLED screen, Snapdragon GPU BGA repair, FlashCharge & battery swap.',
    logoImage: '/assets/brands/iqoo.svg',
    shortTag: 'iQOO 12, Neo 9 Pro, Z9 & Z7',
    supportedModels: [
      'iQOO 12 / 11 / 10 Pro Flagship Gaming',
      'iQOO Neo 9 Pro / Neo 7 Pro / Neo 6',
      'iQOO Z9 / Z9x / Z7 Pro 5G Series'
    ],
    brandHighlights: [
      '144Hz E6 AMOLED gaming display replacement',
      'Vapor chamber cooling and thermal repasting',
      '120W / 200W FlashCharge IC repair',
      'Monster Touch shoulder button flex replacement'
    ],
    faqs: [
      {
        question: 'My iQOO gaming phone turns on but screen is black during heavy gaming. What is wrong?',
        answer: 'This is often caused by thermal shutdown or GPU power rail short. We inspect the motherboard power IC and perform thermal overhaul.'
      }
    ]
  }
];

export const MOBILE_PROBLEMS = [
  {
    slug: 'screen-replacement',
    name: 'Screen Replacement',
    problemTitle: 'Mobile Display & Glass Screen Replacement',
    h1: 'Mobile Screen Replacement Services in Ahmedabad',
    tagline: 'Cracked glass, black display, touch unresponsiveness, or vertical line issues? Original OLED & AMOLED screens installed in 30 minutes.',
    metaTitle: 'Mobile Screen Replacement in Ahmedabad | Original AMOLED | Robuzta',
    metaDescription: 'Fast smartphone screen replacement in Ahmedabad. Original AMOLED, OLED & IPS display panels with 180-day warranty & free glass protection.',
    symptoms: [
      'Outer front glass cracked or shattered after drop',
      'Display has black ink bleeding spots or vertical colored lines',
      'Touchscreen not responding or ghost touching automatically',
      'Screen completely black while phone rings and vibrates'
    ],
    repairProcess: [
      'ESD-safe phone disassembly and battery disconnection',
      'Removal of damaged display assembly & old adhesive cleaning',
      'EEPROM data & ambient light sensor data transfer',
      'Installation of OEM display with 5-point touch & color calibration'
    ],
    estimatedTime: '30 – 45 Minutes',
    priceEstimate: 'Starts ₹1,499 (Original Quality)',
    faqs: [
      {
        question: 'Can only the outer glass be replaced if the internal display is working?',
        answer: 'Yes! If your touch and OLED display show clear images without lines, we perform optical clear adhesive (OCA) outer glass replacement at half the cost of a full screen.'
      },
      {
        question: 'Do replacement screens come with warranty?',
        answer: 'All our screen replacements carry an official 180-day Robuzta warranty covering touch sensor sensitivity and display manufacturing faults.'
      }
    ]
  },
  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    problemTitle: 'Mobile Battery Replacement & Health Restoration',
    h1: 'Mobile Battery Replacement Services in Ahmedabad',
    tagline: 'Phone draining fast, shutting down at 30%, or battery swollen? High-density original battery replacement with 100% health recovery.',
    metaTitle: 'Mobile Battery Replacement in Ahmedabad | Fast 30-Min Swap | Robuzta',
    metaDescription: 'Original smartphone battery replacement in Ahmedabad. Restore 100% battery health & backup for iPhone, Samsung, OnePlus & Pixel.',
    symptoms: [
      'Battery percentage drops rapidly within a few hours of use',
      'Phone shuts down suddenly when reaching 20% or 30%',
      'Back panel lifting due to battery swelling or gas bulge',
      'Phone charges very slowly or heats up excessively while idle'
    ],
    repairProcess: [
      'Battery health diagnostic and charging cycle audit',
      'Safe thermal removal of degraded lithium-ion cell',
      'Cleaning of battery bay and installation of fresh adhesive pull tabs',
      'Installation of OEM high-density cell & 100-cycle stress test'
    ],
    estimatedTime: '20 – 30 Minutes',
    priceEstimate: 'Starts ₹899',
    faqs: [
      {
        question: 'How do I know if my smartphone battery needs replacement?',
        answer: 'If your battery health drops below 80%, takes hours to charge, drains under light use, or causes the back panel to swell, replacement is necessary.'
      },
      {
        question: 'Is battery replacement safe for waterproof phones?',
        answer: 'Yes, we apply fresh IP68 water resistance adhesive seals after battery installation to preserve dust and moisture resistance.'
      }
    ]
  },
  {
    slug: 'charging-port-repair',
    name: 'Charging Port Repair',
    problemTitle: 'Type-C & Lightning Charging Port Repair',
    h1: 'Mobile Charging Port Repair Services in Ahmedabad',
    tagline: 'Loose charging jack, slow charging, cable falling out, or liquid in port error? Clean component-level port replacement in 30 minutes.',
    metaTitle: 'Mobile Charging Port Repair in Ahmedabad | USB-C & Lightning | Robuzta',
    metaDescription: 'Fast smartphone charging port repair in Ahmedabad. Fix loose Type-C, Lightning port, slow charging & OTG connection faults.',
    symptoms: [
      'Charging cable fits loosely or falls out at the slightest movement',
      'Phone does not charge unless cable is held at a specific angle',
      'Moisture or liquid detected warning won’t clear from screen',
      'Phone connected to charger but battery percentage stays same or drops'
    ],
    repairProcess: [
      'Microscopic inspection of USB-C / Lightning port pins for corrosion',
      'Removal of lint, debris, and oxidized copper contact pins',
      'Desoldering broken charging connector flex from daughter board',
      'Micro-soldering new OEM port with fast-charge negotiation check'
    ],
    estimatedTime: '30 Minutes',
    priceEstimate: 'Starts ₹599',
    faqs: [
      {
        question: 'Why does my phone say "Liquid / Foreign Material Detected in Port"?',
        answer: 'This warning triggers when mineral residue or corrosion shorts the sensing pins inside USB-C ports. We clean or replace the port assembly to resolve it.'
      }
    ]
  },
  {
    slug: 'motherboard-repair',
    name: 'Motherboard Repair',
    problemTitle: 'Mobile Motherboard & Micro-Soldering BGA Repair',
    h1: 'Mobile Motherboard & Chip-Level Repair in Ahmedabad',
    tagline: 'No power, water damage corrosion, stuck on logo, or memory IC failure? Advanced micro-soldering under 45x optical stereo microscopes.',
    metaTitle: 'Mobile Motherboard Repair in Ahmedabad | Chip-Level BGA | Robuzta',
    metaDescription: 'Expert mobile motherboard repair in Ahmedabad. BGA chip micro-soldering, power IC, water damage & short circuit fix with data preservation.',
    symptoms: [
      'Phone completely dead with no response to charger or power button',
      'Device stuck in continuous bootloop on Apple / Android logo',
      'Overheating rapidly near top camera area even when idle',
      'Wi-Fi, Bluetooth, SIM network, or audio IC grayed out in settings'
    ],
    repairProcess: [
      'FLIR thermal camera imaging to locate shorted power capacitors',
      '45x optical microscope inspection for corroded PCB traces',
      'Precision BGA reballing & replacement of faulty PMIC / Audio ICs',
      'Post-repair 12-hour stress testing for thermal and network stability'
    ],
    estimatedTime: '24 – 48 Hours',
    priceEstimate: 'Starts ₹1,499 (Data Safe)',
    faqs: [
      {
        question: 'Can my photos and data be saved if the motherboard is dead?',
        answer: 'Yes! Component-level micro-soldering repairs the damaged power chip on the motherboard, preserving your internal NAND storage data intact.'
      }
    ]
  },
  {
    slug: 'dead-phone-repair',
    name: 'Dead Phone Repair',
    problemTitle: 'Dead Smartphone & Water Damage Emergency Recovery',
    h1: 'Dead Mobile Phone Repair & Water Damage Restoration in Ahmedabad',
    tagline: 'Dropped phone in water, coffee, or ocean? Phone died suddenly overnight? Emergency ultrasonic chemical bath & 95%+ recovery rate.',
    metaTitle: 'Dead Phone Repair in Ahmedabad | Water Damage Emergency | Robuzta',
    metaDescription: 'Emergency dead phone repair in Ahmedabad. Water damage restoration, ultrasonic PCB cleaning, short circuit repair & 100% data safety.',
    symptoms: [
      'Phone dropped in water, toilet, ocean, pool, or coffee spill',
      'Phone shut off unexpectedly overnight and shows no charging light',
      'Phone suffered severe drop impact and won’t vibrate or turn on',
      'Motherboard short circuit causing battery to discharge instantly'
    ],
    repairProcess: [
      'Immediate power disconnect and battery extraction',
      'Complete disassembly of EMI shield covers from motherboard',
      'Ultrasonic chemical solvent bath to dissolve corrosion & mineral crust',
      'Micro-soldering repair of shorted power rails and NAND storage recovery'
    ],
    estimatedTime: '24 – 48 Hours',
    priceEstimate: 'Starts ₹1,299 (No Fix, No Fee Guarantee)',
    faqs: [
      {
        question: 'What should I do immediately if my phone falls in water?',
        answer: '1. Turn off phone immediately. 2. DO NOT plug in charger. 3. DO NOT put in rice (rice starch damages ports). 4. Bring to Robuzta within 24 hours!'
      },
      {
        question: 'What is your No Fix, No Fee policy for dead phones?',
        answer: 'If we cannot recover your dead phone or restore power, you pay zero diagnostic or repair fee!'
      }
    ]
  }
];

/**
 * Helper Functions
 */

export function getAllMobileBrands() {
  return MOBILE_BRANDS;
}

export function getAllMobileProblems() {
  return MOBILE_PROBLEMS;
}

export function getAllMobileSlugs() {
  const brandSlugs = MOBILE_BRANDS.map((b) => b.slug);
  const problemSlugs = MOBILE_PROBLEMS.map((p) => p.slug);
  return [...brandSlugs, ...problemSlugs];
}

export function getMobileBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null;

  const brand = MOBILE_BRANDS.find((b) => b.slug === slug);
  if (brand) {
    return {
      ...brand,
      entityType: 'brand'
    };
  }

  const problem = MOBILE_PROBLEMS.find((p) => p.slug === slug);
  if (problem) {
    return {
      ...problem,
      entityType: 'problem'
    };
  }

  return null;
}
