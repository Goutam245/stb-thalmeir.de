import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { SectionTag, GoldLine, AnimatedSection } from '@/components/Shared';
import julianPhoto from '@/assets/julian-photo.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen.');
  };

  return (
    <div className="bg-warm-100">
      <Navigation />
      <PageHero tag="Kontakt" title="Nehmen Sie Kontakt auf" subtitle="Zögern Sie nicht, mich zu kontaktieren — Ihr Erstgespräch ist kostenfrei." />

      {/* Contact Info Cards */}
      <section className="py-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-[6%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { label: 'Telefon', value: '+49 151 101 828 18', icon: '📞' },
              { label: 'E-Mail', value: 'julian.thalmeir@stb-thalmeir.de', icon: '✉️' },
              { label: 'Adresse', value: 'Konrad-Adenauer-Allee 1, 86150 Augsburg', icon: '📍' },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1} className="text-center p-8 bg-warm-50 corner-marks">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-gold-400 mb-3">{item.label}</h4>
                <p className="font-body text-[14px] text-txt-700">{item.value}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={julianPhoto} alt="" className="w-full h-full object-cover object-top opacity-20" />
          <div className="absolute inset-0 section-dark" style={{ opacity: 0.95 }} />
        </div>

        <div className="max-w-[1280px] mx-auto px-[6%] py-[120px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionTag label="Kontakt" />
              <h2 className="font-display text-3xl md:text-[48px] font-light text-white leading-tight mb-6">
                Whatever is on your mind — <em className="text-gold-300 not-italic">let's talk.</em>
              </h2>
              <div className="space-y-4 mt-8">
                {[
                  { label: 'Telefon', value: '+49 151 101 828 18' },
                  { label: 'E-Mail', value: 'julian.thalmeir@stb-thalmeir.de' },
                  { label: 'Adresse', value: 'Konrad-Adenauer-Allee 1, 86150 Augsburg' },
                  { label: 'Öffnungszeiten', value: 'Mo–Do 09:00–17:00 | Fr 09:00–15:00' },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                    <div>
                      <span className="font-body text-[11px] uppercase tracking-[0.15em] text-gold-400 block">{item.label}</span>
                      <span className="font-body text-[15px] font-light text-white/70">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-white p-10">
                <h3 className="font-display text-2xl text-teal-900 mb-6">Nachricht senden</h3>
                <GoldLine className="mb-8" />
                <div className="space-y-5">
                  {[
                    { name: 'name', label: 'Name', type: 'text' },
                    { name: 'email', label: 'E-Mail', type: 'email' },
                    { name: 'phone', label: 'Telefon', type: 'tel' },
                    { name: 'subject', label: 'Betreff', type: 'text' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="font-body text-[11px] uppercase tracking-[0.15em] text-txt-500 mb-2 block">{field.label}</label>
                      <input
                        type={field.type}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className="w-full border border-gold-400/20 px-4 py-3 font-body text-[15px] font-light text-txt-900 focus:border-gold-400 focus:outline-none transition-colors bg-transparent"
                        required={field.name === 'name' || field.name === 'email'}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="font-body text-[11px] uppercase tracking-[0.15em] text-txt-500 mb-2 block">Nachricht</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full border border-gold-400/20 px-4 py-3 font-body text-[15px] font-light text-txt-900 focus:border-gold-400 focus:outline-none transition-colors bg-transparent resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gold-400 text-teal-900 font-body text-[11px] uppercase tracking-[0.2em] py-4 hover:bg-gold-300 transition-all duration-300"
                  >
                    Nachricht absenden
                  </button>
                </div>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.5!2d10.8978!3d48.3705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDIyJzEzLjgiTiAxMMKwNTMnNTIuMSJF!5e0!3m2!1sde!2sde!4v1!5m2!1sde!2sde"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="STB Thalmeir Standort"
        />
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
