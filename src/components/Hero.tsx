import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type HeroStage = 'gallery' | 'video';

type Service = {
  label: string;
  image: string;
  blurb: string;
};

type VideoAsset = {
  src: string;
  poster: string;
  title: string;
};

const services: Service[] = [
  {
    label: 'Railways',
    image: 'https://t4.ftcdn.net/jpg/02/69/86/19/360_F_269861905_g8j8FL4715MgfYb77eP5DicVURaKxJBT.jpg',
    blurb: 'High-speed rail, dedicated freight corridors & network optimization',
  },
  {
    label: 'Bridges',
    image: 'https://ircep.gov.in/RCApproval/images/Login/Login-Image-1.jpg',
    blurb: 'Iconic spans, ROB/RUB design, proof checking & strengthening',
  },
  {
    label: 'Buildings',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqWwY7JcWnPvJljWlGljWkJ-6VIfEY8ajspQ&usqp=CAU',
    blurb: 'Structural design, value engineering & project management',
  },
  {
    label: 'Survey',
    image: 'https://satpalda.co/wp-content/uploads/2024/01/xrtO2jipi3GJ9RPvP6GNObL40EFzVi3b.jpg',
    blurb: 'Topographical, hydrological & geotechnical investigations',
  },
  {
    label: 'Highway',
    image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2024/2/biggest-highway-in-india_0_1200.jpg.webp',
    blurb: 'Alignment design, pavement engineering & corridor modernization',
  },
];

const videos: VideoAsset[] = [
  {
    src: 'https://cdn.pixabay.com/video/2023/05/29/165003-831362593_large.mp4',
    poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    title: 'Engineering Showcase',
  },
  {
    src: 'video.mp4',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    title: 'Modern Infrastructure',
  },
];

export default function Hero() {
  const [stage, setStage] = useState<HeroStage>('gallery');
  const [activeVideo, setActiveVideo] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const stageTimer = useRef<number | null>(null);

  const scheduleStage = useCallback((targetStage: HeroStage, delay: number) => {
    if (stageTimer.current) {
      window.clearTimeout(stageTimer.current);
    }
    stageTimer.current = window.setTimeout(() => setStage(targetStage), delay);
  }, []);

  useEffect(() => {
    scheduleStage('video', 5000);
    return () => {
      if (stageTimer.current) {
        window.clearTimeout(stageTimer.current);
      }
    };
  }, [scheduleStage]);

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
          /* autoplay can fail on some browsers; controls remain available */
        });
      }
    }
  }, [stage, activeVideo]);

  const handleSelect = useCallback(
    (serviceIndex: number) => {
      setSelectedIndex(serviceIndex);
      videoRefs.current.forEach((vid) => vid?.pause());
      setStage('gallery');
      scheduleStage('video', 3000);
    },
    [scheduleStage]
  );

  const topRow = useMemo(() => services.slice(0, 3), []);
  const bottomRow = useMemo(() => services.slice(3), []);

  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 min-h-screen flex items-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/70 p-4 sm:p-5 lg:p-7 shadow-[0_18px_70px_rgba(0,0,0,0.4)]">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-10 top-0 h-32 bg-gradient-to-b from-white/10 via-white/0 to-transparent blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="relative min-h-[520px] lg:min-h-[560px]">
              <AnimatePresence mode="wait">
                {stage === 'gallery' ? (
                  <motion.div
                    key="gallery"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col items-center gap-6 lg:gap-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="grid w-full grid-cols-1 gap-4 lg:gap-5 sm:grid-cols-3"
                    >
                      {topRow.map((service, idx) => {
                        const serviceIndex = services.indexOf(service);
                        return (
                          <motion.div
                            key={service.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                            className="w-full"
                          >
                            <HeroTile
                              service={service}
                              isSelected={serviceIndex === selectedIndex}
                              onSelect={() => handleSelect(serviceIndex)}
                              variant="top"
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="grid w-full grid-cols-1 gap-4 lg:gap-5 sm:grid-cols-2"
                    >
                      {bottomRow.map((service, idx) => {
                        const serviceIndex = services.indexOf(service);
                        return (
                          <motion.div
                            key={service.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                            className="w-full"
                          >
                            <HeroTile
                              service={service}
                              isSelected={serviceIndex === selectedIndex}
                              onSelect={() => handleSelect(serviceIndex)}
                              variant="bottom"
                            />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="video"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-6"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-slate-200/80"
                    >
                      {services.map((service, idx) => (
                        <motion.button
                          key={service.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                          type="button"
                          onClick={() => handleSelect(services.indexOf(service))}
                          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white/80 backdrop-blur transition hover:border-white/30 hover:text-white"
                        >
                          {service.label}
                        </motion.button>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="relative overflow-hidden rounded-[24px] border-2 border-white/20 bg-black/55 shadow-[0_18px_60px_rgba(8,47,73,0.45)]"
                    >
                      <div className="relative aspect-[16/9] w-full max-h-[420px] overflow-hidden rounded-[22px]">
                        {videos.map((video, index) => (
                          <video
                            key={video.src}
                            ref={(el) => {
                              videoRefs.current[index] = el;
                            }}
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                              index === activeVideo ? 'opacity-100' : 'opacity-0'
                            }`}
                            poster={video.poster}
                            muted
                            playsInline
                            preload="auto"
                            autoPlay={stage === 'video' && index === activeVideo}
                            controls={false}
                            onEnded={() => {
                              setActiveVideo((prev) => (prev + 1) % videos.length);
                            }}
                          >
                            <source src={video.src} type="video/mp4" />
                          </video>
                        ))}
                      </div>
                      <div className="absolute inset-0 rounded-[22px] bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />
                      <div className="absolute left-0 right-0 top-0 flex items-center justify-between px-6 py-4 text-[11px] sm:text-sm uppercase tracking-[0.25em] text-slate-100/85">
                        <span className="font-semibold">{videos[activeVideo]?.title}</span>
                        <span className="rounded-full bg-black/50 px-3 py-1 text-[10px] backdrop-blur-sm">
                          {activeVideo + 1} / {videos.length}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 text-xs text-slate-100/90 sm:text-sm leading-relaxed">
                        Immersive footage showcasing our on-ground execution quality.
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type HeroTileProps = {
  service: Service;
  isSelected: boolean;
  onSelect: () => void;
  variant: 'top' | 'bottom';
};

function HeroTile({ service, isSelected, onSelect }: HeroTileProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative block w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] overflow-hidden rounded-3xl border-2 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70 ${
        isSelected
          ? 'border-fuchsia-500/60 bg-white/10 shadow-[0_22px_55px_rgba(217,70,239,0.25)]'
          : 'border-white/15 bg-white/[0.05] hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_18px_48px_rgba(0,0,0,0.35)]'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={service.image}
          alt={service.label}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-[900ms] ease-out ${
            isSelected ? 'scale-[1.15]' : 'scale-110 group-hover:scale-105'
          }`}
        />
      </div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/60" />
      <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/30 bg-black/70 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-sm">
        {service.label}
      </span>
      <p className="absolute bottom-5 left-5 right-5 text-xs leading-relaxed text-slate-100/90 sm:text-sm">
        {service.blurb}
      </p>
    </button>
  );
}
