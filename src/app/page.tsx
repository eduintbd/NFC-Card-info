import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Syed Adnan Huda, CFA — Founder, Eduint Limited",
  description:
    "Your Global Consultant. Founder of Eduint Limited and aibd.ai. Investment banking, AI solutions, and corporate advisory across Dhaka, Guangzhou, New York, and Vienna.",
  openGraph: {
    title: "Syed Adnan Huda, CFA — Founder, Eduint Limited",
    description:
      "Your Global Consultant. Founder of Eduint Limited and aibd.ai.",
    type: "profile",
  },
};

const services = [
  "AI Solution & Learning Hub",
  "Automation & Business Transformation",
  "Investment Banking",
  "Corporate Advisory, M&A & Tokenization",
  "Portfolio Management & Trading",
  "Wealth Management",
  "IT & ERP Software Solutions",
  "Education & Immigration Consultation",
  "Legal Services",
  "Marketing Solutions",
  "Research & Development",
  "Smart City Management",
  "Virtual Office Setup",
];

const holdings: { name: string; url?: string }[] = [
  { name: "Eduintbd.ai", url: "https://eduintbd.ai/" },
  { name: "The Legal Empire", url: "https://thelegalempire.org/" },
  { name: "Ekush", url: "https://ekush.aibd.ai/" },
  { name: "UInsure.ai", url: "https://uinsure.ai/" },
  { name: "Herostock.ai", url: "https://uinsure.ai/" },
  { name: "ThiNK", url: "https://thinkgroup.com.bd/" },
  { name: "Rapid Cargo", url: "https://rapid.aibd.ai/" },
  { name: "Food & Family" },
  { name: "NASH Building Management", url: "https://nash.eduintbd.ai/" },
  { name: "Team.aibd.ai", url: "https://aibd.ai/" },
  { name: "Moshar Machine", url: "https://mosharmachine.com/" },
];

const locations = ["Dhaka", "Guangzhou", "New York", "Vienna"];

