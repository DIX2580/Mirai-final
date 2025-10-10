import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

type Service = {
  label: string;
  image: string;
  blurb: string;
};

const services: Service[] = [
  {
    label: 'Railways',
    image: 'https://t4.ftcdn.net/jpg/02/69/86/19/360_F_269861905_g8j8FL4715MgfYb77eP5DicVURaKxJBT.jpg',
    blurb: 'Preliminary engineering, detailed project reports & structural design for new lines',
  },
  {
    label: 'Bridges',
    image: 'https://ircep.gov.in/RCApproval/images/Login/Login-Image-1.jpg',
    blurb: 'Road over bridges (ROB/RUB), general arrangement drawings & structural design',
  },
  {
    label: 'Highway',
    image: 'https://img.staticmb.com/mbcontent/images/crop/uploads/2024/2/biggest-highway-in-india_0_1200.jpg.webp',
    blurb: 'Detailed engineering, highway interchange design & pavement engineering',
  },
  {
    label: 'Survey',
    image: 'https://satpalda.co/wp-content/uploads/2024/01/xrtO2jipi3GJ9RPvP6GNObL40EFzVi3b.jpg',
    blurb: 'Final location survey, DGP survey using drones & geotechnical investigation',
  },
];

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState<Service | null>(null);
  const [headingText, setHeadingText] = useState('');
  const [paragraphText, setParagraphText] = useState('');

  const fullHeading = 'Building the arteries of modern transport. Next Generation Railway and Highway solutions';
  const fullParagraph = 'We are an emerging engineering consultancy company in Eastern India. Specialising in railway and highway projects, delivering robust, sustainable and innovative infrastructure project solutions that connect communities and drive economic growth.';

  useEffect(() => {
    let headingTimeout: number;
    let paragraphTimeout: number;

    // Type heading
    let headingIndex = 0;
    const typeHeading = () => {
      if (headingIndex < fullHeading.length) {
        setHeadingText(fullHeading.slice(0, headingIndex + 1));
        headingIndex++;
        headingTimeout = setTimeout(typeHeading, 50);
      } else {
        // Start typing paragraph after heading is done
        setTimeout(() => {
          let paragraphIndex = 0;
          const typeParagraph = () => {
            if (paragraphIndex < fullParagraph.length) {
              setParagraphText(fullParagraph.slice(0, paragraphIndex + 1));
              paragraphIndex++;
              paragraphTimeout = setTimeout(typeParagraph, 30);
            }
          };
          typeParagraph();
        }, 500);
      }
    };

    // Start typing after a delay
    const startTyping = setTimeout(typeHeading, 1000);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(headingTimeout);
      clearTimeout(paragraphTimeout);
    };
  }, []);

  const handleImageClick = (service: Service) => {
    setSelectedImage(service);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24 lg:pb-20 min-h-screen flex items-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 bg-sky-500/10 blur-[120px]" />
        </div>

        <div className="absolute left-8 top-8 z-20">
          <img src="/6440-removebg-preview.png" alt="Mirai Logo" className="h-14 w-auto drop-shadow-xl" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
  <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/70 p-4 sm:p-5 lg:p-7 shadow-[0_18px_70px_rgba(0,0,0,0.4)]">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute inset-x-10 top-0 h-32 bg-gradient-to-b from-white/10 via-white/0 to-transparent blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="relative min-h-[520px] lg:min-h-[560px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key="gallery"
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
                >
                  {/* Left side - Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex-1 w-full lg:w-auto text-center lg:text-left"
                  >
                    <div className="space-y-6">
                      <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl lg:text-4xl font-bold text-white leading-tight"
                      >
                        {headingText}
                        <span className="animate-pulse text-sky-400">|</span>
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg lg:text-xl text-slate-300 leading-relaxed"
                      >
                        {paragraphText}
                        {headingText.length === fullHeading.length && paragraphText.length < fullParagraph.length && (
                          <span className="animate-pulse text-sky-400">|</span>
                        )}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
                      >
                        <button
                          onClick={() => window.scrollTo({ top: document.getElementById('services')?.offsetTop || 0, behavior: 'smooth' })}
                          className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
                        >
                          Our Services
                        </button>
                        <button
                          onClick={() => window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' })}
                          className="px-8 py-3 border-2 border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-colors duration-300 backdrop-blur-sm"
                        >
                          Get In Touch
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Right side - Images */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex-1 w-full lg:w-auto"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                      {services.map((service, idx) => {
                        return (
                          <motion.div
                            key={service.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                            className="w-full"
                          >
                            <HeroTile
                              service={service}
                              isSelected={false}
                              onImageClick={() => handleImageClick(service)}
                              variant="top"
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-slate-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.label}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{selectedImage.label}</h3>
                  <p className="text-slate-300">{selectedImage.blurb}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

type HeroTileProps = {
  service: Service;
  isSelected: boolean;
  onSelect?: () => void;
  onImageClick: () => void;
  variant: 'top' | 'bottom';
};

function HeroTile({ service, isSelected, onSelect, onImageClick }: HeroTileProps) {
  const handleClick = () => {
    onSelect?.();
    onImageClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group relative block w-full overflow-hidden rounded-3xl border-2 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/70 ${
        isSelected
          ? 'border-fuchsia-500/60 bg-white/10 shadow-[0_22px_55px_rgba(217,70,239,0.25)]'
          : 'border-white/15 bg-white/[0.05] hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_18px_48px_rgba(0,0,0,0.35)]'
      }`}
      style={{ aspectRatio: '16/14' }}
    >
      <div className="relative w-full h-full">
        <motion.img
          src={service.image}
          alt={service.label}
          loading="lazy"
          initial={{ scale: 1.1 }}
          animate={{ scale: isSelected ? 1.15 : 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full object-cover cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onImageClick();
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/60" />
      <span className="absolute left-5 top-5 inline-flex items-center rounded-full border border-white/30 bg-black/70 px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-white backdrop-blur-sm">
        {service.label}
      </span>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-5 left-5 right-5 text-xs leading-relaxed text-slate-100/90 sm:text-sm"
      >
        {service.blurb}
      </motion.p>
    </button>
  );
}
