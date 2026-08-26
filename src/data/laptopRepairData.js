/**
 * Data definitions for Laptop Repair Hub, 7 Brand Pages, and 9 Problem Pages.
 * All data adheres strictly to Robuzta Techlabs brand guidelines and realistic repair capabilities.
 */

export const LAPTOP_BRANDS = [
  {
    slug: 'dell',
    name: 'Dell',
    fullName: 'Dell Laptop Repair Services',
    h1: 'Dell Laptop Repair in Ahmedabad',
    tagline: 'We fix charging issues, broken screens, motherboard Issue, battery problems, overheating, and more.',
    metaTitle: 'Dell Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert Dell laptop repair in Ahmedabad. Certified component-level diagnostics for XPS, Inspiron, Vostro & Alienware. Genuine parts & warranty.',
    logoImage: '/assets/brands/dell-2.svg',
    shortTag: 'XPS, Inspiron, Vostro & Alienware',
    supportedModels: ['Dell XPS 13 / 15 / 17', 'Dell Inspiron 3000 / 5000 / 7000', 'Dell Vostro Series', 'Dell Latitude Corporate'],
    commonProblems: [
      {
        title: 'Dell Laptop Stuck on Dell Logo?',
        description: 'We diagnose boot failures caused by SSD, Windows, BIOS, or motherboard issues.',
        slug: 'motherboard-repair',
        priceEstimate: 'Starts ₹1,499',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'Dell Laptop Not Charging?',
        description: 'Charging issues can be caused by a faulty adapter, battery, charging port, or motherboard.',
        slug: 'charging-port-repair',
        priceEstimate: 'Starts ₹899',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Dell Laptop Showing Blue Screen Errors?',
        description: 'Blue screen crashes can indicate hardware or operating system problems.',
        slug: 'motherboard-repair',
        priceEstimate: 'Starts ₹1,299',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Dell Wi-Fi & Network Repair',
        description: 'Wi-Fi connectivity, Bluetooth, and network card troubleshooting.',
        slug: 'motherboard-repair',
        priceEstimate: 'Starts ₹799',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'Dell Keyboard Replacement',
        description: 'Faulty keys, liquid damage, and complete keyboard replacement.',
        slug: 'keyboard-replacement',
        priceEstimate: 'Starts ₹1,199',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Dell Body Panel & Hinge Repair',
        description: 'Fix broken hinges, damaged laptop casing, loose display frames, and cracked body panels with durable repair solutions.',
        slug: 'body-panel-repair',
        priceEstimate: 'Starts ₹999',
        estimatedTime: '3 – 6 Hours'
      },
      {
        title: 'Fan & Thermal Service',
        description: 'fan cleaning, thermal paste replacement, and overheating solutions.',
        slug: 'fan-repair',
        priceEstimate: 'Starts ₹799',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Dell Display Cable Repair',
        description: 'Fix display cable issues causing screen flickering, no display, or intermittent screen problems.',
        slug: 'screen-replacement',
        priceEstimate: 'Starts ₹1,299',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Dell Data Recovery Service',
        description: 'Recover important documents, photos, videos, and business data from damaged storage devices.',
        slug: 'liquid-damage-repair',
        priceEstimate: 'Starts ₹1,999',
        estimatedTime: '24 – 48 Hours'
      }
    ],
    brandHighlights: [
      'Component-level power IC and BGA rework on Dell motherboards',
      'Original Dell OEM battery and display assembly replacements',
      'Thermal Grizzly repasting for Alienware & G-series gaming laptops',
      'Zero-Password data privacy during diagnostic procedures'
    ],
    faqs: [
      {
        question: 'Is my data safe during the repair process?',
        answer: 'Yes, we prioritize customer privacy and do not access personal files unless necessary for diagnosis.'
      },
      {
        question: 'Do you use genuine replacement parts?',
        answer: 'We use quality replacement parts and OEM-grade components whenever available.'
      },
      {
        question: 'Why is my Dell laptop battery draining so fast?',
        answer: 'Battery wear, background applications, and charging issues can reduce battery life.'
      },
      {
        question: 'How much does Dell laptop repair cost?',
        answer: 'Repair costs depend on the issue and replacement parts required. A diagnosis helps determine the exact repair cost.'
      }
    ]
  },
  {
    slug: 'hp',
    name: 'HP',
    fullName: 'HP Laptop Repair Services',
    h1: 'HP Laptop Repair in Ahmedabad',
    tagline: 'HP Laptop Repair Services in Ahmedabad for Pavilion, Victus, Omen, EliteBook, and ProBook laptops. We repair charging issues, screen damage, motherboard faults, battery problems, overheating, and data recovery needs with professional diagnostics and quality parts.',
    metaTitle: 'HP Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Professional HP laptop repair in Ahmedabad. Fast screen, battery, hinge & logic board repair for Spectre, Pavilion, Envy & OMEN laptops.',
    logoImage: '/assets/brands/hp-hewlett-packard.svg',
    shortTag: 'Spectre, Pavilion, Envy & OMEN',
    supportedModels: ['HP Pavilion 14 / 15 / x360', 'HP Spectre x360 Series', 'HP Envy 13 / 15 / 16', 'HP OMEN & Victus Gaming', 'HP EliteBook & ProBook'],
    problemsTitle: 'How Can We Help Fix Your HP Laptop?',
    problemsSubtitle: 'Whether your HP laptop is not charging, running slow, overheating, or has a damaged screen, explore our repair services below for expert solutions.',
    commonProblems: [
      {
        title: 'HP Laptop Black Screen But Power Light Is On?',
        description: 'We diagnose display, RAM, motherboard, and graphics-related issues.',
        slug: 'screen-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'HP Laptop Running Very Slow?',
        description: 'Improve performance with SSD upgrades, RAM upgrades, and system optimization.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'HP Laptop Camera Not Working?',
        description: 'Webcam hardware and software troubleshooting services available.',
        slug: 'motherboard-repair',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'HP Body & Hinge Repair',
        description: 'Repair of broken hinges, body damage, and display frame issues.',
        slug: 'body-panel-repair',
        estimatedTime: '3 – 6 Hours'
      },
      {
        title: 'HP Liquid Damage Repair',
        description: 'Component-level repair after liquid exposure.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
      }
    ],
    brandHighlights: [
      'Original HP OEM display assembly & battery replacements',
      'Hinge bracket micro-welding for fragile Pavilion & Envy enclosures',
      'BIOS flash & SPI chip repair for HP boot failure codes',
      'Thermal re-pasting for HP OMEN & Victus high-performance series'
    ],
    faqs: [
      {
        question: 'How long does HP laptop repair take?',
        answer: 'Most common repairs take 2 to 4 hours, while complex motherboard repairs take 24 to 48 hours.'
      },
      {
        question: 'Do you repair all HP laptop models?',
        answer: 'Yes, we service Spectre, Envy, Pavilion, OMEN, Victus, EliteBook, and ProBook models.'
      }
    ]
  },
  {
    slug: 'lenovo',
    name: 'Lenovo',
    fullName: 'Lenovo Laptop Repair Services',
    h1: 'Lenovo Laptop Repair Services in Ahmedabad',
    tagline: 'Expert Lenovo laptop repair services in Ahmedabad for ThinkPad, IdeaPad, Legion, Yoga, and LOQ laptops. We diagnose and fix screen damage, battery drainage, motherboard faults, charging issues, hinge breakage, liquid spills, and performance problems.',
    metaTitle: 'Lenovo Laptop Repair Services in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert Lenovo laptop repair in Ahmedabad for ThinkPad, IdeaPad, Legion, Yoga & LOQ. Fast display, battery, hinge, charging & logic board fix.',
    logoImage: '/assets/brands/lenovo-2.svg',
    shortTag: 'ThinkPad, IdeaPad, Legion & Yoga',
    supportedModels: ['Lenovo ThinkPad X1 Carbon / T Series / L Series', 'Lenovo IdeaPad Slim 3 / 5 / Gaming', 'Lenovo Legion 5 / 7 / Pro', 'Lenovo Yoga 6 / 7 / 9i / Duet', 'Lenovo LOQ Series'],
    whyChooseUs: [
      { title: 'Certified Brand Technicians', desc: 'Specialized diagnosis for ThinkPad & Legion' },
      { title: 'Component-Level Repair', desc: 'BGA rework for Lenovo mainboards' },
      { title: 'Genuine Parts Only', desc: 'OEM screens, batteries, and keyboards' },
      { title: 'Same-Day Express Repairs', desc: 'Quick turnaround for screens & batteries' },
      { title: 'Transparent Cost Estimates', desc: 'Upfront pricing with zero hidden fees' },
      { title: 'Warranty Protection', desc: 'Up to 180-day warranty on replacements' },
      { title: 'Zero Password Privacy', desc: 'Diagnostic testing without user credentials' }
    ],
    problemsTitle: 'Is Your Lenovo Laptop Facing Hardware or Software Issues?',
    problemsSubtitle: 'From ThinkPad motherboard diagnostics to Legion gaming cooling tune-ups, find reliable repair solutions for your Lenovo laptop below.',
    commonProblems: [
      {
        title: 'Lenovo Laptop Not Turning On?',
        description: 'No power, no charging light, or complete shutdown issues diagnosed at component level.',
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'Lenovo Screen Flickering or Lines?',
        description: 'Cracked panels, flickering displays, or line issues replaced with original screens.',
        slug: 'screen-replacement',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Lenovo Laptop Battery Draining Fast?',
        description: 'Diagnosing battery degradation and replacing with genuine Lenovo battery units.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'Lenovo Hinge Broken or Casing Loose?',
        description: 'Fixing cracked hinges, broken brackets, and damaged palm rests securely.',
        slug: 'body-panel-repair',
        estimatedTime: '3 – 6 Hours'
      },
      {
        title: 'Lenovo Charging Port Loose or Not Working?',
        description: 'Repairing Type-C or slim-tip charging jacks with micro-soldering.',
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Lenovo Keyboard Keys Not Responding?',
        description: 'Replacing damaged, liquid-exposed, or unresponsive Lenovo keyboards.',
        slug: 'keyboard-replacement',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Lenovo Legion Overheating & FPS Drops?',
        description: 'Dust cleaning, fan replacement, and high-performance thermal paste application.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Lenovo Liquid Spill Inspection?',
        description: 'Ultrasonic cleaning and component repair after water, coffee, or tea spills.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'Lenovo RAM & SSD Upgrade?',
        description: 'Upgrading NVMe SSD storage and DDR4/DDR5 RAM for faster speeds.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 2 Hours'
      }
    ],
    brandHighlights: [
      'Lenovo ThinkPad magnesium chassis & roll-cage structural repair',
      'Legion Coldfront cooling system fan replacement & repasting',
      'Slim-tip & USB-C Power Delivery charging port micro-soldering',
      'Original Lenovo IdeaPad & Yoga 360-degree hinge rebuilds'
    ],
    faqs: [
      {
        question: 'Can you repair Lenovo ThinkPad motherboard issues?',
        answer: 'Yes, we perform chip-level micro-soldering to fix short circuits and power chip failures on ThinkPad motherboards.'
      },
      {
        question: 'Do you replace Lenovo Yoga 360-degree touchscreen displays?',
        answer: 'Yes! We replace original Lenovo Yoga digitizer displays with full touch and stylus support.'
      }
    ]
  },
  {
    slug: 'acer',
    name: 'Acer',
    fullName: 'Acer Laptop Repair Services',
    h1: 'Acer Laptop Repair Services in Ahmedabad',
    tagline: 'Expert Acer laptop repair services in Ahmedabad for Nitro 5, Predator Helios, Aspire 3/5/7, Swift, and TravelMate laptops. We diagnose and fix overheating issues, display damage, power failures, battery degradation, keyboard faults, and charging problems.',
    metaTitle: 'Acer Laptop Repair Services in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert Acer laptop repair in Ahmedabad for Nitro 5, Predator, Aspire & Swift. Overheating, screen, battery, charging port & motherboard fix.',
    logoImage: '/assets/brands/acer-2.svg',
    shortTag: 'Nitro, Predator, Aspire & Swift',
    supportedModels: ['Acer Nitro 5 / Nitro 16 / Nitro V', 'Acer Predator Helios 300 / 16 / Neo', 'Acer Aspire 3 / 5 / 7 Series', 'Acer Swift 3 / 5 / Go', 'Acer TravelMate & Spin Series'],
    whyChooseUs: [
      { title: 'Nitro & Predator Specialists', desc: 'Expert thermal and GPU diagnostics for Acer gaming series' },
      { title: 'Micro-Soldering Lab', desc: 'In-house chip-level motherboard repair' },
      { title: 'Quality OEM Parts', desc: 'High-refresh-rate displays, original batteries & fans' },
      { title: 'Fast Same-Day Turnaround', desc: 'Express repair for screens, batteries, and jacks' },
      { title: 'Transparent Quotes', desc: 'Free diagnostic estimate before repair approval' },
      { title: 'Warranty Coverage', desc: 'Official warranty on all replaced hardware parts' },
      { title: 'Data Privacy Assurance', desc: 'Zero-Password policy ensures complete data safety' }
    ],
    problemsTitle: 'Is Your Acer Laptop Experiencing Problems?',
    problemsSubtitle: 'Whether your Acer Nitro is overheating during gaming or your Aspire screen is broken, find professional repair solutions below.',
    commonProblems: [
      {
        title: 'Acer Laptop No Power / Not Turning On?',
        description: 'Diagnosing power rail failures, shorted capacitors, and BIOS corruptions.',
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'Acer Screen Replacement (FHD / 144Hz / 165Hz)?',
        description: 'Replacing broken panels with high-refresh rate gaming screens.',
        slug: 'screen-replacement',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Acer Nitro Overheating & Shutting Down?',
        description: 'Cleaning dust clogged heatsinks, thermal repasting, and fan repair.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Acer Battery Backup Low / Not Charging?',
        description: 'Replacing worn-out Acer internal batteries with brand-new units.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'Acer Charging Jack Loose / Broken Pin?',
        description: 'Replacing damaged DC jacks and USB-C charging ports.',
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Acer Keyboard Replacement?',
        description: 'Fixing missing keys, sticky buttons, or non-working RGB gaming keyboards.',
        slug: 'keyboard-replacement',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Acer Hinge & Body Frame Repair?',
        description: 'Rebuilding cracked plastic corners, broken hinges, and loose display lids.',
        slug: 'body-panel-repair',
        estimatedTime: '3 – 6 Hours'
      },
      {
        title: 'Acer Liquid Damage Restoration?',
        description: 'Cleaning corrosive liquid traces and replacing burnt motherboard components.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'Acer SSD Storage & RAM Upgrade?',
        description: 'Installing M.2 NVMe SSDs and high-speed RAM modules for lag-free performance.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 2 Hours'
      }
    ],
    brandHighlights: [
      'NitroSense cooling fan replacement & thermal pad renewal',
      'High-refresh rate (144Hz / 165Hz / 240Hz) Acer gaming screen installation',
      'DC-in jack & power socket replacement for Nitro & Predator series',
      'BIOS recovery for corrupted Acer InsydeH2O firmware'
    ],
    faqs: [
      {
        question: 'Do you repair Acer Nitro 5 overheating issues?',
        answer: 'Yes! Overheating on Acer Nitro 5 is common due to dust accumulation. We clean the dual fans and apply liquid thermal paste.'
      },
      {
        question: 'Can you fix Acer Aspire broken hinges?',
        answer: 'Yes, Acer Aspire laptops often develop loose hinges. We re-anchor the brass nuts into the palm rest for long-lasting durability.'
      }
    ]
  },
  {
    slug: 'asus',
    name: 'ASUS',
    fullName: 'ASUS Laptop Repair Services',
    h1: 'ASUS Laptop Repair Services in Ahmedabad',
    tagline: 'Expert ASUS laptop repair services in Ahmedabad for ROG, TUF Gaming, VivoBook, ZenBook, ExpertBook, and ASUS Creator Series laptops. We repair overheating issues, charging problems, motherboard faults, screen damage, battery issues, gaming performance problems, and startup failures.',
    metaTitle: 'ASUS Laptop Repair Services in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert ASUS laptop repair services in Ahmedabad for ROG, TUF Gaming, VivoBook, ZenBook, ExpertBook & Creator laptops. Overheating, screen & chip repair.',
    logoImage: '/assets/brands/asus-rog-1-1.svg',
    shortTag: 'ROG, TUF, ZenBook & VivoBook',
    supportedModels: ['ASUS ROG Strix / Zephyrus', 'ASUS TUF Gaming F15 / A15', 'ASUS ZenBook Duo / Flip', 'ASUS VivoBook Pro / S Series', 'ASUS ExpertBook & ProArt Series'],
    whyChooseUs: [
      { title: 'ASUS Gaming Laptop Specialists', desc: 'Expert technicians for ROG, TUF, ZenBook & VivoBook' },
      { title: 'Advanced Chip-Level Diagnostics', desc: 'Precision BGA & motherboard tracing' },
      { title: 'Quality Replacement Parts', desc: 'OEM grade displays, batteries & ICs' },
      { title: 'Fast Turnaround Time', desc: 'Same-day express repair available' },
      { title: 'Transparent Pricing', desc: 'Upfront estimate with no hidden charges' },
      { title: 'Warranty on Eligible Repairs', desc: 'Official warranty on replaced components' },
      { title: 'Data Privacy Protection', desc: 'Zero password / Zero OTP data security' }
    ],
    problemsTitle: 'Is Your ASUS Laptop Giving You Trouble?',
    problemsSubtitle: "Whether you're facing FPS drops, overheating, charging issues, display problems, or hardware failures, our technicians can diagnose and repair your ASUS laptop professionally.",
    commonProblems: [
      {
        title: 'ASUS Laptop Showing Black Screen?',
        description: 'We diagnose display, RAM, motherboard, and graphics-related issues.',
        slug: 'screen-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'ASUS ROG Overheating?',
        description: 'We provide complete thermal servicing and cooling system optimization.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'ASUS Laptop Keeps Restarting?',
        description: 'Unexpected restarts may indicate RAM, SSD, software, or motherboard issues.',
        slug: 'motherboard-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'ASUS Laptop Battery Not Detected?',
        description: "Whether your ASUS laptop shows battery errors, won't charge properly, or fails to detect the battery, we provide expert diagnostics and battery-related repair services.",
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'ASUS Laptop Battery Draining Fast?',
        description: 'Poor battery life can be caused by a worn-out battery, charging issues, or system-related problems. We diagnose and resolve the issue professionally.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'ASUS Laptop Freezing Frequently?',
        description: 'If your ASUS laptop becomes slow, hangs randomly, or stops responding while working, our technicians can identify the problem and help restore reliable performance.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'ASUS Laptop Fan Making Loud Noise?',
        description: 'Excessive fan noise can be caused by dust buildup, overheating, or cooling system issues. We diagnose and fix the problem professionally.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'ASUS TUF Shutting Down While Gaming?',
        description: 'If your ASUS TUF laptop powers off while playing games, gets extremely hot, or shuts down under heavy load, our technicians can identify the issue and help restore reliable performance.',
        slug: 'motherboard-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'ASUS Data Recovery',
        description: 'Professional ASUS data recovery services for deleted files, SSD failures, corrupted drives, Windows boot issues, formatted storage devices, and inaccessible data.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
      }
    ],
    brandHighlights: [
      'BGA reballing for NVIDIA RTX graphics chips on ROG & TUF series',
      'OLED and FHD/4K display replacement for ZenBook models',
      'Liquid metal thermal compound cleanup & reapplication',
      'Keyboard backlighting and ribbon connector repair'
    ],
    faqs: [
      {
        question: 'Why is my ASUS laptop fan making loud noise?',
        answer: 'Excessive fan noise is usually caused by dust buildup, overheating, or cooling system problems.'
      },
      {
        question: 'Do you repair liquid-damaged ASUS laptops?',
        answer: 'Yes, we provide professional cleaning and component-level repair for liquid-damaged ASUS laptops.'
      },
      {
        question: 'How long does ASUS laptop repair take?',
        answer: 'Most common ASUS laptop repairs are completed within the same day, while complex motherboard repairs may require additional time.'
      },
      {
        question: 'What ASUS laptop models do you repair?',
        answer: 'We repair ASUS ROG, TUF Gaming, VivoBook, ZenBook, ExpertBook, ProArt, Chromebook, and many other ASUS laptop models.'
      },
      {
        question: 'Do you provide ASUS laptop repair services in Ahmedabad?',
        answer: 'Yes, we offer professional ASUS laptop repair services in Ahmedabad for gaming laptops, business laptops, and everyday-use ASUS models.'
      }
    ]
  },
  {
    slug: 'msi',
    name: 'MSI',
    fullName: 'MSI Laptop Repair Services',
    h1: 'MSI Laptop Repair Services in Ahmedabad',
    tagline: 'Expert MSI laptop repair services in Ahmedabad for Katana, Cyborg, Raider, Stealth, Vector, Pulse, Titan, and Creator Series laptops. We diagnose and repair overheating issues, FPS drops, charging problems, motherboard faults, display damage, startup failures, and gaming performance issues.',
    metaTitle: 'MSI Laptop Repair Services in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert MSI laptop repair services in Ahmedabad for Katana, Cyborg, Raider, Stealth, Vector, Pulse, Titan & Creator laptops. Overheating, FPS drops & chip repair.',
    logoImage: '/assets/brands/msi-gaming.svg',
    shortTag: 'Katana, Raider, Stealth, Pulse & Cyborg',
    supportedModels: ['MSI Katana / Cyborg Series', 'MSI Raider GE / GP Series', 'MSI Stealth 15 / 17', 'MSI Vector / Pulse Series', 'MSI Titan & Creator Series'],
    whyChooseUs: [
      { title: 'MSI Gaming Laptop Specialists', desc: 'Expert technicians for Katana, Raider, Stealth & Cyborg' },
      { title: 'Advanced Chip-Level Diagnostics', desc: 'Precision GPU & motherboard tracing' },
      { title: 'Quality Replacement Parts', desc: 'OEM grade fans, displays & ICs' },
      { title: 'Fast Turnaround Time', desc: 'Same-day express repair available' },
      { title: 'Transparent Pricing', desc: 'Upfront estimate with no hidden charges' },
      { title: 'Warranty on Eligible Repairs', desc: 'Official warranty on replaced components' },
      { title: 'Data Privacy Protection', desc: 'Zero password / Zero OTP data security' }
    ],
    problemsTitle: 'Is Your MSI Laptop Affecting Your Gaming or Productivity?',
    problemsSubtitle: "Whether you're experiencing overheating, low FPS, charging issues, startup failures, or hardware problems, our technicians can diagnose and repair your MSI laptop professionally.",
    commonProblems: [
      {
        title: 'MSI Laptop Stuck on MSI Logo?',
        description: "If your MSI laptop gets stuck during startup and won't load Windows, we can diagnose boot, SSD, and BIOS-related issues.",
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'MSI Laptop Overheating During Gaming?',
        description: 'Excessive heat can lead to poor performance, sudden shutdowns, and long-term hardware damage. We provide complete thermal servicing.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MSI Laptop FPS Drops?',
        description: 'FPS drops and stuttering can be caused by thermal throttling, driver issues, or hardware bottlenecks.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MSI Laptop GPU Not Working?',
        description: 'Graphics-related issues can affect gaming, rendering, and display output. We diagnose GPU and motherboard-related faults.',
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'MSI Laptop Randomly Freezes?',
        description: 'Frequent freezing may indicate SSD issues, RAM faults, overheating, or software-related problems.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MSI Laptop Fan Running at Full Speed?',
        description: 'A constantly running fan may indicate cooling system issues, dust buildup, or thermal management problems.',
        slug: 'fan-repair',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'MSI Laptop Battery Not Charging?',
        description: 'We diagnose charging port, adapter, battery, and motherboard-related charging faults.',
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'MSI Laptop Showing No Boot Device Found?',
        description: 'Storage detection issues can prevent Windows from loading properly. We diagnose SSD, BIOS, and boot-related problems.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MSI Laptop Shutting Down Under Load?',
        description: 'Unexpected shutdowns during gaming, rendering, or heavy workloads may indicate overheating or power-related issues.',
        slug: 'motherboard-repair',
        estimatedTime: '2 – 4 Hours'
      }
    ],
    brandHighlights: [
      'Reinforced steel hinge mount restoration for MSI palm rests',
      'Cooler Boost fan replacement & copper thermal pipe repair',
      'MOSFET and VRM power rail micro-soldering on MSI mainboards',
      'Per-key RGB keyboard and matrix display cable replacement'
    ],
    faqs: [
      {
        question: 'Why is my MSI laptop overheating?',
        answer: 'Dust buildup, worn thermal paste, blocked airflow, or cooling system issues are common causes of overheating.'
      },
      {
        question: 'Do you repair MSI gaming laptops?',
        answer: 'Yes, we repair MSI Katana, Cyborg, Raider, Stealth, Vector, Pulse, Titan, Creator, and other MSI laptop models.'
      },
      {
        question: 'How long does MSI laptop repair take?',
        answer: 'Most common MSI laptop repairs are completed within the same day, while complex motherboard repairs may require additional time.'
      },
      {
        question: 'Can you fix FPS drop issues on MSI laptops?',
        answer: 'Yes, we diagnose and resolve FPS drops caused by overheating, thermal throttling, driver issues, and hardware bottlenecks.'
      },
      {
        question: 'Do you provide MSI laptop repair services in Ahmedabad?',
        answer: 'Yes, we offer professional MSI laptop repair services in Ahmedabad for gaming, creator, and business MSI laptops.'
      }
    ]
  },
  {
    slug: 'surface',
    name: 'Microsoft Surface',
    fullName: 'Microsoft Surface Repair Services',
    h1: 'Microsoft Surface Repair Services in Ahmedabad',
    tagline: 'Professional Microsoft Surface repair services in Ahmedabad for Surface Pro, Surface Laptop, Surface Book, Surface Go, and Surface Studio devices. We repair touchscreen issues, charging problems, battery failures, display damage, motherboard faults, startup issues, and SSD-related problems.',
    metaTitle: 'Microsoft Surface Repair Services in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Professional Microsoft Surface repair in Ahmedabad for Surface Pro, Surface Laptop, Book & Go. Touchscreen, battery, charging & logic board support.',
    logoImage: '/assets/brands/microsoft-centered.svg',
    shortTag: 'Surface Pro, Laptop, Book & Go',
    supportedModels: ['Surface Pro Series (Pro 7 / 8 / 9 / X)', 'Surface Laptop Series (3 / 4 / 5 / Go)', 'Surface Book Series (Book 2 / 3)', 'Surface Laptop Studio & Surface Go'],
    whyChooseUs: [
      { title: 'Microsoft Surface Repair Specialists', desc: 'Expert technicians for Surface Pro, Laptop & Book' },
      { title: 'Advanced Chip-Level Diagnostics', desc: 'Precision logic board & charging trace repair' },
      { title: 'Quality Replacement Parts', desc: 'OEM grade displays, batteries & digitizers' },
      { title: 'Fast Turnaround Time', desc: 'Same-day express repair available' },
      { title: 'Transparent Pricing', desc: 'Upfront estimate with zero hidden charges' },
      { title: 'Warranty on Eligible Repairs', desc: 'Official warranty on replaced components' },
      { title: 'Data Privacy Protection', desc: 'Zero password / Zero OTP data security' }
    ],
    problemsTitle: 'Is Your Microsoft Surface Not Working Properly?',
    problemsSubtitle: "Whether you're facing touchscreen issues, battery problems, charging faults, startup failures, or display damage, our technicians can diagnose and repair your Microsoft Surface device professionally.",
    commonProblems: [
      {
        title: 'Microsoft Surface Not Charging?',
        description: 'We diagnose charging port, charger, battery, and motherboard-related charging issues.',
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Microsoft Surface Touchscreen Not Working?',
        description: 'Touchscreen issues can be caused by display damage, driver problems, or hardware faults.',
        slug: 'screen-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Microsoft Surface Battery Swollen?',
        description: 'A swollen battery can damage the screen and internal components. We provide safe battery replacement services.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'Microsoft Surface Stuck on Logo?',
        description: 'Startup issues may be caused by SSD failure, Windows corruption, or motherboard-related faults.',
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'Microsoft Surface Screen Flickering?',
        description: 'We diagnose display, graphics, and screen-related issues causing flickering or unstable visuals.',
        slug: 'screen-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Microsoft Surface Type Cover Not Working?',
        description: 'Keyboard and Type Cover connectivity issues diagnosed and repaired professionally.',
        slug: 'keyboard-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Microsoft Surface SSD Upgrade?',
        description: 'Upgrade your Surface device with a faster SSD for improved speed and performance.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'Microsoft Surface Overheating?',
        description: 'Excessive heat can affect performance and battery life. We provide complete thermal diagnostics and servicing.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Microsoft Surface Data Recovery',
        description: 'Recover important files from failed SSDs, non-booting devices, corrupted Windows installations, and damaged Surface devices.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
      }
    ],
    brandHighlights: [
      'ESD-safe touchscreen digitizer glass separation and assembly',
      'Battery pouch cell replacement without display damage',
      'Surface Connect magnetic charging port trace repair',
      'Logic board power management IC micro-soldering'
    ],
    faqs: [
      {
        question: 'Do you repair Microsoft Surface Pro, Surface Laptop, and Surface Book devices?',
        answer: 'Yes, we repair Surface Pro, Surface Laptop, Surface Book, Surface Go, and other Microsoft Surface models.'
      },
      {
        question: 'Can a swollen battery damage my Microsoft Surface?',
        answer: 'Yes, a swollen battery can put pressure on the display and internal components. We recommend replacing it as soon as possible.'
      },
      {
        question: 'Why is my Microsoft Surface touchscreen not responding?',
        answer: 'Touchscreen issues can be caused by display damage, software conflicts, driver issues, or hardware faults.'
      },
      {
        question: 'Can you recover data from a non-working Surface device?',
        answer: 'Yes, we provide data recovery services for many Surface devices with SSD, boot, or motherboard-related failures.'
      },
      {
        question: 'Why is my Microsoft Surface stuck on the Windows logo?',
        answer: 'This can be caused by SSD failure, Windows corruption, BIOS issues, or motherboard faults.'
      }
    ]
  },
  {
    slug: 'macbook',
    name: 'Apple MacBook',
    fullName: 'Apple MacBook Repair Services',
    h1: 'Apple MacBook Repair Services in Ahmedabad',
    tagline: 'At Robuzta TechLabs, we provide professional MacBook diagnostics and repair for supported MacBook Air and MacBook Pro models.',
    metaTitle: 'Apple MacBook Repair Services in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Professional Apple MacBook repair in Ahmedabad for MacBook Air & Pro (M1, M2, M3, Intel). Logic board chip repair, Retina display, battery & liquid damage.',
    logoImage: '/assets/brands/apple-13.svg',
    shortTag: 'MacBook Air & Pro (M1, M2, M3 & Intel)',
    supportedModels: ['MacBook Air M1 / M2 / M3 (13" & 15")', 'MacBook Pro 13" / 14" / 16" (M1/M2/M3 Pro & Max)', 'Intel MacBook Air & Pro', 'Retina MacBook & Apple Silicon Models'],
    whyChooseUs: [
      { title: 'Screen & Display Repair', desc: 'Professional display diagnosis and screen replacement' },
      { title: 'Battery Replacement', desc: 'Diagnose battery condition and genuine replacement' },
      { title: 'Charging Port Repair', desc: 'Fix USB-C/MagSafe port, charger, or charging circuit issues' },
      { title: 'Keyboard & Trackpad Repair', desc: 'Repair individual keys, full keyboard, or trackpad faults' },
      { title: 'Liquid Damage Diagnosis', desc: 'Assess and repair liquid-affected internal components' },
      { title: 'Logic Board Repair', desc: 'Component-level logic board diagnostics and micro-soldering' },
      { title: 'SSD & Storage Solutions', desc: 'Storage upgrade, diagnosis, and system optimization' },
      { title: 'macOS Troubleshooting', desc: 'Fix slow startup, application freezes, and macOS errors' },
      { title: 'MacBook Cleaning & Thermal Service', desc: 'Thermal servicing and fan cleaning for overheating' },
      { title: 'Data Recovery', desc: 'Recover data from dead or liquid-damaged MacBooks' }
    ],
    problemsTitle: 'Common Problems & Solutions',
    problemsSubtitle: 'At Robuzta TechLabs, we provide professional MacBook diagnostics and repair for supported MacBook Air and MacBook Pro models.',
    commonProblems: [
      {
        title: 'MacBook Battery Draining Fast?',
        description: 'Aged batteries, background processes, high brightness, and battery health issues can reduce backup. We can diagnose battery condition and provide replacement for supported MacBook models.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'MacBook Not Charging?',
        description: "If your MacBook isn't charging, charges intermittently, or doesn't recognize the charger, the issue may involve the USB-C/MagSafe port, charger, battery, or charging circuit.",
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'MacBook Display Flickering or Showing Lines?',
        description: 'Flickering, black screen, lines, or unusual display behaviour can be related to the display panel, cable, or motherboard. Proper diagnosis is required before replacement.',
        slug: 'screen-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MacBook Getting Too Hot?',
        description: 'High temperatures can be caused by dust, heavy workloads, background applications, or cooling-system issues. Cleaning and thermal servicing may help when cooling is the problem.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MacBook Not Turning On?',
        description: 'If your MacBook shows no signs of power, we check the battery, charging section, power circuit, logic board, and other hardware components.',
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'MacBook Running Very Slow?',
        description: 'Slow startup, application freezes, and system lag can be related to storage, macOS issues, insufficient resources, or hardware problems. We diagnose the system before recommending an upgrade or repair.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MacBook Liquid Damage?',
        description: 'Liquid damage can affect the keyboard, battery, charging circuit, display, and logic board. If liquid enters your MacBook, avoid repeatedly powering it on and get it inspected.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'MacBook Keyboard or Trackpad Not Working?',
        description: 'Individual keys, the complete keyboard, or trackpad can stop responding due to liquid damage, physical damage, or internal hardware faults.',
        slug: 'keyboard-replacement',
        estimatedTime: '2 – 4 Hours'
      }
    ],
    brandHighlights: [
      'Component-level Apple Silicon & Intel logic board micro-soldering',
      'Retina LCD panel and flex cable (Flexgate) repair',
      'Battery replacement with zero battery warning messages',
      'Ultrasonic liquid damage recovery under 45x optical magnification'
    ],
    faqs: [
      {
        question: 'Can you repair MacBook logic board problems?',
        answer: 'Yes. We diagnose supported MacBook logic board faults and provide component-level repair where technically possible.'
      },
      {
        question: 'Why is my MacBook not charging?',
        answer: 'The charger, charging port, battery, power circuit, or logic board may be responsible. We diagnose the complete charging system.'
      },
      {
        question: 'Can you repair a liquid-damaged MacBook?',
        answer: 'Yes, we inspect liquid-damaged MacBooks and assess the affected components before recommending repair.'
      },
      {
        question: 'Can you recover data from a dead MacBook?',
        answer: 'Data recovery may be possible depending on the condition of the MacBook and its internal storage.'
      },
      {
        question: 'Do you repair both MacBook Air and MacBook Pro?',
        answer: 'Yes, we service supported MacBook Air and MacBook Pro models.'
      }
    ]
  }
];

