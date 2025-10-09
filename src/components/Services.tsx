import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Train, Landmark, Building2, MapPin, Route } from 'lucide-react';

const items = [
  {
    title: 'Railways',
    slug: 'railways',
    desc: 'Preliminary engineering and traffic study, final location survey and preparation of detailed project report for new double and triple line projects, preparation of general arrangement drawings and structural design of railway bridges, conducting DGP survey using drone, preparation and detail project report general arrangement drawing structural design for road over bridges, geotechnical investigation, land acquisition.',
    icon: Train,
    gradient: 'from-red-500 to-orange-500'
  },
  {
    title: 'Highways',
    slug: 'highway',
    desc: 'Expressway design & corridor planning, traffic surveys and analysis, detailed engineering and design of highways, highway interchange design, bridges culverts and drainage systems, pavement engineering, preparation of detail project report for road connectivity projects.',
    icon: Route,
    gradient: 'from-amber-500 to-yellow-500'
  },
  {
    title: 'Bridges',
    slug: 'bridges',
    desc: 'Structural excellence & integrity, iconic spans, proof checking, rehabilitation & strengthening.',
    icon: Landmark,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Architecture & Buildings',
    slug: 'buildings',
    desc: 'Iconic spaces and urban form, structural design, value engineering & project management.',
    icon: Building2,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Geospatial',
    slug: 'survey',
    desc: 'Survey intelligence & analytics, topographical, hydrological & geotechnical investigations.',
    icon: MapPin,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Geotechnical Investigation',
    slug: 'geotechnical',
    desc: 'Ground analysis & foundation studies, comprehensive ground investigation services.',
    icon: Building2,
    gradient: 'from-teal-500 to-cyan-500'
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
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering solutions across infrastructure sectors, 
            delivering excellence from concept to completion with cutting-edge technology and proven expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it) => {
            const IconComponent = it.icon;
            return (
              <motion.article
                key={it.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
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
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all"
                  >
                    {it.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-slate-400 text-sm leading-relaxed mb-6"
                  >
                    {it.desc}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
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
                  </motion.div>
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
