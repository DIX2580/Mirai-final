import { Award, CheckCircle, Target, Train, Landmark, Lightbulb, Users, TrendingUp, Clock, Shield, Zap, Rocket } from 'lucide-react';
import Projects from './Projects';
import ValueProps from './ValueProps';
import TestimonialsNew from './TestimonialsNew';

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 border-2 border-white/20 text-sm font-bold text-white backdrop-blur-xl shadow-2xl uppercase tracking-wider">
               Engineering Excellence Since Inception
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">MIRAI CONSULTANCY</span>
          </h2>
        </div>

        {/* Main About Box with Text and Video */}
        <div className="relative rounded-3xl border-2 border-white/20 bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl p-8 lg:p-12 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-fuchsia-500/5 rounded-3xl" />
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left side - Text Content */}
              <div className="h-[400px] lg:h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
                <div className="space-y-8">
                  {/* About Us */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">About Us</h3>
                    <p className="text-slate-300 text-base leading-relaxed">
                      We are an emerging engineering consultancy company in Eastern India, specialising in railway and highway projects, delivering robust, sustainable and innovative infrastructure project solutions that connect communities and drive economic growth.
                    </p>
                  </div>

                  {/* Our Vision */}
                  <div className="group relative rounded-3xl border-2 border-white/10 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-xl p-6 hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center shadow-xl">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Our Vision</h4>
                      </div>
                      <p className="text-slate-200 text-base leading-relaxed">
                        To be a leader in transport infrastructure, planning for technical excellence, innovative solutions and unwavering commitment to quality and safety, shaping the future of mobility brick by brick by building smarter, more resilient networks for the next generation.
                      </p>
                    </div>
                  </div>

                  {/* Our Mission */}
                  <div className="group relative rounded-3xl border-2 border-white/10 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 backdrop-blur-xl p-6 hover:border-violet-400/50 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/10 group-hover:to-fuchsia-500/10 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center shadow-xl">
                          <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Our Mission</h4>
                      </div>
                      <p className="text-slate-200 text-base leading-relaxed">
                        We provide comprehensive end-to-end engineering and project management consultancy services for railways and highway projects. Our mission is to partner with our clients, from government bodies to private developers, to navigate the complexity of infrastructure development and ensure the delivery of every project on time.
                      </p>
                    </div>
                  </div>

                  {/* Our Expertise */}
                  <div className="group relative rounded-3xl border-2 border-white/10 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 backdrop-blur-xl p-6 hover:border-emerald-400/50 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 grid place-items-center shadow-xl">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-white">Our Expertise</h4>
                      </div>
                      <p className="text-slate-200 text-base leading-relaxed">
                        We have a team of seasoned and experienced engineers having over 3 decades of experience in railways and highway sectors, having delivered a diverse portfolio of projects across various terrains and conditions. In combination with this reputed experience and cutting-edge technology and modern software, our engineers can provide sustainable and cost-effective engineering solutions while planning the project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Video */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border-2 border-white/20 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl p-4 shadow-[0_24px_70px_rgba(8,47,73,0.55)]">
                  <div className="relative flex h-[400px] lg:h-[600px] w-full items-center justify-center overflow-hidden rounded-2xl bg-black/80">
                    <div className="pointer-events-none absolute inset-0 border border-white/15 rounded-2xl" />
                    <iframe
                      src="https://player.vimeo.com/video/1125794428?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&background=1&loop=1"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title="Miraivid"
                      loading="lazy"
                      className="h-full w-full rounded-xl object-cover shadow-[inset_0_0_60px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 border-2 border-white/30 text-sm font-bold text-white backdrop-blur-xl shadow-lg uppercase tracking-wider">
                ⚙️ Our Services
              </span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">Engineering Solutions</span>
            </h3>
            <p className="text-slate-300 text-base max-w-3xl mx-auto">
              End-to-end consultancy services for transport infrastructure development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <article className="group rounded-3xl border-2 border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-rose-400/50 hover:bg-white/[0.05] transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-violet-500 grid place-items-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Train className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Railways
                </h4>
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
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="group rounded-3xl border-2 border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-blue-400/50 hover:bg-white/[0.05] transition-all duration-500">
                            <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                  <Landmark className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">
                  Highways
                </h4>
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
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="relative rounded-3xl border-2 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl p-10 lg:p-12 mb-16 overflow-hidden"
          style={{ borderImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4)) 1' }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v2h-2v-2h2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2zm-2-4v2h2v-2h-2zm0 4v2h2v-2h-2z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-fuchsia-500 grid place-items-center shadow-2xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Projects Delivered
              </h3>
            </div>
            
            <p className="text-slate-100 text-base leading-relaxed mb-6">
              In a short span of our operation, we have delivered complete engineering solutions for <span className="text-white font-bold">11 Road Over Bridges (ROBs)</span> on the <span className="text-white font-bold">Howrah-Chennai line</span> in the state of <span className="text-white font-bold">Andhra Pradesh</span> in short span.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, number: '11+', label: 'ROBs Delivered', color: 'from-blue-500 to-cyan-500' },
                { icon: Users, number: '10+', label: 'Specialist Engineers', color: 'from-violet-500 to-fuchsia-500' },
                { icon: Award, number: '100%', label: 'On-Time Delivery', color: 'from-emerald-500 to-teal-500' },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="relative group rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 text-center overflow-hidden cursor-pointer">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/10 grid place-items-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-xs text-slate-300 font-medium leading-tight">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Mirai Section */}
      <div className="relative py-20 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
              <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Competitive Advantage</span>
              <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Mirai
            </h2>
            <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
              We combine decades of engineering expertise with innovative approaches and cutting-edge technology
              to deliver infrastructure solutions that exceed expectations and stand the test of time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'End-to-End Expertise',
                desc: 'Survey to execution under one roof: design, proof checking, and supervision.',
                icon: CheckCircle,
                stat: '+',
                statLabel: 'Projects Completed'
              },
              {
                title: 'Iconic Engineering',
                desc: 'Complex spans, composite systems, and modernization of critical corridors.',
                icon: Award,
                stat: '+',
                statLabel: 'Years Experience'
              },
              {
                title: 'On-Time, On-Budget',
                desc: 'Rigorous planning and risk controls to deliver with certainty.',
                icon: Target,
                stat: '98.7%',
                statLabel: 'On-time Delivery'
              },
              {
                title: 'Quality Assurance',
                desc: 'Comprehensive QA/QC processes ensuring the highest engineering standards.',
                icon: Shield,
                stat: 'ISO 9001',
                statLabel: 'Certified'
              },
              {
                title: 'Innovation Focus',
                desc: 'Cutting-edge technology and modern engineering practices for future-ready solutions.',
                icon: Zap,
                stat: '50+',
                statLabel: 'Patents & Innovations'
              },
              {
                title: 'Fast Delivery',
                desc: 'Optimized workflows and efficient project management for rapid execution.',
                icon: Clock,
                stat: '30%',
                statLabel: 'Faster Than Industry'
              },
            ].map((p) => {
              const IconComponent = p.icon;
              return (
                <article
                  key={p.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden text-center"
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Stat */}
                  <div className="relative mb-4">
                    <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-1">
                      {p.stat}
                    </div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                      {p.statLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                      {p.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {p.desc}
                    </p>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-500 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                </article>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 bg-gradient-to-br from-fuchsia-500 to-violet-500" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">
                  Join 250+ satisfied clients
                </div>
                <div className="text-slate-400 text-sm">
                  Ready to start your next project?
                </div>
              </div>
              <button className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-xl hover:shadow-[0_0_30px_theme(colors.fuchsia.500/40%)] transition-shadow">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Completed GADs Section */}
      <div className="relative py-12 lg:py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/30 via-violet-500/30 to-fuchsia-500/30 border-2 border-white/30 text-sm font-bold text-white backdrop-blur-xl shadow-lg uppercase tracking-wider">
              Completed GADs for ROBs
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 mt-4">
              Delivered Combined GADs (in lieu of LC)
            </h3>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              The following General Arrangement Drawings (GADs) for Road Over Bridges (ROBs) have been completed. As we expand, more will be added to this gallery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              name: 'LC NO-336',
              file: '/gallery/combined GAD for ROB in lieu of LC NO-336.pdf'
            }, {
              name: 'LC NO-339',
              file: '/gallery/combined GAD for ROB in lieu of LC NO-339.pdf'
            }, {
              name: 'LC NO-337',
              file: '/gallery/Combined GAD for ROB in lieu of LC No.-337.pdf'
            }].map((gad) => (
              <div key={gad.name} className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 text-center">
                <div className="mb-3 text-lg font-semibold text-white">{gad.name}</div>
                <div className="w-full mb-2 flex items-center justify-center bg-slate-900/40 rounded-lg overflow-hidden relative" style={{ aspectRatio: '1 / 1', minHeight: '340px', maxHeight: '420px' }}>
                  <embed src={gad.file} type="application/pdf" width="100%" height="100%" style={{ borderRadius: '0.75rem', background: '#0f172a', width: '100%', height: '100%', aspectRatio: '1 / 1' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '40px', background: 'rgba(15,23,42,0.95)', zIndex: 2, pointerEvents: 'none' }} />
                </div>
                <div className="mt-1 text-xs text-slate-400">Use the PDF viewer controls to zoom, pan, or navigate pages for a detailed view.</div>
                <div className="mt-2 text-xs text-slate-400">Status: <span className="text-green-400 font-bold">Completed</span></div>
                <div className="mt-2 text-xs text-slate-500">Preview only. Download is disabled for these documents.</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 text-slate-400 text-sm">
            <span className="font-semibold text-white">More GADs will be showcased here as our portfolio grows. Stay tuned for future updates and completed projects.</span>
          </div>
        </div>
      </div>
      <div className="relative py-20 lg:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
           
          
            
          </div>

          {/* Testimonials */}
        

          {/* Client Logos */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-8">
              Trusted by Leading Organizations
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
              {[
                { name: 'Indian Railways', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
                { name: 'NHAI', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
                { name: 'IRCON International', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
                { name: 'Delhi Metro Rail', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
                { name: 'Bharat Heavy Electricals', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
                { name: 'NTPC Limited', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center' },
              ].map((client) => (
                <div
                  key={client.name}
                  className="group relative"
                >
                  <div className="h-20 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-4 flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center">
                      <span className="text-xs text-slate-300 font-medium">{client.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
           
            
          </div>
        </div>
      </div>

      <Projects />
      <ValueProps />
      <TestimonialsNew />
    </section>
  );
}
