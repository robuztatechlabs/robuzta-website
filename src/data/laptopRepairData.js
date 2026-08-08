/**
 * Data definitions for Laptop Repair Hub, 7 Brand Pages, and 9 Problem Pages.
 * All data adheres strictly to Robuzta Techlabs brand guidelines and realistic repair capabilities.
 */

export const LAPTOP_BRANDS = [
  {
    slug: 'dell',
    name: 'Dell',
    fullName: 'Dell Laptop Repair Services',
    h1: 'Dell Laptop Repair Services in Ahmedabad',
    tagline: 'Component-level logic board diagnostics, OEM display, battery & keyboard replacement for Inspiron, XPS, Vostro, and Alienware series.',
    metaTitle: 'Dell Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert Dell laptop repair in Ahmedabad. Certified component-level diagnostics for XPS, Inspiron, Vostro & Alienware. Genuine parts & warranty.',
    logoImage: '/assets/brands/dell.webp',
    shortTag: 'XPS, Inspiron, Vostro & Alienware',
    supportedModels: ['Dell XPS 13 / 15 / 17', 'Dell Inspiron 3000 / 5000 / 7000', 'Dell Vostro Series', 'Dell Latitude Corporate', 'Dell Alienware & G-Series'],
    brandHighlights: [
      'Component-level power IC and BGA rework on Dell motherboards',
      'Original Dell OEM battery and display assembly replacements',
      'Thermal Grizzly repasting for Alienware & G-series gaming laptops',
      'Zero-Password data privacy during diagnostic procedures'
    ],
    faqs: [
      {
        question: 'How long does Dell laptop repair take at Robuzta Techlabs?',
        answer: 'Screen, battery, and keyboard replacements for Dell laptops are typically completed in 2 to 4 hours. Complex BGA motherboard and power IC repairs take 24 to 48 hours.'
      },
      {
        question: 'Do you use genuine Dell replacement screens and batteries?',
        answer: 'Yes! We source grade-A OEM original displays, batteries, and keyboards backed by our official replacement warranty.'
      },
      {
        question: 'Can you repair Alienware laptops that overheat or crash while gaming?',
        answer: 'Absolutely. We specialize in high-performance Alienware thermal overhauls, GPU BGA reballing, fan replacements, and liquid metal / thermal compound application.'
      }
    ]
  },
  {
    slug: 'hp',
    name: 'HP',
    fullName: 'HP Laptop Repair Services',
    h1: 'HP Laptop Repair Services in Ahmedabad',
    tagline: 'Specialized hardware repair for HP Pavilion, Spectre, Envy, EliteBook, ProBook, and OMEN gaming laptops.',
    metaTitle: 'HP Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Professional HP laptop repair in Ahmedabad. Fast screen, battery, hinge & logic board repair for Spectre, Pavilion, Envy & OMEN laptops.',
    logoImage: '/assets/brands/hp.webp',
    shortTag: 'Spectre, Pavilion, Envy & OMEN',
    supportedModels: ['HP Pavilion 14 / 15 / x360', 'HP Spectre x360 Series', 'HP Envy 13 / 15 / 16', 'HP OMEN & Victus Gaming', 'HP EliteBook & ProBook'],
    brandHighlights: [
      'Precision hinge and body panel reconstruction for HP x360 2-in-1s',
      'Logic board power rail short-circuit resolution',
      'HP OMEN thermal fan replacement & heatsink restoration',
      'Genuine HP battery calibration and installation'
    ],
    faqs: [
      {
        question: 'Can you fix broken hinges on HP Pavilion x360 laptops?',
        answer: 'Yes! We perform structural brass-threaded hinge reinforcement and top panel restoration so your 2-in-1 hinge opens smoothly without cracking the plastic casing.'
      },
      {
        question: 'My HP laptop is stuck on a black screen with blinking LED codes. Can you repair it?',
        answer: 'Blinking LED patterns indicate specific BIOS, RAM, or power rail faults. Our bench technicians diagnose the exact short-circuit component and restore motherboard power rails.'
      }
    ]
  },
  {
    slug: 'acer',
    name: 'Acer',
    fullName: 'Acer Laptop Repair Services',
    h1: 'Acer Laptop Repair Services in Ahmedabad',
    tagline: 'Reliable repair solutions for Acer Nitro 5, Predator Helios, Swift, Aspire, and Spin laptops.',
    metaTitle: 'Acer Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert Acer laptop repair in Ahmedabad for Nitro 5, Predator, Swift & Aspire models. Display, charging port, thermal & logic board support.',
    logoImage: '/assets/brands/acer.webp',
    shortTag: 'Nitro, Predator, Swift & Aspire',
    supportedModels: ['Acer Nitro 5 / Nitro 16', 'Acer Predator Helios 300 / 16', 'Acer Swift 3 / Swift 5 / Go', 'Acer Aspire 3 / 5 / 7', 'Acer Spin Convertible Series'],
    brandHighlights: [
      'Acer Nitro & Predator dual-fan cooling system repair',
      'DC power jack soldering and charging IC replacement',
      'High-refresh rate 144Hz / 165Hz IPS screen replacements',
      'RAM and M.2 NVMe expansion with speed verification'
    ],
    faqs: [
      {
        question: 'Do you replace high-refresh rate displays on Acer Nitro & Predator laptops?',
        answer: 'Yes, we stock genuine 144Hz, 165Hz, and 240Hz IPS screen panels for Acer gaming laptops with 100% color accuracy and zero dead pixel guarantee.'
      },
      {
        question: 'My Acer laptop does not charge unless the cord is held at an angle. What is wrong?',
        answer: 'This indicates a worn DC charging jack or loose motherboard solder joint. We repair or replace the jack connector with reinforced solder joints.'
      }
    ]
  },
  {
    slug: 'asus',
    name: 'ASUS',
    fullName: 'ASUS Laptop Repair Services',
    h1: 'ASUS Laptop Repair Services in Ahmedabad',
    tagline: 'Authorized-grade hardware repair for ASUS ROG Strix, TUF Gaming, ZenBook, Vivobook, and ProArt laptops.',
    metaTitle: 'ASUS Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Fast ASUS laptop repair in Ahmedabad for ROG Strix, TUF Gaming, ZenBook & Vivobook models. Motherboard BGA, display & liquid spill repair.',
    logoImage: '/assets/brands/asus.png',
    shortTag: 'ROG Strix, TUF & ZenBook',
    supportedModels: ['ASUS ROG Strix SCAR / G15', 'ASUS TUF Gaming F15 / A15', 'ASUS ZenBook Duo / Flip', 'ASUS Vivobook Pro / S Series', 'ASUS ProArt Studiobook'],
    brandHighlights: [
      'BGA reballing for NVIDIA RTX graphics chips on ROG & TUF series',
      'OLED and FHD/4K display replacement for ZenBook models',
      'Liquid metal thermal compound cleanup & reapplication',
      'Keyboard backlighting and ribbon connector repair'
    ],
    faqs: [
      {
        question: 'Can you fix liquid damage on an ASUS ZenBook or ROG laptop?',
        answer: 'Yes! We perform ultrasonic motherboard cleaning, corrosion removal under stereo microscopes, and replace damaged capacitors to recover your laptop.'
      },
      {
        question: 'My ASUS TUF laptop turns on but shows no display. Is the GPU dead?',
        answer: 'Not necessarily. It could be a faulty display ribbon, corrupted VRAM IC, or a single shorted MOSFET. We perform component testing before recommending any major repair.'
      }
    ]
  },
  {
    slug: 'msi',
    name: 'MSI',
    fullName: 'MSI Laptop Repair Services',
    h1: 'MSI Laptop Repair Services in Ahmedabad',
    tagline: 'High-performance diagnostic and repair lab for MSI Katana, Pulse, Stealth, Raider, and Modern series laptops.',
    metaTitle: 'MSI Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Specialized MSI laptop repair in Ahmedabad. Thermal overhaul, GPU repair, screen replacement & hinge rebuilding for MSI Katana, Raider & Stealth.',
    logoImage: '',
    shortTag: 'Katana, Raider, Stealth & Pulse',
    supportedModels: ['MSI Katana GF66 / 15', 'MSI Pulse GL66 / 15', 'MSI Stealth 15 / 17', 'MSI Raider GE66 / 76', 'MSI Modern 14 / 15'],
    brandHighlights: [
      'Reinforced steel hinge mount restoration for MSI palm rests',
      'Cooler Boost fan replacement & copper thermal pipe repair',
      'MOSFET and VRM power rail micro-soldering on MSI mainboards',
      'Per-key RGB keyboard and matrix display cable replacement'
    ],
    faqs: [
      {
        question: 'Why do MSI laptop hinges break, and can Robuzta fix them permanently?',
        answer: 'MSI gaming laptops use tight steel hinges anchored into plastic palm rests. We rebuild the internal screw anchors using industrial epoxy and brass threads to prevent future breakage.'
      },
      {
        question: 'Can you fix noisy or non-spinning Cooler Boost fans on MSI laptops?',
        answer: 'Yes, we replace failing hydraulic bearing fans with original MSI replacement blowers and apply high-viscosity thermal compound.'
      }
    ]
  },
  {
    slug: 'surface',
    name: 'Microsoft Surface',
    fullName: 'Microsoft Surface Repair Services',
    h1: 'Microsoft Surface Repair Services in Ahmedabad',
    tagline: 'Delicate micro-repair lab for Microsoft Surface Pro, Surface Laptop, Surface Book, and Surface Laptop Studio.',
    metaTitle: 'Microsoft Surface Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Precision Microsoft Surface repair in Ahmedabad. Display glass, battery, charging port & logic board repair for Surface Pro, Laptop & Book.',
    logoImage: '/assets/brands/microsoft.webp',
    shortTag: 'Surface Pro, Laptop & Studio',
    supportedModels: ['Surface Pro 7 / 8 / 9 / X', 'Surface Laptop 3 / 4 / 5 / Go', 'Surface Book 2 / 3', 'Surface Laptop Studio'],
    brandHighlights: [
      'ESD-safe touchscreen digitizer glass separation and assembly',
      'Battery pouch cell replacement without display damage',
      'Surface Connect magnetic charging port trace repair',
      'Logic board power management IC micro-soldering'
    ],
    faqs: [
      {
        question: 'Is it safe to replace the screen or battery on a glued Microsoft Surface Pro?',
        answer: 'Microsoft Surface devices are sealed with industrial adhesive. We use controlled infrared heat tables and suction separation tools to open the device without damaging internal ribbons.'
      },
      {
        question: 'My Surface Pro battery is swelling and pushing the screen out. What should I do?',
        answer: 'Stop using the device immediately to prevent screen cracking or battery puncture. Bring it to our lab for immediate safe cell extraction and genuine battery replacement.'
      }
    ]
  },
  {
    slug: 'macbook',
    name: 'Apple MacBook',
    fullName: 'Apple MacBook Repair Services',
    h1: 'Apple MacBook Repair Services in Ahmedabad',
    tagline: 'Apple-grade logic board micro-soldering, retina display replacement, and battery service for MacBook Air & MacBook Pro (M1, M2, M3 & Intel).',
    metaTitle: 'MacBook Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Premium MacBook repair in Ahmedabad for MacBook Air & Pro (M1/M2/M3/Intel). Logic board chip repair, Retina display, battery & liquid damage.',
    logoImage: '/assets/brands/apples.webp',
    shortTag: 'MacBook Air & Pro (M1/M2/M3/Intel)',
    supportedModels: ['MacBook Air M1 / M2 / M3 (13" & 15")', 'MacBook Pro 13" / 14" / 16" (M1/M2/M3 Pro & Max)', 'Intel MacBook Air & Pro (2015-2020)'],
    brandHighlights: [
      'Component-level Apple Silicon & Intel logic board micro-soldering',
      'Retina LCD panel and flex cable (Flexgate) repair',
      'Battery replacement with zero battery warning messages',
      'Ultrasonic liquid damage recovery under 45x optical magnification'
    ],
    faqs: [
      {
        question: 'Do you repair MacBook logic boards instead of replacing the whole board?',
        answer: 'Yes! Replacing an entire Apple logic board can cost 70% of a new MacBook. We replace individual shorted capacitors, SMC/CD3215 USB-C chips, and power ICs at a fraction of the cost.'
      },
      {
        question: 'Will my data stay safe during MacBook liquid damage repair?',
        answer: 'Data safety is our priority. We operate under strict Zero-Password and Zero-OTP protocols, isolating storage components to protect your personal files.'
      }
    ]
  }
];

