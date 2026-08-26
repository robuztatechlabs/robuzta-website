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
    tagline: 'Professional iPhone repair in Ahmedabad for cracked screens, battery problems, charging issues, Face ID faults, camera problems, back glass damage, water damage, and motherboard issues. We repair iPhone 11, 12, 13, 14, 15, 16 and supported Pro and Pro Max models.',
    metaTitle: 'iPhone Repair in Ahmedabad | Screen, Battery & Logic Board | Robuzta',
    metaDescription: 'Expert iPhone repair in Ahmedabad. Certified screen replacement, battery swap, water damage & logic board repair for iPhone 11 to 16 Pro Max.',
    logoImage: '/assets/brands/apple-13.svg',
    shortTag: 'iPhone 11, 12, 13, 14, 15 & 16 Series, including Pro and Pro Max models.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'iPhone Repair Specialists',
      'Advanced Board-Level Diagnostics',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Fast Turnaround on Common Repairs',
      'Transparent Repair Estimates',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR IPHONE',
    problemsTitle: "What's Wrong With Your iPhone?",
    problemsDescription: 'From a broken display and weak battery to Face ID problems and charging failures, we diagnose the actual cause of your iPhone problem before recommending a repair.',
    commonProblems: [
      {
        title: '1. iPhone Screen Broken or Touch Not Working?',
        description: 'Cracked glass, black screen, touch issues, display lines, or flickering? We diagnose the display and provide screen replacement for supported iPhone models.',
        slug: 'screen-replacement'
      },
      {
        title: '2. iPhone Battery Draining Fast?',
        description: 'If your iPhone needs charging frequently, shuts down unexpectedly, or shows poor battery health, we test the battery and recommend the right solution.',
        slug: 'battery-replacement'
      },
      {
        title: '3. iPhone Not Charging?',
        description: 'Slow charging, intermittent charging, or no charging at all can be caused by the charging port, cable connection, battery, or board-level fault.',
        slug: 'charging-port-repair'
      },
      {
        title: '4. iPhone Face ID Not Working?',
        description: 'Face ID failure can occur after screen damage, drops, moisture exposure, or component-level faults. We diagnose the affected hardware before repair.',
        slug: 'motherboard-repair'
      },
      {
        title: '5. iPhone Camera Not Working?',
        description: 'If the rear or front camera is black, blurry, shaking, or not opening, we diagnose the camera module and related hardware.',
        slug: 'motherboard-repair'
      },
      {
        title: '6. iPhone Stuck on Apple Logo?',
        description: 'If your iPhone keeps showing the Apple logo or repeatedly restarts, the issue may be related to iOS, storage, or hardware faults.',
        slug: 'motherboard-repair'
      },
      {
        title: '7. iPhone Showing "iPhone Unavailable"?',
        description: 'If your iPhone is locked or showing an unavailable message, we can explain the available recovery options without compromising your personal data.',
        slug: 'motherboard-repair'
      },
      {
        title: '8. iPhone Back Glass Broken?',
        description: 'Cracked back glass can affect the appearance and structural protection of your iPhone. We provide back glass repair options for supported models.',
        slug: 'screen-replacement'
      },
      {
        title: '9. iPhone Water Damage?',
        description: 'If your iPhone has been exposed to water or liquid and stopped working, we inspect the affected components and provide board-level repair where possible.',
        slug: 'dead-phone-repair'
      },
      {
        title: '10. iPhone Motherboard Repair?',
        description: 'No power, short circuit, charging failure, network issues, or other board-level faults can require component-level diagnosis and repair.',
        slug: 'motherboard-repair'
      }
    ],
    supportedModelsTitle: 'iPhone Models We Repair',
    supportedModels: [
      'iPhone 11 Series',
      'iPhone 12 Series',
      'iPhone 13 Series',
      'iPhone 14 Series',
      'iPhone 15 Series',
      'iPhone 16 Series',
      'iPhone Pro Models',
      'iPhone Pro Max Models',
      'Supported older iPhone models'
    ],
    faqsTitle: 'iPhone Mobile Repair Questions Answered',
    faqs: [
      {
        question: '1. How much does iPhone repair cost in Ahmedabad?',
        answer: 'The repair cost depends on the iPhone model, problem, and replacement component required. We provide an estimate after inspection.'
      },
      {
        question: '2. Why is my iPhone battery draining so fast?',
        answer: 'Battery ageing, high background activity, software issues, or a faulty battery can cause fast battery drain.'
      },
      {
        question: '3. Can you repair Face ID on an iPhone?',
        answer: 'We diagnose Face ID-related hardware faults and determine whether the issue can be repaired based on the model and damage.'
      },
      {
        question: '4. Can you repair a water-damaged iPhone?',
        answer: 'Yes. We inspect liquid-damaged iPhones and perform cleaning and board-level repair where technically possible.'
      },
      {
        question: '5. Can you repair an iPhone that is completely dead?',
        answer: 'Yes. We diagnose the battery, charging circuit, power section, and motherboard to identify the cause of the failure.'
      },
      {
        question: '6. Do you repair iPhone motherboard problems?',
        answer: 'Yes, we provide component-level motherboard diagnostics and repair for supported iPhone models.'
      },
      {
        question: '7. Can you recover data from a dead iPhone?',
        answer: 'Data recovery depends on the condition of the device and its storage system. We inspect the phone before recommending a recovery solution.'
      }
    ]
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    fullName: 'Samsung Galaxy Mobile Repair Services',
    h1: 'Samsung Mobile Repair Services in Ahmedabad',
    tagline: 'Professional Samsung mobile repair in Ahmedabad for cracked displays, battery issues, charging problems, camera faults, motherboard damage, water damage, and software-related issues. We repair Galaxy S, A, M, Note, Z Fold, Z Flip, and other supported Samsung smartphones.',
    metaTitle: 'Samsung Mobile Repair in Ahmedabad | Galaxy S, Fold & A Series | Robuzta',
    metaDescription: 'Specialized Samsung Galaxy repair in Ahmedabad. Original Dynamic AMOLED screen replacement, battery swap, charging port & motherboard repair.',
    logoImage: '/assets/brands/samsung-electronics.svg',
    shortTag: 'Galaxy S Series, Ultra, A Series, Z Fold, Z Flip and other supported Samsung models.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'Samsung Smartphone Repair Specialists',
      'Advanced Motherboard Diagnostics',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Fast Turnaround on Common Repairs',
      'Transparent Repair Estimates',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR SAMSUNG',
    problemsTitle: "What's Going Wrong With Your Samsung Phone?",
    problemsDescription: 'From a broken AMOLED display and fast battery drain to charging failures and unexpected restarts, we diagnose the actual cause of your Samsung phone problem before recommending the right repair.',
    commonProblems: [
      {
        title: '1. Samsung Phone Screen Broken or Touch Not Working?',
        description: 'Cracked glass, black display, touch problems, lines, or flickering? We diagnose display issues and provide screen replacement for supported Samsung models.',
        slug: 'screen-replacement'
      },
      {
        title: '2. Samsung Battery Draining Too Fast?',
        description: 'If your Samsung phone loses charge quickly, shuts down unexpectedly, or struggles to hold a charge, we test the battery and recommend the appropriate solution.',
        slug: 'battery-replacement'
      },
      {
        title: '3. Samsung Phone Not Charging?',
        description: 'Slow charging, intermittent charging, or no charging can be caused by the charging port, cable connection, battery, or charging circuit.',
        slug: 'charging-port-repair'
      },
      {
        title: '4. Samsung Phone Overheating?',
        description: 'If your Galaxy phone becomes unusually hot during charging, gaming, or normal use, we diagnose battery, charging, software, and motherboard-related causes.',
        slug: 'motherboard-repair'
      },
      {
        title: '5. Samsung Phone Stuck on Samsung Logo?',
        description: 'A phone that remains stuck on the Samsung logo or keeps restarting may have software, storage, or hardware-related problems.',
        slug: 'motherboard-repair'
      },
      {
        title: '6. Samsung Camera Not Working?',
        description: "If your front or rear camera shows a black screen, doesn't open, produces blurry images, or keeps crashing, we diagnose the camera and related components.",
        slug: 'motherboard-repair'
      },
      {
        title: '7. Samsung Galaxy Z Fold Screen Damage?',
        description: 'We diagnose inner display, outer display, touch, hinge, and related hardware issues on supported Galaxy Z Fold models.',
        slug: 'screen-replacement'
      },
      {
        title: '8. Samsung Galaxy Z Flip Screen Not Working?',
        description: 'Display lines, black screen, touch problems, or hinge-related issues can affect your Z Flip. We inspect the device and recommend the appropriate repair.',
        slug: 'screen-replacement'
      },
      {
        title: '9. Samsung Foldable Hinge Problem?',
        description: 'Loose, stiff, damaged, or unusual hinge movement can affect the folding mechanism. We diagnose hinge and body-related problems on supported models.',
        slug: 'motherboard-repair'
      }
    ],
    supportedModelsTitle: 'Samsung Models We Repair',
    supportedModels: [
      'Samsung Galaxy S Series',
      'Samsung Galaxy S Ultra Series',
      'Samsung Galaxy A Series',
      'Samsung Galaxy M Series',
      'Samsung Galaxy F Series',
      'Samsung Galaxy Note Series',
      'Samsung Galaxy Z Fold Series',
      'Samsung Galaxy Z Flip Series'
    ],
    faqsTitle: 'Samsung Mobile Repair Questions Answered',
    faqs: [
      {
        question: '1. How much does Samsung mobile repair cost in Ahmedabad?',
        answer: 'The cost depends on the Samsung model, problem, and replacement component required. We provide an estimate after inspecting the device.'
      },
      {
        question: '2. Do you repair Samsung AMOLED screens?',
        answer: 'Yes, we provide display replacement services for supported Samsung models, including devices with AMOLED displays.'
      },
      {
        question: '3. Why is my Samsung phone battery draining so fast?',
        answer: 'Battery ageing, high background activity, software issues, or a faulty battery can cause excessive battery drain.'
      },
      {
        question: '4. Can you repair a Samsung phone that is not charging?',
        answer: 'Yes. We diagnose the charging port, battery, charging circuit, and motherboard to identify the cause.'
      },
      {
        question: '5. Can you repair Samsung motherboard problems?',
        answer: 'Yes, we provide advanced component-level diagnostics and motherboard repair for supported Samsung devices.'
      },
      {
        question: '6. Do you repair Samsung Z Fold and Z Flip phones?',
        answer: 'Yes, we diagnose and repair supported Galaxy Z Fold and Z Flip models, including display, hinge, charging, and hardware-related issues.'
      },
      {
        question: '7. Why is my Samsung phone stuck on the logo?',
        answer: 'This can be caused by software corruption, storage problems, failed updates, or hardware faults. Data recovery depends on the condition of the device and storage system. We inspect the phone before recommending a recovery solution.'
      }
    ]
  },
  {
    slug: 'google-pixel',
    name: 'Google Pixel',
    fullName: 'Google Pixel Smartphone Repair Services',
    h1: 'Google Pixel Mobile Repair Services in Ahmedabad',
    tagline: 'Google Pixel repair services in Ahmedabad for screen problems, USB-C charging issues, camera faults, fingerprint problems, overheating, software update failures, network issues, motherboard faults, and water damage. We repair supported Pixel 6, 7, 8, 9, Pro, A Series, and Pixel Fold models.',
    metaTitle: 'Google Pixel Phone Repair in Ahmedabad | Pixel 6, 7, 8 & 9 | Robuzta',
    metaDescription: 'Expert Google Pixel repair in Ahmedabad. Screen replacement, battery repair, Tensor chip logic board diagnostics & charging port fix.',
    logoImage: '/assets/brands/icons8-google.svg',
    shortTag: 'Pixel 6, 7, 8, 9 Series, Pro models and Pixel Fold.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'Google Pixel Repair Specialists',
      'Advanced Board-Level Diagnostics',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Proper Problem Diagnosis',
      'Fast Turnaround on Common Repairs',
      'Transparent Repair Estimates',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR GOOGLE PIXEL',
    problemsTitle: "Pixel Giving You Trouble? Let's Find Out What's Wrong.",
    problemsDescription: 'Google Pixel devices can develop problems related to the camera, fingerprint sensor, USB-C port, display, software updates, network, and internal hardware. We diagnose the actual cause before recommending the right repair solution.',
    commonProblems: [
      {
        title: '1. Google Pixel Keeps Restarting?',
        description: 'If your Pixel suddenly reboots while using apps, making calls, or charging, we diagnose the hardware and software causes behind repeated restarts.',
        slug: 'motherboard-repair'
      },
      {
        title: '2. Google Pixel USB-C Port Feels Loose?',
        description: "If the charging cable doesn't stay connected or charging stops with slight movement, we inspect the USB-C port and charging circuit.",
        slug: 'charging-port-repair'
      },
      {
        title: '3. Google Pixel Fingerprint Suddenly Stopped Working?',
        description: 'If the fingerprint sensor stopped recognizing your finger after a screen issue, update, drop, or repair, we diagnose the sensor and related components.',
        slug: 'screen-replacement'
      },
      {
        title: '4. Google Pixel Camera Keeps Crashing?',
        description: 'If the camera app closes, freezes, shows a black preview, or refuses to open, we check the camera hardware and software-related causes.',
        slug: 'motherboard-repair'
      },
      {
        title: '5. Google Pixel Showing Green or Pink Screen?',
        description: 'Unexpected screen tint, green lines, pink patches, or display abnormalities can indicate a display or hardware fault. We inspect the device to identify the cause.',
        slug: 'screen-replacement'
      },
      {
        title: '6. Google Pixel Stuck During Software Update?',
        description: 'If your Pixel gets stuck while installing an update or keeps returning to the startup screen, we diagnose the software and storage-related issue.',
        slug: 'motherboard-repair'
      },
      {
        title: '7. Google Pixel Calls Dropping or Network Missing?',
        description: 'If your Pixel suddenly loses mobile network, struggles to detect a SIM, or frequently drops calls, we check the network hardware and related components.',
        slug: 'motherboard-repair'
      },
      {
        title: '8. Google Pixel Suddenly Dead After Charging?',
        description: "If your Pixel was working normally but won't turn on after being connected to a charger, we diagnose the battery, charging section, power circuit, and motherboard.",
        slug: 'dead-phone-repair'
      },
      {
        title: '9. Google Pixel Water or Moisture Damage?',
        description: 'If your Pixel was exposed to water and later developed charging, display, camera, or power problems, we inspect the internal components and provide board-level repair where possible.',
        slug: 'dead-phone-repair'
      }
    ],
    supportedModelsTitle: 'Google Pixel Models We Repair',
    supportedModels: [
      'Google Pixel 6',
      'Google Pixel 6 Pro',
      'Google Pixel 6a',
      'Google Pixel 7',
      'Google Pixel 7 Pro',
      'Google Pixel 7a',
      'Google Pixel 8',
      'Google Pixel 8 Pro',
      'Google Pixel 8a',
      'Google Pixel 9',
      'Google Pixel 9 Pro',
      'Google Pixel 9 Pro XL',
      'Google Pixel 9a',
      'Google Pixel Fold',
      'Google Pixel A Series'
    ],
    faqsTitle: 'Google Pixel Mobile Repair Questions Answered',
    faqs: [
      {
        question: '1. Why does my Google Pixel keep restarting?',
        answer: 'Repeated restarts can be caused by software problems, storage issues, overheating, battery faults, or motherboard-related problems. We diagnose the device to identify the actual cause.'
      },
      {
        question: '2. Why is my Google Pixel USB-C port not charging properly?',
        answer: 'A loose or damaged USB-C port, debris, charging circuit fault, battery issue, or motherboard problem can affect charging. We inspect the charging system before recommending a repair.'
      },
      {
        question: '3. Can you repair a Google Pixel fingerprint sensor?',
        answer: 'Yes, we diagnose fingerprint-related problems and check the display, sensor, software, and other connected components.'
      },
      {
        question: '4. Why does my Google Pixel camera keep crashing?',
        answer: 'Camera crashes can result from software errors, camera hardware faults, storage issues, or system problems. We diagnose the cause before repair.'
      },
      {
        question: '5. Why is my Google Pixel showing a green or pink screen?',
        answer: 'Display colour changes, lines, or unusual screen tints can be related to display or hardware faults. We inspect the device to determine the cause.'
      },
      {
        question: '6. Can you repair a Google Pixel stuck during an update?',
        answer: 'Yes, we can diagnose Pixel devices that are stuck during updates, repeatedly restarting, or unable to complete the startup process.'
      },
      {
        question: '7. Why is my Google Pixel losing network or dropping calls?',
        answer: 'Network problems can be related to SIM issues, software, antenna components, or motherboard-related faults. We diagnose the device to locate the problem.'
      }
    ]
  },
  {
    slug: 'oneplus',
    name: 'OnePlus',
    fullName: 'OnePlus Mobile Repair Services',
    h1: 'OnePlus Mobile Repair Services in Ahmedabad',
    tagline: 'OnePlus mobile repair services in Ahmedabad for display problems, green line issues, charging faults, battery problems, camera failures, fingerprint issues, motherboard damage, software problems, and water damage. We repair OnePlus 9, 10, 11, 12, 13, Nord, Open, and other supported models.',
    metaTitle: 'OnePlus Mobile Repair in Ahmedabad | Screen, Battery & Board | Robuzta',
    metaDescription: 'Professional OnePlus phone repair in Ahmedabad. Green line screen fix, SuperVOOC charging port, battery swap & motherboard BGA repair.',
    logoImage: '/assets/brands/oneplus-5.svg',
    shortTag: 'OnePlus 9, 10, 11, 12, 13, Nord, Open, and other supported models.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'OnePlus Repair Specialists',
      'Advanced Motherboard Diagnostics',
      'Display & Green Line Issue Expertise',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Transparent Repair Estimates',
      'Fast Turnaround on Common Repairs',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR ONEPLUS',
    problemsTitle: 'Is Your OnePlus Phone Not Working the Way It Should?',
    problemsDescription: 'From the well-known green line display problem to charging failures, camera issues, fingerprint problems, and sudden shutdowns, we diagnose the actual cause of your OnePlus problem before recommending the right repair.',
    commonProblems: [
      {
        title: '1. OnePlus Green Line on Display?',
        description: 'Seeing a green, pink, or white line across your OnePlus screen? We inspect the display and related hardware and provide the appropriate screen repair or replacement solution.',
        slug: 'screen-replacement'
      },
      {
        title: '2. OnePlus Alert Slider Not Working?',
        description: "If the Alert Slider is stuck, loose, or doesn't change between sound modes, we diagnose the switch and related hardware.",
        slug: 'motherboard-repair'
      },
      {
        title: '3. OnePlus Phone Suddenly Dead?',
        description: 'If your OnePlus was working normally and suddenly stopped turning on, we check the battery, charging section, power circuit, and motherboard.',
        slug: 'dead-phone-repair'
      },
      {
        title: '4. OnePlus Fast Charging Not Working?',
        description: 'If Warp Charge or fast charging has stopped working, we diagnose the charger connection, USB-C port, battery, and charging circuit.',
        slug: 'charging-port-repair'
      },
      {
        title: '5. OnePlus Fingerprint Not Working?',
        description: 'If the fingerprint sensor stopped recognizing your finger after a screen issue, drop, software update, or repair, we diagnose the sensor and related components.',
        slug: 'screen-replacement'
      },
      {
        title: '6. OnePlus Camera Not Focusing?',
        description: 'If your camera is blurry, shaking, unable to focus, showing a black screen, or crashing, we inspect the camera module and related hardware.',
        slug: 'motherboard-repair'
      },
      {
        title: '7. OnePlus Stuck on Boot Logo?',
        description: 'If your phone remains on the OnePlus logo, keeps restarting, or fails to load OxygenOS, we diagnose software, storage, and hardware-related causes.',
        slug: 'motherboard-repair'
      },
      {
        title: '8. OnePlus Battery Draining Suddenly?',
        description: 'If your battery percentage drops unusually fast or the phone shuts down before reaching 0%, we test the battery and check for power-related issues.',
        slug: 'battery-replacement'
      },
      {
        title: '9. OnePlus Motherboard Repair?',
        description: 'No power, charging faults, network problems, short circuits, or component failures may require advanced board-level diagnosis and micro-soldering repair.',
        slug: 'motherboard-repair'
      }
    ],
    supportedModelsTitle: 'OnePlus Models We Repair',
    supportedModels: [
      'OnePlus 9 Series',
      'OnePlus 10 Series',
      'OnePlus 11 Series',
      'OnePlus 12 Series',
      'OnePlus 13 Series',
      'OnePlus Nord Series',
      'OnePlus Open',
      'OnePlus R Series',
      'Supported older OnePlus models'
    ],
    faqsTitle: 'OnePlus Repair Questions Answered',
    faqs: [
      {
        question: '1. Can you repair the green line problem on OnePlus phones?',
        answer: 'We inspect the display and device condition to determine whether a display repair or replacement is required for the affected model.'
      },
      {
        question: '2. Why has my OnePlus fast charging stopped working?',
        answer: 'Fast charging problems can be caused by the USB-C port, charger, cable, battery, charging circuit, or motherboard. We diagnose the complete charging system.'
      },
      {
        question: '3. Why is my OnePlus Alert Slider not working?',
        answer: 'A damaged switch, internal connector, dust, or physical impact can affect the Alert Slider. We inspect the hardware to identify the cause.'
      },
      {
        question: '4. Why is my OnePlus fingerprint sensor not working?',
        answer: 'Fingerprint issues can occur after display damage, screen replacement, software problems, or hardware faults. We diagnose the sensor and related components.'
      },
      {
        question: '5. Why is my OnePlus phone stuck on the logo?',
        answer: 'A failed update, corrupted OxygenOS, storage issue, or hardware fault can cause boot problems. We diagnose the phone before recommending a solution.'
      },
      {
        question: '6. Can you repair a OnePlus phone that suddenly stopped turning on?',
        answer: 'Yes. We check the battery, charging circuit, power section, and motherboard to determine why the device has become unresponsive.'
      },
      {
        question: '7. Can you repair a OnePlus camera that is not focusing?',
        answer: 'Yes, we diagnose camera focus problems, camera module faults, image stabilization issues, and related hardware problems.'
      }
    ]
  },
  {
    slug: 'oppo',
    name: 'OPPO',
    fullName: 'OPPO Mobile Repair Services',
    h1: 'OPPO Mobile Repair Services in Ahmedabad',
    tagline: 'OPPO mobile repair services in Ahmedabad for display problems, charging faults, battery issues, camera failures, fingerprint problems, motherboard faults, water damage, and software-related issues. We repair OPPO Reno, Find, F, A, and other supported smartphone models.',
    metaTitle: 'OPPO Mobile Repair in Ahmedabad | Reno & Find Series | Robuzta',
    metaDescription: 'Expert OPPO mobile repair in Ahmedabad. Display screen replacement, battery swap, camera glass & charging port repair.',
    logoImage: '/assets/brands/oppo-seeklogo.svg',
    shortTag: 'Reno Series, Find Series, F Series and A Series smartphones.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'OPPO Smartphone Repair Specialists',
      'Advanced Board-Level Diagnostics',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Proper Problem Diagnosis',
      'Fast Turnaround on Common Repairs',
      'Transparent Repair Estimates',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR OPPO',
    problemsTitle: 'Is Your OPPO Phone Not Working the Way It Should?',
    problemsDescription: 'From display problems and charging failures to camera issues, battery drain, and unexpected shutdowns, we diagnose the actual cause of your OPPO phone problem before recommending the right repair.',
    commonProblems: [
      {
        title: '1. OPPO Phone Screen Cracked or Touch Not Working?',
        description: 'Cracked glass, black display, touch problems, flickering, or lines on the screen? We diagnose the display and provide screen replacement for supported OPPO models.',
        slug: 'screen-replacement'
      },
      {
        title: '2. OPPO SuperVOOC Charging Not Working?',
        description: 'If your OPPO phone is no longer charging at its normal fast speed, charging intermittently, or not charging at all, we check the USB port, charger connection, battery, and charging circuit.',
        slug: 'charging-port-repair'
      },
      {
        title: '3. OPPO Phone Battery Draining Too Fast?',
        description: 'If your phone loses charge quickly, gets unusually warm, or shuts down unexpectedly, we test the battery and check for related power issues.',
        slug: 'battery-replacement'
      },
      {
        title: '4. OPPO Camera Showing Black Screen?',
        description: "If the camera won't open, shows a black preview, struggles to focus, or crashes while taking photos, we diagnose the camera hardware and related components.",
        slug: 'motherboard-repair'
      },
      {
        title: '5. OPPO Fingerprint Sensor Not Responding?',
        description: 'If your fingerprint suddenly stops working after a drop, screen issue, update, or repair, we check the sensor and connected hardware.',
        slug: 'screen-replacement'
      },
      {
        title: '6. OPPO Phone Stuck on Logo?',
        description: 'If your phone remains on the OPPO logo, repeatedly restarts, or fails to reach the home screen, we diagnose software, storage, and hardware-related causes.',
        slug: 'motherboard-repair'
      },
      {
        title: '7. OPPO Phone Speaker Sound Very Low?',
        description: 'Low or distorted audio during calls, videos, or music can be caused by blocked speakers, damaged components, or audio-related hardware faults.',
        slug: 'motherboard-repair'
      },
      {
        title: '8. OPPO Phone Randomly Shutting Down?',
        description: 'Unexpected shutdowns can be related to battery health, overheating, power circuits, software problems, or motherboard faults.',
        slug: 'battery-replacement'
      },
      {
        title: '9. OPPO Motherboard Repair?',
        description: 'No power, charging failure, short circuit, network problems, or component-level faults may require advanced motherboard diagnostics and micro-soldering repair.',
        slug: 'motherboard-repair'
      },
      {
        title: '10. OPPO Water Damage?',
        description: 'If your OPPO phone has been exposed to water or liquid and later develops charging, display, camera, or power problems, we inspect the affected components and provide board-level repair where possible.',
        slug: 'dead-phone-repair'
      }
    ],
    supportedModelsTitle: 'OPPO Models We Repair',
    supportedModels: [
      'OPPO Reno Series',
      'OPPO Find Series',
      'OPPO Find X Series',
      'OPPO F Series',
      'OPPO A Series',
      'OPPO K Series',
      'OPPO R Series',
      'Supported older OPPO models'
    ],
    faqsTitle: 'OPPO Repair Questions Answered',
    faqs: [
      {
        question: '1. Why is my OPPO SuperVOOC charging not working?',
        answer: 'Fast charging can be affected by the USB port, charger, cable, battery, charging circuit, or motherboard. We diagnose the complete charging system.'
      },
      {
        question: '2. Can you repair a broken OPPO AMOLED display?',
        answer: 'Yes, we provide display replacement for supported OPPO models with damaged, cracked, flickering, or non-responsive screens.'
      },
      {
        question: '3. Why is my OPPO phone getting hot while charging?',
        answer: 'Heat can be caused by battery wear, charging components, background processes, or hardware faults. We diagnose the underlying cause.'
      },
      {
        question: '4. Why is my OPPO camera showing a black screen?',
        answer: 'Camera hardware faults, software problems, damaged camera modules, or connector issues can cause a black camera preview. We diagnose the device to identify the problem.'
      },
      {
        question: '5. Why has my OPPO fingerprint stopped working?',
        answer: 'A damaged sensor, display issue, software problem, or physical impact can affect fingerprint functionality. We inspect the related hardware.'
      },
      {
        question: '6. Why is my OPPO phone stuck on the logo?',
        answer: 'Failed updates, software corruption, storage problems, or hardware faults can prevent the phone from completing startup.'
      },
      {
        question: '7. Can you repair an OPPO phone that suddenly shut down?',
        answer: 'Yes. We check the battery, charging section, power circuit, and motherboard to identify the reason for the sudden shutdown.'
      }
    ]
  },
  {
    slug: 'vivo',
    name: 'Vivo',
    fullName: 'Vivo Smartphone Repair Services',
    h1: 'Vivo Mobile Repair Services in Ahmedabad',
    tagline: 'Vivo mobile repair services in Ahmedabad for display problems, battery issues, charging faults, camera problems, fingerprint failures, motherboard damage, network issues, water damage, and software-related problems. We repair Vivo X, V, Y, T, and other supported smartphone models.',
    metaTitle: 'Vivo Phone Repair in Ahmedabad | V & X Series Repair | Robuzta',
    metaDescription: 'Certified Vivo mobile repair in Ahmedabad. Curved AMOLED display, FlashCharge battery, ZEISS camera lens & logic board fix.',
    logoImage: '/assets/brands/vivo-2.svg',
    shortTag: 'X Series, V Series, Y Series and other supported Vivo models.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'Vivo Smartphone Repair Specialists',
      'Advanced Motherboard Diagnostics',
      'Display & Camera Repair Expertise',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Transparent Repair Estimates',
      'Fast Turnaround on Common Repairs',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR VIVO',
    problemsTitle: 'Is Your Vivo Phone Acting Up?',
    problemsDescription: "From a camera that won't focus to fingerprint problems, charging failures, sudden shutdowns, and display issues, we diagnose the actual problem with your Vivo phone before recommending the right repair.",
    commonProblems: [
      {
        title: '1. Vivo Camera Shaking or Not Focusing?',
        description: 'If your Vivo camera keeps shaking, struggles to focus, produces blurry photos, or shows a black screen, we diagnose the camera module and related hardware.',
        slug: 'motherboard-repair'
      },
      {
        title: '2. Vivo Fingerprint Not Working After Screen Replacement?',
        description: 'If the fingerprint stopped responding after a display replacement or physical damage, we check the sensor, display, connectors, and related components.',
        slug: 'screen-replacement'
      },
      {
        title: '3. Vivo Phone Charging Slowly?',
        description: 'If your Vivo takes unusually long to charge or repeatedly connects and disconnects from the charger, we inspect the charging port, cable connection, battery, and charging circuit.',
        slug: 'charging-port-repair'
      },
      {
        title: '4. Vivo Phone Gets Hot During Normal Use?',
        description: 'Unusual heating while using social media, cameras, charging, or everyday apps can indicate battery, software, or hardware-related issues. We diagnose the actual cause.',
        slug: 'motherboard-repair'
      },
      {
        title: '5. Vivo Phone Stuck on Vivo Logo?',
        description: "If your phone remains on the Vivo logo, keeps restarting, or doesn't reach the home screen, we diagnose software, storage, and hardware-related startup problems.",
        slug: 'motherboard-repair'
      },
      {
        title: '6. Vivo Phone Network Suddenly Disappeared?',
        description: "If your Vivo shows no service, doesn't detect the SIM, or keeps losing network, we check the SIM connection, network hardware, antenna, and motherboard-related faults.",
        slug: 'motherboard-repair'
      },
      {
        title: '7. Vivo Phone Shutting Down With Battery Left?',
        description: 'If your Vivo suddenly switches off even when the battery shows 20%, 30%, or more, the battery or power circuit may need diagnosis.',
        slug: 'battery-replacement'
      },
      {
        title: '8. Vivo Phone Display Has Green Line or Black Spot?',
        description: 'Green lines, black spots, unusual colours, or display abnormalities can indicate damage to the AMOLED panel or display assembly. We inspect the display before recommending the appropriate solution.',
        slug: 'screen-replacement'
      },
      {
        title: '9. Vivo Phone Speaker or Microphone Not Working?',
        description: "If you can't hear calls clearly or others can't hear your voice, we diagnose the speaker, microphone, connectors, and related audio components.",
        slug: 'motherboard-repair'
      }
    ],
    supportedModelsTitle: 'Vivo Models We Repair',
    supportedModels: [
      'Vivo X Series',
      'Vivo V Series',
      'Vivo Y Series',
      'Vivo T Series',
      'Vivo S Series',
      'Vivo Z Series',
      'Vivo X Pro Series',
      'Supported older Vivo models'
    ],
    faqsTitle: 'Vivo Repair Questions Answered',
    faqs: [
      {
        question: '1. Why is my Vivo camera shaking or not focusing?',
        answer: 'Camera stabilization, camera module damage, software issues, or physical impact can cause focusing and shaking problems. We diagnose the camera system to identify the cause.'
      },
      {
        question: '2. Why is my Vivo fingerprint not working after screen replacement?',
        answer: 'Fingerprint functionality can be affected by the display assembly, sensor, connectors, or software. We inspect the device to determine the exact issue.'
      },
      {
        question: '3. Why is my Vivo phone charging slowly?',
        answer: 'A damaged charging port, cable, battery, charger, or charging circuit can cause slow charging. We check the complete charging system.'
      },
      {
        question: '4. Why does my Vivo phone switch off with battery remaining?',
        answer: 'A worn battery, inaccurate battery reading, power-management issue, or motherboard fault can cause unexpected shutdowns.'
      },
      {
        question: '5. Why is my Vivo phone stuck on the Vivo logo?',
        answer: 'Startup problems can result from software corruption, failed updates, storage issues, or hardware faults.'
      },
      {
        question: '6. Why has my Vivo phone suddenly lost network?',
        answer: 'SIM-related problems, antenna faults, software issues, or motherboard/network circuit damage can cause network loss. We diagnose the device before repair.'
      },
      {
        question: '7. Can you repair a Vivo phone with a green line on the display?',
        answer: 'We inspect the display condition and determine whether the issue requires display replacement or another hardware solution.'
      }
    ]
  },
  {
    slug: 'realme',
    name: 'Realme',
    fullName: 'Realme Mobile Repair Services',
    h1: 'Realme Mobile Repair Services in Ahmedabad',
    tagline: 'Realme mobile repair services in Ahmedabad for display damage, SuperVOOC charging problems, battery issues, camera faults, fingerprint failures, boot problems, motherboard repair, network issues, and water damage. We repair Realme GT, Number, Narzo, C Series, P Series, and other supported smartphones.',
    metaTitle: 'Realme Mobile Repair in Ahmedabad | GT & Narzo Series | Robuzta',
    metaDescription: 'Fast Realme phone repair in Ahmedabad. Screen glass replacement, battery swap, speaker fix & motherboard short repair.',
    logoImage: '/assets/brands/realme-seeklogo.svg',
    shortTag: 'GT Series, Number Series, Narzo Series and other supported Realme phones.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'Realme Smartphone Repair Specialists',
      'Advanced Board-Level Diagnostics',
      'SuperVOOC Charging Repair Expertise',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Transparent Repair Estimates',
      'Fast Turnaround on Common Repairs',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR REALME',
    problemsTitle: 'Is Your Realme Phone Not Performing Like It Used To?',
    problemsDescription: 'From charging and gaming problems to camera, display, fingerprint, and startup issues, we diagnose the actual fault in your Realme phone before recommending the right repair.',
    commonProblems: [
      {
        title: '1. Realme SuperVOOC Fast Charging Not Working?',
        description: 'If your Realme phone has stopped fast charging, charges intermittently, or takes much longer than usual, we check the charging port, cable connection, battery, and charging circuit.',
        slug: 'charging-port-repair'
      },
      {
        title: '2. Realme Phone Lagging While Gaming?',
        description: 'If games are stuttering, FPS is dropping, or your phone becomes slow during heavy gaming, we diagnose overheating, storage, software, and performance-related issues.',
        slug: 'motherboard-repair'
      },
      {
        title: '3. Realme Camera Not Focusing?',
        description: "Blurry photos, focus hunting, camera shaking, or a camera app that won't open can indicate camera module or hardware problems. We diagnose the cause before repair.",
        slug: 'motherboard-repair'
      },
      {
        title: '4. Realme Fingerprint Stopped Working?',
        description: 'If the fingerprint sensor suddenly stops recognizing your finger after a screen issue, drop, update, or repair, we check the sensor and related components.',
        slug: 'screen-replacement'
      },
      {
        title: '5. Realme Phone Stuck in Boot Loop?',
        description: 'If your Realme keeps showing the logo and restarting repeatedly, the problem may be related to software, storage, or hardware. We diagnose the cause and recommend the appropriate solution.',
        slug: 'motherboard-repair'
      },
      {
        title: '6. Realme Display Showing Lines or Black Spots?',
        description: 'Lines, black patches, flickering, unusual colours, or touch problems can indicate display damage. We inspect the screen and provide the appropriate display repair or replacement.',
        slug: 'screen-replacement'
      },
      {
        title: '7. Realme Phone Getting Hot During Charging?',
        description: 'Unusual heating while charging can be related to the battery, charging circuit, charger, or internal hardware. We diagnose the problem before replacing any component.',
        slug: 'battery-replacement'
      },
      {
        title: '8. Realme Phone Network or SIM Not Working?',
        description: "If your Realme suddenly shows no service, doesn't detect the SIM, or keeps losing network, we check the SIM connection, antenna, network section, and motherboard.",
        slug: 'motherboard-repair'
      },
      {
        title: '9. Realme Phone Speaker Sound Distorted?',
        description: 'If calls, videos, or music sound muffled, crackling, or unusually quiet, we inspect the speaker and related audio components.',
        slug: 'motherboard-repair'
      }
    ],
    supportedModelsTitle: 'Realme Models We Repair',
    supportedModels: [
      'Realme GT Series',
      'Realme GT Neo Series',
      'Realme Number Series',
      'Realme Narzo Series',
      'Realme P Series',
      'Realme C Series',
      'Realme X Series',
      'Realme 11 / 12 / 13 Series',
      'Supported older Realme models'
    ],
    faqsTitle: 'Realme Repair Questions Answered',
    faqs: [
      {
        question: '1. Why is my Realme SuperVOOC charging not working?',
        answer: 'Fast charging can be affected by the charging port, cable, charger, battery, charging circuit, or motherboard. We diagnose the complete charging system.'
      },
      {
        question: '2. Why is my Realme phone getting hot while charging?',
        answer: 'Battery wear, charging components, background processes, or internal hardware problems can cause excessive heat. We identify the underlying cause.'
      },
      {
        question: '3. Can you fix Realme boot loop problems?',
        answer: 'Yes, we diagnose Realme phones stuck on the logo or repeatedly restarting to determine whether the problem is software, storage, or hardware related.'
      },
      {
        question: '4. Why is my Realme camera not focusing?',
        answer: 'Camera module faults, physical damage, stabilization problems, or software issues can affect focusing. We inspect the camera system to identify the problem.'
      },
      {
        question: '5. Why has my Realme fingerprint stopped working?',
        answer: 'Screen damage, sensor faults, software problems, or physical impact can affect fingerprint functionality. We diagnose the related components.'
      },
      {
        question: '6. Can you repair a Realme phone with display lines?',
        answer: 'Yes, we inspect the display and determine whether the issue requires screen replacement or another hardware repair.'
      },
      {
        question: '7. Why is my Realme phone not detecting the SIM?',
        answer: 'SIM connection problems, software issues, antenna faults, or motherboard/network circuit damage can cause SIM detection problems.'
      }
    ]
  },
  {
    slug: 'motorola',
    name: 'Motorola',
    fullName: 'Motorola Mobile Repair Services',
    h1: 'Motorola Mobile Repair Services in Ahmedabad',
    tagline: 'Professional Motorola mobile repair services in Ahmedabad for display damage, battery problems, charging faults, camera issues, fingerprint failures, software problems, motherboard faults, water damage, and foldable phone repairs. We repair Motorola Edge, Razr, Moto G, Moto E, and other supported models.',
    metaTitle: 'Motorola Mobile Repair in Ahmedabad | Moto Edge & Razr | Robuzta',
    metaDescription: 'Specialized Motorola repair in Ahmedabad for Moto Edge, Razr & Moto G series. pOLED screen, battery & charging port repair.',
    logoImage: '/assets/brands/motorola-seeklogo.svg',
    shortTag: 'Motorola Edge, Razr, Moto G, Moto E, and other supported models.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'Motorola Smartphone Repair Specialists',
      'Advanced Board-Level Diagnostics',
      'Foldable Phone Repair Expertise',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Transparent Repair Estimates',
      'Fast Turnaround on Common Repairs',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR MOTOROLA',
    problemsTitle: 'Is Your Motorola Phone Giving You a Hard Time?',
    problemsDescription: 'From a damaged display and charging problems to camera failures, software glitches, network issues, and foldable hinge problems, we diagnose the actual cause before recommending the right repair.',
    commonProblems: [
      {
        title: '1. Motorola Edge Screen Showing Green or Pink Lines?',
        description: 'Green lines, pink lines, display flickering, black patches, or unusual colours can indicate a display fault. We inspect the screen and related components before recommending a solution.',
        slug: 'screen-replacement'
      },
      {
        title: '2. Motorola Razr Hinge Not Opening Properly?',
        description: "If your Razr feels stiff, doesn't open smoothly, makes unusual sounds, or has hinge-related damage, we inspect the folding mechanism and surrounding components.",
        slug: 'motherboard-repair'
      },
      {
        title: '3. Motorola Phone Not Charging Properly?',
        description: 'Slow charging, intermittent charging, or a phone that only charges at certain angles can indicate USB-C port, battery, cable, or charging circuit problems.',
        slug: 'charging-port-repair'
      },
      {
        title: '4. Motorola Camera Not Opening?',
        description: "If the camera app crashes, shows a black screen, doesn't focus, or produces blurry images, we diagnose the camera module and related hardware.",
        slug: 'motherboard-repair'
      },
      {
        title: '5. Motorola Fingerprint Sensor Not Working?',
        description: 'If fingerprint authentication suddenly stops working after a drop, screen problem, update, or repair, we check the sensor and connected components.',
        slug: 'screen-replacement'
      },
      {
        title: '6. Motorola Phone Stuck on Boot Screen?',
        description: "If your Motorola keeps showing the logo, repeatedly restarts, or doesn't reach the home screen, we diagnose software, storage, and hardware-related startup problems.",
        slug: 'motherboard-repair'
      },
      {
        title: '7. Motorola Phone Losing Network or SIM Not Detected?',
        description: 'If your phone suddenly shows no service, fails to detect the SIM, or keeps dropping network, we check the SIM connection, antenna, network section, and motherboard.',
        slug: 'motherboard-repair'
      },
      {
        title: '8. Motorola Battery Draining Too Quickly?',
        description: 'If your battery percentage drops unusually fast, the phone shuts down unexpectedly, or it gets hot during normal use, we test the battery and power-related components.',
        slug: 'battery-replacement'
      },
      {
        title: '9. Motorola Phone Suddenly Dead?',
        description: 'If your Motorola has stopped responding completely, we diagnose the battery, charging section, power circuit, and motherboard to find the cause.',
        slug: 'dead-phone-repair'
      }
    ],
    supportedModelsTitle: 'Motorola Models We Repair',
    supportedModels: [
      'Motorola Edge Series',
      'Motorola Edge Pro Series',
      'Motorola Razr Series',
      'Motorola Moto G Series',
      'Motorola Moto E Series',
      'Motorola Moto One Series',
      'Motorola ThinkPhone',
      'Supported older Motorola models'
    ],
    faqsTitle: 'Motorola Repair Questions Answered',
    faqs: [
      {
        question: '1. Can you repair Motorola Razr foldable phones?',
        answer: 'Yes, we diagnose supported Razr models for display, hinge, charging, and other hardware-related problems.'
      },
      {
        question: '2. Why is my Motorola Edge display showing a green line?',
        answer: 'Display lines can result from panel faults, physical damage, or other display-related problems. We inspect the device to determine the appropriate repair.'
      },
      {
        question: '3. Why is my Motorola phone charging slowly?',
        answer: 'A damaged USB-C port, cable, battery, charger, or charging circuit can cause slow or intermittent charging. We check the complete charging system.'
      },
      {
        question: '4. Why is my Motorola camera not opening?',
        answer: 'Camera hardware faults, software problems, connector issues, or a damaged camera module can cause the camera to stop working.'
      },
      {
        question: '5. Why is my Motorola fingerprint not working?',
        answer: 'Physical damage, display-related issues, software problems, or sensor faults can affect fingerprint functionality. We diagnose the related components.'
      },
      {
        question: '6. Why is my Motorola phone stuck on the logo?',
        answer: 'Software corruption, failed updates, storage problems, or hardware faults can prevent the phone from completing startup.'
      },
      {
        question: '7. Why is my Motorola phone not detecting the SIM?',
        answer: 'SIM connection problems, network hardware faults, antenna issues, software problems, or motherboard damage can cause SIM detection failures.'
      }
    ]
  },
  {
    slug: 'nothing',
    name: 'Nothing',
    fullName: 'Nothing Phone Repair Services',
    h1: 'Nothing Mobile Repair Services in Ahmedabad',
    tagline: 'Professional Nothing Phone repair services in Ahmedabad for Glyph issues, display damage, charging problems, battery faults, camera failures, fingerprint problems, motherboard repair, software issues, and water damage. We repair Nothing Phone (1), Phone (2), Phone (2a), Phone (2a) Plus, Phone (3), and other supported models.',
    metaTitle: 'Nothing Phone Repair in Ahmedabad | Phone 1, 2 & 2a | Robuzta',
    metaDescription: 'Expert Nothing Phone repair in Ahmedabad. Glyph lighting repair, transparent back glass swap, OLED screen & battery replacement.',
    logoImage: '/assets/brands/nothing.svg',
    shortTag: 'Nothing Phone (1), Phone (2), Phone (2a) and other supported models.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'Nothing Phone Repair Specialists',
      'Glyph Interface Diagnostics',
      'Advanced Board-Level Repair',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Proper Fault Diagnosis',
      'Fast Turnaround on Common Repairs',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR NOTHING',
    problemsTitle: 'Is Your Nothing Phone Acting Strange?',
    problemsDescription: 'From Glyph lights that stop working to display problems, charging faults, camera issues, and unexpected shutdowns, we diagnose the actual fault in your Nothing Phone before recommending the right repair.',
    commonProblems: [
      {
        title: '1. Nothing Glyph Lights Not Working?',
        description: 'If some or all Glyph lights are no longer responding, we diagnose the Glyph hardware, connectors, and related motherboard components.',
        slug: 'motherboard-repair'
      },
      {
        title: '2. Nothing Phone Display Showing Lines or Flickering?',
        description: 'Lines, flickering, black patches, touch problems, or an unresponsive display can indicate a screen or hardware fault. We inspect the display before recommending replacement.',
        slug: 'screen-replacement'
      },
      {
        title: '3. Nothing Phone Not Charging Properly?',
        description: "If your phone charges slowly, disconnects repeatedly, or doesn't charge at all, we check the USB-C port, battery, charging circuit, and motherboard.",
        slug: 'charging-port-repair'
      },
      {
        title: '4. Nothing Phone Camera Not Opening?',
        description: 'If the camera shows a black screen, crashes, struggles to focus, or produces abnormal images, we diagnose the camera module and related hardware.',
        slug: 'motherboard-repair'
      },
      {
        title: '5. Nothing Fingerprint Sensor Not Working?',
        description: 'If fingerprint recognition stops working after a screen issue, physical damage, software update, or repair, we inspect the sensor and connected components.',
        slug: 'screen-replacement'
      },
      {
        title: '6. Nothing Phone Stuck on Startup?',
        description: 'If your Nothing Phone remains on the Nothing logo, keeps restarting, or fails to reach the home screen, we diagnose software, storage, and hardware-related causes.',
        slug: 'motherboard-repair'
      },
      {
        title: '7. Nothing Phone Battery Draining Too Fast?',
        description: 'If the battery percentage drops unusually quickly, the phone becomes hot, or it shuts down unexpectedly, we test the battery and power-related components.',
        slug: 'battery-replacement'
      },
      {
        title: '8. Nothing Phone Back Panel or Transparent Housing Damaged?',
        description: 'Cracks or damage to the distinctive transparent rear panel can affect the appearance and protection of the device. We inspect the body and provide suitable repair options.',
        slug: 'screen-replacement'
      },
      {
        title: '9. Nothing Phone Water Damage?',
        description: 'If your Nothing Phone has been exposed to water or liquid and later develops charging, display, Glyph, camera, or power problems, we inspect the internal components and provide board-level repair where possible.',
        slug: 'dead-phone-repair'
      }
    ],
    supportedModelsTitle: 'Nothing Phone Models We Repair',
    supportedModels: [
      'Nothing Phone (1)',
      'Nothing Phone (2)',
      'Nothing Phone (2a)',
      'Nothing Phone (2a) Plus',
      'Nothing Phone (3)',
      'Nothing Phone Series',
      'Supported older Nothing models'
    ],
    faqsTitle: 'Nothing Phone Repair Questions Answered',
    faqs: [
      {
        question: '1. Why are the Glyph lights on my Nothing Phone not working?',
        answer: 'Glyph problems can be caused by damaged components, connectors, software issues, or motherboard faults. We diagnose the Glyph system to identify the cause.'
      },
      {
        question: '2. Can you repair Nothing Phone display problems?',
        answer: 'Yes, we diagnose cracked screens, touch problems, flickering, lines, black displays, and other display-related faults on supported models.'
      },
      {
        question: '3. Why is my Nothing Phone not charging?',
        answer: 'A damaged USB-C port, battery, charging circuit, cable, or motherboard fault can cause charging problems. We inspect the complete charging system.'
      },
      {
        question: '4. Can you repair the fingerprint sensor on a Nothing Phone?',
        answer: 'Yes, we diagnose fingerprint issues related to the sensor, display, software, and connected hardware.'
      },
      {
        question: '5. Why is my Nothing Phone stuck on the Nothing logo?',
        answer: 'Software corruption, failed updates, storage problems, or hardware faults can prevent the phone from completing startup.'
      },
      {
        question: '6. Can you repair the Glyph Interface after water damage?',
        answer: 'We inspect the affected Glyph components and motherboard to determine whether the damage can be repaired.'
      },
      {
        question: '7. Can you replace a damaged Nothing Phone back panel?',
        answer: 'We inspect the condition of the rear housing and provide suitable replacement or repair options for supported models.'
      }
    ]
  },
  {
    slug: 'iqoo',
    name: 'iQOO',
    fullName: 'iQOO Gaming Mobile Repair Services',
    h1: 'iQOO Mobile Repair Services in Ahmedabad',
    tagline: 'Professional iQOO mobile repair services in Ahmedabad for gaming-related issues, overheating, fast-charging problems, display damage, battery faults, camera issues, fingerprint problems, network failures, and motherboard repair. We repair iQOO 12, 13, 15, 15R, Neo, Z Series, and other supported models.',
    metaTitle: 'iQOO Mobile Repair in Ahmedabad | iQOO 12, Neo & Z Series | Robuzta',
    metaDescription: 'Specialized iQOO gaming phone repair in Ahmedabad. 144Hz AMOLED screen, Snapdragon GPU BGA repair, FlashCharge & battery swap.',
    logoImage: '/assets/brands/iqoo-seeklogo.svg',
    shortTag: 'iQOO Number Series, Neo Series, Z Series and other supported models.',
    whyChooseUsTitle: 'Why Choose Us?',
    whyChooseUs: [
      'iQOO Gaming Phone Repair Specialists',
      'Advanced Motherboard Diagnostics',
      'Fast-Charging & Power Circuit Expertise',
      'Gaming Performance Troubleshooting',
      'Quality Replacement Parts',
      'Privacy-Focused Repairs',
      'Transparent Repair Estimates',
      'Warranty on Eligible Repairs'
    ],
    problemsBadge: 'REPAIR SERVICES FOR iQOO',
    problemsTitle: 'Is Your iQOO Struggling Under Pressure?',
    problemsDescription: 'Built for performance, iQOO phones can develop problems that become especially noticeable during gaming, fast charging, camera use, or heavy workloads. We diagnose the actual hardware or software fault before recommending a repair.',
    commonProblems: [
      {
        title: '1. iQOO Phone Gets Extremely Hot While Gaming?',
        description: 'If your iQOO becomes unusually hot during gaming, performance drops, or the phone starts throttling, we check the cooling, battery, charging, and hardware-related causes.',
        slug: 'motherboard-repair'
      },
      {
        title: '2. iQOO 120W Fast Charging Suddenly Slow?',
        description: 'If your iQOO no longer reaches its expected fast-charging speed, we inspect the charging port, charger connection, battery, and charging circuit.',
        slug: 'charging-port-repair'
      },
      {
        title: '3. iQOO Phone FPS Drops During Gaming?',
        description: 'Sudden FPS drops, stuttering, or performance dips can be related to overheating, storage, software, or hardware problems. We diagnose the cause affecting gaming performance.',
        slug: 'motherboard-repair'
      },
      {
        title: '4. iQOO AMOLED Display Showing Lines?',
        description: 'Green lines, flickering, dead areas, unusual colours, or touch problems can indicate a display fault. We inspect the panel and related components before recommending replacement.',
        slug: 'screen-replacement'
      },
      {
        title: '5. iQOO Fingerprint Stopped Recognizing?',
        description: 'If the in-display fingerprint suddenly stops working after a screen issue, drop, update, or repair, we diagnose the sensor, display, and connected components.',
        slug: 'screen-replacement'
      },
      {
        title: '6. iQOO Phone Keeps Restarting During Gaming?',
        description: 'If the phone crashes or restarts while running demanding games, we check overheating, battery performance, power delivery, storage, and motherboard-related faults.',
        slug: 'motherboard-repair'
      },
      {
        title: '7. iQOO Camera OIS or Focus Not Working?',
        description: 'If your camera shakes excessively, struggles to focus, produces blurry images, or crashes, we inspect the camera module and related hardware.',
        slug: 'motherboard-repair'
      },
      {
        title: '8. iQOO Phone Suddenly Loses Network?',
        description: 'If your iQOO shows no service, stops detecting the SIM, or repeatedly loses network, we diagnose the SIM connection, antenna, network section, and motherboard.',
        slug: 'motherboard-repair'
      },
      {
        title: '9. iQOO Phone Suddenly Dead?',
        description: 'If your iQOO stops responding without warning, we check the battery, charging section, power circuit, and motherboard to identify the actual failure.',
        slug: 'dead-phone-repair'
      }
    ],
    supportedModelsTitle: 'iQOO Models We Repair',
    supportedModels: [
      'iQOO 12 Series',
      'iQOO 13 Series',
      'iQOO 15 Series',
      'iQOO 15R',
      'iQOO Neo Series',
      'iQOO Z Series',
      'iQOO Z10 Series',
      'iQOO 11 Series',
      'iQOO 10 Series',
      'Supported older iQOO models'
    ],
    faqsTitle: 'iQOO Repair Questions Answered',
    faqs: [
      {
        question: '1. Why does my iQOO heat up while gaming?',
        answer: "Gaming puts heavy load on the processor, GPU and cooling system. Persistent or excessive heating can also be related to battery, software, or hardware problems, so we diagnose the device before recommending a repair. iQOO's own support materials specifically address heating during gaming and charging."
      },
      {
        question: '2. Why is my iQOO fast charging not working?',
        answer: 'A damaged charging port, cable, charger, battery, or charging circuit can reduce charging speed. We check the complete charging system.'
      },
      {
        question: '3. Can you repair iQOO AMOLED display problems?',
        answer: 'Yes, we diagnose cracked displays, lines, flickering, touch problems, and other display faults on supported iQOO models.'
      },
      {
        question: '4. Why is my iQOO fingerprint not working?',
        answer: 'The in-display fingerprint system can be affected by display damage, hardware faults, software issues, or physical impact. We diagnose the related components.'
      },
      {
        question: '5. Why does my iQOO restart while playing games?',
        answer: 'Unexpected restarts can be linked to overheating, battery problems, power delivery, software issues, or motherboard faults.'
      },
      {
        question: '6. Can you fix FPS drops on an iQOO gaming phone?',
        answer: 'Yes, we diagnose overheating, thermal throttling, storage, software, and hardware-related causes behind unusual gaming performance.'
      },
      {
        question: '7. Why is my iQOO camera shaking or not focusing?',
        answer: 'Camera module damage, stabilization faults, physical impact, or software issues can cause focusing and camera stabilization problems.'
      }
    ]
  },
];

export const MOBILE_PROBLEMS = [
  {
    slug: 'screen-replacement',
    name: 'Screen Replacement',
    problemTitle: 'Mobile Display & Glass Screen Replacement',
    h1: 'Mobile Screen Replacement Services in Ahmedabad',
    tagline: 'Cracked glass, black display, touch not working, dead pixels, or lines on the screen? We provide screen replacement for supported smartphone models.',
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
    tagline: 'Battery draining quickly, sudden shutdowns, or a swollen battery? We test battery health and replace faulty batteries with suitable replacements.',
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
    tagline: 'Is your phone charging slowly, disconnecting repeatedly, or not charging at all? We diagnose and repair charging port and charging circuit issues.',
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
    tagline: 'Phone completely dead, stuck on the logo, damaged by water, or affected by a short circuit? Our technicians perform advanced motherboard diagnostics and component-level repairs.',
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
    tagline: 'Dropped your phone in water or did it suddenly stop working? We inspect liquid-damaged devices, clean affected components, and perform board-level repairs where possible.',

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
