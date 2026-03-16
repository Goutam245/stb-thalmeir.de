import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import { SectionTag, GoldLine, AnimatedSection } from '@/components/Shared';
import julianPhoto from '@/assets/julian-photo.jpg';
import augsburgImg from '@/assets/augsburg.jpg';

const timeline = [
  { year: '2014', title: 'Studium der Betriebswirtschaftslehre', desc: 'Schwerpunkt Steuern & Wirtschaftsprüfung' },
  { year: '2017', title: 'Steuerberaterausbildung', desc: 'Praxisnahe Ausbildung in renommierten Kanzleien' },
  { year: '2019', title: 'Steuerberaterexamen', desc: 'Erfolgreich bestanden mit Fokus auf internationales Steuerrecht' },
  { year: '2021', title: 'Gründung STB Thalmeir', desc: 'Eigene Kanzlei für internationale Steuerberatung in Augsburg' },
  { year: '2024', title: 'Internationale Expansion', desc: 'Mandanten in über 15 Ländern weltweit' },
];

const LawFirmPage = () => {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  return (
    <div className="bg-warm-100">
      <Navigation />

      <PageHero
        tag="Über mich"
        title="Julian Thalmeir — Ihr Steuerberater für internationale Sachverhalte"
        subtitle="Meine Mission ist klar: Ihre Steuerbelange mit absoluter Präzision und Weitblick zu begleiten."
      />

      {/* About Section */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img src={julianPhoto} alt="Julian Thalmeir" className="w-full h-[520px] object-cover object-top" loading="lazy" />
                <div className="absolute -top-5 -right-5 w-full h-full border border-gold-400/20 pointer-events-none" />
              </div>
            </AnimatedSection>
            <div>
              <AnimatedSection delay={0.1}>
                <SectionTag label="Mein Werdegang" />
                <h2 className="font-display text-3xl md:text-[48px] font-normal text-teal-900 leading-tight mb-6">
                  Passion für <em className="text-gold-400 not-italic">internationales Steuerrecht</em>
                </h2>
                <p className="font-body text-[15px] font-light text-txt-500 leading-[1.8] mb-6">
                  Mit über 10 Jahren Erfahrung im internationalen Steuerrecht habe ich mich auf grenzüberschreitende steuerliche Fragestellungen spezialisiert. Mein Ansatz verbindet tiefgreifendes Fachwissen mit persönlicher Betreuung und modernster digitaler Zusammenarbeit.
                </p>
                <p className="font-body text-[15px] font-light text-txt-500 leading-[1.8]">
                  Als Steuerberater in Augsburg betreue ich Mandanten weltweit — von Privatpersonen über Freiberufler bis hin zu internationalen Unternehmen. Dabei ist mir eines besonders wichtig: Ihr Vertrauen ist mein höchstes Gut.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[120px] section-warm" ref={timelineRef}>
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <AnimatedSection className="text-center mb-16">
            <GoldLine className="mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-[48px] font-light text-teal-900">Mein Werdegang</h2>
          </AnimatedSection>

          <div className="relative max-w-[700px] mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold-400/30" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full border-2 border-gold-400 bg-warm-100" />
                <span className="font-body text-[11px] uppercase tracking-[0.2em] text-gold-400 mb-2 block">{item.year}</span>
                <h3 className="font-display text-xl text-teal-900 mb-1">{item.title}</h3>
                <p className="font-body text-[14px] font-light text-txt-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <AnimatedSection className="text-center mb-16">
            <GoldLine className="mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-[48px] font-light text-teal-900">Meine Werte</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '⚖️', title: 'Expertise', desc: 'Tiefgreifendes Fachwissen und kontinuierliche Weiterbildung im internationalen Steuerrecht.' },
              { icon: '🤝', title: 'Vertrauen', desc: 'Langfristige Mandantenbeziehungen basierend auf Transparenz und Zuverlässigkeit.' },
              { icon: '💻', title: 'Digital', desc: 'Moderne Technologien für effiziente Zusammenarbeit — weltweit und ortsunabhängig.' },
            ].map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 0.12} className="text-center">
                <div className="text-4xl mb-6">{val.icon}</div>
                <GoldLine className="mx-auto mb-6" />
                <h3 className="font-display text-2xl text-teal-900 mb-3">{val.title}</h3>
                <p className="font-body text-[14px] font-light text-txt-500 leading-relaxed">{val.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-[120px] section-warm">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection className="md:col-span-2">
              <img src={augsburgImg} alt="Augsburg" className="w-full h-[400px] object-cover" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <img src={julianPhoto} alt="Julian Thalmeir" className="w-full h-[400px] object-cover object-top" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default LawFirmPage;
