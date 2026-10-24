import Link from 'next/link';

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6">
      <div className="w-full max-w-xl rounded-[28px] border border-borderLight bg-[#FAF4EC] p-10 text-center shadow-soft">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-orange">UTKAL DIASPORA</p>
        <h1 className="mt-4 font-heading text-5xl font-bold text-espresso">Coming soon</h1>
        <p className="mt-4 text-lg text-muted">This sign in page is a placeholder for the future backend integration.</p>
        <Link href="/" className="focus-ring mt-6 inline-flex items-center justify-center rounded-lg bg-orange px-6 py-3 text-base font-semibold text-white hover:bg-orangeDark">
          Back to home
        </Link>
      </div>
    </main>
  );
}
