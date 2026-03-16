import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const navLinks = [
  { label: 'Startseite', path: '/' },
  { label: 'Kanzlei', path: '/law-firm' },
  {
    label: 'Leistungen', path: '/services/private', children: [
      { label: 'Privatpersonen', path: '/services/private' },
      { label: 'Selbstständige', path: '/services/self-employed' },
      { label: 'Existenzgründer', path: '/services/startups' },
      { label: 'International', path: '/services/international' },
    ]
  },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
  { label: 'Kontakt', path: '/contact' },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.97]);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-sm"
        style={{ backgroundColor: useTransform(bgOpacity, (v) => `rgba(10,30,40,${v})`) }}
      >
        <div className="max-w-[1280px] mx-auto px-[6%] flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 border border-gold-400 flex items-center justify-center">
              <span className="font-display text-lg text-gold-400 font-medium">JT</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-[17px] text-white tracking-wide">Julian Thalmeir</div>
              <div className="font-body text-[9px] text-gold-400 uppercase tracking-[0.25em]">German Tax Advisor</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  to={link.path}
                  className="font-body text-[12px] uppercase tracking-[0.2em] text-white/70 hover:text-gold-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-teal-900/98 backdrop-blur-md border border-gold-400/10 py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-2.5 font-body text-[11px] uppercase tracking-[0.15em] text-white/60 hover:text-gold-400 hover:bg-white/5 transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden lg:block font-body text-[11px] uppercase tracking-[0.2em] text-gold-400 border border-gold-400/50 px-6 py-2.5 hover:bg-gold-400 hover:text-teal-900 transition-all duration-300"
          >
            Erstgespräch
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 7 } : {}} className="w-6 h-px bg-white block" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : {}} className="w-6 h-px bg-white block" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -7 } : {}} className="w-6 h-px bg-white block" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-teal-900/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <div key={link.label} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className="font-display text-3xl text-white hover:text-gold-400 transition-colors"
                    onClick={() => !link.children && setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="mt-2 flex flex-col gap-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="font-body text-sm text-white/50 hover:text-gold-400"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 font-body text-[11px] uppercase tracking-[0.2em] text-gold-400 border border-gold-400/50 px-8 py-3 hover:bg-gold-400 hover:text-teal-900 transition-all"
              >
                Erstgespräch vereinbaren
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
