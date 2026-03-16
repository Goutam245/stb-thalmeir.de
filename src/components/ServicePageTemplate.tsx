import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSteps from '@/components/ProcessSteps';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import { SectionTag, GoldLine, AnimatedSection } from '@/components/Shared';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServicePageProps {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  clientTypes: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const ServicePageTemplate = ({ tag, title, subtitle, description, benefits, clientTypes, faqs }: ServicePageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-warm-100">
      <Navigation />
      <PageHero tag={tag} title={title} subtitle={subtitle} />

      {/* Overview */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <SectionTag label="Überblick" />
              <h2 className="font-display text-3xl md:text-[42px] font-normal text-teal-900 leading-tight mb-6">{title}</h2>
              <p className="font-body text-[15px] font-light text-txt-500 leading-[1.8]">{description}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h3 className="font-display text-2xl text-teal-900 mb-6">Ihre Vorteile</h3>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="font-body text-[15px] font-light text-txt-700">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-[120px] section-warm">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <AnimatedSection className="text-center mb-16">
            <GoldLine className="mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-[42px] font-light text-teal-900">Für wen ist diese Beratung?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((ct, i) => (
              <AnimatedSection key={ct.title} delay={i * 0.12} className="bg-white p-8 corner-marks hover:-translate-y-1.5 transition-transform duration-300">
                <GoldLine className="mb-6" />
                <h3 className="font-display text-xl text-teal-900 mb-3">{ct.title}</h3>
                <p className="font-body text-[14px] font-light text-txt-500 leading-relaxed">{ct.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* FAQ Preview */}
      <section className="py-[120px] section-dark noise-overlay">
        <div className="max-w-[1280px] mx-auto px-[6%] relative z-10">
          <AnimatedSection className="text-center mb-16">
            <GoldLine className="mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-[42px] font-light text-white">Häufige Fragen</h2>
          </AnimatedSection>
          <div className="max-w-[800px] mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left group"
                >
                  <div className={`border-l-2 ${openFaq === i ? 'border-gold-400' : 'border-transparent'} transition-colors pl-6 py-4`}>
                    <div className="flex justify-between items-center">
                      <h3 className="font-display text-lg text-white group-hover:text-gold-300 transition-colors">{faq.q}</h3>
                      <span className="text-gold-400 text-xl">{openFaq === i ? '−' : '+'}</span>
                    </div>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="font-body text-[14px] font-light text-white/50 leading-relaxed pt-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
                <div className="gold-separator" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default ServicePageTemplate;
