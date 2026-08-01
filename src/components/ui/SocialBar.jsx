'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/data/site';
import { InstagramIcon } from '@/components/icons/InstagramIcon';
import { YoutubeIcon } from '@/components/icons/YoutubeIcon';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { WhatsappIcon } from '@/components/icons/WhatsappIcon';

const socialItems = [
  {
    name: 'Instagram',
    href: siteConfig?.socials?.instagram || 'https://www.instagram.com/robuztatechlabs/',
    icon: InstagramIcon,
    gradient: 'from-fuchsia-600 via-pink-600 to-amber-500',
    glowColor: 'rgba(236,72,153,0.5)',
    floatDelay: 0
  },
  {
    name: 'YouTube',
    href: siteConfig?.socials?.youtube || 'https://www.youtube.com/@robuztatechlabs',
    icon: YoutubeIcon,
    gradient: 'from-red-600 via-red-500 to-rose-700',
    glowColor: 'rgba(239,68,68,0.5)',
    floatDelay: 0.2
  },
  {
    name: 'Facebook',
    href: siteConfig?.socials?.facebook || 'https://www.facebook.com/robuztatechlabs/',
    icon: FacebookIcon,
    gradient: 'from-blue-600 via-blue-500 to-indigo-700',
    glowColor: 'rgba(59,130,246,0.5)',
    floatDelay: 0.4
  },
  {
    name: 'WhatsApp',
    href: siteConfig?.whatsappHref || 'https://wa.me/919992452459',
    icon: WhatsappIcon,
    gradient: 'from-emerald-500 via-teal-600 to-emerald-700',
    glowColor: 'rgba(16,185,129,0.5)',
    floatDelay: 0.6
  }
];

export function SocialBar({ size = 'md' }) {
  const isSmall = size === 'sm';
  const boxDimension = isSmall ? 'h-10 w-10' : 'h-12 w-12';
  const iconSize = isSmall ? 20 : 24;

  return (
    <div className="flex items-center gap-3.5 py-2">
      {socialItems.map((item) => {
        const IconComponent = item.icon;

        return (
          <div key={item.name} className="relative group">
            {/* Glow Aura Accent */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 pointer-events-none"
              style={{ background: item.glowColor }}
            />

            {/* Interactive Motion Button */}
            <motion.a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: item.floatDelay
              }}
              whileHover={{
                scale: 1.18,
                y: -6,
                rotate: 5,
                transition: { type: 'spring', stiffness: 350, damping: 15 }
              }}
              whileTap={{ scale: 0.94 }}
              className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-tr ${item.gradient} text-white shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-white/20 backdrop-blur-sm ${boxDimension}`}
              title={`Follow Robuzta Techlabs on ${item.name}`}
              aria-label={`Robuzta Techlabs ${item.name}`}
            >
              {/* Internal SVG Icon */}
              <div className="relative z-10 text-white drop-shadow-md flex items-center justify-center">
                <IconComponent size={iconSize} className="text-white" />
              </div>
            </motion.a>
          </div>
        );
      })}
    </div>
  );
}