export const LAPTOP_PROBLEMS = [
  {
    slug: 'screen-replacement',
    name: 'Screen & Display Repair',
    h1: 'Laptop Screen Replacement in Ahmedabad',
    tagline: 'Broken, flickering, black display, or lines on your screen? We replace screens with original quality panels.',
    metaTitle: 'Laptop Screen Replacement in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Original laptop screen replacement in Ahmedabad. Fast display repair for Dell, HP, Lenovo, ASUS, Acer, MSI & MacBook with warranty.',
    commonSymptoms: [
      'Cracked or shattered glass panel',
      'Horizontal or vertical lines across display',
      'Flickering screen or blank black display',
      'Bleeding ink or discolored spots'
    ],
    repairIncludes: [
      'High-grade FHD, 2K, 4K, or OLED display panel replacement',
      'Display ribbon cable inspection and connector cleaning',
      'Color calibration and brightness testing',
      '90 to 180-day warranty on replaced display panels'
    ],
    faqs: [
      {
        question: 'How long does laptop screen replacement take?',
        answer: 'Most standard laptop screen replacements are completed within 2 to 4 hours.'
      },
      {
        question: 'Will I get the same resolution screen?',
        answer: 'Yes, we replace your display with exact matching resolution (HD, FHD, 2K, or 4K).'
      }
    ]
  },
  {
    slug: 'battery-replacement',
    name: 'Battery Replacement',
    h1: 'Laptop Battery Replacement in Ahmedabad',
    tagline: 'Battery draining fast, not charging, or showing battery warning? Get genuine battery replacement with warranty.',
    metaTitle: 'Laptop Battery Replacement in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Original laptop battery replacement in Ahmedabad for Dell, HP, Lenovo, ASUS, Acer & MacBook. Long backup & warranty.',
    commonSymptoms: [
      'Laptop shuts down immediately when unplugged',
      'Battery health alert or Service Battery warning',
      'Swollen battery lifting touchpad or keyboard',
      'Laptop charging gets stuck at specific percentage'
    ],
    repairIncludes: [
      'Brand-grade OEM battery replacement',
      'Power circuit and charging IC health check',
      'Battery calibration cycle testing',
      'Safe disposal of degraded lithium-ion cells'
    ],
    faqs: [
      {
        question: 'Do you provide warranty on laptop batteries?',
        answer: 'Yes, all our laptop replacement batteries come with 6 to 12 months replacement warranty.'
      }
    ]
  },
  {
    slug: 'keyboard-replacement',
    name: 'Keyboard & Trackpad Repair',
    h1: 'Laptop Keyboard & Trackpad Repair in Ahmedabad',
    tagline: 'Keys not typing, trackpad non-responsive, or liquid spilled on keyboard? Fast keyboard replacement available.',
    metaTitle: 'Laptop Keyboard Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Laptop keyboard & trackpad replacement in Ahmedabad. Backlit, gaming & standard keyboards for all brands.',
    commonSymptoms: [
      'Specific keys non-functional or auto-typing',
      'Trackpad cursor jumping or click failure',
      'Sticky keys after liquid exposure',
      'RGB or LED keyboard backlighting failure'
    ],
    repairIncludes: [
      'Original backlit and non-backlit keyboard installation',
      'Precision trackpad flex cable replacement',
      'Palm rest frame cleaning and alignment',
      'Full key-by-key diagnostic software check'
    ],
    faqs: [
      {
        question: 'Can single keys be repaired?',
        answer: 'If key caps or hinges are loose, single keys can be re-seated; otherwise full keyboard replacement is recommended.'
      }
    ]
  },
  {
    slug: 'motherboard-repair',
    name: 'Motherboard Chip-Level Repair',
    h1: 'Laptop Motherboard Repair in Ahmedabad',
    tagline: 'Laptop not turning on, short circuit, or BIOS lock? Advanced BGA micro-soldering motherboard repair lab.',
    metaTitle: 'Laptop Motherboard Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Chip-level laptop motherboard repair in Ahmedabad. Micro-soldering, power IC replacement, short circuit fix & BGA rework.',
    commonSymptoms: [
      'Laptop completely dead with no power LED',
      'Laptop turns on for a few seconds then turns off',
      'Blue Screen of Death (BSOD) or constant crashing',
      'BIOS lock, password prompt, or EC chip corruption'
    ],
    repairIncludes: [
      'Stereo microscope component-level circuit tracing',
      'Power IC, MOSFET, and capacitor replacement',
      'BGA GPU/CPU reballing and reflowing',
      'Thermal imaging hot-spot diagnostics'
    ],
    faqs: [
      {
        question: 'Is motherboard repair cheaper than replacing it?',
        answer: 'Yes! Micro-soldering component repair saves 60% to 70% cost compared to a new motherboard.'
      }
    ]
  },
  {
    slug: 'charging-port-repair',
    name: 'Charging Port & Jack Repair',
    h1: 'Laptop Charging Port Repair in Ahmedabad',
    tagline: 'Loose charger pin, USB-C port failure, or MagSafe issue? Fast DC jack soldering and repair.',
    metaTitle: 'Laptop Charging Port Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Laptop charging port & DC jack repair in Ahmedabad. USB-C PD, MagSafe & DC socket soldering for all brands.',
    commonSymptoms: [
      'Charger cable needs to be held at specific angle to charge',
      'Sparking or burning smell near power port',
      'USB-C charger connection repeatedly disconnects',
      'Broken center pin inside laptop charging socket'
    ],
    repairIncludes: [
      'Direct-board DC jack desoldering and replacement',
      'USB-C Power Delivery controller IC micro-soldering',
      'Charging circuit voltage and current testing',
      'Reinforced mechanical jack mounting'
    ],
    faqs: [
      {
        question: 'How long does charging jack repair take?',
        answer: 'Standard DC jack and USB-C port repairs are completed in 2 to 4 hours.'
      }
    ]
  },
  {
    slug: 'body-panel-repair',
    name: 'Hinge & Body Panel Repair',
    h1: 'Laptop Hinge & Body Frame Repair in Ahmedabad',
    tagline: 'Broken hinges, cracked plastic casing, or screen detaching? Heavy-duty hinge rebuilding & fabrication.',
    metaTitle: 'Laptop Hinge Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Laptop hinge repair & body panel fabrication in Ahmedabad. Fix broken display hinges & cracked laptop casing.',
    commonSymptoms: [
      'Cracking sound when opening or closing laptop lid',
      'Display panel detaching from bottom base panel',
      'Broken corner plastic screw pillars',
      'Stiff hinges exerting excess pressure on glass'
    ],
    repairIncludes: [
      'Brass nut re-anchoring into palm rest housing',
      'High-tensile epoxy structural bonding',
      'Hinge tension adjustment for smooth opening',
      'Original top lid / base panel replacements'
    ],
    faqs: [
      {
        question: 'Will hinge repair last long?',
        answer: 'Yes, our brass-anchor re-bonding process makes the hinge joint stronger than original factory plastic.'
      }
    ]
  },
  {
    slug: 'fan-repair',
    name: 'Heating & Fan Thermal Service',
    h1: 'Laptop Overheating & Fan Service in Ahmedabad',
    tagline: 'Laptop getting hot, fan loud, or thermal throttling? Deep cleaning and liquid thermal paste service.',
    metaTitle: 'Laptop Overheating Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Laptop fan cleaning & thermal paste service in Ahmedabad. Reduce CPU/GPU heat, fix fan noise & thermal throttling.',
    commonSymptoms: [
      'Laptop bottom shell gets uncomfortably hot',
      'Fan spinning at maximum speed making grinding noise',
      'Laptop shuts down automatically while gaming or editing',
      'Significant drop in performance and lagging'
    ],
    repairIncludes: [
      'Complete dust blowout of heatsink fins and fan blades',
      'Thermal Grizzly / Noctua high-performance paste application',
      'Replacing dried VRM thermal pads',
      'Fan bearing lubrication or new fan replacement'
    ],
    faqs: [
      {
        question: 'How often should laptop thermal servicing be done?',
        answer: 'We recommend thermal servicing every 12 to 18 months to prevent hardware heat damage.'
      }
    ]
  },
  {
    slug: 'liquid-damage-repair',
    name: 'Liquid Damage Repair',
    h1: 'Laptop Liquid Damage Repair in Ahmedabad',
    tagline: 'Water, tea, or coffee spilled on laptop? Emergency chemical cleaning & chip-level restoration.',
    metaTitle: 'Laptop Liquid Damage Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Emergency laptop liquid damage repair in Ahmedabad. Ultrasonic motherboard cleaning & corrosion removal.',
    commonSymptoms: [
      'Liquid spilled on keyboard or air vents',
      'Laptop abruptly turned off and won\'t turn on',
      'Keyboard or trackpad stopped working after spill',
      'White/green corrosion marks visible on mainboard'
    ],
    repairIncludes: [
      'Immediate battery disconnection and power isolation',
      'Ultrasonic bath mainboard cleaning for corrosion removal',
      'Micro-soldering damaged logic board traces and ICs',
      'Component-level short circuit diagnostic testing'
    ],
    faqs: [
      {
        question: 'What should I do if liquid spills on my laptop?',
        answer: 'Turn off immediately, unplug charger, do NOT turn it back on, and bring it to our lab right away.'
      }
    ]
  },
  {
    slug: 'ram-ssd-upgrade',
    name: 'RAM & SSD Upgrade Support',
    h1: 'Laptop RAM & SSD Upgrade in Ahmedabad',
    tagline: 'Laptop running slow or disk 100% full? Upgrade to high-speed NVMe SSD and DDR4/DDR5 RAM.',
    metaTitle: 'Laptop RAM & SSD Upgrade in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Laptop RAM & NVMe SSD upgrade service in Ahmedabad. Make old laptops up to 5x faster with same-day installation.',
    commonSymptoms: [
      'Laptop takes 5+ minutes to boot into Windows',
      'Applications freeze or show "Not Responding"',
      'High disk usage (100%) in Task Manager',
      'Insufficient storage space for new software'
    ],
    repairIncludes: [
      'High-speed Gen3/Gen4 M.2 NVMe or SATA SSD installation',
      'DDR4 / DDR5 RAM capacity expansion',
      'Original OS and data cloning from old drive',
      'System startup and boot time optimization'
    ],
    faqs: [
      {
        question: 'Will upgrading to SSD delete my files?',
        answer: 'No! We clone your existing Windows, files, and programs directly onto the new SSD.'
      }
    ]
  }
];

export function getBySlug(slug) {
  return LAPTOP_BRANDS.find((b) => b.slug === slug);
}

export function getAllSlugs() {
  return LAPTOP_BRANDS.map((b) => b.slug);
}

export function getProblemBySlug(slug) {
  return LAPTOP_PROBLEMS.find((p) => p.slug === slug);
}

export function getAllProblemSlugs() {
  return LAPTOP_PROBLEMS.map((p) => p.slug);
}
