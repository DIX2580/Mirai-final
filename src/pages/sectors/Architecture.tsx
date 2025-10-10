import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Landmark, X } from 'lucide-react';

export default function Architecture() {
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
									className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center"
								>
									<Landmark className="w-8 h-8 text-emerald-400" />
								</motion.div>
								<motion.h1
									initial={{ opacity: 0, x: -30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
									className="text-2xl lg:text-4xl font-bold text-white"
								>
									Architecture & Building
								</motion.h1>
							</motion.div>
							<motion.p
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
								className="text-base text-slate-300 max-w-2xl leading-normal mb-4"
							>
								We generally carry out design of Residential colony, commercial complexes, Auditorium/convention centres, Office buildings, Stadium, Medical Colleges, Workshops & offices for industries, mater plan of townships, University, Rehabilitation Colony, Settlements, landscaping etc. Our service encompasses design for services, roads and area development. We have encouraged climate responsive innovative architecture with emphasis on green space. We are also committed to design the units so that the structures are structurally and functionally safer from disasters so as to minimize risk to human life and infrastructure.<br /><br />
								We have encouraged climate responsive innovative architecture with emphasis on more open space. We are also committed to design the units so that the structures are structurally and functionally safer from disasters so as to minimize risk to human life and infrastructure.<br /><br />
								We always endeavored to emphasize safety in construction and establish sound supervision system with Quality assurance.<br /><br />
								We have always tried to plan the structures to harness the potential of nature, integrate Green technology & emphasized implementation of ECBC guidelines for low energy consumption as a responsibility to reduce carbon foot prints.
							</motion.p>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
								className="mb-6"
							>
								<h2 className="text-lg font-semibold text-emerald-300 mb-2">CAPABILITIES</h2>
								<ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
									<li>Over the years, we have built up a strong reputation as specialists in the design and construction of High-rise residential complexes, high rise office buildings, office cum commercial complex, District Head Quarter hospitals, Medical colleges, auditorium and rehabilitation colony.</li>
									<li>We have successfully delivered town ship planning projects and have contributed significantly in urban planning. Our inhouse capability of designing the services for the building related infrastructure projects is a special attribute and have been largely appreciated by our clientele for the wholesome solution provided by our organisation. We never leave an opportunity to promote green building concept and to integrate the principle of 4 Rs' such as reduction, reuse, recycling and recovery.</li>
									<li>We have carefully nurtured the urban development wing which demands innovation, creativity, aesthetic and above all skilful engineering.</li>
								</ul>
								<p className="text-slate-300 text-sm mt-3">We never leave an opportunity to promote green building concept and to integrate the principle of 4 Rs' such as reduction, reuse, recycling and recovery. We have carefully nurtured the urban development wing which demands innovation, creativity, aesthetic and above all skilful engineering.</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
								className="mb-6"
							>
								<h2 className="text-lg font-semibold text-emerald-300 mb-2">GEOSPATIAL & GROUND INTELLIGENCE</h2>
								<ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
									<li>
										<strong>Geospatial Survey Intelligence & Analytics:</strong> We utilize advanced geospatial technologies and analytics to deliver precise mapping, spatial data management, and location intelligence for urban planning, infrastructure, and environmental projects. Our solutions enable informed decision-making and optimize project outcomes.
									</li>
									<li>
										<strong>Geotechnical Investigation:</strong> Our team conducts comprehensive geotechnical investigations, including soil sampling, borehole drilling, and laboratory analysis, to assess subsurface conditions. These studies ensure safe, cost-effective, and sustainable foundation design for all types of buildings and infrastructure.
									</li>
									<li>
										<strong>Ground Analysis & Foundation Studies:</strong> We provide expert ground analysis and foundation studies, evaluating soil stability, bearing capacity, and groundwater conditions. Our approach minimizes risk, enhances structural safety, and supports resilient construction practices for complex projects.
									</li>
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
								label: 'Modern Residential Complex',
							}, {
								src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
								label: 'Green Urban Planning',
							}, {
								src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
								label: 'Innovative Architecture',
							}, {
								src: '/architecture.png',
								label: 'Auditorium & Convention Centre',
							}].map((img, idx) => (
								<motion.button
									key={img.src}
									type="button"
									initial={{ opacity: 0, scale: 0.9, y: 30 }}
									animate={{ opacity: 1, scale: 1, y: 0 }}
									transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: 'easeOut' }}
									onClick={() => setSelectedImage({ src: img.src, label: img.label })}
									className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60"
									whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(52,211,153,0.12)' }}
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
