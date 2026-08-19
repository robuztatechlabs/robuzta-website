/* ──────────────────────────────────────────────
   Component metadata for the 3D Laptop Explorer
   info panel. Contextualized specifically around
   Robuzta Techlabs repair lab capabilities.
   ────────────────────────────────────────────── */

export const COMPONENT_DATA = {
  cpu: {
    name: 'Motherboard & Logic Board Repair',
    icon: '🔲',
    color: '#0E7C7B',
    href: '/laptop-repair/motherboard-repair/',
    description:
      'The central computing brain. Most repair shops demand ₹35,000+ for full motherboard swaps when a CPU power rail short occurs or thermal throttling halts your machine.',
    repair:
      'At Robuzta Techlabs South Bopal, we use FLIR thermal imaging & BGA optical rework stations to replace shorted power ICs and reball CPU BGA chips at 65% lower cost.',
    badge: 'ROBUZTA BGA MICRO-SOLDERING',
  },
  gpu: {
    name: 'GPU & Graphics Card Repair',
    icon: '🎮',
    color: '#7C3AED',
    href: '/laptop-repair/motherboard-repair/',
    description:
      'Dedicated NVIDIA RTX & AMD Radeon graphics processors undergo intense thermal stress in gaming laptops, leading to screen artifacts, black displays, and crashing under load.',
    repair:
      'Robuzta’s certified engineers perform BGA chip reflowing, micro-reballing, and GDDR6 VRAM IC replacement under 45× stereo microscopes with a lab warranty.',
    badge: 'ADVANCED GPU LAB REWORK',
  },
  ram1: {
    name: 'RAM Upgrade & Speed Optimization',
    icon: '📊',
    color: '#3B82F6',
    href: '/laptop-repair/ram-ssd-upgrade/',
    description:
      'High-speed memory module handling active multitasking. Faulty RAM causes sudden Blue Screen of Death (BSOD), system freezes, and infinite boot loops.',
    repair:
      'Robuzta conducts hardware loop diagnostics and slot-level trace repairs under Zero-OTP & Zero-Password data safety protocols. Same-day memory upgrades up to 64GB available.',
    badge: 'ZERO-PASSWORD DATA SAFETY',
  },
  ram2: {
    name: 'Dual-Channel Memory Calibration',
    icon: '📊',
    color: '#3B82F6',
    href: '/laptop-repair/ram-ssd-upgrade/',
    description:
      'Enables high-bandwidth dual-channel performance. Corrupted slots or contacts cause intermittent crashes during video rendering or gaming.',
    repair:
      'We clean, repair, and calibrate SODIMM slot contacts with ESD-safe ultrasonic tools, optimizing dual-channel memory speeds for gaming PCs and MacBooks.',
    badge: 'DUAL-CHANNEL OPTIMIZATION',
  },
  ssd: {
    name: 'SSD Storage Upgrade & Data Recovery',
    icon: '💾',
    color: '#EA580C',
    href: '/laptop-repair/ram-ssd-upgrade/',
    description:
      'Ultra-fast solid-state drive holding your operating system, work files, and personal data. Failures cause unbootable drives, disk read errors, or loss of critical files.',
    repair:
      'Robuzta’s lab performs chip-level NAND flash data recovery, M.2 slot repair, and high-speed drive cloning. Your personal data remains 100% private & confidential.',
    badge: 'CHIP-LEVEL DATA RECOVERY',
  },
  battery: {
    name: 'Genuine Battery Replacement',
    icon: '🔋',
    color: '#22C55E',
    href: '/laptop-repair/battery-replacement/',
    description:
      'Swollen or degraded lithium pouch cells are a dangerous fire risk and press against the trackpad or aluminum palm rest, causing physical chassis bulging.',
    repair:
      'Robuzta safely extracts swollen cells and installs genuine OEM grade-A battery packs backed by our official 180-day replacement warranty in Ahmedabad.',
    badge: '180-DAY OEM WARRANTY',
  },
  wifi: {
    name: 'Wi-Fi & Network Card Service',
    icon: '📡',
    color: '#06B6D4',
    href: '/laptop-repair/motherboard-repair/',
    description:
      'Wireless networking card and antenna array. Damaged motherboard traces or IPEX antenna cable snaps cause weak Wi-Fi signals and frequent Bluetooth disconnections.',
    repair:
      'We repair delicate motherboard antenna trace lines, calibrate RF shielding, and install serial-verified Wi-Fi 6E cards with instant diagnostic verification.',
    badge: 'OEM PART REPLACEMENT',
  },
  fan: {
    name: 'Fan & Thermal Service (Overheating Fix)',
    icon: '🌀',
    color: '#64748B',
    href: '/laptop-repair/fan-repair/',
    description:
      'Thermal management system keeping CPU & GPU temps stable. Dust clogging or dried thermal paste causes thermal throttling, loud fan noise, and sudden shutdowns.',
    repair:
      'Robuzta’s thermal overhaul includes ultrasonic fan cleaning, copper heatpipe pressure testing, and high-performance Thermal Grizzly Kryonaut repasting to drop temps by up to 25°C.',
    badge: 'THERMAL GRIZZLY REPASTE',
  },
};

