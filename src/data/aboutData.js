/**
 * Data definitions for About Robuzta Techlabs.
 * Adheres strictly to Robuzta Techlabs brand standards and 6-page PDF content.
 */

export const ABOUT_PAGE_DATA = {
  h1: 'ABOUT US',
  mainHeading: 'Who We Are',
  introParagraphs: [
    'At Robuzta Techlabs, we are a dedicated team of hardware & software engineers,  technicians, and diagnostic specialists. We believe repairing a device is not just about swapping a part—it is about deep technical understanding, circuit-level troubleshooting, and precision engineering.',
    'From complex MacBook motherboard micro-soldering and laptop motherboard repairs to smartphone chip diagnostics and gaming rig overhauls, our engineering team brings deep bench-level expertise, transparent communication, and meticulous craftsmanship to every device.'
  ],
  metaTitle: 'Who We Are | About Robuzta Techlabs Ahmedabad',
  metaDescription: 'Learn who we are at Robuzta Techlabs. We are a specialized team of hardware engineers and  technicians providing precision chip-level repairs across laptops, MacBooks, smartphones, and gaming PCs in Ahmedabad.',
  canonicalUrl: 'https://robuzta.com/about',

  whoWeAre: {
    badge: 'Our Team & Engineering Core',
    heading: 'Engineers & Technicians Behind Every Repair',
    paragraphs: [
      'We are an engineering-driven team of skilled technicians and hardware specialists who take on everyday device issues as well as the complex board failures that other service centers turn away.',
      'Behind our open workbenches, our technicians and micro-soldering engineers analyze schematics, measure voltage lines, and diagnose motherboards under microscopes to identify the true root cause before picking up a tool.',
      "That's why our engineers diagnose first, before repairing.",
      'From precision BGA chip reballing and power rail diagnostics to OEM screen, battery, and port replacements, our team combines decades of cumulative lab experience with cutting-edge diagnostic equipment.'
    ]
  },

  whatWeDo: {
    badge: 'What We Do',
    heading: 'One Place for Multiple Technology Services',
    services: [
      {
        icon: 'Laptop',
        title: 'Laptop & MacBook Repair',
        description: 'Charging problems, broken screens, overheating, battery issues, motherboard repair, SSD upgrades, keyboard replacement, and other hardware problems.'
      },
      {
        icon: 'Smartphone',
        title: 'Mobile Phone Repair',
        description: 'Screen replacement, battery issues, charging faults, camera problems, motherboard repair, water damage, and other smartphone hardware issues.'
      },
      {
        icon: 'Gamepad2',
        title: 'Gaming PC Repair & Builds',
        description: 'Gaming PC troubleshooting, GPU problems, overheating, FPS issues, upgrades, custom PC builds, cooling, and performance optimization.'
      },
      {
        icon: 'HardDrive',
        title: 'Data Recovery',
        description: 'Recovery solutions for failed HDDs, SSDs, memory cards, USB drives, formatted storage, deleted files, and damaged devices.'
      },
      {
        icon: 'Wrench',
        title: 'Software Services',
        description: 'Windows installation, boot problems, driver issues, system crashes, malware removal, software troubleshooting, and system optimization.'
      }
    ]
  },

  ourApproach: {
    badge: 'Our Approach',
    heading: 'Diagnose First. Repair With Purpose.',
    description: "We don't believe in replacing parts without understanding the problem. Our repair process generally follows:",
    steps: [
      {
        number: '01',
        title: 'Device Inspection',
        description: 'We inspect the device and understand the symptoms.'
      },
      {
        number: '02',
        title: 'Problem Diagnosis',
        description: 'We identify the likely cause and test the relevant components.'
      },
      {
        number: '03',
        title: 'Repair Recommendation',
        description: 'We explain the required repair and available options before proceeding.'
      },
      {
        number: '04',
        title: 'Professional Repair',
        description: 'The repair is performed using suitable tools, components, and procedures.'
      },
      {
        number: '05',
        title: 'Testing',
        description: 'The device is tested after repair to make sure the reported issue has been addressed.'
      }
    ]
  },

  whyChooseUs: {
    badge: 'Why Customers Choose Us',
    heading: 'Built Around Trust, Not Just Repairs',
    points: [
      {
        title: 'Proper Diagnosis',
        description: 'We focus on identifying the actual fault instead of immediately replacing expensive components.'
      },
      {
        title: 'Transparent Communication',
        description: 'We explain the problem, repair requirement, and estimated cost before proceeding.'
      },
      {
        title: 'Advanced Repair Capability',
        description: 'From basic replacements to board-level and chip-level diagnostics, we handle a wide range of hardware problems.'
      },
      {
        title: 'Customer Privacy',
        description: 'We treat your personal files, photos, documents, and device information with care and respect.'
      },
      {
        title: 'Quality Repair Solutions',
        description: 'We select replacement components according to the device model and repair requirement.'
      },
      {
        title: 'Warranty on Eligible Repairs',
        description: 'Eligible repairs and replacement parts are covered according to our applicable warranty terms.'
      }
    ]
  },

  ourPhilosophy: {
    badge: 'Our Repair Philosophy',
    heading: "We Don't Just Want to Fix the Device. We Want You to Understand the Problem.",
    description: 'A customer should know what happened, why it happened, and what is being done to fix it.',
    beliefsTitle: "That's why we believe in:",
    beliefs: [
      'Clear Diagnosis',
      'Honest Communication',
      'Careful Repair',
      'Proper Testing',
      'Responsible Service'
    ]
  },

  ourWorkshop: {
    badge: 'Our Workshop',
    heading: 'Where Diagnosis Meets Hands-On Repair',
    paragraphs: [
      'Our workshop is equipped to handle everyday device servicing as well as advanced hardware troubleshooting.',
      'We work with professional diagnostic tools and repair equipment for laptops, smartphones, gaming PCs, storage devices, and other supported electronics.',
      'From a simple charging-port issue to a complex motherboard fault, every device gets the attention it needs.'
    ]
  },

  servingAhmedabad: {
    badge: 'Serving Customers in Ahmedabad',
    heading: 'Local Repair Support You Can Rely On',
    paragraphs: [
      'We provide technology repair services across Ahmedabad, including areas such as South Bopal, Tragad, and nearby locations.',
      'Whether you are a student, professional, gamer, business owner, creator, or everyday technology user, our goal is simple:'
    ],
    goal: 'Get your device working properly again—with the right repair, not an unnecessary replacement.'
  },

  ourPromise: {
    badge: 'Our Promise',
    heading: 'Your Device. Your Data. Our Responsibility.',
    description: "We understand that a device can contain important work, personal photos, business files, and memories. That's why we approach every repair with care.",
    aims: [
      'Honest Diagnosis',
      'Clear Communication',
      'Careful Handling',
      'Privacy-Focused Service',
      'Professional Repair',
      'Proper Testing'
    ]
  },

  faqsTitle: 'Frequently Asked Questions',
  faqsSubtitle: 'About Robuzta TechLabs',
  faqs: [
    {
      question: 'What devices do you repair?',
      answer: 'We provide repair services for laptops, MacBooks, smartphones, gaming PCs, supported drones, and storage devices.'
    },
    {
      question: 'Do you provide motherboard repair?',
      answer: 'Yes. We provide advanced motherboard and chip-level diagnostics and repair for supported devices.'
    },
    {
      question: 'Do you diagnose the device before repairing it?',
      answer: 'Yes. We first identify the problem and explain the recommended repair before proceeding.'
    },
    {
      question: 'Do you repair both hardware and software problems?',
      answer: 'Yes. Our services cover hardware repairs as well as Windows, macOS, drivers, boot issues, and other software-related problems.'
    },
    {
      question: 'Can you recover data from a dead device?',
      answer: 'In many cases, data recovery may be possible depending on the condition of the storage device and hardware.'
    },
    {
      question: 'Do you provide warranty on repairs?',
      answer: 'Warranty is available on eligible repairs and replacement components according to the applicable warranty terms.'
    },
    {
      question: 'Do you provide services in Ahmedabad?',
      answer: 'Yes, we provide repair services across Ahmedabad, including South Bopal, Tragad, and nearby areas.'
    }
  ],

  getInTouch: {
    badge: 'GET TO KNOW US',
    heading: 'Have a Device That Needs Attention?',
    description: "Whether it's a laptop that won't turn on, a phone with a broken display, a gaming PC crashing under load, or a storage device containing important data—we can start with a proper diagnosis.",
    callLabel: 'Talk to Our Repair Team',
    phone: '+91 999 245 245 9'
  }
};
