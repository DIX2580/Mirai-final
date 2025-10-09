import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Train, CheckCircle, Users, Zap, Award, MapPin, Calendar, ArrowRight, Target, X } from 'lucide-react';
import Button from '../../components/ui/Button';

type Section = 'about' | 'services' | 'projects';

const capabilities = [
  'Preliminary engineering and traffic study',
  'Final location survey and preparation of detailed project report for new, double and multi-track line projects',
  'Preparation of general arrangement drawings and structural design of railway bridges',
  'Conducting DGP survey using drones',
  'Preparation and detailed project report, general arrangement drawings, structural design for road over bridges (ROB/RUB)',
  'Geotechnical investigation',
  'Land acquisition support',
];

const projects = [
  {
    title: 'Howrah-Chennai Railway Line ROBs',
    location: 'Andhra Pradesh',
    scope: '11 Road Over Bridges',
    year: '2023-2024',
    description: 'Complete engineering solutions including structural design, general arrangement drawings, and construction supervision for 11 ROBs on the prestigious Howrah-Chennai mainline.',
    image: 'https://t4.ftcdn.net/jpg/02/69/86/19/360_F_269861905_g8j8FL4715MgfYb77eP5DicVURaKxJBT.jpg',
  },
  {
    title: 'Multi-Track Railway Line Project',
    location: 'Eastern India',
    scope: 'Double Line Railway Track',
    year: '2022-2023',
    description: 'Final location survey, detailed project report preparation, and structural design for double-track railway line expansion project.',
    image: 'https://img.freepik.com/free-photo/high-speed-train-station-sunset-with-modern-railroad-track-motion-blur-effect-industrial-scene-with-moving-blurred-train-railway-platform-railroad-concept-railway-tourism_1321-2906.jpg',
  },
];

