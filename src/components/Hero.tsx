import { useEffect, useMemo, useRef, useState } from 'react';
import Button from './ui/Button';

const services = [
  {
    label: 'Railways',
    image: 'https://images.unsplash.com/photo-1501661808542-6b0b0b87b88e?auto=format&fit=crop&w=1800&q=80',
    blurb: 'Dedicated freight corridors, metro systems and track modernisation.',
  },
  {
    label: 'Bridges',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    blurb: 'Iconic cable-stayed spans, ROBs and interchange structures.',
  },
  {
    label: 'Buildings',
    image: 'https://images.unsplash.com/photo-1487956382158-bb926046304a?auto=format&fit=crop&w=1800&q=80',
    blurb: 'Future-ready commercial, institutional and industrial assets.',
  },
  {
    label: 'Survey',
    image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1800&q=80',
    blurb: 'High-precision topographical, LiDAR and drone based surveys.',
  },
  {
    label: 'Highway',
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
  const [stage, setStage] = useState<'gallery' | 'video'>('gallery');
  const [activeVideo, setActiveVideo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = window.setTimeout(() => setStage('video'), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage !== 'video') {
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

  useEffect(() => {
    if (selectedIndex >= services.length) {
      setSelectedIndex(0);
    }
  }, [selectedIndex]);

  const featured = useMemo(() => services[selectedIndex] ?? services[0], [selectedIndex]);
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

            <div className="relative min-h-[360px] lg:min-h-[420px]">
              <div
                className={`transition-all duration-700 ${stage === 'gallery' ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 -translate-y-6 absolute inset-0'}`}
              >
                <div className="space-y-6">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
                    <img
                      src={featured.image}
                      alt={featured.label}
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur">
                        01
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
                        {featured.label}
                      </div>
                      <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-200/90">
                        {featured.blurb}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                      {topRow.map((service, index) => (
                        <HeroTile
                          key={service.label}
                          service={service}
                          index={index}
                          isSelected={services.indexOf(service) === selectedIndex}
                          onSelect={() => setSelectedIndex(services.indexOf(service))}
                        />
                      ))}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {bottomRow.map((service, index) => (
                        <HeroTile
                          key={service.label}
                          service={service}
                          index={index + topRow.length}
                          isSelected={services.indexOf(service) === selectedIndex}
                          onSelect={() => setSelectedIndex(services.indexOf(service))}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-700 ${stage === 'video' ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-6 absolute inset-0'}`}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-200/80">
                    {services.map((service) => (
                      <span
                        key={service.label}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur transition hover:border-white/20"
                      >
                        {service.label}
                      </span>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_20px_60px_rgba(8,47,73,0.45)]">
                    {videos.map((video, index) => (
                      <div
                        key={video.src}
                        className={`${index === activeVideo ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-10'} absolute inset-0 transition-all duration-700`}
                      >
                        <div className="flex h-full flex-col">
                          <div className="flex items-center justify-between px-6 pt-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-slate-200/70">
                            <span>{video.title}</span>
                            <span>
                              {index + 1} / {videos.length}
                            </span>
                          </div>
                          <div className="relative mt-4 aspect-[16/9] w-full">
                            <video
                              ref={(el) => {
                                videoRefs.current[index] = el;
                              }}
                              className="absolute inset-0 h-full w-full rounded-3xl border border-white/10 object-cover"
                              poster={video.poster}
                              muted
                              playsInline
                              preload="auto"
                              autoPlay={stage === 'video' && index === activeVideo}
                              controls={false}
                              onEnded={() => {
                                setActiveVideo((prev) => {
                                  const next = prev + 1;
                                  if (next >= videos.length) {
                                    return 0;
                                  }
                                  return next;
                                });
                              }}
                            >
                              <source src={video.src} type="video/mp4" />
                            </video>
                          </div>
                          <div className="px-6 pb-6 pt-4 text-xs text-slate-300/80">
                            Muted autoplay sequence showcasing our execution capabilities.
                          </div>
                        </div>
                      </div>
                    ))}
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
    image: string;
    blurb: string;
  };
  index: number;
  isSelected: boolean;
  onSelect: () => void;
};

function HeroTile({ service, index, isSelected, onSelect }: HeroTileProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70 ${
        isSelected ? 'border-white/40 bg-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.45)]' : 'hover:-translate-y-1 hover:border-white/20'
      }`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
          <img
            src={service.image}
            alt={service.label}
            className={`h-full w-full object-cover transition-transform duration-[1200ms] ease-out ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}
          />
        </div>
        <span className="absolute left-3 top-3 inline-flex h-7 items-center justify-center rounded-full bg-black/60 px-3 text-xs font-semibold text-white/80">
          {(index + 1).toString().padStart(2, '0')}
        </span>
      </div>
      <div className="px-2 pb-2 text-left">
        <p className="text-sm font-semibold text-white">{service.label}</p>
        <p className="mt-1 text-xs text-slate-300/80">{service.blurb}</p>
      </div>
    </button>
  );
}
