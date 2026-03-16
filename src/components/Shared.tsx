import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionTagProps {
  label: string;
  className?: string;
}

export const SectionTag = ({ label, className = '' }: SectionTagProps) => (
  <div className={`flex items-center gap-4 mb-6 ${className}`}>
    <div className="w-8 h-px bg-gold-400" />
    <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold-400">{label}</span>
  </div>
);

export const GoldLine = ({ className = '' }: { className?: string }) => (
  <div className={`gold-line ${className}`} />
);

export const AnimatedSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
