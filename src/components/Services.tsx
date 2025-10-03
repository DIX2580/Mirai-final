import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Train, Landmark, Building2, MapPin, Route } from 'lucide-react';

const items = [
  { 
    title: 'Railways', 
    slug: 'railways', 
    desc: 'Network analysis, capacity planning, detailed design & supervision.',
    icon: Train,
    gradient: 'from-red-500 to-orange-500'
  },
  { 
    title: 'Bridges', 
    slug: 'bridges', 
    desc: 'Iconic spans, proof checking, rehabilitation & strengthening.',
    icon: Landmark,
    gradient: 'from-blue-500 to-cyan-500'
  },
  { 
    title: 'Buildings', 
    slug: 'buildings', 
    desc: 'Structural design, value engineering & project management.',
    icon: Building2,
    gradient: 'from-purple-500 to-pink-500'
  },
  { 
    title: 'Survey', 
    slug: 'survey', 
    desc: 'Topographical, hydrological & geotechnical investigations.',
    icon: MapPin,
    gradient: 'from-green-500 to-emerald-500'
  },
  { 
    title: 'Highway', 
    slug: 'highway', 
    desc: 'Alignment, pavement design & corridor modernization.',
    icon: Route,
    gradient: 'from-amber-500 to-yellow-500'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Our Expertise</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          </div>
          <h2 className="brand-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Services & Capabilities
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions across infrastructure sectors, 
            delivering excellence from concept to completion with cutting-edge technology and proven expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => {
            const IconComponent = it.icon;
            return (
              <motion.article
                key={it.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${it.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${it.gradient} shadow-lg mb-6`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                    {it.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {it.desc}
                  </p>
                  <Link
                    to={`/services/${it.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white transition-colors group/link"
                  >
                    Learn more
                    <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${it.gradient} opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none`} style={{ padding: '1px' }}>
                  <div className="w-full h-full rounded-2xl bg-black" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
