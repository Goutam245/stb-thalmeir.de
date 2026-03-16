import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import { GoldLine, AnimatedSection } from '@/components/Shared';

const faqs = [
  { q: 'Welche Kosten entstehen für die Steuerberatung?', a: 'Die Kosten richten sich nach der Steuerberatergebührenverordnung (StBVV) und dem individuellen Aufwand. Im kostenfreien Erstgespräch besprechen wir transparent die zu erwartenden Kosten für Ihre persönliche Situation.' },
  { q: 'Wie läuft die Zusammenarbeit ab?', a: 'Nach dem kostenfreien Erstgespräch erstellen wir einen individuellen Betreuungsplan. Die gesamte Zusammenarbeit kann vollständig digital ablaufen — von der Belegübermittlung bis zu Videokonferenzen.' },
  { q: 'Wann sollte man einen Steuerberater aufsuchen?', a: 'Grundsätzlich gilt: Je früher, desto besser. Besonders bei internationalen Sachverhalten, Unternehmensgründungen oder komplexen Vermögenssituationen ist frühzeitige Beratung entscheidend.' },
  { q: 'Kann man außerhalb der Geschäftszeiten einen Termin vereinbaren?', a: 'Ja, nach Absprache sind auch Termine außerhalb der regulären Geschäftszeiten möglich. Kontaktieren Sie mich einfach und wir finden einen passenden Termin.' },
  { q: 'Was kostet ein Erstgespräch?', a: 'Das Erstgespräch ist kostenfrei und unverbindlich. Wir nutzen die 15 Minuten, um Ihre Situation zu besprechen und den besten Weg für die Zusammenarbeit zu finden.' },
  { q: 'Kann man den Steuerberater einfach wechseln?', a: 'Ja, ein Steuerberaterwechsel ist jederzeit möglich. Wir kümmern uns um die vollständige Übernahme und sorgen für einen reibungslosen Übergang.' },
  { q: 'Welche Unterlagen benötige ich für die Buchhaltung?', a: 'Grundsätzlich benötigen wir Rechnungen, Belege, Kontoauszüge und relevante Verträge. Wir stellen Ihnen eine digitale Lösung bereit, über die Sie Belege einfach und sicher übermitteln können.' },
  { q: 'Was ist bei einer Unternehmensgründung zu beachten?', a: 'Rechtsform, steuerliche Registrierung, Finanzplanung und Buchhaltungsstruktur sind die wichtigsten Themen. Idealerweise erfolgt die steuerliche Beratung bereits vor der Gründung, um von Anfang an die Weichen richtig zu stellen.' },
];

const FAQPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-warm-100">
      <Navigation />
      <PageHero tag="FAQ" title="Häufige Fragen" subtitle="Antworten auf die wichtigsten Fragen rund um meine Steuerberatung" />

      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <AnimatedSection className="text-center mb-16">
            <GoldLine className="mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-[42px] font-light text-teal-900">Ihre Fragen — meine Antworten</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 max-w-[1000px] mx-auto">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left group py-5 border-b border-gold-400/15"
                >
                  <div className={`border-l-2 ${openFaq === i ? 'border-gold-400' : 'border-transparent'} transition-colors pl-5`}>
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="font-display text-lg text-teal-900 group-hover:text-gold-600 transition-colors">{faq.q}</h3>
                      <span className="text-gold-400 text-xl shrink-0">{openFaq === i ? '−' : '+'}</span>
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
                          <p className="font-body text-[14px] font-light text-txt-500 leading-relaxed pt-4">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
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

export default FAQPage;
