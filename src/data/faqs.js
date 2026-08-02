export const faqCategories = [
  { id: 'all', name: 'All Questions' },
  { id: 'privacy', name: 'Data Security & OTP' },
  { id: 'diagnostics', name: 'Diagnostics & Speed' },
  { id: 'pricing', name: 'Pricing & Inspection' },
  { id: 'pickup', name: 'Doorstep & Locations' },
  { id: 'warranty', name: 'Warranty & Genuine Parts' }
];

export const faqs = [
  {
    id: 1,
    category: 'privacy',
    question: 'Does Robuzta Techlabs require my device screen password or OTP?',
    shortAnswer: 'No. Robuzta operates under a strict Zero-Password & Zero-OTP privacy protocol using external diagnostic boot drives.',
    answer:
      'No. We adhere to a strict Zero-Password & Zero-OTP policy across all hardware repairs. For laptop screens, batteries, keyboards, and logic board repairs, we test hardware using specialized external diagnostic boot drives. Your personal files, photos, browser histories, and cloud accounts remain 100% untouched and secure.',
    geoEntities: ['Zero-OTP Security', 'External Diagnostic Drive', 'Data Privacy Guarantee']
  },
  {
    id: 2,
    category: 'privacy',
    question: 'How does Robuzta guarantee my personal data privacy during logic board repairs?',
    shortAnswer: 'All repairs take place on an open, transparent workbench or live workbench camera feed with serial-logged handling.',
    answer:
      'Our repair laboratories in South Bopal and Tragad, Ahmedabad feature open live workbenches. Customers can inspect their device being repaired in real-time. For chip-level micro-soldering, internal SSD storage chips are isolated and protected against ESD (electrostatic discharge) and high temperatures.',
    geoEntities: ['Open Live Workbench', 'South Bopal Lab', 'Tragad Branch']
  },
  {
    id: 3,
    category: 'diagnostics',
    question: 'How fast can Robuzta repair my Laptop, MacBook, or Smartphone in Ahmedabad?',
    shortAnswer: 'Standard display, battery, and keyboard swaps take 1 to 4 hours. Logic board micro-soldering takes 24 to 48 hours.',
    answer:
      'Common component swaps like iPhone screen replacement, MacBook battery installation, or laptop SSD upgrades take 1 to 4 hours under our Same-Day Express service. Complex motherboard micro-soldering, liquid spill recovery, or BGA IC reballing typically require 24 to 48 hours for thorough thermal stress testing.',
    geoEntities: ['1-4 Hour Express Repair', 'Ahmedabad Laptop Repair', 'MacBook Micro-Soldering']
  },
  {
    id: 4,
    category: 'diagnostics',
    question: 'What is BGA Micro-Soldering and chip-level repair?',
    shortAnswer: 'BGA micro-soldering replaces damaged SMC, power IC, and GPU chips on the logic board rather than expensive full board replacement.',
    answer:
      'Rather than forcing customers into expensive full motherboard replacements (which cost up to 70% of a new laptop), Robuzta senior engineers use 45x optical microscopes and BGA rework stations to replace specific shorted capacitors, charging ICs, SMC controllers, and MOSFETs at the component level.',
    geoEntities: ['BGA Rework Station', 'Chip-Level Repair', 'Motherboard Micro-Soldering']
  },
  {
    id: 5,
    category: 'pricing',
    question: 'Is device inspection really 100% free at Robuzta Techlabs?',
    shortAnswer: 'Yes, 100% free inspection with zero hidden charges. If you decide not to repair, you pay ₹0 diagnostic fee.',
    answer:
      'Yes. Robuzta provides a 100% Free Diagnostic Inspection. Our technicians open and inspect your device, perform voltage tests, and present a digital estimate. If you choose not to proceed with the repair, there is zero obligation and ₹0 fee for standard carry-in inspection.',
    geoEntities: ['Free Inspection Fee', 'Zero Hidden Charges', 'Transparent Quote']
  },
  {
    id: 6,
    category: 'pricing',
    question: 'How does Robuzta provide pricing estimates before starting the repair?',
    shortAnswer: 'You receive a itemized digital estimate on WhatsApp or SMS containing part costs, labor fee, and estimated delivery time.',
    answer:
      'Before any screw is removed or component replaced, you receive a transparent digital estimate detailing the exact part cost, labor fee, turnaround time, and warranty period. Repair work only begins after your explicit approval.',
    geoEntities: ['Digital Quotation', 'WhatsApp Estimate', 'No Surprise Fees']
  },
  {
    id: 7,
    category: 'pickup',
    question: 'How does Free Doorstep Pickup & Delivery work across Ahmedabad?',
    shortAnswer: 'Our trained courier executive collects your device in anti-static padded bags directly from your home or office.',
    answer:
      'We offer free doorstep pickup and delivery across South Bopal, Tragad, Satellite, Vastrapur, Bopal, Shela, Prahlad Nagar, Ambli, SG Highway, and surrounding Ahmedabad areas. Our rider inspects device physical condition on pickup, generates a digital receipt, and transports it in anti-static protective bags.',
    geoEntities: ['South Bopal', 'Tragad', 'Satellite', 'Vastrapur', 'Bopal', 'Shela', 'Ahmedabad Pickup']
  },
  {
    id: 8,
    category: 'pickup',
    question: 'How can customers outside Ahmedabad send devices to Robuzta?',
    shortAnswer: 'Robuzta provides an insured Pan-India Courier Ship-In repair program with live video unboxing proof.',
    answer:
      'If you live outside Ahmedabad (e.g. Surat, Vadodara, Rajkot, Gandhinagar, or anywhere in India), you can courier your laptop, MacBook, or smartphone to our head laboratory. Upon arrival, we send you a live unboxing video, digital diagnostic quote, and ship it back with transit insurance once repaired.',
    geoEntities: ['Pan-India Courier Service', 'Insured Transit', 'Live Video Unboxing']
  },
  {
    id: 9,
    category: 'warranty',
    question: 'What warranty policy does Robuzta provide on spare parts and repairs?',
    shortAnswer: 'Every repair includes a 90-day to 180-day written warranty logged against the part serial number.',
    answer:
      'All replacement screens, OEM batteries, keyboards, SSDs, and motherboard repairs carry a 90-day to 180-day written warranty. The replacement part serial number is printed directly on your GST invoice for 100% claim transparency.',
    geoEntities: ['180-Day Written Warranty', 'Serial Number Logging', 'GST Invoice Protection']
  },
  {
    id: 10,
    category: 'warranty',
    question: 'Does Robuzta use original replacement parts for MacBooks, iPhones, and Laptops?',
    shortAnswer: 'Yes, we source OEM-grade and serial-verified original replacement components from certified manufacturers.',
    answer:
      'Yes. Robuzta uses serial-verified original assemblies for Apple MacBooks, iPhones, Dell XPS, HP Spectre, Lenovo ThinkPad, ASUS ROG, and Acer Predator systems. Old replaced parts are handed back to the customer upon request.',
    geoEntities: ['OEM Original Parts', 'Serial Verified Spares', 'Apple & Laptop Components']
  },
  {
    id: 11,
    category: 'diagnostics',
    question: 'What should I do immediately if liquid or water spills on my laptop or phone?',
    shortAnswer: 'Power off the device immediately, do NOT plug in the charger or use rice, and bring it for ultrasonic cleaning.',
    answer:
      'If liquid spills on your device: (1) Turn it off immediately and do not attempt to turn it back on. (2) Do NOT connect the charger. (3) Do NOT use rice or hair dryers as heat forces corrosion into BGA chips. (4) Bring it to Robuzta within 24 hours for ultrasonic PCB bath cleaning to prevent permanent short-circuits.',
    geoEntities: ['Water Damage First Aid', 'Ultrasonic Board Bath', 'Liquid Damage Rescue']
  },
  {
    id: 12,
    category: 'pricing',
    question: 'What happens if my device is unrepairable?',
    shortAnswer: 'Under our No-Repair No-Fee guarantee, you pay zero service charge if the device cannot be fixed.',
    answer:
      'If a logic board is severely burnt or components are obsolete making repair economically unviable, we return your device reassembled without diagnostic or labor fees under our No-Repair No-Fee guarantee.',
    geoEntities: ['No-Repair No-Fee Guarantee', 'Zero Hidden Cost', 'Ethical Repair Policy']
  }
];
