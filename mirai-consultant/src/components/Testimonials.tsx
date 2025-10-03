import { motion } from 'framer-motion';

const quotes = [
  { name: 'Senior Project Director, Rail PSU', text: 'Dependable partner — modern design practices with meticulous supervision.' },
  { name: 'Chief Engineer, State PWD', text: 'Delivered our ROB program with speed and precision.' },
  { name: 'Infra Developer', text: 'Value engineering that saved time and cost without compromises.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          <h2 className="brand-title text-2xl sm:text-3xl font-bold text-white">Testimonials & Clients</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur p-5 text-slate-300"
            >
              <p>“{q.text}”</p>
              <footer className="mt-3 text-sm text-slate-400">— {q.name}</footer>
            </motion.blockquote>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 opacity-80">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 rounded-md border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </section>
  );
}
