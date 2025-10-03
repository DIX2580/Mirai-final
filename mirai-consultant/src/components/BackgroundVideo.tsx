import { useRef } from 'react';

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
      <video
        ref={videoRef}
        className="bgvideo absolute inset-0 w-full h-full object-cover blur-[1px] opacity-85"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/bg-poster.jpg"
      >
        {/* Use only the local public asset as requested */}
        <source src="/3129957-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for contrast (lighter for more clarity) */}
      <div className="absolute inset-0 bg-black/35" />
      {/* Soft gradient edges */}
      <div className="absolute inset-0" style={{
        background:
          'radial-gradient(1200px 800px at 85% 65%, rgba(56,189,248,0.08), transparent 60%), radial-gradient(1000px 700px at 35% 75%, rgba(236,72,153,0.08), transparent 60%)'
      }} />
    </div>
  );
}