export default function SyedCardPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Space background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0a0a1a_40%,_#000_100%)]" />

        {/* Nebula clouds */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-purple-700/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-fuchsia-700/15 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-amber-500/8 blur-[100px]" />

        {/* Star layers */}
        <div className="stars stars-1" />
        <div className="stars stars-2" />
        <div className="stars stars-3" />

        {/* Twinkling bright stars */}
        <div className="twinkle-stars" />

        {/* Shooting stars */}
        <div className="shooting-star shooting-star-1" />
        <div className="shooting-star shooting-star-2" />
        <div className="shooting-star shooting-star-3" />
      </div>

      <div className="relative">
        {/* Hero */}
        <section className="px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center text-center">
              {/* Logo badge — animated rings + color-shifting brain */}
              <div className="logo-badge mb-10 relative h-72 w-72 sm:h-80 sm:w-80">
                {/* Pulsing aura */}
                <div className="logo-aura absolute inset-0 rounded-full" />
                {/* Outer rotating color ring */}
                <div className="logo-ring absolute inset-0 rounded-full" />
                {/* Inner counter-rotating ring */}
                <div className="logo-ring-inner absolute inset-3 rounded-full" />
                {/* The brain logo (kept intact) with animated color shift */}
                <div className="absolute inset-6 overflow-hidden rounded-2xl bg-black shadow-2xl shadow-amber-500/30 ring-1 ring-amber-500/40">
                  <img
                    src="/aibd_brain_logo.png"
                    alt="aibd.ai"
                    className="logo-hue h-full w-full object-cover"
                  />
                  {/* Shine sweep */}
                  <div className="logo-shine absolute inset-0 pointer-events-none" />
                </div>
              </div>

              {/* Company badge */}
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Eduint Limited
              </span>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Syed Adnan Huda
                <span className="block text-2xl sm:text-3xl font-normal text-white/60 mt-2">
                  CFA
                </span>
              </h1>

              {/* Title */}
              <p className="mt-4 text-lg font-semibold uppercase tracking-[0.3em] text-amber-400">
                Founder
              </p>

              {/* Tagline */}
              <p className="mt-6 max-w-md text-base sm:text-lg text-white/60 leading-relaxed">
                Your Global Consultant — bridging capital, technology, and
                opportunity across four continents.
              </p>

              {/* Quick action buttons */}
              <div className="mt-10 grid w-full max-w-md grid-cols-2 gap-3 sm:grid-cols-4">
                <ActionButton
                  href="/syed.vcf"
                  download
                  label="Save"
                  icon={<IconUserPlus />}
                  primary
                />
                <ActionButton
                  href="tel:+19175665560"
                  label="Call"
                  icon={<IconPhone />}
                />
                <ActionButton
                  href="mailto:syed@aibd.ai"
                  label="Email"
                  icon={<IconMail />}
                />
                <ActionButton
                  href="https://aibd.ai/"
                  label="Web"
                  icon={<IconGlobe />}
                  external
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact details card */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
                Contact
              </h2>
              <div className="space-y-4">
                <ContactRow
                  icon={<IconMail />}
                  label="Email"
                  value="syed@aibd.ai"
                  href="mailto:syed@aibd.ai"
                />
                <ContactRow
                  icon={<IconPhone />}
                  label="Phone"
                  value="+1 (917) 566-5560"
                  href="tel:+19175665560"
                />
                <ContactRow
                  icon={<IconPin />}
                  label="Office"
                  value="1 Morning Side Drive, New York, NY 10025"
                  href="https://maps.google.com/?q=1+Morning+Side+Drive+New+York+NY+10025"
                  external
                />
                <ContactRow
                  icon={<IconGlobe />}
                  label="Website"
                  value="aibd.ai"
                  href="https://aibd.ai/"
                  external
                />
              </div>
            </div>
          </div>
        </section>

        {/* About AIBD CTA */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-8 sm:p-10">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
              <div className="relative">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  About <span className="text-amber-400">aibd.ai</span>
                </h2>
                <p className="mt-3 max-w-xl text-white/70 leading-relaxed">
                  AIBD is a global consultancy and holdings group powering AI
                  adoption, investment, and business transformation. Discover
                  the full ecosystem of services, ventures, and partners.
                </p>
                <a
                  href="https://aibd.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300 hover:scale-[1.02]"
                >
                  Explore aibd.ai
                  <IconArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
              Our Services
            </h2>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="group flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition hover:border-amber-500/30 hover:bg-amber-500/5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 group-hover:scale-150 transition" />
                  <span className="text-sm text-white/80">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Holdings */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
              Holdings & Ventures
            </h2>
            <div className="flex flex-wrap gap-2">
              {holdings.map((holding) =>
                holding.url ? (
                  <a
                    key={holding.name}
                    href={holding.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-white"
                  >
                    {holding.name}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/30 transition group-hover:text-amber-400"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                ) : (
                  <span
                    key={holding.name}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
                  >
                    {holding.name}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-xs font-semibold uppercase tracking-widest text-white/40">
              Global Presence
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {locations.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <IconPin />
                  <span className="text-sm font-medium text-white/80">
                    {city}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NFC Card CTA */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent p-8 sm:p-10">
              <div className="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
                    Powered by NFC
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
                    Want your own smart card?
                  </h2>
                  <p className="mt-2 text-white/70">
                    Get a custom NFC business card designed and delivered.
                    Tap to share — no app required.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-shrink-0">
                  <a
                    href="mailto:syed@aibd.ai?subject=NFC%20Card%20Inquiry&body=Hi%20Syed%2C%0A%0AI%27d%20like%20to%20order%20a%20custom%20NFC%20business%20card."
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    <IconMail />
                    Contact for NFC Card
                  </a>
                  <Link
                    href="/maker"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    Try the Card Maker
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 px-6 py-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Eduint Limited &middot;{" "}
              <a
                href="https://aibd.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition"
              >
                aibd.ai
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

/* ---------- Sub-components ---------- */

function ActionButton({
  href,
  label,
  icon,
  primary,
  external,
  download,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
  external?: boolean;
  download?: boolean;
}) {
  const base =
    "flex flex-col items-center justify-center gap-1.5 rounded-xl border px-3 py-3 text-xs font-medium transition";
  const styles = primary
    ? "border-amber-400/50 bg-amber-400 text-black hover:bg-amber-300"
    : "border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download}
    >
      {icon}
      {label}
    </a>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-3 -mx-3 transition hover:border-white/10 hover:bg-white/[0.02]"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70 group-hover:border-amber-500/30 group-hover:text-amber-400 transition">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs uppercase tracking-wider text-white/40">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-white/90">{value}</p>
      </div>
      <IconArrowUpRight />
    </a>
  );
}

/* ---------- Icons ---------- */

function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconUserPlus() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  );
}

function IconArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-amber-400 transition">
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}
