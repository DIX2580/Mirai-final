import { motion } from 'framer-motion';
import { Map } from 'lucide-react';

export default function Geospatial() {
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
                  <Map className="w-8 h-8 text-sky-400" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                  className="text-2xl lg:text-4xl font-bold text-white mb-2"
                >
                  Geospatial Intelligence
                </motion.h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
                className="text-base text-slate-300 max-w-2xl leading-normal mb-4"
              >
                Transforming spatial data into actionable intelligence for infrastructure planning.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: 'easeOut' }}
                className="mb-4"
              >
                <h2 className="text-lg font-semibold text-sky-300 mb-2">CAPABILITIES</h2>
                <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
                  <li>Geospatial Survey & Mapping, GIS Platform Development, and Remote Sensing & Imagery Analysis for infrastructure and urban planning.</li>
                  <li>Spatial Data Analytics, Drone Survey Operations, and 3D Modeling & Visualization for asset management and project optimization.</li>
                  <li>Expertise in spatial intelligence, data management, and advanced analytics for informed decision-making.</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0, ease: 'easeOut' }}
                className="mb-4"
              >
                <h2 className="text-lg font-semibold text-sky-300 mb-2">GEOSPATIAL & GROUND INTELLIGENCE</h2>
                <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
                  <li><strong>Geospatial Survey Intelligence & Analytics:</strong> Advanced geospatial technologies and analytics for precise mapping, spatial data management, and location intelligence in urban planning, infrastructure, and environmental projects.</li>
                  <li><strong>Geotechnical Investigation:</strong> Comprehensive geotechnical investigations including soil sampling, borehole drilling, and laboratory analysis to assess subsurface conditions for safe, cost-effective, and sustainable foundation design.</li>
                  <li><strong>Ground Analysis & Foundation Studies:</strong> Expert ground analysis and foundation studies evaluating soil stability, bearing capacity, and groundwater conditions to minimize risk and enhance structural safety for complex projects.</li>
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
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcX6IP_IRnVLrA3irT_LR_fOL0LF2x3Px7Lvy1a5a9TQ&s=10',
                label: 'Geospatial Monitoring',
              }, {
                src: 'https://cdn.prod.website-files.com/625350933660db97afa01913/63887ce50d226b6937db384c_boosting-agriculture.jpg',
                label: 'Agricultural Intelligence',
              }, {
                src: 'https://www.deepblock.net/hubfs/Blog%20Components/What%20is%20Geospatial%20%20MLOps%20and%20how%20does%20it%20work_Thumbnail-min.png',
                label: 'Geospatial Analytics Platforms',
              }].map((img, idx) => (
                <motion.button
                  key={img.src}
                  type="button"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: 'easeOut' }}
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
    </div>
  );
}