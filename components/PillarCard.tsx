'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Building2, Heart, Lightbulb, Users } from 'lucide-react';
import { siteContent } from '@/lib/content';

const iconMap = {
  Users,
  Landmark: Building2,
  Heart,
  BookOpen,
  Lightbulb,
};

export function PillarCard({
  item,
  index,
}: {
  item: (typeof siteContent.pillars.items)[number];
  index: number;
}) {
  const Icon = iconMap[item.icon as keyof typeof iconMap] || Users;
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-borderLight bg-[#FAF4EC] p-5 shadow-soft transition-all duration-300 hover:border-orange hover:shadow-[0_18px_38px_rgba(43,24,16,0.09)]"
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-orange/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(198,90,26,0.08),_transparent_32%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orangeTint text-orange transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
          <Icon size={24} strokeWidth={1.9} />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-orange bg-white text-xs font-semibold text-orange shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
          {index + 1}
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <h3 className="text-[2rem] font-bold leading-none tracking-[-0.04em] text-espresso">{item.title}</h3>
        <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
      </div>

      <div className="pointer-events-none absolute inset-x-5 bottom-0 h-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <svg viewBox="0 0 300 80" className="h-full w-full" aria-hidden="true">
          <g fill="none" stroke="#C65A1A" strokeOpacity="0.22" strokeWidth="1.2">
            <path d="M8 36 C 52 10, 70 50, 100 32 S 152 12, 174 36 S 232 62, 292 28" />
            <path d="M14 56 C 52 30, 72 60, 98 44 S 148 22, 178 40 S 220 64, 286 38" />
          </g>
        </svg>
      </div>
    </motion.article>
  );
}
