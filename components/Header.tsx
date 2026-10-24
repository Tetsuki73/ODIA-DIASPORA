'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { siteContent } from '@/lib/content';

const navItems = [
  { label: siteContent.nav.explore, href: '#explore' },
  { label: siteContent.nav.vision, href: '#vision' },
  { label: siteContent.nav.join, href: '#join' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b border-borderLight/80 transition-all duration-300',
        isScrolled ? 'bg-cream/80 backdrop-blur-md shadow-[0_6px_18px_rgba(43,24,16,0.06)]' : 'bg-cream',
      ].join(' ')}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring flex items-center text-[1.1rem] font-bold uppercase tracking-[0.08em] text-espresso" scroll={false}>
          <span className="font-heading text-[1.35rem] font-bold">UTKAL DIASPORA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center pb-1 text-sm font-medium text-muted transition-colors hover:text-espresso focus-ring"
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-orange transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/signin" className="focus-ring text-sm font-medium text-muted transition-colors hover:text-espresso">
            {siteContent.nav.signIn}
          </Link>
          <Link href="/signup" className="focus-ring inline-flex items-center justify-center rounded-lg bg-orange px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-orangeDark">
            {siteContent.nav.joinButton}
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="focus-ring inline-flex items-center justify-center rounded-full p-2 text-espresso md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-borderLight bg-cream md:hidden"
          >
            <div className="section-shell flex flex-col gap-4 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="focus-ring text-base font-medium text-muted"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
              <Link href="/signin" className="focus-ring pt-2 text-base font-medium text-muted" onClick={handleNavClick}>
                {siteContent.nav.signIn}
              </Link>
              <Link href="/signup" className="focus-ring inline-flex w-full items-center justify-center rounded-lg bg-orange px-5 py-3 text-base font-semibold text-white" onClick={handleNavClick}>
                {siteContent.nav.joinButton}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
