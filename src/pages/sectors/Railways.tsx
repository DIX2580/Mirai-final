import { motion } from 'framer-motion';
import { Train, TrendingUp, CheckCircle, Target, Users, Zap } from 'lucide-react';
import Button from '../../components/ui/Button';

const stats = [
  { value: '10000+', label: 'Kilometers of Track', icon: <Train className="h-5 w-5" /> },
  { value: '15+', label: 'Completed Projects', icon: <Target className="h-5 w-5" /> },
  { value: '50+', label: 'Railway Structures', icon: <Zap className="h-5 w-5" /> },
  { value: '20+', label: 'Years Experience', icon: <TrendingUp className="h-5 w-5" /> },
];

const capabilities = [
  'Railway network analysis and track capacity assessment',
  'Feasibility studies and detailed engineering design',
  'Green field and brown field railway project development',
  'Track rehabilitation and yard capacity improvement',
  'Dedicated freight corridors and industrial railway infrastructure',
  'Ballastless track design and road-cum-track structures',
  'Track laying in tunnels and complex curves',
  'Operation and maintenance consulting for railway infrastructure',
  'Gauge conversion and additional track projects',
  'Inhouse topographical, hydrological, and geotechnical investigation',
  'One-stop solution for planning, design, and construction supervision',
  'Industrial railway infrastructure and private siding solutions',
];

export default function Railways() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-violet-950/60 via-sky-950/40 to-fuchsia-950/60 border-b border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.15),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/20 via-sky-500/20 to-fuchsia-500/20 border border-white/20 backdrop-blur mb-8"
            >
              <Train className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-slate-200">Core Service</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Railway <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-sky-400 to-fuchsia-400">Engineering</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Transforming India's railway infrastructure with innovative solutions. From dedicated freight corridors to urban metro systems, we've delivered 10,000+ kilometers of railway excellence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" href="/contact">
                Start a Project
              </Button>
              <Button variant="secondary" href="/about">
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
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-violet-500/50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-sky-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 via-sky-500/20 to-fuchsia-500/20 border border-white/10 text-violet-400 mb-4 group-hover:scale-110 transition-transform">
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
              Powering India's <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-fuchsia-400">Rail Revolution</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                The Government of India has laid strong emphasis on railway sector capacity improvement through rail network expansion, dedicated freight corridors, additional tracks, gauge conversion, and modernization initiatives for sustainable, economical, and efficient rail transport.
              </p>
              <p>
                Our contribution to India's railway development is significant across both greenfield and brownfield projects. We have delivered over <strong className="text-white">10,000 kilometers</strong> of railway track in design, construction, rehabilitation, yard capacity improvement, and industrial corridors.
              </p>
              <p>
                We have pioneered advanced railway solutions including ballastless track systems, road-cum-track structures, and complex track laying in tunnels and curves. We continuously explore cutting-edge technologies to provide innovative, cost-effective project solutions.
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
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-sky-500/5 to-fuchsia-500/5 rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500/20 via-sky-500/20 to-fuchsia-500/20 border border-white/10 text-violet-400 mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Our railway engineering team brings extensive expertise in network analysis, track design, and construction supervision. We have successfully completed over 15 major railway projects across India, providing comprehensive solutions from feasibility to operation.
                </p>
                <Button variant="secondary" href="/careers">
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
            Comprehensive railway engineering services from network planning and detailed design to construction supervision and operation & maintenance for both public and industrial railway infrastructure.
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
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-violet-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-sky-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 via-sky-500/20 to-fuchsia-500/20 border border-white/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-5 w-5 text-violet-400" />
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
          className="relative bg-gradient-to-br from-violet-950/40 via-sky-950/40 to-fuchsia-950/40 border border-white/20 rounded-3xl p-12 lg:p-16 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),transparent_70%)]" />
          
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Rail Infrastructure?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Partner with us to deliver sustainable, efficient, and innovative railway solutions that drive economic growth and connect communities across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="primary" href="/contact">
                Discuss Your Project
              </Button>
              <Button variant="secondary" href="/gallery">
                View Our Projects
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
