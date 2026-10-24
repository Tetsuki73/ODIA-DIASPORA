'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { PattachitraBorder } from '@/components/graphics/PattachitraBorder';

export function Vision() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="vision" className="relative py-24 lg:py-32">
      <div className="section-shell relative">
        <div className="mb-7 text-center">
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-orange"
          >
            {siteContent.vision.eyebrow}
          </motion.p>
          <motion.div
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={reduceMotion ? { scaleX: 1 } : { scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mt-3 h-px w-20 origin-center bg-orange"
          />
        </div>

        <div className="relative mx-auto max-w-[950px] rounded-[28px] border border-borderLight bg-[#FAF4EC] p-6 shadow-soft sm:p-8 lg:p-12">
          <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />
          <div className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-orange/50 to-transparent" />

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <PattachitraBorder />
          </motion.div>

          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mt-8 max-w-[780px] text-center text-[2.1rem] leading-[1.08] tracking-[-0.05em] text-espresso sm:text-[2.8rem] lg:text-[3.4rem]"
          >
            {siteContent.vision.statement}
          </motion.p>

          <motion.div
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={reduceMotion ? { scaleX: 1 } : { scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto mt-8 h-px w-28 origin-center bg-orange"
          />

          <div className="mt-8">
            <PattachitraBorder />
          </div>
        </div>
      </div>
    </section>
  );
}
