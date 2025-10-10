import { useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const primaryLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
];

const sectors = [
  { label: 'Railways', path: '/sectors/railways', description: 'Transit networks & smart mobility' },
  { label: 'Highways', path: '/sectors/highway', description: 'Expressway design & corridor planning' },
  { label: 'Bridges', path: '/sectors/bridges', description: 'Structural excellence & integrity' },
  { label: 'Architecture & Buildings', path: '/sectors/architecture-buildings', description: 'Iconic spaces and urban form' },
  { label: 'Geospatial', path: '/sectors/geospatial', description: 'Survey intelligence & analytics' },
  { label: 'Geotechnical Investigation', path: '/sectors/geotechnical-investigation', description: 'Ground analysis & foundation studies' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const location = useLocation();

  const activeLink = useMemo(
    () => primaryLinks.find((link) => location.pathname === link.path)?.path,
    [location.pathname]
  );

  const linkBaseClasses =
    'group relative inline-flex items-center justify-center text-sm font-medium tracking-wide transition-colors px-1 py-1 text-slate-200 hover:text-white';
  const underlineClasses =
    'absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 transition-all duration-300';

  const handleSectorsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <header className="fixed top-0 inset-x-0 z-[9999] bg-[#04070f]/80 supports-[backdrop-filter]:bg-[#04070f]/60 backdrop-blur-xl border-b border-white/10">
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center z-10">
            <span className="relative flex items-center">
              <img
                src="/Mirailogo.png"
                alt="Mirai Consultant"
                className="h-[200px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(59,130,246,0.5)]"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {primaryLinks.slice(0, 2).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${
                    isActive || activeLink === link.path ? 'text-white' : 'text-slate-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative inline-flex flex-col items-center">
                    {link.label}
                    <span
                      className={`${underlineClasses} ${
                        isActive || activeLink === link.path
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}

            <div
              className="relative group"
              onMouseEnter={() => setSectorsOpen(true)}
              onMouseLeave={() => setSectorsOpen(false)}
            >
              <button className={`${linkBaseClasses} flex items-center gap-1 text-slate-300 hover:text-white`}>
                <span>Sectors</span>
                <motion.svg
                  animate={{ rotate: sectorsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-4 w-4 opacity-70"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5.25 7.5l4.5 4.5 4.5-4.5" />
                </motion.svg>
              </button>

              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 top-full -translate-x-1/2 mt-4 min-w-[22rem] rounded-2xl border border-white/10 bg-[#0b1629]/95 backdrop-blur-xl shadow-2xl p-4">
                <div className="grid grid-cols-1 gap-2">
                  {sectors.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={handleSectorsClick}
                      className={({ isActive }) =>
                        `flex flex-col gap-1 rounded-xl border border-transparent px-4 py-3 transition ${
                          isActive
                            ? 'border-sky-500/40 bg-white/5 text-white shadow-inner'
                            : 'hover:border-sky-500/30 hover:bg-white/5 text-slate-200 hover:text-white'
                        }`
                      }
                    >
                      <span className="text-sm font-semibold tracking-wide">{item.label}</span>
                      <span className="text-xs text-slate-400">{item.description}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.slice(2).map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${
                    isActive || activeLink === link.path ? 'text-white' : 'text-slate-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative inline-flex flex-col items-center">
                    {link.label}
                    <span
                      className={`${underlineClasses} ${
                        isActive || activeLink === link.path
                          ? 'w-full opacity-100'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
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
              className="lg:hidden border-t border-white/10 bg-[#04070f]/80 backdrop-blur-xl"
            >
              <div className="px-4 py-6 space-y-3">
                {primaryLinks.slice(0, 2).map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-medium transition-colors ${
                        isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                {/* Core Sectors in mobile */}
                <div>
                  <button
                    onClick={() => setSectorsOpen(!sectorsOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-200 hover:bg-white/10 hover:text-white transition-colors font-medium"
                  >
                    <div className="flex items-center gap-3">
                      Sectors
                    </div>
                    <motion.svg
                      animate={{ rotate: sectorsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M5.25 7.5l4.5 4.5 4.5-4.5"/>
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {sectorsOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="ml-6 mt-2 space-y-1"
                      >
                        {sectors.map((item) => (
                          <NavLink
                            key={item.label}
                            to={item.path}
                            onClick={handleSectorsClick}
                            className={({ isActive }) =>
                              `block rounded-lg px-3 py-2 text-sm font-medium transition ${
                                isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                              }`
                            }
                          >
                            <span className="block font-semibold">{item.label}</span>
                            <span className="text-xs text-slate-400">{item.description}</span>
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {primaryLinks.slice(2).map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-medium transition-colors ${
                        isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
