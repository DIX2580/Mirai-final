import { motion } from 'framer-motion';
import { useState } from 'react';
import { Landmark, CheckCircle, Users, Zap, Award, MapPin, Calendar, ArrowRight, Target } from 'lucide-react';
import Button from '../../components/ui/Button';

type Section = 'about' | 'services' | 'projects';

const capabilities = [
  'Traffic & Feasibility Studies',
  'Detailed Project Reports (DPR)',
  'Interchange & Junction Design',
  'Pavement & Material Engineering',
  'Highway Structures',
  'Construction Supervision',
];

const projects = [
  {
    title: 'Eastern Freight Mobility Corridor',
    location: 'Odisha & Jharkhand',
    scope: '106 km access-controlled corridor',
    year: '2024',
    description: 'End-to-end DPR and interchange planning for high-speed freight corridor.',
    image: 'https://images.pexels.com/photos/240222/pexels-photo-240222.jpeg',
  },
  {
    title: 'Urban Ring Road Programme',
    location: 'Tier-2 Smart City',
    scope: 'Six-lane ring road',
    year: '2023',
    description: 'Traffic impact assessment and detailed geometric design for urban mobility.',
    image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg',
  },
];

export default function Highway() {
  const [activeSection, setActiveSection] = useState<Section>('about');

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
              <Landmark className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Highway <span className="text-sky-400">Engineering</span>
              </h1>
              <p className="text-lg text-slate-400 mt-2">Resilient Infrastructure Solutions</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Designing sustainable highway corridors that enhance mobility and economic development.
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
                      <Landmark className="w-6 h-6 text-sky-400" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">About Highway Engineering</h2>
                  </div>
                  
                  <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                    <p>
                      Highway infrastructure drives economic growth and connectivity. Our multidisciplinary approach covers traffic studies, geometric design, and construction supervision.
                    </p>
                    <p>
                      We specialize in national and state highways, expressways, and urban corridors, ensuring compliance with IRC and MoRTH standards.
                    </p>
                  </div>

                  <div className="mt-12 grid gap-6 sm:grid-cols-3">
                    {[
                      { value: '120+ km', label: 'Expressway Optimized', icon: Landmark },
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

                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6">
                    <img 
                      src="https://images.news18.com/ibnlive/uploads/2024/11/nhai-national-highways-2024-11-a4ddd508fdc260c089296c7d20aabd3d.png"
                      alt="Highway Engineering"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  </div>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6">
                    <img 
                      src="https://www.shutterstock.com/shutterstock/videos/3855235617/thumb/1.jpg?ip=x480"
                      alt="Highway Track"
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  </div>
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
                    Comprehensive highway engineering services from planning to construction.
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
                      'Integrated delivery from concept to completion',
                      'Digital engineering with BIM and AI',
                      'Sustainable and resilient designs',
                      'Risk-focused safety methodologies',
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
                    Showcasing our expertise in highway infrastructure development.
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
                  <h3 className="text-xl font-semibold text-white mb-3">Have a Highway Project in Mind?</h3>
                  <p className="text-slate-300 text-base mb-6 max-w-2xl mx-auto">
                    Partner with us for expert highway engineering solutions.
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
    </div>
  );
}
