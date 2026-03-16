import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProcessSteps from '@/components/ProcessSteps';
import CTABanner from '@/components/CTABanner';
import { SectionTag, GoldLine, AnimatedSection } from '@/components/Shared';
import julianPhoto from '@/assets/julian-photo.jpg';

const CountUp = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Homepage = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="bg-warm-100">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden" style={{
        background: 'linear-gradient(135deg, #060f14 0%, #0f2f3d 60%, #1a4a5c 100%)'
      }}>
        {/* Gold grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(212,175,122,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,122,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="max-w-[1280px] mx-auto px-[6%] w-full relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-8 h-px bg-gold-400" />
                <span className="font-body text-[11px] uppercase tracking-[0.25em] text-gold-400">International Tax Law · Augsburg</span>
              </motion.div>

              <div className="mb-8">
                {['International Tax Law.', 'Personal. Digital.', 'To the Point.'].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 + i * 0.1 }}
                  >
                    <span className={`font-display text-[42px] md:text-[68px] font-light leading-[1.05] block ${i === 1 ? 'italic text-gold-300' : 'text-white'}`}>
                      {line}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-body text-[16px] font-light text-white/50 max-w-[500px] mb-10 leading-relaxed"
              >
                Internationale Steuerberatung auf höchstem Niveau — individuell, digital und grenzüberschreitend.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.2em] bg-gold-400 text-teal-900 px-8 py-4 hover:bg-gold-300 transition-all duration-300"
                >
                  Erstgespräch vereinbaren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link
                  to="/services/private"
                  className="inline-flex items-center gap-3 font-body text-[11px] uppercase tracking-[0.2em] text-white border border-white/30 px-8 py-4 hover:border-gold-400 hover:text-gold-400 transition-all duration-300"
                >
                  Leistungen entdecken
                </Link>
              </motion.div>
            </div>

            {/* Right — Julian Photo */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 1.05 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-2 hidden lg:block relative"
            >
              <div className="relative">
                {/* Offset border */}
                <div className="absolute -top-5 -right-5 w-full h-full border border-gold-400/30 pointer-events-none" />
                {/* Gold accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400" />
                <img
                  src={julianPhoto}
                  alt="Julian Thalmeir — Steuerberater"
                  className="w-full h-[520px] object-cover object-top"
                  loading="eager"
                />
                {/* Experience badge */}
                <div className="absolute bottom-0 left-0 bg-gold-400 px-7 py-5">
                  <div className="font-display text-[42px] text-teal-900 leading-none">10+</div>
                  <div className="font-body text-[10px] uppercase tracking-[0.15em] text-teal-900">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-20 border-t border-gold-400/20 pt-10 pb-4">
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: 500, suffix: '+', label: 'Zufriedene Mandanten' },
                { value: 15, suffix: '+', label: 'Länder Expertise' },
                { value: 100, suffix: '%', label: 'Persönliche Betreuung' },
              ].map((stat, i) => (
                <div key={i} className={`text-center ${i < 2 ? 'border-r border-gold-400/20' : ''}`}>
                  <div className="font-display text-[36px] text-gold-400">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-body text-[10px] uppercase tracking-[0.2em] text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img src={julianPhoto} alt="Julian Thalmeir" className="w-full h-[520px] object-cover object-top" loading="lazy" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-400" />
              </div>
            </AnimatedSection>

            <div>
              <AnimatedSection delay={0.1}>
                <SectionTag label="Über mich" />
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <h2 className="font-display text-3xl md:text-[48px] font-normal text-teal-900 leading-tight mb-6">
                  Julian Thalmeir — <em className="text-gold-400 not-italic">Ihr Steuerberater für internationale Sachverhalte</em>
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <blockquote className="font-display text-xl italic text-gold-600 border-l-2 border-gold-400/40 pl-6 mb-8">
                  "Your success knows no limits — and neither does my support."
                </blockquote>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <p className="font-body text-[15px] font-light text-txt-500 leading-[1.8] mb-10">
                  Als internationaler Steuerberater in Augsburg unterstütze ich Privatpersonen, Selbstständige und Unternehmen bei komplexen grenzüberschreitenden Steuerfragen. Mein Fokus: Präzision, persönliche Betreuung und digitale Zusammenarbeit.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  {[
                    { title: 'Expertise', desc: 'Tiefgreifendes Fachwissen im internationalen Steuerrecht' },
                    { title: 'Verlässlichkeit', desc: 'Ihr Anliegen hat für mich höchste Priorität' },
                    { title: 'Individuell', desc: 'Maßgeschneiderte Lösungen für Ihre Situation' },
                    { title: 'Digital First', desc: 'Moderne, digitale Zusammenarbeit weltweit' },
                  ].map((item) => (
                    <div key={item.title}>
                      <GoldLine className="mb-4" />
                      <h4 className="font-body text-[13px] font-semibold uppercase tracking-[0.15em] text-teal-900 mb-2">{item.title}</h4>
                      <p className="font-body text-[14px] font-light text-txt-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <Link
                  to="/law-firm"
                  className="inline-flex items-center gap-2 font-body text-[13px] font-medium text-teal-700 hover:text-gold-600 transition-colors"
                >
                  Mehr erfahren →
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Reasons */}
      <section className="py-[120px] section-dark noise-overlay relative">
        <div className="max-w-[1280px] mx-auto px-[6%] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-[48px] font-light text-white leading-tight">
                4 überzeugende Gründe <em className="text-gold-300 not-italic">warum ich der richtige Steuerberater für Sie bin</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="font-body text-[16px] font-light text-white/45 leading-relaxed lg:mt-4">
                Vertrauen Sie auf einen Steuerberater, der internationale Expertise mit persönlichem Engagement und digitaler Flexibilität vereint.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold-400/10">
            {[
              { num: '01', title: 'Internationale Expertise', desc: 'Grenzüberschreitendes Wissen in über 15 Ländern — für optimale steuerliche Lösungen.' },
              { num: '02', title: 'Persönliches Engagement', desc: 'Direkter Zugang zu Ihrem Berater — volle Aufmerksamkeit für Ihr Anliegen.' },
              { num: '03', title: 'Digital & Flexibel', desc: 'Weltweite digitale Zusammenarbeit — ortsunabhängig und effizient.' },
              { num: '04', title: 'Ergebnisorientiert', desc: 'Echte Lösungen statt Standardberatung — höchste Qualitätsansprüche.' },
            ].map((item, i) => (
              <AnimatedSection key={item.num} delay={i * 0.12} className="bg-teal-900/50 p-8 relative group hover:bg-teal-800/50 transition-all duration-500">
                <div className="absolute left-0 top-0 bottom-0 w-0 bg-gold-400 group-hover:w-1 transition-all duration-500" />
                <span className="font-display text-[72px] absolute top-4 right-4 text-gold-400/[0.06] leading-none">{item.num}</span>
                <GoldLine className="mb-6" />
                <h3 className="font-display text-[22px] text-white mb-3">{item.title}</h3>
                <p className="font-body text-[14px] font-light text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-[120px] section-warm">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <AnimatedSection className="text-center mb-16">
            <GoldLine className="mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-[48px] font-light text-teal-900">Meine Leistungen</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Steuerberatung für Privatpersonen', desc: 'Individuelle steuerliche Beratung für Ihre persönliche Situation — von der Einkommensteuer bis zur Vermögensplanung.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80', path: '/services/private' },
              { title: 'Steuerberatung für Selbstständige', desc: 'Maßgeschneiderte Lösungen für Freiberufler und Selbstständige — steuerlich optimiert und zukunftssicher.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', path: '/services/self-employed' },
              { title: 'Steuerberatung für Existenzgründer', desc: 'Von der Gründung bis zum Wachstum — steuerliche Begleitung für Ihren erfolgreichen Start.', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80', path: '/services/startups' },
              { title: 'Internationale Steuerberatung', desc: 'Grenzüberschreitende Steuerberatung — Doppelbesteuerung, Wegzugsbesteuerung und mehr.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80', path: '/services/international' },
            ].map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.12}>
                <Link to={service.path} className="group block bg-white corner-marks overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500">
                  <div className="relative h-[260px] overflow-hidden">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent" />
                    <h3 className="absolute bottom-6 left-6 font-display text-[22px] text-white">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-[14px] font-light text-txt-500 leading-relaxed mb-4">{service.desc}</p>
                    <span className="font-body text-[13px] font-medium text-teal-700 group-hover:text-gold-600 transition-colors">
                      Mehr erfahren →
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Homepage;
