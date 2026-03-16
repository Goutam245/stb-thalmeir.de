import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import augsburgImg from '@/assets/augsburg.jpg';

const CTABanner = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden py-[120px] md:py-[72px]">
      <img src={augsburgImg} alt="Augsburg aerial view" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,30,40,0.92)] to-[rgba(26,74,92,0.85)]" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-[300px] h-[300px] rounded-full border border-gold-400" />
        <div className="absolute inset-4 rounded-full border border-gold-400/60" />
        <div className="absolute inset-10 rounded-full border border-gold-400/30" />
      </div>

      <div className="max-w-[1280px] mx-auto px-[6%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <h2 className="font-display text-3xl md:text-[48px] font-light text-white leading-tight mb-6">
              Treten Sie unseren zufriedenen Mandanten bei und erleben Sie professionelle internationale Steuerberatung in Augsburg.
            </h2>
            <p className="font-body text-[16px] font-light text-white/55 max-w-[500px]">
              Vertrauen Sie auf Expertise, die über Grenzen hinweg für Ihre finanziellen Interessen arbeitet.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex justify-start lg:justify-end"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.2em] bg-gold-400 text-teal-900 px-10 py-4 hover:bg-gold-300 transition-all duration-300 btn-gold-shimmer"
            >
              Erstgespräch vereinbaren
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
