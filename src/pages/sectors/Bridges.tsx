import { motion } from 'framer-motion';
import { Landmark, TrendingUp, CheckCircle, Target, Users, Building2 } from 'lucide-react';
import Button from '../../components/ui/Button';

const stats = [
  { value: '30000+', label: 'Meters of Bridges', icon: <Landmark className="h-5 w-5" /> },
  { value: '2500+', label: 'Max Bridge Length (m)', icon: <Target className="h-5 w-5" /> },
  { value: '100+', label: 'Bridge Projects', icon: <Building2 className="h-5 w-5" /> },
  { value: '25+', label: 'Years Experience', icon: <TrendingUp className="h-5 w-5" /> },
];

const capabilities = [
  'Planning & design of all bridge types: Flyovers, ROBs, RUBs, Interchanges',
  'Long-span segmental post-tensioned box girder bridges',
  'Pretensioned and prestressed girder systems with RCC deck',
  'Steel girder and through-girder bridges',
  'Well foundation and pile foundation design',
  'Assessment, rehabilitation, and strengthening of existing bridges',
  'Proof consultancy and third-party design review',
  'Construction supervision for complex bridge projects',
  'Inhouse topographical, hydrological, and geotechnical investigation',
  'One-stop solution for highways and railway bridge structures',
];

export default function Bridges() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-fuchsia-950/60 via-violet-950/40 to-sky-950/60 border-b border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,70,239,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.15),transparent_50%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 border border-white/20 backdrop-blur mb-8"
            >
              <Landmark className="h-4 w-4 text-fuchsia-400" />
              <span className="text-sm font-medium text-slate-200">Core Service</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6"
            >
              Bridge <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-violet-400 to-sky-400">Engineering</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-slate-300 mb-10 leading-relaxed"
            >
              Designing iconic bridges that connect communities. From long-span structures to complex interchanges, we deliver over 30,000 meters of bridge engineering excellence.
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
              className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-fuchsia-500/50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-violet-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 border border-white/10 text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform">
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
              Building <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-sky-400">Iconic Structures</span>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Bridges, flyovers, road over bridges, interchanges, and grade separators are integral to modern road and railway infrastructure. Technological advancements have enabled the construction of iconic long-span structures with superior aesthetics and functionality.
              </p>
              <p>
                We have designed and supervised construction of numerous bridges across India, including major projects with lengths exceeding <strong className="text-white">2500 meters</strong>. Our portfolio includes diverse foundation systems (well/pile) and superstructure types: segmental post-tensioned box girders, prestressed girders, and steel through-girders.
              </p>
              <p>
                With over <strong className="text-white">30,000 meters</strong> of road and railway bridges delivered, our expertise spans complex bridge engineering, rehabilitation, and strengthening solutions.
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
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-violet-500/5 to-sky-500/5 rounded-2xl" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 border border-white/10 text-fuchsia-400 mb-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Our team of bridge engineers brings deep expertise in structural analysis, foundation design, and proof consultancy. We use advanced design software and methodologies to deliver safe, efficient, and aesthetically pleasing bridge solutions.
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
            Comprehensive bridge engineering services from planning and design to construction supervision, rehabilitation, and proof consultancy for highway and railway structures.
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
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/60 backdrop-blur border border-white/10 rounded-xl p-6 hover:border-fuchsia-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-violet-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500/20 via-violet-500/20 to-sky-500/20 border border-white/10 group-hover:scale-110 transition-transform">
                    <CheckCircle className="h-5 w-5 text-fuchsia-400" />
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
          className="relative bg-gradient-to-br from-fuchsia-950/40 via-violet-950/40 to-sky-950/40 border border-white/20 rounded-3xl p-12 lg:p-16 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.15),transparent_70%)]" />
          
          <div className="relative max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Iconic Bridges?
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Partner with us to design and deliver bridges that stand the test of time, combining engineering excellence with aesthetic brilliance.
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
