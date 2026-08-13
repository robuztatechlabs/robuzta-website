/**
 * Data definitions for Software Services in Ahmedabad.
 * Adheres strictly to Robuzta Techlabs brand standards and realistic software repair capabilities.
 */

export const SOFTWARE_BRANDS = [
  { name: 'Windows 11 / 10 Pro', logo: '/assets/brands/windows.svg', tag: 'Genuine OS & Driver Updates' },
  { name: 'Microsoft Office 365', logo: '/assets/brands/office.svg', tag: 'Word, Excel, PowerPoint & Outlook' },
  { name: 'Microsoft System', logo: '/assets/brands/microsoft.webp', tag: 'Surface & Windows Optimization' },
  { name: 'Apple macOS & iOS', logo: '/assets/brands/apples.webp', tag: 'macOS Sequoia & iOS System Fix' }
];

export const SOFTWARE_SERVICES_PAGE_DATA = {
  h1: 'Computer & Laptop Software Services in Ahmedabad',
  tagline: 'Genuine Windows & MS Office installation, virus & spyware removal, BIOS password unlock, and automated data backup migration services.',
  metaTitle: 'Software Services in Ahmedabad | Windows, Office, Virus & BIOS | Robuzta',
  metaDescription: 'Expert laptop & PC software services in Ahmedabad. Clean Windows 11/10 setup, MS Office activation, deep malware cleanup & BIOS unlock with 100% data safety.',
  canonicalUrl: 'https://robuzta.com/software-services/',

  services: [
    {
      id: 'windows-installation',
      title: 'Genuine Windows Installation & Migration',
      summary: 'Clean installation of Windows 11 / 10 Pro with official digital license activation, hardware drivers & speed tuning.',
      details: [
        'Clean OS installation with full partition table alignment (GPT/UEFI)',
        'Installation of official OEM motherboard, chipset & graphics drivers',
        'Windows Update stabilization & bloatware telemetry removal'
      ],
      turnaround: '1 – 2 Hours',
      price: 'Starts ₹499'
    },
    {
      id: 'ms-office-installation',
      title: 'MS Office Installation & Outlook Setup',
      summary: 'Official Microsoft 365 / Office 2021/2024 Pro suite setup with Outlook PST/OST email configuration.',
      details: [
        'Installation of Word, Excel, PowerPoint, Access & Outlook',
        'Outlook email account configuration with PST data file import',
        'VBA macro & Excel add-in compatibility verification'
      ],
      turnaround: '30 – 60 Mins',
      price: 'Starts ₹399'
    },
    {
      id: 'virus-malware-removal',
      title: 'Virus, Trojan & Ransomware Cleanup',
      summary: 'Pop-ups, browser hijacking, slow PC response, or trojan infection? Deep rootkit scan & security shield setup.',
      details: [
        'Deep offline boot-time scanning to remove hidden rootkits & trojans',
        'Browser hijacker, adware & cryptocurrency miner purge',
        'Installation of lightweight genuine Antivirus protection'
      ],
      turnaround: '1 – 2 Hours',
      price: 'Starts ₹599'
    },
    {
      id: 'bios-unlock',
      title: 'Master BIOS Unlock & EEPROM Repair',
      summary: 'Locked out by laptop BIOS password, supervisor lock, or corrupted firmware update flash?',
      details: [
        'Master BIOS password removal for Dell, HP, Lenovo, ASUS & Acer',
        'Desoldering & EEPROM programmer flashing for corrupted BIOS chips',
        'Intel Management Engine (ME Region) cleaning & TPM reset'
      ],
      turnaround: '2 – 4 Hours',
      price: 'Starts ₹999'
    },
    {
      id: 'data-backup-transfer',
      title: 'Data Backup & System Migration',
      summary: 'Moving to a new laptop or upgrading to SSD? Seamless transfer of your documents, photos & software data.',
      details: [
        'Complete OS drive cloning from old HDD to fast NVMe SSD',
        'User profile data migration (Desktop, Documents, Downloads, Chrome bookmarks)',
        'Automated local external drive & cloud backup schedule setup'
      ],
      turnaround: '1 – 2 Hours',
      price: 'Starts ₹499'
    }
  ],

  faqs: [
    {
      question: 'Will I lose my files or photos during Windows installation?',
      answer: 'No! We perform non-destructive Windows installation with full backup of your User profile data (Documents, Pictures, Downloads) before wiping system partitions.'
    },
    {
      question: 'How do I know if my computer has a virus or spyware infection?',
      answer: 'Common symptoms include unexpected browser pop-ups, CPU usage at 100% while idle, files renamed with weird extensions, or slow startup response.'
    },
    {
      question: 'Can you unlock BIOS passwords on corporate laptops like ThinkPad or Dell Latitude?',
      answer: 'Yes! We perform chip-level EEPROM programmer reading and ME region cleaning to remove supervisor BIOS passwords cleanly.'
    }
  ]
};
