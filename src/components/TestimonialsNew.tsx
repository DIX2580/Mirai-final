import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const quotes = [
  { 
    name: 'Rajesh Kumar', 
    role: 'Senior Project Director', 
    company: 'Rail PSU', 
    text: 'Dependable partner — modern design practices with meticulous supervision. Their attention to detail and innovative approaches consistently exceed our expectations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
  { 
    name: 'Dr. Priya Sharma', 
    role: 'Chief Engineer', 
    company: 'State PWD', 
    text: 'Delivered our ROB program with speed and precision. The team\'s expertise in complex infrastructure projects is truly remarkable.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b167?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
  { 
    name: 'Anil Agarwal', 
    role: 'Infrastructure Developer', 
    company: 'Metro Projects Ltd', 
    text: 'Value engineering that saved time and cost without compromises. Their innovative solutions helped us achieve impossible deadlines.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5
  },
];

const clientLogos = [
  { name: 'Indian Railways', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
  { name: 'NHAI', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
  { name: 'State PWD', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
  { name: 'Metro Rail', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
  { name: 'Port Trust', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
  { name: 'DMRC', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
];

export default function TestimonialsNew() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Client Success</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          </div>
          <h2 className="brand-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Testimonials & Clients
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from industry leaders and infrastructure pioneers 
            who have partnered with us to build India's future.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8 text-fuchsia-500" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: q.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                "{q.text}"
              </p>

              {/* Author */}
              <footer className="flex items-center gap-4">
                <img 
                  loading="lazy"
                  src={q.image} 
                  alt={q.name}
                  className="w-12 h-12 rounded-full border-2 border-white/20 object-cover"
                />
                <div>
                  <div className="text-white font-semibold">{q.name}</div>
                  <div className="text-slate-400 text-sm">{q.role}</div>
                  <div className="text-slate-500 text-xs">{q.company}</div>
                </div>
              </footer>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/5 via-violet-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.blockquote>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-8">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {clientLogos.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="h-20 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-slate-300 font-medium">{client.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Success Stories</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Ready to become our next success story? Let's discuss how we can bring your infrastructure vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 rounded-xl shadow-[0_0_30px_theme(colors.fuchsia.500/30%)] hover:shadow-[0_0_40px_theme(colors.fuchsia.500/50%)] transition-shadow">
                Start Your Project
              </button>
              <button className="px-8 py-4 text-sm font-semibold text-slate-300 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}