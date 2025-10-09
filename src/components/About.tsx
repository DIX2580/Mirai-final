import { motion } from 'framer-motion';
import { Award, CheckCircle, Target, Train, Landmark, Lightbulb, Users, TrendingUp, Clock, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 border-2 border-white/20 text-sm font-bold text-white backdrop-blur-xl shadow-2xl uppercase tracking-wider">
               Engineering Excellence Since Inception
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          >
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">MIRAI CONSULTANCY</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-base sm:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            We are an <span className="text-white font-semibold">emerging engineering consultancy company in Eastern India</span>, specialising in railway and highway projects, delivering <span className="text-white font-semibold">robust, sustainable and innovative infrastructure project solutions</span> that connect communities and drive economic growth.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl border-2 border-white/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-xl p-8 hover:border-blue-400/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-bold text-white"
                >
                  Our Vision
                </motion.h3>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-slate-200 text-base leading-relaxed"
              >
                To be a leader in transport infrastructure, planning for technical excellence, innovative solutions and unwavering commitment to quality and safety, shaping the future of mobility brick by brick by building smarter, more resilient networks for the next generation.
              </motion.p>
            </div>
            <motion.div
              className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl border-2 border-white/10 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 backdrop-blur-xl p-8 hover:border-violet-400/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/10 group-hover:to-fuchsia-500/10 transition-all duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <motion.h3 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-bold text-white"
                >
                  Our Mission
                </motion.h3>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-slate-200 text-base leading-relaxed"
              >
                We provide comprehensive end-to-end engineering and project management consultancy services for railways and highway projects. Our mission is to partner with our clients, from government bodies to private developers, to navigate the complexity of infrastructure development and ensure the delivery of every project on time.
              </motion.p>
            </div>
            <motion.div
              className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 backdrop-blur-xl p-8 lg:p-10 mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 grid place-items-center shadow-xl">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-white"
              >
                Our Expertise
              </motion.h3>
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-200 text-base leading-relaxed mb-4"
            >
              We have a team of seasoned and experienced engineers having over 3 decades of experience in railways and highway sectors, having delivered a diverse portfolio of projects across various terrains and conditions. In combination with this reputed experience and cutting-edge technology and modern software, our engineers can provide sustainable and cost-effective engineering solutions while planning the project.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-300 text-base leading-relaxed"
            >
              Combining experience with cutting-edge technology for sustainable, cost-effective solutions.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-block mb-4"
            >
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 border-2 border-white/30 text-sm font-bold text-white backdrop-blur-xl shadow-lg uppercase tracking-wider">
                ⚙️ Our Services
              </span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">Engineering Solutions</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-slate-300 text-base max-w-3xl mx-auto"
            >
              End-to-end consultancy services for transport infrastructure development
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group rounded-3xl border-2 border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-rose-400/50 hover:bg-white/[0.05] transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-violet-500 grid place-items-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Train className="w-7 h-7 text-white" />
                </div>
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-bold text-white"
                >
                  Railways
                </motion.h4>
              </div>
              <ul className="space-y-4">
                {[
                  'Preliminary engineering and traffic study',
                  'Final location survey and preparation of detailed project report for new, double and multi-track line projects',
                  'Preparation of general arrangement drawings and structural design of railway bridges',
                  'Conducting DGP survey using drones',
                  'Preparation and detailed project report, general arrangement drawings, structural design for road over bridges (ROB/RUB)',
                  'Geotechnical investigation',
                  'Land acquisition support',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 text-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group rounded-3xl border-2 border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-blue-400/50 hover:bg-white/[0.05] transition-all duration-500"
            >
                            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Landmark className="w-7 h-7 text-white" />
                </div>
                <motion.h4 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-bold text-white"
                >
                  Highways
                </motion.h4>
              </div>
              <ul className="space-y-4">
                {[
                  'Traffic surveys and analysis',
                  'Detailed engineering and design of highways',
                  'Highway interchange design',
                  'Bridge design and construction',
                  'Culverts and drainage systems',
                  'Pavement engineering',
                  'Preparation of detailed project report for road connectivity projects',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3 text-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.article>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border-2 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl p-10 lg:p-12 mb-16 overflow-hidden"
          style={{ borderImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4)) 1' }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v2h-2v-2h2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 grid place-items-center shadow-2xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-white"
              >
                Projects Delivered
              </motion.h3>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-slate-100 text-base leading-relaxed mb-6"
            >
              In a short span of our operation, we have delivered complete engineering solutions for <span className="text-white font-bold">11 Road Over Bridges (ROBs)</span> on the <span className="text-white font-bold">Howrah-Chennai line</span> in the state of <span className="text-white font-bold">Andhra Pradesh</span> in short span.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, number: '11+', label: 'ROBs Delivered', color: 'from-blue-500 to-cyan-500' },
                { icon: Clock, number: '30+', label: 'Years Experience', color: 'from-violet-500 to-fuchsia-500' },
                { icon: Award, number: '100%', label: 'On-Time Delivery', color: 'from-emerald-500 to-teal-500' },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="relative group rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 text-center overflow-hidden cursor-pointer"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/10 grid place-items-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-xs text-slate-300 font-medium leading-tight">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
