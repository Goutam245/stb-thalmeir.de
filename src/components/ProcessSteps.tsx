import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Erstgespräch',
    desc: 'Kostenfreies 15-minütiges Kennenlerngespräch — wir besprechen Ihre Situation und Ziele.',
  },
  {
    num: '02',
    title: 'Beratungsgespräch',
    desc: 'Detaillierte Analyse Ihrer steuerlichen Situation und Erarbeitung individueller Lösungen.',
  },
  {
    num: '03',
    title: 'Langfristige Zusammenarbeit',
    desc: 'Vertrauensvolle Partnerschaft mit kontinuierlicher Betreuung und proaktiver Beratung.',
  },
];

const ProcessSteps = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-[120px] md:py-[72px] bg-white" ref={ref}>
      <div className="max-w-[1280px] mx-auto px-[6%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-[48px] font-light text-teal-900 leading-tight">
            Einfach. Klar. <em className="text-gold-400 not-italic">Drei Schritte zur Lösung.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-11 left-[16.66%] right-[16.66%] h-px bg-gold-400/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-[88px] h-[88px] rounded-full border border-gold-400/40 bg-warm-100 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-[32px] text-teal-800">{step.num}</span>
              </div>
              <h3 className="font-display text-2xl text-teal-900 mb-3">{step.title}</h3>
              <p className="font-body text-[14px] font-light text-txt-500 leading-relaxed max-w-[300px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
