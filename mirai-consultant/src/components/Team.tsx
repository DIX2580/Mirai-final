import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Linkedin } from 'lucide-react';
import Button from './ui/Button';

const people = [
  { 
    name: 'Dr. Suresh Patel', 
    role: 'Chief Bridge Engineer', 
    specialty: 'Bridge Design & Analysis',
    experience: '20+ Years',
    education: 'PhD Civil Engineering, IIT Delhi',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
    awards: ['Excellence in Engineering Award', 'Best Bridge Design 2023']
  },
  { 
    name: 'Er. Meera Singh', 
    role: 'Railway Systems Expert', 
    specialty: 'Railway Planning & Capacity',
    experience: '18+ Years',
    education: 'M.Tech Transportation, IIT Bombay',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=300&fit=crop&crop=face',
    awards: ['Railway Innovation Award', 'Project Excellence 2022']
  },
  { 
    name: 'Dr. Rajesh Kumar', 
    role: 'Geotechnical Lead', 
    specialty: 'Geotechnical & Hydrology',
    experience: '15+ Years',
    education: 'PhD Geotechnical Eng, IISc Bangalore',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    awards: ['Soil Mechanics Excellence', 'Research Publication Award']
  },
  { 
    name: 'Er. Priya Sharma', 
    role: 'Highway Design Lead', 
    specialty: 'Highway & Urban Planning',
    experience: '12+ Years',
    education: 'M.Tech Highway Engineering, NIT Kurukshetra',
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop&crop=face',
    awards: ['Smart City Design Award', 'Sustainable Transport 2023']
  }
];

export default function Team() {
  return (
    <section id="team" className="relative py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Our Team</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          </div>
          <h2 className="brand-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Meet the Experts
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our team of accomplished engineers and industry veterans brings decades of combined experience 
            in delivering world-class infrastructure solutions across India.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {people.map((person, i) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 hover:bg-white/[0.08] transition-all duration-300 text-center"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-emerald-400/40 transition-colors">
                  <img 
                    loading="lazy"
                    src={person.image} 
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {person.name}
                </h3>
                <div className="text-emerald-400 font-semibold text-sm">
                  {person.role}
                </div>
                <div className="text-slate-400 text-sm">
                  {person.specialty}
                </div>

                {/* Experience & Education */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <Briefcase className="w-3 h-3" />
                    <span>{person.experience}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                    <GraduationCap className="w-3 h-3" />
                    <span className="text-center">{person.education}</span>
                  </div>
                </div>

                {/* Awards */}
                <div className="pt-3">
                  <div className="text-xs text-slate-400 mb-2">Notable Awards</div>
                  <div className="space-y-1">
                    {person.awards.map((award, i) => (
                      <div key={i} className="text-xs text-slate-500 bg-white/5 rounded-lg px-2 py-1">
                        {award}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Link */}
                <div className="pt-4">
                  <Button variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-xs" leftIcon={<Linkedin className="w-3 h-3" />}>Connect</Button>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-6 px-8 py-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <div className="text-left">
              <div className="text-white font-semibold text-lg">Join Our Expert Team</div>
              <div className="text-slate-400">We're always looking for talented engineers</div>
            </div>
            <Button variant="primary">View Careers</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
