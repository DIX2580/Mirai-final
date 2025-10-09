import { CheckCircle, Target, Clock, Shield, Award, Zap } from 'lucide-react';

const props = [
  { 
    title: 'Engineering Excellence', 
    desc: '30+ years of combined expertise in railway and highway infrastructure projects.',
    icon: Award,
  },
  { 
    title: 'Proven Track Record', 
    desc: 'Successfully delivered 11+ Road Over Bridges and numerous infrastructure projects.',
    icon: CheckCircle,
  },
  { 
    title: 'On-Time Delivery', 
    desc: '100% project completion record with rigorous quality assurance processes.',
    icon: Target,
  },
  { 
    title: 'End-to-End Solutions', 
    desc: 'Complete project lifecycle management from survey to execution.',
    icon: Shield,
  },
  { 
    title: 'Innovation & Technology', 
    desc: 'Cutting-edge BIM, AI tools and modern engineering practices.',
    icon: Zap,
  },
  { 
    title: 'Client-Centric Approach', 
    desc: 'Dedicated support with transparent communication throughout projects.',
    icon: Clock,
  },
];

export default function ValueProps() {
  return (
    <section id="why-us" className="relative py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-fuchsia-500/20 border-2 border-white/20 text-sm font-bold text-white backdrop-blur-xl shadow-2xl uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">MIRAI</span>
          </h2>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
            We deliver exceptional engineering consultancy services with a focus on quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {props.map((p) => {
            const IconComponent = p.icon;
            return (
              <article className="group relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-6 lg:p-8 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-fuchsia-500/5 to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
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

        {/* Professional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-6 px-8 py-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <div className="text-left">
              <div className="text-white font-semibold text-lg">
                Ready to Start Your Project?
              </div>
              <div className="text-slate-400 text-sm">
                Let's discuss how we can help you achieve your infrastructure goals.
              </div>
            </div>
            <button className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-xl hover:shadow-[0_0_30px_theme(colors.fuchsia.500/40%)] transition-shadow">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
