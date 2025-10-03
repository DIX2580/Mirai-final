import { motion } from 'framer-motion';
import { CheckCircle, Target, Clock, Shield, Award, Zap } from 'lucide-react';

const props = [
  { 
    title: 'End-to-End Expertise', 
    desc: 'Survey to execution under one roof: design, proof checking, and supervision.',
    icon: CheckCircle,
    stat: '250+',
    statLabel: 'Projects Completed'
  },
  { 
    title: 'Iconic Engineering', 
    desc: 'Complex spans, composite systems, and modernization of critical corridors.',
    icon: Award,
    stat: '15+',
    statLabel: 'Years Experience'
  },
  { 
    title: 'On-Time, On-Budget', 
    desc: 'Rigorous planning and risk controls to deliver with certainty.',
    icon: Target,
    stat: '98.7%',
    statLabel: 'On-time Delivery'
  },
  { 
    title: 'Quality Assurance', 
    desc: 'Comprehensive QA/QC processes ensuring the highest engineering standards.',
    icon: Shield,
    stat: 'ISO 9001',
    statLabel: 'Certified'
  },
  { 
    title: 'Innovation Focus', 
    desc: 'Cutting-edge technology and modern engineering practices for future-ready solutions.',
    icon: Zap,
    stat: '50+',
    statLabel: 'Patents & Innovations'
  },
  { 
    title: 'Fast Delivery', 
    desc: 'Optimized workflows and efficient project management for rapid execution.',
    icon: Clock,
    stat: '30%',
    statLabel: 'Faster Than Industry'
  },
];

export default function ValueProps() {
  return (
    <section id="why-us" className="relative py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Competitive Advantage</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          </div>
          <h2 className="brand-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose Mirai
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We combine decades of engineering expertise with innovative approaches and cutting-edge technology 
            to deliver infrastructure solutions that exceed expectations and stand the test of time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {props.map((p, i) => {
            const IconComponent = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden text-center"
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Stat */}
                <div className="relative mb-4">
                  <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-1">
                    {p.stat}
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {p.statLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {p.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {p.desc}
                  </p>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-fuchsia-500 to-violet-500" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Join 250+ satisfied clients</div>
              <div className="text-slate-400 text-sm">Ready to start your next project?</div>
            </div>
            <button className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-xl hover:shadow-[0_0_30px_theme(colors.fuchsia.500/40%)] transition-shadow">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
