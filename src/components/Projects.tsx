import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin, Users } from 'lucide-react';

const items = [
  { 
    title: 'Rayagada–Vizianagaram Bridge', 
    desc: '1200m multi-span with composite & truss systems; supervision & design.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center',
    category: 'Bridge Engineering',
    duration: '36 months',
    location: 'Odisha, India',
    team: '45 Engineers'
  },
  { 
    title: 'Dedicated Freight Corridor', 
    desc: 'Capacity augmentation with modern alignment & structures.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&crop=center',
    category: 'Railway Infrastructure',
    duration: '48 months',
    location: 'Multi-state',
    team: '120 Engineers'
  },
  { 
    title: 'Urban ROB Program', 
    desc: 'City-grade ROB/RUB upgrades for congestion relief and safety.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center',
    category: 'Urban Infrastructure',
    duration: '24 months',
    location: 'Mumbai, India',
    team: '65 Engineers'
  },
  { 
    title: 'High-Speed Rail Terminal', 
    desc: 'Modern terminal design with integrated urban transport connectivity.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center',
    category: 'Transportation Hub',
    duration: '60 months',
    location: 'Ahmedabad, India',
    team: '200 Engineers'
  },
  { 
    title: 'Metro Bridge Network', 
    desc: 'Elevated metro infrastructure with architectural integration.',
    image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop&crop=center',
    category: 'Metro Systems',
    duration: '42 months',
    location: 'Delhi NCR',
    team: '85 Engineers'
  },
  { 
    title: 'Coastal Highway Project', 
    desc: 'Climate-resilient highway design with environmental considerations.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&crop=center',
    category: 'Highway Engineering',
    duration: '30 months',
    location: 'Kerala, India',
    team: '55 Engineers'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Portfolio</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          </div>
          <h2 className="brand-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Projects & Case Studies
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Showcasing iconic infrastructure projects that demonstrate our engineering excellence, 
            innovation, and commitment to transforming India's transportation landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  loading="lazy"
                  src={it.image} 
                  alt={it.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-fuchsia-500/80 to-violet-500/80 rounded-full backdrop-blur-sm">
                    {it.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-white bg-black/20 backdrop-blur-sm rounded-full hover:bg-black/40 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {it.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {it.desc}
                </p>

                {/* Project details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar className="w-3 h-3" />
                    <span>{it.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" />
                    <span>{it.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Users className="w-3 h-3" />
                    <span>{it.team}</span>
                  </div>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 rounded-xl shadow-[0_0_30px_theme(colors.fuchsia.500/30%)] hover:shadow-[0_0_40px_theme(colors.fuchsia.500/50%)] transition-shadow">
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
