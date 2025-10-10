import { useEffect, useState } from 'react';
import { initParticlesEngine, Particles } from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

type ComingSoonProps = {
	onComplete: () => void;
	durationSeconds?: number;
	launchDateLabel?: string;
};

export default function ComingSoon({
	onComplete,
	durationSeconds = 10,
	launchDateLabel = 'October 10, 2025',
}: ComingSoonProps) {
	const [timeLeft, setTimeLeft] = useState(durationSeconds);
	const [isFinished, setIsFinished] = useState(durationSeconds === 0);
	const [showCelebration, setShowCelebration] = useState(false);
		const [particlesReady, setParticlesReady] = useState(false);
		const [fireworksOptions, setFireworksOptions] = useState<ISourceOptions | null>(null);
		const [celebrationStage, setCelebrationStage] = useState<'idle' | 'lottie' | 'fireworks'>('idle');
		const [showIntro, setShowIntro] = useState(durationSeconds > 0);
		const [backgroundMusic] = useState(() => new Audio('/classical-strings-violin-music-391775.mp3'));
		const [musicStarted, setMusicStarted] = useState(false);

	useEffect(() => {
		setTimeLeft(durationSeconds);
		setIsFinished(durationSeconds === 0);
		setCelebrationStage('idle');
		setShowCelebration(false);
		setShowIntro(durationSeconds > 0);
		backgroundMusic.pause();
		backgroundMusic.currentTime = 0;
		setMusicStarted(false);
	}, [durationSeconds, backgroundMusic]);

	useEffect(() => {
		if (durationSeconds <= 0 || musicStarted) {
			return;
		}

		// Start music automatically - browsers allow muted autoplay
		backgroundMusic.loop = true;
		backgroundMusic.volume = 0.7;
		backgroundMusic.muted = true; // Start muted to bypass autoplay restrictions
		backgroundMusic.currentTime = 0;

		const startMusic = async () => {
			try {
				await backgroundMusic.play();
				setMusicStarted(true);
				console.log('Music started (muted)');

				// Immediately try to unmute after a very short delay
				setTimeout(() => {
					backgroundMusic.muted = false;
					console.log('Music unmuted - should now play automatically');
				}, 100); // Very short delay to ensure play() has started

			} catch (error) {
				console.log('Autoplay failed, will try on user interaction:', error);

				// If autoplay fails completely, wait for user interaction
				const handleUserInteraction = async () => {
					try {
						backgroundMusic.muted = false;
						await backgroundMusic.play();
						setMusicStarted(true);
						console.log('Music started after user interaction');
						document.removeEventListener('click', handleUserInteraction);
						document.removeEventListener('keydown', handleUserInteraction);
					} catch (finalError) {
						console.log('Final music start failed:', finalError);
					}
				};

				document.addEventListener('click', handleUserInteraction);
				document.addEventListener('keydown', handleUserInteraction);
			}
		};

		startMusic();
	}, [durationSeconds, musicStarted, backgroundMusic]);

	useEffect(() => {
		if (isFinished) {
			return;
		}

		const tick = window.setInterval(() => {
			setTimeLeft((prev) => {
				if (prev <= 1) {
					setIsFinished(true);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => window.clearInterval(tick);
	}, [isFinished]);

	useEffect(() => {
		if (!isFinished) {
			return;
		}

		setShowIntro(false);
		setShowCelebration(true);
		setCelebrationStage('lottie');

		const toFireworks = window.setTimeout(() => {
			setCelebrationStage('fireworks');
		}, 5000);
		const doneTimer = window.setTimeout(() => {
			setShowCelebration(false);

			// Fade out music gradually
			const fadeOutMusic = () => {
				const fadeStep = 0.05; // Reduce volume by 5% every 100ms
				const fadeInterval = window.setInterval(() => {
					if (backgroundMusic.volume > fadeStep) {
						backgroundMusic.volume -= fadeStep;
					} else {
						backgroundMusic.pause();
						backgroundMusic.currentTime = 0;
						backgroundMusic.volume = 0.4; // Reset volume for next time
						setMusicStarted(false);
						window.clearInterval(fadeInterval);
					}
				}, 100);
			};

			fadeOutMusic();
			onComplete();
		}, 12000);

		return () => {
			window.clearTimeout(toFireworks);
			window.clearTimeout(doneTimer);
		};
	}, [isFinished, onComplete, backgroundMusic]);

		useEffect(() => {
			void initParticlesEngine(async (engine) => {
				await loadFull(engine);
			}).then(() => setParticlesReady(true));
		}, []);

			useEffect(() => {
				let isMounted = true;
				const fireworksConfig: ISourceOptions = {
					fullScreen: { enable: true },
					background: { color: '#000000' },
					detectRetina: true,
					fpsLimit: 60,
					emitters: {
						direction: 'top',
						life: { count: 0, duration: 0.1, delay: 0.1 },
						rate: { delay: 0.15, quantity: 1 },
						size: { width: 100, height: 0 },
						position: { y: 100, x: 50 },
					},
					particles: {
						color: { value: '#ffffff' },
						number: { value: 0 },
						destroy: {
							bounds: { top: 30 },
							mode: 'split',
							split: {
								count: 1,
								factor: { value: 0.333333 },
								rate: { value: 100 },
								particles: {
									stroke: { width: 0 },
									color: {
										value: ['#ff595e', '#ffca3a', '#8ac926', '#1982c4', '#6a4c93'],
									},
									number: { value: 0 },
									collisions: { enable: false },
									destroy: { bounds: { top: 0 } },
									opacity: {
										value: { min: 0.1, max: 1 },
										animation: {
											enable: true,
											speed: 0.7,
											sync: false,
											startValue: 'max',
											destroy: 'min',
										},
									},
									shape: { type: 'circle' },
									size: { value: 2, animation: { enable: false } },
									life: {
										count: 1,
										duration: { value: { min: 1, max: 2 } },
									},
									move: {
										enable: true,
										gravity: {
											enable: true,
											acceleration: 9.81,
											inverse: false,
										},
										decay: 0.1,
										speed: { min: 10, max: 25 },
										direction: 'outside',
										outModes: 'destroy',
									},
								},
							},
						},
						life: { count: 1 },
						shape: { type: 'circle' },
						size: { value: 1 },
						move: {
							enable: true,
							gravity: {
								acceleration: 15,
								enable: true,
								inverse: true,
								maxSpeed: 100,
							},
							speed: { min: 10, max: 20 },
							outModes: { default: 'destroy', top: 'none' },
						},
					},
					sounds: {
						enable: true,
						events: [
							{
								event: 'particleRemoved',
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								filter: (args: any) => args.data.particle.options.move.gravity.inverse,
								audio: [
									'https://particles.js.org/audio/explosion0.mp3',
									'https://particles.js.org/audio/explosion1.mp3',
									'https://particles.js.org/audio/explosion2.mp3',
								],
							},
						],
						volume: 50,
					},
				};
				
				if (isMounted) {
					setFireworksOptions(fireworksConfig);
				}
				
			return () => {
				isMounted = false;
			};
		}, []);

	const minutes = Math.floor(timeLeft / 60)
		.toString()
		.padStart(2, '0');
	const seconds = (timeLeft % 60).toString().padStart(2, '0');

	return (
				<div className="fixed inset-0 z-[9998] flex items-center justify-center bg-[radial-gradient(circle_at_top,_#05060c,_#000000)] text-white">
				<div className="absolute inset-0 overflow-hidden">
					<div className="pointer-events-none absolute inset-0 bg-black/65" />
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.22),_transparent_50%)]" />
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.12),_transparent_55%)]" />
			</div>

					{showIntro && (
						<div className="relative z-10 flex flex-col items-center gap-10 text-center px-6">
							<div className="relative flex flex-col items-center gap-4">
								<span className="cylinder-bg" aria-hidden />
								<img
									src="/Mirailogo.png"
									alt="MIRAI CONSULTANCY logo"
									className="h-[300px] w-auto drop-shadow-[0_18px_60px_rgba(59,130,246,0.45)]"
								/>
								<p className="font-semibold tracking-[0.35em] uppercase text-white/70 text-xs sm:text-sm">Launching on</p>
								<h1 className="metallic-text text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.2em]">
									MIRAI CONSULTANCY
								</h1>
								<p className="text-white/70 text-sm sm:text-base">{launchDateLabel}</p>
							</div>

							<div className="flex flex-col items-center gap-4">
								<span className="uppercase text-xs sm:text-sm tracking-[0.4em] text-white/60">Launching in</span>
								<div className="flex items-center gap-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-[0.2em]">
									<span className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 shadow-[0_0_24px_rgba(59,130,246,0.35)]">{minutes}</span>
									<span className="text-white/40">:</span>
									<span className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 shadow-[0_0_24px_rgba(236,72,153,0.35)]">{seconds}</span>
								</div>
							</div>

							<p className="max-w-xl text-balance text-sm sm:text-base text-white/70">
								We are polishing the final touches. Stay with us for the grand launch and an unforgettable opening show.
							</p>
						</div>
					)}

					{showCelebration && (
						<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
									{celebrationStage === 'lottie' && (
										<div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-black/70 backdrop-blur-sm px-6 text-center">
											<div className="text-xs sm:text-sm uppercase tracking-[0.45em] text-white/60">Entering MIRAI CONSULTANCY...</div>
														<div className="h-[70vh] w-full max-w-5xl overflow-hidden">
												<iframe
													src="https://lottie.host/embed/0caf0201-01a4-448a-91e9-c8f144cb7ff4/QklyMDRVO0.lottie"
													title="Launch animation"
																className="h-full w-full"
																allowFullScreen
																style={{ background: 'transparent' }}
												/>
											</div>
											<div className="text-xs sm:text-sm uppercase tracking-[0.4em] text-white/70">Preparing grand inauguration</div>
										</div>
							)}

								{celebrationStage === 'fireworks' && (
									<div className="pointer-events-none absolute inset-0 z-[10000] overflow-hidden">
										{particlesReady && fireworksOptions && (
											<div className="absolute inset-0 z-0">
												<Particles
													id="coming-soon-fireworks"
													options={fireworksOptions}
													className="h-full w-full"
													style={{ position: 'absolute', inset: 0 }}
												/>
											</div>
										)}
										<div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6">
											<img
												src="/Mirailogo.png"
												alt="MIRAI CONSULTANCY logo"
												className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto drop-shadow-[0_20px_80px_rgba(59,130,246,0.9)] animate-floaty"
											/>
											<div className="flex flex-col items-center gap-3">
												<div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.25em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] animate-pulse">
													WE ARE LIVE NOW
												</div>
												<div className="text-sm sm:text-base md:text-lg uppercase tracking-[0.4em] text-white/90 font-semibold">MIRAI CONSULTANCY • Grand Opening</div>
											</div>
										</div>
									</div>
								)}
						</div>
					)}
		</div>
	);
}
