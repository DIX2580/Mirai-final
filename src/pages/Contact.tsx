import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {

  return (
    <div className="min-h-screen pt-20 bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden border-b border-white/10 bg-slate-950"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
              <Mail className="w-8 h-8 text-sky-400" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white">
                Contact <span className="text-sky-400">Us</span>
              </h1>
              <p className="text-lg text-slate-400 mt-2">Let's discuss your project</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Ready to transform your infrastructure vision into reality? Get in touch with our expert team.
          </p>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">Get In Touch</h2>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Reach out to us for engineering consultancy services and project inquiries.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@mirai.com" className="text-slate-300 hover:text-sky-400 transition-colors">
                      info@mirai.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-slate-300 hover:text-sky-400 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                    <p className="text-slate-300">
                      Bhubaneswar, Odisha, India
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      20°19'33.7"N 85°49'02.2"E
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-slate-900/30">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-400/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Office Hours</h3>
                    <p className="text-slate-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-300">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-slate-400 text-sm mt-1">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-8">
              <div className="mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-sky-400" />
                <h3 className="text-xl font-semibold text-white">Why Choose MIRAI</h3>
              </div>
              <div className="grid gap-3">
                {[
                  '30+ years of combined engineering expertise',
                  '11+ Road Over Bridges successfully delivered',
                  '100% on-time project delivery record',
                  'Cutting-edge technology and innovative solutions',
                ].map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-sky-400 flex-shrink-0" />
                    <span className="text-sm text-slate-300 leading-relaxed">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Map Section */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">Visit Our Office</h2>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Located in the heart of Bhubaneswar, Odisha
              </p>

              <div className="relative rounded-xl overflow-hidden border border-white/10 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3742.8976887654697!2d85.81395!3d20.326025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE5JzMzLjciTiA4NcKwNDknMDIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">Visit Our Office</h2>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Located in the heart of Bhubaneswar, Odisha
              </p>

              <div className="relative rounded-xl overflow-hidden border border-white/10 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3742.8976887654697!2d85.81395!3d20.326025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDE5JzMzLjciTiA4NcKwNDknMDIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
