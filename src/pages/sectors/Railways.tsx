import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Train, X } from 'lucide-react';

export default function Railways() {
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
                  <Train className="w-8 h-8 text-sky-400" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                  className="text-2xl lg:text-4xl font-bold text-white mb-2"
                >
                  Railways
                </motion.h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                className="text-base text-slate-300 max-w-2xl leading-normal"
              >
                The Government of India has laid emphasis for capacity improvement of Railway sector with added rail length, dedicated freight corridor, adding additional tracks, gauge conversion etc for a sustainable, economical, efficient, safe, reliable, environment friendly railway transport infrastructure. Our contribution to the Railway sector development in India is significant in both Green field and brown field Railway projects. We have logged over 10000km of Railway track length in the field of design, construction, track rehabilitation, yard capacity improvement, dedicated industrial corridors, railway infrastructure for industries, operation and maintenance of railway infrastructure etc. We have also designed & supervised implementation of ballast less tracks and road cum track structures, track laying in tunnels in curves etc. We continually explore the practical application of advanced technologies to provide innovative, cost-effective and appropriate project solutions. We have the credit of completing more than 15 projects across India. We undertake, railway network analysis, track capacity analysis, feasibility studies, detail engineering design as well as construction supervision of Railway projects. Our firm provides one stop solution for planning, design and construction of Railway infrastructures with added inhouse competency for carrying out Topographical Survey, Hydrological survey and Geo-technical investigation; being pre-requisite for detail engineering. We also provide Railway infrastructure solutions to Industries.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}
                className="mt-4"
              >
                <h2 className="text-lg font-semibold text-sky-300 mb-2">CAPABILITIES</h2>
                <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
                  <li>Comprehensive planning, feasibility studies, and design for Greenfield and Brownfield railway projects across India.</li>
                  <li>Track capacity analysis, network optimisation, and supervision spanning more than 10,000 km of rail infrastructure.</li>
                  <li>Specialised expertise in advanced systems including ballast-less tracks, road-cum-rail structures, and tunnel alignments.</li>
                  <li>In-house topographical, hydrological, and geotechnical investigation teams delivering an end-to-end project solution.</li>
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
                src: 'https://t4.ftcdn.net/jpg/02/69/86/19/360_F_269861905_g8j8FL4715MgfYb77eP5DicVURaKxJBT.jpg',
                label: 'Modern Railway Infrastructure',
              }, {
                src: 'https://images.unsplash.com/photo-1540804236945-b6ae24bfe0a9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbHdheSUyMHRyYWNrfGVufDB8fDB8fHww',
                label: 'Advanced Track Systems',
              }, {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAOJejdEjSUqubAiVq5In_u6Qxn9Aj2s-Og&s',
                label: 'Indian Railway Network',
              }, {
                src: '/railway.png',
                label: 'Railway Bridge Construction',
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
