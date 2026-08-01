/* ──────────────────────────────────────────────
   Component metadata for the 3D Laptop Explorer
   info panel. Contextualized specifically around
   Robuzta Techlabs repair lab capabilities.
   ────────────────────────────────────────────── */

export const COMPONENT_DATA = {
  cpu: {
    name: 'Central Processor (CPU & BGA Socket)',
    icon: '🔲',
    color: '#0E7C7B',
    description:
      'The central computing brain. Most repair shops demand ₹35,000+ for full motherboard swaps when a CPU power rail short occurs or thermal throttling halts your machine.',
    repair:
      'At Robuzta Techlabs South Bopal, we use FLIR thermal imaging & BGA optical rework stations to replace shorted power ICs and reball CPU BGA chips at 65% lower cost. Backed by our No Fix, No Fee guarantee.',
    badge: 'ROBUZTA BGA MICRO-SOLDERING',
  },
  gpu: {
    name: 'Graphics Processor (GPU & GDDR6 VRAM)',
    icon: '🎮',
    color: '#7C3AED',
    description:
      'Dedicated NVIDIA RTX & AMD Radeon graphics processors undergo intense thermal stress in gaming laptops, leading to screen artifacts, black displays, and crashing under load.',
    repair:
      'Robuzta’s certified engineers perform BGA chip reflowing, micro-reballing, and GDDR6 VRAM IC replacement under 45× stereo microscopes with a 90-day lab warranty.',
    badge: 'ADVANCED GPU LAB REWORK',
  },
  ram1: {
    name: 'RAM Module — Primary Memory Slot',
    icon: '📊',
    color: '#3B82F6',
    description:
      'High-speed memory module handling active multitasking. Faulty RAM causes sudden Blue Screen of Death (BSOD), system freezes, and infinite boot loops.',
    repair:
      'Robuzta conducts hardware loop diagnostics and slot-level trace repairs under Zero-OTP & Zero-Password data safety protocols. Same-day memory upgrades up to 64GB available.',
    badge: 'ZERO-PASSWORD DATA SAFETY',
  },
  ram2: {
    name: 'RAM Module — Secondary Channel Slot',
    icon: '📊',
    color: '#3B82F6',
    description:
      'Enables high-bandwidth dual-channel performance. Corrupted slots or contacts cause intermittent crashes during video rendering or gaming.',
    repair:
      'We clean, repair, and calibrate SODIMM slot contacts with ESD-safe ultrasonic tools, optimizing dual-channel memory speeds for gaming PCs and MacBooks.',
    badge: 'DUAL-CHANNEL OPTIMIZATION',
  },
  ssd: {
    name: 'NVMe M.2 PCIe 4.0 SSD Storage',
    icon: '💾',
    color: '#EA580C',
    description:
      'Ultra-fast solid-state drive holding your operating system, work files, and personal data. Failures cause unbootable drives, disk read errors, or loss of critical files.',
    repair:
      'Robuzta’s lab performs chip-level NAND flash data recovery, M.2 slot repair, and high-speed drive cloning. Your personal data remains 100% private & confidential.',
    badge: 'CHIP-LEVEL DATA RECOVERY',
  },
  battery: {
    name: 'Lithium-Ion Battery Assembly',
    icon: '🔋',
    color: '#22C55E',
    description:
      'Swollen or degraded lithium pouch cells are a dangerous fire risk and press against the trackpad or aluminum palm rest, causing physical chassis bulging.',
    repair:
      'Robuzta safely extracts swollen cells and installs genuine OEM grade-A battery packs backed by our official 180-day replacement warranty in Ahmedabad.',
    badge: '180-DAY OEM WARRANTY',
  },
  wifi: {
    name: 'Wi-Fi 6E & Bluetooth 5.3 Module',
    icon: '📡',
    color: '#06B6D4',
    description:
      'Wireless networking card and antenna array. Damaged motherboard traces or IPEX antenna cable snaps cause weak Wi-Fi signals and frequent Bluetooth disconnections.',
    repair:
      'We repair delicate motherboard antenna trace lines, calibrate RF shielding, and install serial-verified Wi-Fi 6E cards with instant diagnostic verification.',
    badge: 'OEM PART REPLACEMENT',
  },
  fan: {
    name: 'Turbo Blower Fan & Copper Heatpipes',
    icon: '🌀',
    color: '#64748B',
    description:
      'Thermal management system keeping CPU & GPU temps stable. Dust clogging or dried thermal paste causes thermal throttling, loud fan noise, and sudden shutdowns.',
    repair:
      'Robuzta’s thermal overhaul includes ultrasonic fan cleaning, copper heatpipe pressure testing, and high-performance Thermal Grizzly Kryonaut repasting to drop temps by up to 25°C.',
    badge: 'THERMAL GRIZZLY REPASTE',
  },
};
