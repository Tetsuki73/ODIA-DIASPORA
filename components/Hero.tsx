'use client';

import Link from 'next/link';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { TempleIllustration } from '@/components/graphics/TempleIllustration';
import { KonarkWheel } from '@/components/graphics/KonarkWheel';
import { LotusBloom } from '@/components/graphics/LotusBloom';

const headlineWords = [siteContent.hero.headline.line1, siteContent.hero.headline.line2, siteContent.hero.headline.line3];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [8, -8]);
  const rotateY = useTransform(x, [-80, 80], [-8, 8]);
  const springX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.8 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    x.set((px - 0.5) * 18);
    y.set((py - 0.5) * 18);
  };

  return (
    <section className="section-shell relative pb-24 pt-14 sm:pt-20 lg:pb-32 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[7%] top-20 opacity-25">
          <LotusBloom className="h-20 w-20 text-orange" />
        </div>
        <div className="absolute right-[14%] top-14 opacity-20">
          <LotusBloom className="h-16 w-16" />
        </div>
        <div className="absolute left-[56%] top-10 h-[260px] w-[260px] rounded-full bg-orange/10 blur-3xl" />
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="max-w-[600px]">
          <motion.p
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 inline-block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-orange"
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {siteContent.hero.eyebrow}
          </motion.p>

          <div className="space-y-3">
            {headlineWords.map((line, idx) => (
              <motion.h1
                key={line}
                initial={reduceMotion ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' } : { opacity: 0, y: 22, clipPath: 'inset(0 100% 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }}
                transition={{ duration: 0.75, delay: 0.18 + idx * 0.12, ease: 'easeOut' }}
                className="max-w-[580px] text-[2.8rem] leading-[0.95] tracking-[-0.07em] text-espresso sm:text-[4rem] lg:text-[5.5rem]"
              >
                {idx === 1 ? (
                  <>
                    {line.substring(0, line.length - 1)}
                    <span className="italic text-orange">{line.slice(-1)}</span>
                  </>
                ) : idx === 2 ? (
                  <>
                    <span className="italic text-orange">{line}</span>
                  </>
                ) : (
                  line
                )}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-7 max-w-[550px] text-lg leading-8 text-muted"
          >
            {siteContent.hero.paragraph}
          </motion.p>

          <motion.div
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/signup" className="focus-ring inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 hover:bg-orangeDark hover:shadow-[0_12px_24px_rgba(198,90,26,0.24)]">
              {siteContent.hero.primaryCta}
            </Link>
            <Link href="/signin" className="focus-ring inline-flex items-center justify-center rounded-lg border border-orange bg-transparent px-6 py-3.5 text-base font-semibold text-orange transition-colors hover:bg-orangeTint">
              {siteContent.hero.secondaryCta}
            </Link>
          </motion.div>

          <motion.p
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-5 text-sm text-muted/85"
          >
            {siteContent.hero.note}
          </motion.p>
        </div>

        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          className="relative mx-auto w-full max-w-[620px]"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{ rotateX, rotateY, x: springX, y: springY }}
            animate={reduceMotion ? { y: 0 } : { y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-10 -z-10 rounded-[40px] bg-orange/15 blur-[80px]" />
            <div className="relative overflow-hidden rounded-[28px] border border-orange/30 bg-[#F8E9D8]/75 p-3 shadow-[0_22px_60px_rgba(198,90,26,0.16)] backdrop-blur-[2px]">
              <div className="absolute left-5 top-5 h-10 w-10 rounded-tl-2xl border-l-2 border-t-2 border-orange/80" />
              <div className="absolute right-5 top-5 h-10 w-10 rounded-tr-2xl border-r-2 border-t-2 border-orange/80" />
              <div className="absolute bottom-5 left-5 h-10 w-10 rounded-bl-2xl border-b-2 border-l-2 border-orange/80" />
              <div className="absolute bottom-5 right-5 h-10 w-10 rounded-br-2xl border-b-2 border-r-2 border-orange/80" />
              <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-0 rounded-[28px] border border-orange/20" />
              </div>

              <motion.div
                animate={reduceMotion ? { rotate: 0 } : { rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute left-[-7%] top-[12%] z-0 h-[260px] w-[260px] opacity-30"
              >
                <KonarkWheel />
              </motion.div>

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-orange/10 bg-transparent">
                <TempleIllustration />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
