import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onLoaded = () => setTimeout(() => setHidden(true), 300);
    // Fade out after 2s max, or sooner on load
    const t = setTimeout(() => setHidden(true), 2000);
    window.addEventListener('load', onLoaded);
    return () => {
      clearTimeout(t);
      window.removeEventListener('load', onLoaded);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={[
        'fixed inset-0 z-[9999] grid place-items-center bg-[var(--bg)] transition-opacity duration-500',
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100',
      ].join(' ')}
    >
      <div className="relative">
        {/* Neon rotating ring */}
        <div className="h-28 w-28 rounded-full border border-white/10">
          <div className="absolute inset-0 rounded-full animate-spin-slow"
               style={{
                 background:
                   'conic-gradient(from 0deg, rgba(236,72,153,0.2), rgba(139,92,246,0.6), rgba(56,189,248,0.3), rgba(236,72,153,0.2))',
                 WebkitMask: 'radial-gradient(circle, transparent 60%, black 60%)',
                 mask: 'radial-gradient(circle, transparent 60%, black 60%)',
               }} />
        </div>
        {/* Brand typing */}
        <div className="mt-6 text-center font-black text-2xl text-white brand-title">
          <span className="neon-violet">MIRAI</span>
          <span> </span>
          <span className="neon-fuchsia">CONSULTANT</span>
        </div>
      </div>
    </div>
  );
}
