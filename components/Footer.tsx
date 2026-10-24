import { siteContent } from '@/lib/content';

export function Footer() {
  return (
    <footer className="border-t border-borderLight bg-cream">
      <div className="section-shell flex flex-col items-center justify-between gap-3 py-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-muted">{siteContent.footer.left}</p>
        <p className="text-sm text-muted">{siteContent.footer.right}</p>
      </div>
    </footer>
  );
}