export default function Railways() {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string; description?: string } | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden border-b border-white/10 bg-slate-950"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
              <Train className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Railways <span className="text-sky-400">Engineering</span>
              </h1>
              <p className="text-lg text-slate-400 mt-2">Comprehensive Infrastructure Solutions</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Delivering end-to-end railway infrastructure solutions from preliminary engineering to construction supervision.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-8 text-white">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="sticky top-24 space-y-3">
              <button
                onClick={() => setActiveSection('about')}
                className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === 'about'
                    ? 'bg-sky-500/10 border border-sky-400/30 text-white'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5" />
                  <span>About</span>
                </div>
              </button>
              
              <button
                onClick={() => setActiveSection('services')}
                className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === 'services'
                    ? 'bg-sky-500/10 border border-sky-400/30 text-white'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Services</span>
                </div>
              </button>
              
              <button
                onClick={() => setActiveSection('projects')}
                className={`w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === 'projects'
                    ? 'bg-sky-500/10 border border-sky-400/30 text-white'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5" />
                  <span>Key Projects</span>
                </div>
              </button>
            </div>
          </motion.aside>

          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {activeSection === 'about' && (
              <div className="space-y-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                      <Train className="w-6 h-6 text-sky-400" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">About Railways Engineering</h2>
                  </div>
                  
                  <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                    <p>
                      Railway infrastructure forms the backbone of India's transportation network. Our expertise spans preliminary design, detailed engineering, and construction supervision for new railway lines, double/multi-track expansions, and ROB/RUB constructions.
                    </p>
                    <p>
                      With over 30 years of combined experience, our team leverages modern surveying technologies including drone-based DGP surveys to deliver projects that meet international standards and local requirements.
                    </p>
                  </div>

                  <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    {[
                      { value: '11+', label: 'ROBs Delivered', icon: Train },
                      { value: '30+ yrs', label: 'Team Experience', icon: Users },
                      { value: '100%', label: 'Compliance Score', icon: CheckCircle },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="group relative overflow-hidden rounded-2xl border border-white/20 bg-slate-900/50 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 mb-4">
                          <stat.icon className="h-6 w-6 text-sky-400" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">
                          {stat.value}
                        </div>
                        <p className="text-sm font-medium text-slate-300 uppercase tracking-wide">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <button
                    type="button"
                    onClick={() => setSelectedImage({
                      src: 'https://t4.ftcdn.net/jpg/02/69/86/19/360_F_269861905_g8j8FL4715MgfYb77eP5DicVURaKxJBT.jpg',
                      label: 'Modern Railway Infrastructure',
                    })}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                  >
                    <img
                      src="https://t4.ftcdn.net/jpg/02/69/86/19/360_F_269861905_g8j8FL4715MgfYb77eP5DicVURaKxJBT.jpg"
                      alt="Railway Engineering"
                      className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImage({
                      src: 'https://images.unsplash.com/photo-1540804236945-b6ae24bfe0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbHdheSUyMHRyYWNrfGVufDB8fDB8fHww',
                      label: 'Advanced Track Systems',
                    })}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1540804236945-b6ae24bfe0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbHdheSUyMHRyYWNrfGVufDB8fDB8fHww"
                      alt="Railway Track"
                      className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImage({
                      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAOJejdEjSUqubAiVq5In_u6Qxn9Aj2s-Og&s',
                      label: 'Indian Railway Network',
                    })}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                  >
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAOJejdEjSUqubAiVq5In_u6Qxn9Aj2s-Og&s"
                      alt="Indian Railway Network"
                      className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedImage({
                      src: '/railway.png',
                      label: 'Railway Bridge Construction',
                    })}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                  >
                    <img
                      src="/railway.png"
                      alt="Railway Bridge Construction"
                      className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                </div>
              </div>
            )}

            {activeSection === 'services' && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-sky-400" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">Our Services</h2>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Comprehensive railway engineering consultancy covering the entire project lifecycle.
                  </p>

                  <div className="grid gap-4">
                    {capabilities.map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 rounded-xl border border-white/10 bg-slate-900/30 p-4 hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-slate-200 text-base leading-relaxed">{service}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <Target className="w-6 h-6 text-sky-400" />
                    <h3 className="text-xl font-semibold text-white">Why Choose MIRAI</h3>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      '30+ years of railway engineering experience',
                      'Modern surveying technology including drones',
                      '100% on-time project delivery',
                      'Adherence to Indian Railway Standards',
                    ].map((reason) => (
                      <div
                        key={reason}
                        className="flex items-start gap-3 rounded-lg border border-white/10 bg-slate-900/50 p-3"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 text-sky-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300 leading-relaxed">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'projects' && (
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-sky-400" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">Key Projects</h2>
                  </div>
                  
                  <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    Showcasing our excellence in railway infrastructure development across Eastern India.
                  </p>
                </div>

                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 lg:flex"
                  >
                    <div className="relative lg:w-2/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="space-y-4 p-6 lg:w-3/5 lg:p-8">
                      <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wide text-sky-400">
                        <span className="inline-flex items-center gap-2 rounded-lg border border-sky-400/30 bg-sky-500/10 px-3 py-1">
                          <MapPin className="h-3 w-3" />
                          {project.location}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-lg border border-sky-400/30 bg-sky-500/10 px-3 py-1">
                          <Calendar className="h-3 w-3" />
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">{project.title}</h3>
                      <div className="inline-flex rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-slate-200">
                        {project.scope}
                      </div>
                      <p className="text-base leading-relaxed text-slate-300">{project.description}</p>
                      <Button
                        variant="secondary"
                        href="#contact"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                ))}

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-8 text-center">
                  <h3 className="text-xl font-semibold text-white mb-3">Have a Railway Project in Mind?</h3>
                  <p className="text-slate-300 text-base mb-6 max-w-2xl mx-auto">
                    Partner with us for world-class railway engineering consultancy services.
                  </p>
                  <Button
                    variant="primary"
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Discuss Your Project
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.img
                key={selectedImage.src}
                src={selectedImage.src}
                alt={selectedImage.label}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.6)]"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
              />

              <div className="mt-4 flex items-start justify-between gap-4 rounded-xl bg-slate-900/70 p-4 border border-white/10">
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedImage.label}</h3>
                  {selectedImage.description && (
                    <p className="text-sm text-slate-300 mt-1">{selectedImage.description}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
