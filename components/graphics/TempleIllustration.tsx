import { motion } from 'framer-motion';

export function TempleIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0.9, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative h-[440px] w-full overflow-hidden rounded-[28px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,90,26,0.22),_transparent_48%)]" />
      <svg viewBox="0 0 760 520" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="skyGradient" x1="0%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#F9E6D0" />
            <stop offset="55%" stopColor="#F3CDA0" />
            <stop offset="100%" stopColor="#E9B07C" />
          </linearGradient>
          <linearGradient id="hillGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#C5733A" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#A55E29" stopOpacity="0.64" />
          </linearGradient>
          <linearGradient id="templeStone" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#F4E6D7" />
            <stop offset="100%" stopColor="#E3C7A9" />
          </linearGradient>
        </defs>

        <rect width="760" height="520" fill="url(#skyGradient)" />
        <circle cx="580" cy="90" r="58" fill="#FFF0D3" fillOpacity="0.36" />

        <g opacity="0.8">
          <path d="M0 360 C 130 330, 190 302, 300 340 S 470 375, 620 334 S 720 312, 760 326 L760 520 L0 520 Z" fill="url(#hillGradient)" />
          <path d="M0 388 C 120 372, 240 330, 350 366 S 560 394, 760 350 L760 520 L0 520 Z" fill="#D68B56" fillOpacity="0.36" />
        </g>

        <g transform="translate(188 110)">
          <path d="M140 250 L210 250 L210 308 L140 308 Z" fill="url(#templeStone)" />
          <path d="M152 210 L198 210 L218 250 L132 250 Z" fill="#E4C8A5" />

          <g>
            <path d="M156 80 L182 52 L208 80 L208 220 L156 220 Z" fill="#F5D9B1" />
            <path d="M125 80 L156 40 L182 80" fill="none" stroke="#E9B97D" strokeWidth="4" strokeLinecap="round" />
            <path d="M182 40 L208 80 L238 80" fill="none" stroke="#E9B97D" strokeWidth="4" strokeLinecap="round" />
            <path d="M152 110 L174 84 L196 110" fill="none" stroke="#D88D51" strokeWidth="4" strokeLinecap="round" />
            <path d="M138 125 H218" stroke="#C87A41" strokeWidth="6" strokeLinecap="round" />
            <path d="M152 132 H204" stroke="#C87A41" strokeWidth="5" strokeLinecap="round" />
          </g>

          <g>
            <path d="M102 86 L130 86 L130 220 L102 220 Z" fill="#F0E0CA" />
            <path d="M222 86 L250 86 L250 220 L222 220 Z" fill="#F0E0CA" />
            <path d="M82 220 L270 220 L254 250 L98 250 Z" fill="#E5B887" />
            <path d="M122 142 H230" stroke="#D5945C" strokeWidth="4" strokeLinecap="round" />
            <path d="M110 170 H242" stroke="#D5945C" strokeWidth="4" strokeLinecap="round" />
            <path d="M124 196 H228" stroke="#D5945C" strokeWidth="4" strokeLinecap="round" />
            <circle cx="176" cy="124" r="12" fill="#E6B877" />
            <path d="M176 104 V144" stroke="#B5642C" strokeWidth="3" />
            <path d="M160 120 H192" stroke="#B5642C" strokeWidth="3" />
          </g>

          <g>
            <path d="M176 20 L192 10 L205 20 L196 34 L176 34 Z" fill="#C65A1A" />
            <path d="M176 20 V10" stroke="#B5642C" strokeWidth="4" />
            <path d="M176 10 L182 0 L188 10" fill="none" stroke="#B5642C" strokeWidth="3" strokeLinecap="round" />
            <path d="M205 20 L216 30 L210 48 L188 48 L176 48" fill="none" stroke="#C65A1A" strokeWidth="3" />
            <path d="M176 48 L150 48 L145 32 L162 20" fill="none" stroke="#C65A1A" strokeWidth="3" />
          </g>

          <g fill="#F5D58B" opacity="0.8">
            <circle cx="108" cy="92" r="10" />
            <circle cx="236" cy="90" r="10" />
          </g>
        </g>

        <g opacity="0.7" fill="#F9E0B7">
          <path d="M83 167 c8-18 18-18 26 0" />
          <path d="M640 180 c7-16 18-16 26 0" />
          <path d="M446 208 c8-18 18-18 26 0" />
        </g>
      </svg>
    </motion.div>
  );
}
