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
      },
      {
        title: 'HP Laptop USB Ports Not Working?',
        description: 'Whether your USB devices are not being detected or connections keep dropping, we can diagnose and repair USB port and hardware-related issues quickly.',
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'HP Laptop Getting Hot While Charging?',
        description: 'Overheating during charging can affect battery life and overall performance. We identify and fix battery, charging, and cooling-related issues to keep your HP laptop running safely.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'HP Laptop Fan Making Loud Noise?',
        description: 'Excessive fan noise can be caused by dust buildup, overheating, or a faulty cooling fan. We diagnose and resolve cooling system issues professionally.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'HP Laptop Keeps Restarting?',
        description: 'If your HP laptop restarts on its own while working, gaming, or starting up, we can identify the underlying issue and provide the right repair solution.',
        slug: 'motherboard-repair',
        estimatedTime: '2 – 4 Hours'
      }
    ],
    brandHighlights: [
      'Precision hinge and body panel reconstruction for HP x360 2-in-1s',
      'Logic board power rail short-circuit resolution',
      'HP OMEN thermal fan replacement & heatsink restoration',
      'Genuine HP battery calibration and installation'
    ],
    faqs: [
      {
        question: 'How long does an HP laptop repair take?',
        answer: 'Most common repairs are completed within the same day, while complex motherboard repairs may require additional time.'
      },
      {
        question: 'Do you repair HP gaming laptops?',
        answer: 'Yes, we repair HP Victus, HP Omen, and other HP gaming laptop models.'
      },
      {
        question: 'Can you recover data from a dead HP laptop?',
        answer: 'In many cases, we can recover important files from damaged, non-booting, or failed storage devices.'
      },
      {
        question: 'Why is my HP laptop running slow?',
        answer: 'Slow performance can be caused by an aging hard drive, low RAM, overheating, or software-related issues.'
      },
      {
        question: 'What HP laptop models do you repair?',
        answer: 'We repair HP Pavilion, Victus, Omen, EliteBook, ProBook, Spectre, Envy, ZBook, and many other HP laptop models.'
      }
    ]
  },
  {
    slug: 'acer',
    name: 'Acer',
    fullName: 'Acer Laptop Repair Services',
    h1: 'Acer Laptop Repair Services in Ahmedabad',
    tagline: 'Expert Acer Laptop Repair Services in Ahmedabad for Aspire, Nitro, Predator, Swift, and TravelMate laptops. We fix charging issues, screen problems, motherboard faults, overheating, gaming performance issues, battery failures, and startup errors with professional diagnostics and quality replacement parts.',
    metaTitle: 'Acer Laptop Repair in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Expert Acer laptop repair in Ahmedabad for Nitro 5, Predator, Swift & Aspire models. Display, charging port, thermal & logic board support.',
    logoImage: '/assets/brands/acer-2011.svg',
    shortTag: 'Nitro, Predator, Swift & Aspire',
    supportedModels: ['Acer Nitro 5 / Nitro 16', 'Acer Predator Helios 300 / 16', 'Acer Swift 3 / Swift 5 / Go', 'Acer Aspire 3 / 5 / 7', 'Acer Spin Convertible Series'],
    whyChooseUs: [
      { title: 'Experienced Acer Repair Specialists', desc: 'Expert technicians for Aspire, Nitro & Predator' },
      { title: 'Advanced Chip-Level Diagnostics', desc: 'Precision BGA & motherboard tracing' },
      { title: 'Quality Replacement Parts', desc: 'OEM grade displays, batteries & ICs' },
      { title: 'Fast Turnaround Time', desc: 'Same-day express turnaround available' },
      { title: 'Transparent Pricing', desc: 'Upfront diagnostic quote with zero hidden fees' }
    ],
    problemsSubtitle: 'From unexpected shutdowns and noisy fans to display issues and charging problems, we provide professional repair solutions for all Acer laptop models.',
    commonProblems: [
      {
        title: 'Acer Laptop Not Charging?',
        description: 'We diagnose and repair charging port, battery, adapter, and motherboard-related charging issues.',
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Acer Laptop Screen Flickering?',
        description: 'We diagnose and repair display issues caused by screen, cable, or graphics-related faults.',
        slug: 'screen-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Acer Laptop RAM Upgrade',
        description: "Increase your Acer laptop's speed and efficiency with professional RAM upgrade services for Aspire, Nitro, Predator, Swift, and TravelMate models.",
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'Acer Laptop Blue Screen Error?',
        description: 'Blue screen crashes can be caused by hardware faults, driver conflicts, or system errors. We diagnose and fix the issue professionally.',
        slug: 'motherboard-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Acer Nitro Laptop FPS Drops?',
        description: 'FPS drops during gaming can be caused by overheating, driver issues, or performance bottlenecks. We diagnose and optimize your Acer Nitro laptop for better gaming performance.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Acer Gaming Laptop Random Crashes?',
        description: 'If your Acer gaming laptop suddenly freezes, crashes, or closes games without warning, we can diagnose the issue and help restore smooth, stable performance.',
        slug: 'motherboard-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'Acer Motherboard Repair',
        description: 'From dead laptops and charging issues to liquid damage and startup failures, our experts provide reliable chip-level motherboard repair services for all Acer laptop models.',
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'Acer Battery Replacement',
        description: 'We replace swollen, damaged, fast-draining, and non-charging Acer laptop batteries with quality replacement options.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'Acer Laptop Showing No Boot Device Found?',
        description: 'If your Acer laptop cannot detect the SSD or fails to load Windows, we provide expert diagnostics and repair solutions to get your device running again.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'Acer Body & Hinge Repair',
        description: 'Acer laptops with broken hinges, cracked body parts, damaged display covers, loose hinges, and structural damage to restore proper functionality.',
        slug: 'body-panel-repair',
        estimatedTime: '3 – 6 Hours'
      }
    ],
    brandHighlights: [
      'Acer Nitro & Predator dual-fan cooling system repair',
      'DC power jack soldering and charging IC replacement',
      'High-refresh rate 144Hz / 165Hz IPS screen replacements',
      'RAM and M.2 NVMe expansion with speed verification'
    ],
    faqs: [
      {
        question: 'Do you repair Acer motherboard issues?',
        answer: 'Yes, we provide advanced chip-level motherboard diagnostics and repair services for Acer laptops.'
      },
      {
        question: 'Do you repair Acer Nitro and Predator gaming laptops?',
        answer: 'Yes, we repair Acer Nitro, Predator, Aspire, Swift, and other Acer laptop models.'
      },
      {
        question: 'Is my data safe during the repair process?',
        answer: 'Yes, customer privacy and data security are always our priority during repairs.'
      },
      {
        question: 'Can you recover data from a dead Acer laptop?',
        answer: 'In many cases, we can recover important files from damaged, non-booting, or failed storage devices.'
      },
      {
        question: 'Why is my Acer laptop overheating?',
        answer: 'Dust buildup, blocked airflow, worn thermal paste, or cooling system issues can cause overheating. We provide complete thermal servicing.'
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
    tagline: 'Professional Apple MacBook repair services in Ahmedabad for MacBook Air, MacBook Pro, M1, M2, M3, Intel MacBook, Retina MacBook, and Apple Silicon devices. We repair display issues, battery problems, liquid damage, logic board faults, charging issues, startup failures, and macOS-related problems.',
    metaTitle: 'Apple MacBook Repair Services in Ahmedabad | Robuzta Techlabs',
    metaDescription: 'Professional Apple MacBook repair in Ahmedabad for MacBook Air & Pro (M1, M2, M3, Intel). Logic board chip repair, Retina display, battery & liquid damage.',
    logoImage: '/assets/brands/apple-13.svg',
    shortTag: 'MacBook Air & Pro (M1, M2, M3 & Intel)',
    supportedModels: ['MacBook Air M1 / M2 / M3 (13" & 15")', 'MacBook Pro 13" / 14" / 16" (M1/M2/M3 Pro & Max)', 'Intel MacBook Air & Pro', 'Retina MacBook & Apple Silicon Models'],
    whyChooseUs: [
      { title: 'Apple MacBook Repair Specialists', desc: 'Expert technicians for Air, Pro, M1, M2, M3 & Intel' },
      { title: 'Advanced Logic Board Repair', desc: 'Precision BGA & USB-C CD3215 chip tracing' },
      { title: 'Quality Replacement Parts', desc: 'Genuine Retina displays, batteries & flex cables' },
      { title: 'Fast Turnaround Time', desc: 'Same-day express repair available' },
      { title: 'Transparent Pricing', desc: 'Upfront estimate with zero hidden charges' },
      { title: 'Warranty on Eligible Repairs', desc: 'Official warranty on replaced components' },
      { title: 'Data Privacy Protection', desc: 'Zero password / Zero OTP data security' }
    ],
    problemsTitle: 'Is Your MacBook Not Performing Like It Should?',
    problemsSubtitle: 'From liquid damage and battery issues to display faults and logic board failures, our technicians provide professional repair solutions for Apple MacBook devices.',
    commonProblems: [
      {
        title: 'MacBook Not Charging?',
        description: 'We diagnose charging port, battery, charger, USB-C port, and logic board-related charging issues.',
        slug: 'charging-port-repair',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'MacBook Battery Draining Fast?',
        description: 'Poor battery backup can be caused by battery wear, background processes, or charging-related problems.',
        slug: 'battery-replacement',
        estimatedTime: '1 – 2 Hours'
      },
      {
        title: 'MacBook Screen Flickering?',
        description: 'Display flickering may indicate screen, display cable, graphics, or logic board-related issues.',
        slug: 'screen-replacement',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MacBook Stuck on Apple Logo?',
        description: 'Startup issues can be caused by macOS corruption, SSD failure, or logic board faults.',
        slug: 'motherboard-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'MacBook Showing Folder With Question Mark?',
        description: 'This usually indicates SSD detection issues or storage-related failures that require professional diagnosis.',
        slug: 'ram-ssd-upgrade',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MacBook Liquid Damage?',
        description: 'Liquid spills can damage internal components and logic boards. We provide professional cleaning and repair services.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
      },
      {
        title: 'MacBook Overheating?',
        description: 'Excessive heat can reduce performance and affect battery life. We diagnose and resolve cooling-related issues.',
        slug: 'fan-repair',
        estimatedTime: '1 – 3 Hours'
      },
      {
        title: 'MacBook Keyboard or Trackpad Not Working?',
        description: 'We diagnose and repair keyboard, trackpad, flex cable, and connectivity-related issues.',
        slug: 'keyboard-replacement',
        estimatedTime: '2 – 4 Hours'
      },
      {
        title: 'MacBook Data Recovery',
        description: 'Professional data recovery services for failed SSDs, damaged storage, liquid-damaged devices, and non-booting MacBooks.',
        slug: 'liquid-damage-repair',
        estimatedTime: '24 – 48 Hours'
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
        question: 'Do you repair MacBook Air and MacBook Pro models?',
        answer: 'Yes, we repair MacBook Air, MacBook Pro, Intel MacBooks, and Apple Silicon models including M1, M2, and M3 devices.'
      },
      {
        question: 'Can you repair MacBook liquid damage?',
        answer: 'Yes, we provide professional liquid damage cleaning and logic board repair services.'
      },
      {
        question: 'Why is my MacBook stuck on the Apple logo?',
        answer: 'This can be caused by macOS corruption, SSD issues, startup errors, or logic board-related faults.'
      },
      {
        question: 'Can you replace a MacBook battery?',
        answer: 'Yes, we provide battery replacement services for MacBook Air and MacBook Pro models.'
      },
      {
        question: 'Why is my MacBook overheating?',
        answer: 'Dust buildup, cooling system issues, software processes, or hardware faults can cause overheating.'
      },
      {
        question: 'Can you recover data from a dead MacBook?',
        answer: 'Yes, we provide professional data recovery services for many non-booting and damaged MacBooks.'
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
