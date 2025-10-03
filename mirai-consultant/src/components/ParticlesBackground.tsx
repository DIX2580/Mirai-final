import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { useEffect, useMemo, useState } from 'react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const particleCount = useMemo(() => {
    if (prefersReducedMotion) return 0; // disable for users who prefer reduced motion
    const w = typeof window !== 'undefined' ? window.innerWidth : 1280;
    if (w < 420) return 45;
    if (w < 768) return 70;
    return 95;
  }, [prefersReducedMotion]);

  const options: ISourceOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    fullScreen: { enable: false },
    particles: {
      number: { value: particleCount, density: { enable: true } },
      color: { value: ['#ec4899', '#8b5cf6', '#3b82f6'] },
      links: { enable: true, color: '#8b5cf6', distance: 120, opacity: 0.25, width: 1 },
      move: { enable: true, speed: 0.6, direction: 'none', outModes: { default: 'out' } },
      opacity: { value: 0.6 },
      size: { value: { min: 1, max: 2.5 } },
      shadow: { enable: false },
    },
    detectRetina: true,
  } as const;

  if (!ready) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Deep space gradient layers */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-45 animate-nebula"
        style={{
          backgroundImage:
            'radial-gradient(1000px 600px at 20% 10%, rgba(99,102,241,0.18), transparent 60%), radial-gradient(900px 700px at 80% 30%, rgba(236,72,153,0.14), transparent 60%), radial-gradient(1200px 800px at 50% 80%, rgba(56,189,248,0.12), transparent 60%)',
        }}
      />

      {/* Particles */}
  <Particles id="tsparticles" options={options} className="h-full w-full opacity-85" />

      {/* Twinkle field */}
      <div aria-hidden className="absolute inset-0 mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(2px_2px_at_10%_20%,rgba(255,255,255,0.35),rgba(255,255,255,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_70%_60%,rgba(236,72,153,0.35),rgba(236,72,153,0)_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_40%_80%,rgba(59,130,246,0.35),rgba(59,130,246,0)_60%)]" />
      </div>

      {/* soft gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_55%)]" />
    </div>
  );
}
