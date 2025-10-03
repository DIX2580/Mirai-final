import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const coreServices = [
  { label: 'Highway' },
  { label: 'Bridges' },
  { label: 'Railways' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-[9999] backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/50 border-b border-white/10 shadow-lg">      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 z-10">
            <div className="h-4 w-4 rounded-sm bg-gradient-to-br from-blue-500 via-indigo-500 to-sky-500 shadow-[0_0_20px_theme(colors.blue.500/60%)]" />
            <span className="brand-title text-lg font-bold tracking-widest text-white/90">MIRAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 transition-all duration-300" />
            </NavLink>
            <NavLink to="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
              <span>About</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 transition-all duration-300" />
            </NavLink>
            <NavLink to="/careers" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
              <span>Careers</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 transition-all duration-300" />
            </NavLink>
            <NavLink to="/gallery" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
              <span>Gallery</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 transition-all duration-300" />
            </NavLink>

            {/* Core Services dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                Core Services
                <svg className="h-4 w-4 opacity-70 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.25 7.5l4.5 4.5 4.5-4.5"/>
                </svg>
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 min-w-[14rem] rounded-xl border border-white/20 bg-black/80 backdrop-blur-xl shadow-2xl p-3">
                {coreServices.map((item) => (
                  <NavLink 
                    key={item.label} 
                    to={`/services/${item.label.toLowerCase()}`} 
                    className="block px-4 py-3 rounded-lg hover:bg-white/10 text-slate-200 hover:text-white transition-colors text-sm font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
                      {item.label}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            <NavLink to="/contact" className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500 transition-all duration-300" />
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden inline-flex items-center justify-center h-12 w-12 rounded-xl border border-white/20 text-slate-200 hover:bg-white/10 transition-colors z-10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <motion.div
              animate={{ rotate: open ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                {open ? (
                  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3.75 11.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zM3.75 17.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10 bg-black/20 backdrop-blur-xl"
            >
              <div className="px-4 py-6 space-y-3">
                <NavLink 
                  to="/" 
                  onClick={() => setOpen(false)} 
                  className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
                    Home
                  </div>
                </NavLink>
                <NavLink 
                  to="/about" 
                  onClick={() => setOpen(false)} 
                  className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
                    About
                  </div>
                </NavLink>
                <NavLink 
                  to="/careers" 
                  onClick={() => setOpen(false)} 
                  className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
                    Careers
                  </div>
                </NavLink>
                <NavLink 
                  to="/gallery" 
                  onClick={() => setOpen(false)} 
                  className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
                    Gallery
                  </div>
                </NavLink>
                
                {/* Core Services in mobile */}
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
                      Core Services
                    </div>
                    <motion.svg
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.25 7.5l4.5 4.5 4.5-4.5"/>
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6 mt-2 space-y-1"
                      >
                        {coreServices.map((item) => (
                          <NavLink 
                            key={item.label} 
                            to={`/services/${item.label.toLowerCase()}`} 
                            onClick={() => {
                              setOpen(false);
                              setServicesOpen(false);
                            }}
                            className="block px-4 py-2 rounded-lg text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink 
                  to="/contact" 
                  onClick={() => setOpen(false)} 
                  className="block px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors font-medium"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-sky-500" />
                    Contact
                  </div>
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
