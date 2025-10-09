import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, Target, Train, Landmark, Building2 } from 'lucide-react';
import Button from './ui/Button';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Who We Are</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          </div>
          <h2 className="brand-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About MIRAI CONSULTANCY</h2>
          <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
            India’s engineering backbone for Railways, Bridges, Buildings, Survey and Highways. From feasibility and design to proof checking and supervision — we deliver with precision and reliability.
          </p>
        </motion.div>

        {/* Intro with images */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 leading-relaxed">
                Our contribution to the Railway sector development in India is significant in both greenfield and brownfield projects.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Road over bridges (ROB/RUB) are integral to road and railway development in both intercity and urban contexts. With advances in bridge engineering, we’ve helped deliver iconic long‑span structures with architectural aesthetics. Our expertise spans assessment of existing bridges and solutions for rehabilitation and strengthening.
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                We have designed and supervised construction across India, including the Rayagada–Vizianagaram section (1200m+), featuring well/pile foundations and a variety of superstructures: composite girders, bowstring girders, camel back truss, steel girders with RCC decks, and steel through girders.
              </p>
            </div>

            {/* Badges */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Award, label: 'Iconic Projects' },
                { icon: Shield, label: 'ISO 9001 QA/QC' },
                { icon: CheckCircle, label: 'Proof Consultancy' },
              ].map((b) => {
                const I = b.icon;
                return (
                  <div key={b.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 grid place-items-center">
                      <I className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-sm text-slate-200">{b.label}</div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-5 grid gap-4"
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=600&fit=crop&crop=center"
                alt="Bridge Project"
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop&crop=center"
                  alt="Railway Infrastructure"
                  className="w-full h-36 sm:h-40 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop&crop=center"
                  alt="Highway Engineering"
                  className="w-full h-36 sm:h-40 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Capabilities */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Bridges */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center">
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Capabilities — Bridges</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Planning and design of bridges, flyovers, and ROB/RUB; proof consultancy and supervision with modern analysis tools.
            </p>
            <ul className="mt-4 text-sm text-slate-200 space-y-2">
              {[
                'Design of superstructures and substructures',
                'Proof checking & supervision consultancy',
                'Rehabilitation & strengthening solutions',
                'Experienced design team & processes',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* Railways */}
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-violet-500 grid place-items-center">
                <Train className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-lg">Capabilities — Railways</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Network & capacity analysis, feasibility, detailed design, and construction supervision for end‑to‑end railway delivery.
            </p>
            <ul className="mt-4 text-sm text-slate-200 space-y-2">
              {[
                'Network & track capacity analysis',
                'Feasibility studies & detailed engineering',
                'Construction supervision & project management',
                'In‑house survey, hydrology & geotechnical',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-fuchsia-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#contact" variant="primary" leftIcon={<Target className="w-4 h-4" />}>Discuss Your Project</Button>
          <Button href="#gallery" variant="secondary" leftIcon={<Building2 className="w-4 h-4" />}>View Gallery</Button>
        </motion.div>
      </div>
    </section>
  );
}
