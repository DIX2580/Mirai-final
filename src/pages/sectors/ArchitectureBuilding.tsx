import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Landmark, X } from 'lucide-react';

export default function ArchitectureBuilding() {
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
            {/* Left: Heading and Paragraph */}
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
                  className="text-4xl lg:text-6xl font-bold text-white"
                >
                  Architecture & Building
                </motion.h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="text-xl text-slate-300 max-w-5xl leading-relaxed mb-6"
              >
                Our firm specializes in innovative architectural and building solutions, blending aesthetics with functionality. We deliver comprehensive planning, design, and supervision for a wide range of building projects, including commercial complexes, institutional buildings, residential developments, and public infrastructure. Our team leverages advanced design software and sustainable practices to create spaces that inspire and endure.<br /><br />
                <span className="font-bold text-sky-400">CAPABILITIES</span><br />
                Expertise in architectural design, structural engineering, interior planning, landscape architecture, and project management. We provide end-to-end solutions from concept to completion, ensuring quality, safety, and client satisfaction.
              </motion.p>
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
                src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
                label: 'Modern Building Design',
              }, {
                src: 'https://images.unsplash.com/photo-1503389152951-9c3d8e1e8d4e?auto=format&fit=crop&w=800&q=80',
                label: 'Architectural Excellence',
              }, {
                src: 'https://images.unsplash.com/photo-1523413363574-c30aa1c2a1ae?auto=format&fit=crop&w=800&q=80',
                label: 'Sustainable Architecture',
              }, {
                src: '/architecture.png',
                label: 'Building Supervision',
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
