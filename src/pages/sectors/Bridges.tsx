import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Landmark, X } from 'lucide-react';

export default function Bridges() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string; description?: string } | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Heading, Paragraph, Capabilities */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="flex items-center gap-4 mb-6"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                  className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center"
                >
                  <Landmark className="w-8 h-8 text-sky-400" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                  className="text-2xl lg:text-4xl font-bold text-white mb-2"
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap', borderRight: '2px solid #38bdf8' }}
                  >
                    Bridges & Flyovers
                  </motion.span>
                </motion.h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                className="text-base text-slate-300 max-w-2xl leading-normal mb-4"
              >
                Bridges, Fly overs, Road over bridges, Interchanges, ROB/RUB etc are integral part of road and railway development sectors and also in urban area. The technology advancement in bridge sector has witnessed construction of iconic structures with long span, and aesthetics. This sector also requires assessment of existing bridges and providing solution for rehabilitation or strengthening. Our Team of experts have the competency of planning and design of all types of Bridges, Fly overs, Road over bridges, Interchanges, ROB/RUB besides taking up proof consultancy of design, supervision Consultancy for bridge projects. We have designed and supervised construction of many bridges across the country; few of them being very important bridge projects having length over 2500m having well/pile foundation and superstructure with segmental post-tensioned box girder, pretension girder and RCC deck, prestressed girder with RCC deck, Steel Girders with RCC deck, Steel through Girder etc. We have designed and supervised over 30000m length of Road and Railway bridge across India.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
                className="mb-4"
              >
                <h2 className="text-lg font-semibold text-sky-300 mb-2">CAPABILITIES</h2>
                <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
                  <li>The Firm has the core competency of planning and design of all types of Bridges, Fly overs, Road over bridges, Interchanges, ROB/RUB besides taking up proof consultancy of design, supervision Consultancy for bridge projects. The firm has experienced Design Engineers and design software for carrying out analysis.</li>
                  <li>Inhouse competency for Topographical Survey, Hydrological survey and Geo-technical investigation, providing 'one stop solution' for planning, design and construction of bridging structures for Highways and Railways.</li>
                  <li>Having our inhouse competency of carrying out Topographical Survey, Hydrological survey and Geo-technical investigation, our firm provides 'one stop solution' for planning, design and construction of bridging structures for Highways and Railways.</li>
                </ul>
              </motion.div>
            </div>
            {/* Right: Image Gallery */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
              }}
              className="grid grid-cols-1 gap-6"
            >
              {[{
                src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
                label: 'Iconic Bridge Structure',
              }, {
                src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
                label: 'Long Span Bridge',
              }, {
                src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
                label: 'Urban Flyover',
              }, {
                src: '/bridge.png',
                label: 'Segmental Box Girder',
              }].map((img, idx) => (
                <motion.button
                  key={img.src}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: 'easeOut' }}
                  onClick={() => setSelectedImage({ src: img.src, label: img.label })}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                  whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(56,189,248,0.12)' }}
                >
                  <motion.img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-48 object-cover rounded-xl mb-4 transition-transform duration-300 group-hover:scale-[1.04]"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 + idx * 0.15, ease: 'easeOut' }}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.img
                key={selectedImage.src}
                src={selectedImage.src}
                alt={selectedImage.label}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl shadow-[0_20px_60px_rgba(15,23,42,0.6)]"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
              />

              <div className="mt-4 flex items-start justify-between gap-4 rounded-xl bg-slate-900/70 p-4 border border-white/10">
                <div>
                  <h3 className="text-lg font-semibold text-white">{selectedImage.label}</h3>
                  {selectedImage.description && (
                    <p className="text-sm text-slate-300 mt-1">{selectedImage.description}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
