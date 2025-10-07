import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const services = [
  {
    label: 'Railways',
    slug: 'railways',
    image: 'https://images.unsplash.com/photo-1501661808542-6b0b0b87b88e?auto=format&fit=crop&w=1800&q=80',
    blurb: 'Dedicated freight corridors, metro systems and track modernisation.',
  },
  {
    label: 'Bridges',
    slug: 'bridges',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    blurb: 'Iconic cable-stayed spans, ROBs and interchange structures.',
  },
  {
    label: 'Buildings',
    slug: 'buildings',
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1800&q=80',
    blurb: 'Future-ready commercial, institutional and industrial assets.',
  },
  {
    label: 'Survey',
    slug: 'survey',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1800&q=80',
    blurb: 'High-precision topographical, LiDAR and drone based surveys.',
  },
  {
    label: 'Highway',
    slug: 'highway',
    image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8c0?auto=format&fit=crop&w=1800&q=80',
    blurb: 'Expressways, urban arterials and hill road engineering expertise.',
  },
];

const videos = [
  {
    title: 'Nation-building stories',
    src: '/3129957-hd_1920_1080_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Transforming infrastructure',
    src: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Hero() {
  const [stage, setStage] = useState<'images' | 'videos'>('images');
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => setStage('videos'), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage !== 'videos') {
      videoRefs.current.forEach((vid) => vid?.pause());
      setActiveVideo(0);
      return;
    }

    const current = videoRefs.current[activeVideo];
    if (current) {
      current.currentTime = 0;
      const playPromise = current.play();
      if (playPromise) {
        playPromise.catch(() => {
          /* autoplay might be blocked; controls remain available */
        });
      }
    }
  }, [stage, activeVideo]);

  const topRow = useMemo(() => services.slice(0, 3), []);
  const bottomRow = useMemo(() => services.slice(3), []);

  const subtitle =
    "India’s Engineering Backbone — from high‑precision surveys to iconic bridges, railways, buildings and highways. We take projects from design to flawless execution.";

  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24 min-h-screen flex items-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/75 p-6 sm:p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-10 top-0 h-32 bg-gradient-to-b from-white/10 via-white/0 to-transparent blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col gap-10">
            <header className="text-center lg:text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Mirai Consultant</p>
              <h1 className="brand-title mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Engineering India’s Landmark Infrastructure
              </h1>
              <p className="mt-4 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed mx-auto lg:mx-0">
                {subtitle}
              </p>
            </header>

            <div className="relative min-h-[320px] lg:min-h-[360px]">
              <div className={`transition-opacity duration-700 ${stage === 'images' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-3">
                    {topRow.map((service) => (
                      <HeroTile key={service.label} service={service} />
                    ))}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {bottomRow.map((service) => (
                      <HeroTile key={service.label} service={service} />
                    ))}
                  </div>
                </div>
              </div>

              <div className={`transition-opacity duration-700 ${stage === 'videos' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        to={`/services/${service.slug}`}
                        className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 group-hover:scale-110 transition-transform" />
                        {service.label}
                      </Link>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-3 sm:p-4">
                    {videos.map((video, index) => (
                      <div
                        key={video.src}
                        className={`${index === activeVideo ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-6'} absolute inset-3 sm:inset-4 transition-all duration-500`}
                      >
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between text-sm text-slate-300">
                            <span className="font-semibold uppercase tracking-wide text-slate-200">{video.title}</span>
                            <span>
                              {index + 1} / {videos.length}
                            </span>
                          </div>
                          <video
                            ref={(el) => {
                              videoRefs.current[index] = el;
                            }}
                            className="w-full rounded-xl border border-white/10 bg-black object-cover"
                            poster={video.poster}
                            controls
                            muted
                            playsInline
                            preload="metadata"
                            onEnded={() => {
                              if (index < videos.length - 1) {
                                setActiveVideo((prev) => Math.min(prev + 1, videos.length - 1));
                              }
                            }}
                          >
                            <source src={video.src} type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    ))}

                    {/* ensure container height */}
                    <div className="invisible">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-sm">
                          <span>placeholder</span>
                        </div>
                        <div className="aspect-video w-full rounded-xl border" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
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
                Start a Project
              </Button>
              <Button to="/projects" variant="secondary">
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type HeroTileProps = {
  service: {
    label: string;
    slug: string;
    image: string;
    blurb: string;
  };
};

function HeroTile({ service }: HeroTileProps) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform duration-500 hover:-translate-y-1 hover:border-white/20"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative flex h-full flex-col justify-end bg-gradient-to-t from-black/80 via-black/10 to-transparent">
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate-200">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            {service.label}
          </div>
          <p className="mt-2 text-sm text-slate-300">
            {service.blurb}
          </p>
        </div>
      </div>
      <div className="absolute inset-0 border border-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </Link>
  );
}
