import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PageHeroProps {
  tag?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; path: string }[];
}

const PageHero = ({ tag, title, subtitle }: PageHeroProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-[60vh] flex items-center section-dark noise-overlay pt-20"
    >
      {/* Gold grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,122,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,122,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-[1280px] mx-auto px-[6%] w-full relative z-10 py-20">
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-gold-400" />
            <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold-400">{tag}</span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl md:text-[60px] font-light text-white leading-tight max-w-[700px] mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-[17px] font-light text-white/50 max-w-[500px]"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
