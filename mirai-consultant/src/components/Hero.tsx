//
// DotLottie wrapper not needed now that we embed a single iframe sequence
import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { useMotionLevel } from '../context/MotionContext';

const services = [
  { label: 'Railways', slug: 'railways' },
  { label: 'Bridges', slug: 'bridges' },
  { label: 'Buildings', slug: 'buildings' },
  { label: 'Survey', slug: 'survey' },
  { label: 'Highway', slug: 'highway' },
];

export default function Hero() {
  const motionLevel = useMotionLevel();
  const subtitle =
    "India’s Engineering Backbone — from high‑precision surveys to iconic bridges, railways, buildings and highways. We take projects from design to flawless execution.";
  // No interactive media; keep things simple and smooth
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 min-h-screen flex items-center">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Unified glass background for both columns */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-4 sm:p-6 lg:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
          {/* Static overlay to keep hero background consistent, independent of the video behind */}
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute -top-1/3 -left-1/4 w-[60%] h-[80%] rounded-full blur-3xl bg-fuchsia-500/20" />
            <div className="absolute -bottom-1/3 -right-1/4 w-[60%] h-[80%] rounded-full blur-3xl bg-sky-500/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: text & links */}
          <div className="text-left relative z-20 max-w-2xl mx-auto lg:mx-0">
            {/* Static headline: MIRAI CONSULTANT */}
            <h1
              className="brand-title relative text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight drop-shadow-2xl"
            >
              {/* Cylinder-style glow behind the title */}
              <span aria-hidden className="cylinder-bg" />
              <span className="sr-only">MIRAI CONSULTANT</span>
              {/* Static title (no typing) */}
              <span
                aria-hidden
                className="block relative z-10 bg-gradient-to-r from-slate-50 via-slate-200 to-slate-50 bg-clip-text text-transparent leading-tight"
              >
                <span className="metallic-text">MIRAI</span> CONSULTANT
              </span>
            </h1>

            <p className="mt-4 lg:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-300 leading-relaxed">
              {subtitle}
            </p>

            <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-xl">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group inline-flex items-center gap-2 w-full rounded-md border border-white/10 bg-white/5 hover:bg-white/10 px-3 py-2 text-sm text-slate-200 transition-colors"
                  >
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 group-hover:scale-110 transition-transform" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                rightIcon={
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                }
              >
                Get Consultation
              </Button>
              <Button to="/projects" variant="secondary">
                View Projects
              </Button>
            </div>
          </div>

          {/* Right: single iframe that sequences 3 Lotties full-screen inside */}
          {motionLevel > 0 && (
            <div className="relative hidden md:block">
              <div className="relative h-64 lg:h-80 overflow-hidden rounded-xl border border-white/10 bg-black/40">
                {motionLevel === 3 ? (
                  <iframe title="Branding Sequence" src="/brand-sequence.html" loading="lazy" className="block w-full h-full" style={{ border: 0 }} />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 text-sm tracking-wide">Brand Identity</div>
                )}
              </div>
            </div>
          )}
          {/* Mobile: same sequence in a compact tile, placed before text (fixed 300px height) */}
          {motionLevel > 1 && (
            <div className="md:hidden -mt-4 mb-6 order-first">
              <div className="relative h-[300px] overflow-hidden rounded-lg border border-white/10 bg-black/40">
                {motionLevel === 3 ? (
                  <iframe title="Branding Sequence Mobile" src="/brand-sequence.html" loading="lazy" className="block w-full h-full" style={{ border: 0 }} />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400 text-sm">Brand Identity</div>
                )}
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </section>
  );
}
