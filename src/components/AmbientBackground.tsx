export default function AmbientBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none">
      {/* Subtle dotted star field (static) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 25% 30%, rgba(255,255,255,0.08), rgba(255,255,255,0) 55%), radial-gradient(1px 1px at 60% 70%, rgba(236,72,153,0.08), rgba(236,72,153,0) 55%), radial-gradient(1px 1px at 80% 20%, rgba(59,130,246,0.08), rgba(59,130,246,0) 55%)',
          backgroundSize: '32px 32px, 28px 28px, 36px 36px',
        }}
      />
      {/* Very soft static aurora glow (no animation) */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(900px 600px at 15% 20%, rgba(139,92,246,0.10), transparent 60%)',
        }}
      />
      {/* Soft vignette to pull background forward subtly */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 85% 65%, rgba(56,189,248,0.12), transparent 60%), radial-gradient(1000px 700px at 35% 75%, rgba(236,72,153,0.12), transparent 60%)',
          opacity: 0.65,
        }}
      />
      {/* Faint grid to increase perceived depth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
}
