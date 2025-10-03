import { useEffect, useRef } from 'react';

export default function NeonParticles({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let raf = 0;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(canvas);

    const particles = Array.from({ length: Math.round((width * height) / 22000) + 40 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: 1 + Math.random() * 1.8,
      hue: [330, 265, 210][Math.floor(Math.random() * 3)], // fuchsia/violet/blue hues
      alpha: 0.35 + Math.random() * 0.4,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      // background subtle vignette
      const g = ctx.createRadialGradient(width / 2, height * 0.2, 0, width / 2, height * 0.2, Math.max(width, height));
      g.addColorStop(0, 'rgba(168,85,247,0.06)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = width + 5; if (p.x > width + 5) p.x = -5;
        if (p.y < -5) p.y = height + 5; if (p.y > height + 5) p.y = -5;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue} 100% 60% / ${p.alpha})`;
        ctx.shadowColor = `hsla(${p.hue} 100% 60% / ${Math.min(0.8, p.alpha + 0.2)})`;
        ctx.shadowBlur = 12;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // connect near particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 85 * 85) {
            const t = 1 - d2 / (85 * 85);
            const hue = Math.random() < 0.5 ? a.hue : b.hue;
            ctx.strokeStyle = `hsla(${hue} 100% 60% / ${0.15 * t})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); resizeObserver.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-20 ${className}`} />;
}
