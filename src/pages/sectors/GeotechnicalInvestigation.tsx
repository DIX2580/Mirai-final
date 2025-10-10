import { motion } from 'framer-motion';
import { Mountain } from 'lucide-react';

const gallery = [
	{
		src: 'https://tigenco.com/wp-content/uploads/2023/01/SPT3-980x608.jpg',
		label: 'Standard Penetration Testing',
		description: 'Data-driven SPT results informing pile design and soil characterisation.',
	},
	{
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlTwdatHASIRww-XJ8EUCfBNFEaX72qqM9Sg&s',
		label: 'Subsurface Monitoring',
		description: 'Instrumentation and monitoring insights supporting long-term ground stability.',
	},
];

export default function GeotechnicalInvestigation() {
	return (
		<div className="min-h-screen bg-slate-950 pt-20 text-white">
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className="rounded-3xl border border-white/10 bg-slate-900/70 shadow-[0_24px_70px_rgba(15,23,42,0.4)] p-8 md:p-12"
				>
					<div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
						<div className="space-y-6">
							<motion.div
								initial={{ opacity: 0, x: -24 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, ease: 'easeOut' }}
								className="inline-flex items-center gap-4 rounded-2xl border border-sky-400/20 bg-sky-400/5 px-5 py-4"
							>
								<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-400/10">
									<Mountain className="h-8 w-8 text-sky-300" />
								</div>
								<div>
									<p className="text-xs uppercase tracking-[0.28em] text-sky-200/70">
										Geotechnical Investigation
									</p>
									<p className="text-lg font-semibold text-white">
										Ground intelligence you can build on
									</p>
								</div>
							</motion.div>

							<motion.h1
								initial={{ opacity: 0, y: 28 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
								className="text-3xl font-bold leading-tight text-white sm:text-4xl"
							>
								Subsurface clarity for safe, resilient infrastructure delivery.
							</motion.h1>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.65, delay: 0.18, ease: 'easeOut' }}
								className="max-w-2xl text-base leading-relaxed text-slate-300/90"
							>
								Our specialists map soil behaviour, groundwater dynamics, and
								geohazards so structural and civil teams can make confident
								decisions from day one. We pair field investigations with lab
								analytics to translate raw findings into actionable design input.
							</motion.p>

							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.65, delay: 0.26, ease: 'easeOut' }}
								className="max-w-2xl text-base leading-relaxed text-slate-300/90"
							>
								Whether it is deep foundations, embankment stability, or seismic
								compliance, our reporting is precise, visual, and ready for
								stakeholder adoption—helping projects move from investigation to
								construction without surprises.
							</motion.p>
						</div>

						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.25 }}
							variants={{
								hidden: { opacity: 0, y: 32 },
								visible: {
									opacity: 1,
									y: 0,
									transition: { staggerChildren: 0.14, delayChildren: 0.15 },
								},
							}}
							className="grid grid-cols-1 gap-5"
						>
							{gallery.map((item) => (
								<motion.div
									key={item.src}
									variants={{
										hidden: { opacity: 0, y: 30 },
										visible: { opacity: 1, y: 0 },
									}}
									className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
								>
									<div className="overflow-hidden">
										<motion.img
											src={item.src}
											alt={item.label}
											className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
											initial={{ scale: 0.96, opacity: 0 }}
											whileInView={{ scale: 1, opacity: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.6, ease: 'easeOut' }}
										/>
									</div>
									<div className="space-y-1 px-6 py-5">
										<h3 className="text-lg font-semibold text-white">
											{item.label}
										</h3>
										<p className="text-sm leading-relaxed text-slate-300/85">
											{item.description}
										</p>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