export const LAPTOP_PROBLEMS = [
  {
    slug: 'motherboard-repair',
    name: 'Motherboard & Logic Board Repair',
    problemTitle: 'Motherboard & Power IC Chip Repair',
    h1: 'Laptop Motherboard & Logic Board Repair in Ahmedabad',
    tagline: 'Component-level BGA micro-soldering, short circuit removal, power rail diagnostics, and IC replacement without costly board swaps.',
    metaTitle: 'Laptop Motherboard Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert laptop motherboard & logic board repair in Ahmedabad. Micro-soldering, power IC replacement, BGA reballing & short circuit diagnosis.',
    symptoms: [
      'Laptop completely dead — no power or LED indicators',
      'Laptop turns on for 2 seconds and immediately shuts down',
      'System charges battery but refuses to boot up',
      'Blue Screen of Death (BSOD) or kernel panic during startup',
      'Overheating motherboard with burning smell or shorted power rail'
    ],
    repairProcess: [
      'Thermal imaging & digital multimeter power rail voltage tracing',
      'ESD-safe isolation of shorted capacitors, MOSFETs, and power ICs',
      'Stereo microscope micro-soldering and BGA reballing rework',
      'Bench stability testing under 100% stress load prior to assembly'
    ],
    estimatedTime: '24 – 48 Hours',
    priceEstimate: 'Starts ₹1,499 (No Fix, No Fee Guarantee)',
    faqs: [
      {
        question: 'Why repair the motherboard instead of replacing it?',
        answer: 'Motherboard replacements from official brand centers often cost ₹25,000 to ₹50,000+. Robuzta replaces only the shorted micro-components (costing ₹1,499 - ₹4,500), saving you up to 70%.'
      },
      {
        question: 'What is your No Fix, No Fee policy for motherboard repairs?',
        answer: 'If our engineers are unable to repair your laptop motherboard circuit, you pay zero diagnostic or bench fees.'
      }
    ]
  },
  {
    slug: 'screen-replacement',
    name: 'Screen & Display Replacement',
    problemTitle: 'Screen & Display Panel Replacement',
    h1: 'Laptop Screen Replacement Services in Ahmedabad',
    tagline: 'Original OEM IPS, OLED, FHD, 4K, and 144Hz gaming display replacements with same-day express fitting.',
    metaTitle: 'Laptop Screen Replacement in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Fast laptop screen replacement in Ahmedabad. OEM displays for Dell, HP, Lenovo, ASUS, Acer, MSI & MacBook. Same-day express fitting.',
    symptoms: [
      'Cracked, smashed, or spider-webbed LCD glass',
      'Vertical or horizontal colored lines running across display',
      'Flickering screen, dim backlight, or completely black display',
      'Bleeding ink spots, dark blotches, or distorted colors'
    ],
    repairProcess: [
      'Precision bezel removal and EDP display ribbon inspection',
      'Serial & resolution compatibility verification (FHD, 2K, 4K, OLED)',
      'Installation of brand-new OEM screen panel with zero dead pixels',
      'Color spectrum, brightness, and refresh rate calibration'
    ],
    estimatedTime: '1 – 3 Hours (Same-Day Express)',
    priceEstimate: 'Starts ₹2,499 (Model Dependent)',
    faqs: [
      {
        question: 'How fast can you replace my laptop screen?',
        answer: 'Most standard 14", 15.6", and 16" FHD screens are in stock and installed in under 2 hours.'
      },
      {
        question: 'Do replacement screens come with a warranty?',
        answer: 'Yes! All screen replacements include an official 180-day Robuzta warranty against manufacturing defects and display lines.'
      }
    ]
  },
  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    problemTitle: 'Battery & Power System Replacement',
    h1: 'Laptop Battery Replacement Services in Ahmedabad',
    tagline: 'Grade-A lithium pouch battery replacements for all laptop brands with full battery health warranty.',
    metaTitle: 'Laptop Battery Replacement in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Genuine laptop battery replacement in Ahmedabad for Dell, HP, Lenovo, ASUS, Acer & MacBook. 180-day warranty & safe cell disposal.',
    symptoms: [
      'Laptop dies immediately when power adapter is unplugged',
      'Battery health percentage drops rapidly from 100% to 20%',
      'System displays "Service Battery" or "Replace Soon" warning',
      'Swollen battery lifting the trackpad or bulging bottom chassis'
    ],
    repairProcess: [
      'Safe extraction of degraded or swollen lithium pouch cells',
      'Internal charging circuit and BMS controller health audit',
      'Fitting of factory-sealed OEM grade-A battery pack',
      'Full charge-discharge calibration cycle & power draw testing'
    ],
    estimatedTime: '1 – 2 Hours',
    priceEstimate: 'Starts ₹1,899',
    faqs: [
      {
        question: 'Is a swollen laptop battery dangerous?',
        answer: 'Yes. Swollen batteries can rupture, leak toxic chemicals, or damage your trackpad and motherboard. Have it safely extracted immediately.'
      },
      {
        question: 'How do I maintain good battery life on my new battery?',
        answer: 'Avoid leaving your laptop plugged in 24/7 at 100%, keep thermals cool, and maintain charging cycles between 20% and 80%.'
      }
    ]
  },
  {
    slug: 'keyboard-replacement',
    name: 'Keyboard & Trackpad Replacement',
    problemTitle: 'Keyboard & Trackpad Repair',
    h1: 'Laptop Keyboard & Trackpad Repair in Ahmedabad',
    tagline: 'Individual key repair, full backlit keyboard assembly replacements, and precision trackpad calibration.',
    metaTitle: 'Laptop Keyboard Replacement in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Quick laptop keyboard replacement in Ahmedabad. Backlit, mechanical & chicklet keyboards for all brands. Trackpad fix & same-day service.',
    symptoms: [
      'Certain keys (or entire rows) not responding when pressed',
      'Sticky, broken, or missing keycaps and scissor switches',
      'Keyboard typing random characters or auto-repeating keys',
      'Trackpad cursor jumping erratically or clicker unresponsive'
    ],
    repairProcess: [
      'Ribbon cable matrix inspection and motherboard connector cleaning',
      'Removal of damaged keyboard riveted assembly',
      'Precision installation of OEM backlit or non-backlit keyboard',
      'Key-by-key matrix functional audit prior to final delivery'
    ],
    estimatedTime: '2 – 4 Hours',
    priceEstimate: 'Starts ₹1,199',
    faqs: [
      {
        question: 'Can you replace individual broken keycaps?',
        answer: 'If the underlying scissor hinge mechanism is intact, we can replace single keycaps. If internal membrane traces are shorted, full keyboard replacement is recommended.'
      },
      {
        question: 'Do you offer backlit keyboard upgrades?',
        answer: 'If your laptop motherboard supports backlit power connectors, we can upgrade standard keyboards to illuminated backlit models.'
      }
    ]
  },
  {
    slug: 'body-panel-repair',
    name: 'Body Panel & Hinge Repair',
    problemTitle: 'Hinge, Palm Rest & Chassis Fabrication',
    h1: 'Laptop Hinge & Body Panel Repair in Ahmedabad',
    tagline: 'Structural brass-threaded hinge reinforcement, broken screw mount repair, and corner body panel reconstruction.',
    metaTitle: 'Laptop Hinge & Body Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Professional laptop hinge & chassis repair in Ahmedabad. Brass thread reinforcement, palm rest fabrication & screen panel restoration.',
    symptoms: [
      'Screen top lid pops open or creaks loudly when opening',
      'Hinge separated completely from the bottom plastic casing',
      'Cracked corner chassis, damaged palm rest, or broken screen frame',
      'Laptop lid loose and unable to stay upright at an angle'
    ],
    repairProcess: [
      'Disassembly of display assembly to isolate damaged hinge mounts',
      'Industrial epoxy bonding and brass threaded insert anchoring',
      'Hinge tension adjustment to prevent future stress on plastic mounts',
      'Smooth opening & alignment inspection before reassembly'
    ],
    estimatedTime: '3 – 6 Hours',
    priceEstimate: 'Starts ₹999',
    faqs: [
      {
        question: 'Do I need to replace the entire body if the hinge breaks?',
        answer: 'No! We specialize in structural brass-threaded re-anchoring, saving you from expensive body panel replacements.'
      },
      {
        question: 'Will the repaired hinge be as strong as original?',
        answer: 'Our brass insert anchoring reinforced with industrial resin is often stronger than factory plastic screw posts.'
      }
    ]
  },
  {
    slug: 'charging-port-repair',
    name: 'Charging Port Repair',
    problemTitle: 'DC Jack & USB-C Power Port Repair',
    h1: 'Laptop Charging Port & DC Jack Repair in Ahmedabad',
    tagline: 'Soldered DC jack replacement, Type-C Power Delivery port micro-repair, and charging controller IC fix.',
    metaTitle: 'Laptop Charging Port Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Fast laptop charging port & DC jack repair in Ahmedabad. USB-C Power Delivery port soldering & charging IC replacement for all brands.',
    symptoms: [
      'Laptop only charges when charger cable is wiggled or held at an angle',
      'Loose, wobbly, or visibly broken inner pin inside charging port',
      'USB-C charger plugged in but battery indicates "Not Charging"',
      'Sparking sound or hot metal smell coming from power jack'
    ],
    repairProcess: [
      'Multimeter continuity test on DC jack power contacts',
      'Desoldering damaged power jack or Type-C PD connector from motherboard',
      'Micro-soldering new OEM heavy-duty jack with reinforced ground pads',
      'Voltage load stability verification using bench power supply'
    ],
    estimatedTime: '2 – 4 Hours',
    priceEstimate: 'Starts ₹899',
    faqs: [
      {
        question: 'Why does my laptop charge intermittently when moving the cable?',
        answer: 'This occurs when internal solder joints on the charging jack crack or inner copper pins loosen due to tension. We resolder or replace the port.'
      },
      {
        question: 'Do you repair USB-C Thunderbolt charging ports?',
        answer: 'Yes! Our bench technicians perform micro-soldering on multi-pin USB-C PD connectors and replace controller chips like CD3215 / TPS6598.'
      }
    ]
  },
  {
    slug: 'ram-ssd-upgrade',
    name: 'RAM & SSD Upgrade',
    problemTitle: 'High-Speed RAM & NVMe SSD Performance Upgrade',
    h1: 'Laptop RAM & SSD Upgrade Services in Ahmedabad',
    tagline: 'Instant speed boost with DDR4/DDR5 RAM upgrades, high-speed M.2 NVMe SSD installation, and OS cloning.',
    metaTitle: 'Laptop RAM & SSD Upgrade in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Speed up your laptop with RAM & SSD upgrades in Ahmedabad. Up to 64GB DDR4/DDR5 & 2TB NVMe SSD with same-day data cloning.',
    symptoms: [
      'Laptop takes several minutes to boot up into Windows/macOS',
      'High disk usage (100% disk usage bug) causing severe lag',
      'Insufficient memory errors when running Chrome, Photoshop, or CAD',
      'Slow file transfer speeds and delayed application launches'
    ],
    repairProcess: [
      'Hardware bus speed assessment (DDR4/DDR5 frequency & M.2 PCIe gen)',
      'Installation of high-grade Kingston/Crucial/Samsung RAM & SSDs',
      'High-speed bit-for-bit drive cloning (keep your OS, software & files)',
      'Dual-channel memory benchmarking and boot time optimization'
    ],
    estimatedTime: '1 – 2 Hours (Same-Day Express)',
    priceEstimate: 'Starts ₹1,299 (Part Dependent)',
    faqs: [
      {
        question: 'Will upgrading to an SSD make my old laptop faster?',
        answer: 'Yes! Replacing an old mechanical hard drive with an NVMe or SATA SSD makes your laptop up to 5x to 10x faster in boot and app opening speeds.'
      },
      {
        question: 'Will I lose my files during an SSD upgrade?',
        answer: 'No. We perform sector-by-sector drive cloning so your entire operating system, desktop files, applications, and settings remain untouched.'
      }
    ]
  },
  {
    slug: 'fan-repair',
    name: 'Fan & Thermal Repair',
    problemTitle: 'Cooling Fan & Thermal Overhaul Service',
    h1: 'Laptop Fan Repair & Overheating Service in Ahmedabad',
    tagline: 'Ultrasonic fan cleaning, bearing lubrication, copper heatpipe testing, and Thermal Grizzly paste reapplication.',
    metaTitle: 'Laptop Fan & Heating Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Fix laptop overheating & fan noise in Ahmedabad. Ultrasonic cleaning, fan replacement & Thermal Grizzly repasting for CPU/GPU.',
    symptoms: [
      'Laptop gets uncomfortably hot to touch on palm rest or bottom',
      'Cooling fan makes grinding, rattling, or high-pitched squealing noise',
      'Fan stops spinning entirely causing sudden thermal thermal shutdowns',
      'CPU throttling causing severe lag while gaming or editing'
    ],
    repairProcess: [
      'Disassembly of heatsink and ultrasonic deep cleaning of cooling fins',
      'Testing thermal pipe vacuum integrity for vapor chamber leaks',
      'Replacement of failed fan motors with original hydraulic bearing fans',
      'Reapplication of premium Thermal Grizzly Kryonaut thermal compound'
    ],
    estimatedTime: '1 – 3 Hours',
    priceEstimate: 'Starts ₹799',
    faqs: [
      {
        question: 'How often should a laptop undergo thermal cleaning & repasting?',
        answer: 'We recommend thermal servicing every 12 to 18 months, especially in dusty environments or for heavy gaming/editing use.'
      },
      {
        question: 'Can overheating cause permanent damage to my CPU or GPU?',
        answer: 'Yes. Sustained temperatures over 95°C degrade BGA solder joints beneath processors, leading to chip failure.'
      }
    ]
  },
  {
    slug: 'liquid-damage-repair',
    name: 'Liquid Damage Repair',
    problemTitle: 'Liquid Damage & Water Spill Restoration',
    h1: 'Laptop Liquid Damage Repair Services in Ahmedabad',
    tagline: 'Emergency ultrasonic motherboard bath, corrosion neutralisation, and component-level power circuit repair.',
    metaTitle: 'Laptop Liquid Damage Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Emergency laptop liquid damage repair in Ahmedabad. Ultrasonic bath cleaning, corrosion treatment & board micro-soldering. High recovery rate.',
    symptoms: [
      'Water, tea, coffee, or soda spilled on keyboard while powered on',
      'Laptop turned off immediately after liquid spill and won’t turn on',
      'Keyboard keys sticky or typing wrong characters after liquid exposure',
      'Greenish corrosion spots visible near motherboard charging circuits'
    ],
    repairProcess: [
      'Immediate battery disconnect & power isolation to prevent shorting',
      'Disassembly of motherboard for 45x microscope corrosion audit',
      'Ultrasonic chemical cleaning bath to remove oxidation & mineral residue',
      'Micro-soldering replacement of shorted capacitors, resistors, and ICs'
    ],
    estimatedTime: '24 – 48 Hours',
    priceEstimate: 'Starts ₹1,999 (No Recovery, No Fee)',
    faqs: [
      {
        question: 'What should I do immediately after spilling liquid on my laptop?',
        answer: '1. Unplug the charger immediately. 2. Press and hold power button to force shutdown. 3. Turn laptop upside down in a tent shape. 4. DO NOT try to turn it on or plug it in!'
      },
      {
        question: 'Can data be saved from a water-damaged laptop?',
        answer: 'In 95% of liquid damage cases, storage drives (SSDs/HDDs) remain intact. We prioritize data preservation and chip recovery.'
      }
    ]
  }
];

/**
 * Utility helper functions for collision-safe route resolution
 */

export function getAllBrands() {
  return LAPTOP_BRANDS;
}

export function getAllProblems() {
  return LAPTOP_PROBLEMS;
}

export function getAllSlugs() {
  const brandSlugs = LAPTOP_BRANDS.map((b) => b.slug);
  const problemSlugs = LAPTOP_PROBLEMS.map((p) => p.slug);
  return [...brandSlugs, ...problemSlugs];
}

export function getBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null;

  const brand = LAPTOP_BRANDS.find((b) => b.slug === slug);
  if (brand) {
    return {
      ...brand,
      entityType: 'brand'
    };
  }

  const problem = LAPTOP_PROBLEMS.find((p) => p.slug === slug);
  if (problem) {
    return {
      ...problem,
      entityType: 'problem'
    };
  }

  return null;
}
