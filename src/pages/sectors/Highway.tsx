import { motion } from 'framer-motion';
import { Route, MapPin, TrendingUp, CheckCircle, Target, Users } from 'lucide-react';
import Button from '../../components/ui/Button';

const stats = [
  { value: '5000+', label: 'Kilometers Delivered', icon: <Route className="h-5 w-5" /> },
  { value: '50+', label: 'Road Projects', icon: <Target className="h-5 w-5" /> },
  { value: '15+', label: 'States Covered', icon: <MapPin className="h-5 w-5" /> },
  { value: '20+', label: 'Years Experience', icon: <TrendingUp className="h-5 w-5" /> },
];

const capabilities = [
  'Planning & design of all types of highways and expressways',
  'Rehabilitation and strengthening of existing road networks',
  'Urban roads with dedicated cycle tracks and pedestrian infrastructure',
  'Traffic Engineering studies and junction design',
  'Capacity & network analysis with optimal design solutions',
  'Subways, Foot Over Bridges (FOBs), parking bays and landscaping',
  'Expertise in road improvement projects in Himalayan Terrain',
  'Transport planning and comprehensive traffic surveys',
];

export default function Highway() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-sky-950/60 via-violet-950/40 to-fuchsia-950/60 border-b border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.15),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 via-violet-500/20 to-fuchsia-500/20 border border-white/20 backdrop-blur mb-8"
            >
              <Route className="h-4 w-4 text-sky-400" />
              <span className="text-sm font-medium text-slate-200">Core Service</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Highway <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400">Engineering</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Building India's road infrastructure with precision engineering, innovative design, and sustainable practices across 5000+ kilometers of highways and expressways.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" to="/contact">
                Start a Project
              </Button>
              <Button variant="secondary" to="/about">
                Our Expertise
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-fuchsia-500/20 border border-white/10 text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Overview Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Driving India's <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-fuchsia-400">Road Revolution</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Improvement of road infrastructure in a nation is a precursor of growth. India has witnessed unprecedented development in the road sector over the last three decades through programs like NHDP, PMGSY, Bharatmala Pariyojana, and Urban Renewal Mission.
              </p>
              <p>
                We take pride in contributing to nation-building, having delivered over <strong className="text-white">5000 kilometers</strong> of roads across various states in India. Our projects have significantly contributed to regional economic development and national growth.
              </p>
              <p>
                We continuously integrate new technology and promote innovation & creativity to maintain balance between engineering excellence and aesthetic appeal.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border border-white/10 rounded-2xl p-8 lg:p-10">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-violet-500/5 to-fuchsia-500/5 rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-fuchsia-500/20 border border-white/10 text-sky-400 mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Our highway professionals have extensive expertise in capacity & network analysis, providing optimal design solutions for all road-related infrastructure. Our team excels in challenging projects, including road improvement in Himalayan Terrain.
                </p>
                <Button variant="secondary" to="/careers">
                  Join Our Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Capabilities Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Capabilities</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Comprehensive highway engineering services covering planning, design, rehabilitation, and traffic management across diverse terrains and urban landscapes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-violet-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-fuchsia-500/20 border border-white/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-5 w-5 text-sky-400" />
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1">{capability}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-sky-950/40 via-violet-950/40 to-fuchsia-950/40 border border-white/20 rounded-3xl p-12 lg:p-16 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_70%)]" />
          
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Better Roads?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Partner with us to deliver world-class highway infrastructure that drives economic growth and connects communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" to="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" to="/gallery">
                View Our Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
