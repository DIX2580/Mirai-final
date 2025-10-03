import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import Button from './ui/Button';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { 
      q: 'Do you provide end-to-end services?', 
      a: 'Yes, we offer comprehensive services from initial survey & feasibility studies to detailed design, proof checking, and construction supervision. Our integrated approach ensures seamless project delivery with consistent quality standards throughout all phases.',
      icon: HelpCircle
    },
    { 
      q: 'Which sectors do you specialize in?', 
      a: 'We specialize in five core infrastructure sectors: Railways (alignment, capacity planning, structures), Bridges (design, rehabilitation, proof checking), Buildings (structural design, value engineering), Survey (topographical, geotechnical, hydrological), and Highways (design, pavement, modernization).',
      icon: HelpCircle
    },
    { 
      q: 'Can you work as proof consultant?', 
      a: 'Absolutely. We provide independent proof checking and design audit services for complex structures including bridges, high-rise buildings, and critical infrastructure. Our team includes certified checkers with extensive experience in various codes and standards.',
      icon: HelpCircle
    },
    { 
      q: 'What is your typical project timeline?', 
      a: 'Project timelines vary based on scope and complexity. Typically, design projects range from 3-12 months, while supervision extends throughout construction. We pride ourselves on delivering 98.7% of projects on schedule through efficient planning and risk management.',
      icon: HelpCircle
    },
    { 
      q: 'Do you work with international standards?', 
      a: 'Yes, we work with both Indian standards (IS codes, IRC, IRS) and international standards (AASHTO, Eurocode, BS, AISC). Our team stays updated with the latest design practices and incorporates global best practices in our solutions.',
      icon: HelpCircle
    },
    { 
      q: 'How do you ensure quality control?', 
      a: 'We follow ISO 9001 certified quality management systems with multi-tier checking, independent reviews, and continuous monitoring. Every deliverable undergoes rigorous QA/QC processes before submission to ensure the highest engineering standards.',
      icon: HelpCircle
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-32 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
            <span className="text-sm font-medium text-slate-400 tracking-wider uppercase">Common Questions</span>
            <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500" />
          </div>
          <h2 className="brand-title text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our engineering services, processes, and expertise. 
            Can't find what you're looking for? Get in touch with our team.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:bg-white/[0.05] transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 lg:px-8 py-6 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-500 flex items-center justify-center shadow-lg">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                        {faq.q}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-4"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-8 pb-6">
                          <div className="pl-14">
                            <p className="text-slate-300 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Still have questions?</div>
                <div className="text-slate-400 text-sm">Our engineering team is here to help</div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="primary" leftIcon={<MessageCircle className="w-4 h-4" />}>Chat with us</Button>
              <Button variant="secondary" leftIcon={<Phone className="w-4 h-4" />}>Call us</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
