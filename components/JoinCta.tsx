'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { JhotiPattern } from '@/components/graphics/JhotiPattern';

export function JoinCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="join" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 opacity-[0.06]">
        <JhotiPattern />
      </div>
      <div className="section-shell relative">
        <div className="mx-auto max-w-[760px] rounded-[30px] border border-borderLight bg-[#FAF4EC] px-6 py-14 text-center shadow-soft sm:px-10 lg:px-16">
          <motion.h2
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-[2.5rem] leading-none tracking-[-0.08em] text-espresso sm:text-[3.5rem] lg:text-[5rem]"
          >
            {siteContent.join.heading}
          </motion.h2>

          <motion.p
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-[620px] text-lg text-muted"
          >
            {siteContent.join.paragraph}
          </motion.p>

          <motion.div
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
              <Link href="/signup" className="focus-ring inline-flex items-center justify-center rounded-lg bg-orange px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-orangeDark hover:shadow-[0_14px_28px_rgba(198,90,26,0.28)]">
                {siteContent.join.primaryCta}
              </Link>
            </motion.div>
            <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
              <Link href="/signin" className="focus-ring inline-flex items-center justify-center rounded-lg border border-orange bg-transparent px-7 py-3.5 text-base font-semibold text-orange transition-colors hover:bg-orangeTint">
                {siteContent.join.secondaryCta}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
