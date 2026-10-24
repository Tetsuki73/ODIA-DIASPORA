import { siteContent } from '@/lib/content';
import { PillarCard } from '@/components/PillarCard';
import { Reveal } from '@/components/Reveal';

export function FivePillars() {
  return (
    <section id="explore" className="section-shell py-24 lg:py-32">
      <Reveal className="mx-auto max-w-[760px] text-center" delay={0.05}>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-orange">{siteContent.pillars.eyebrow}</p>
        <h2 className="mt-4 text-[2.5rem] leading-none tracking-[-0.06em] text-espresso sm:text-[3.5rem] lg:text-[4.2rem]">
          {siteContent.pillars.headingLine1}
          <span className="italic text-orange">{siteContent.pillars.headingLine2}</span>
          <br />
          {siteContent.pillars.headingLine3}
        </h2>
        <p className="mt-4 text-lg text-muted">{siteContent.pillars.subtext}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {siteContent.pillars.items.map((item, index) => {
          const isLastRowCentered = index >= 3;
          return (
            <div
              key={item.title}
              className={[
                'transition-all duration-300',
                isLastRowCentered ? 'md:col-span-1 xl:col-start-2' : '',
              ].join(' ')}
            >
              <PillarCard item={item} index={index} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
