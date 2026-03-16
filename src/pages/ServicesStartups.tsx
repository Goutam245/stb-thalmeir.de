import ServicePageTemplate from '@/components/ServicePageTemplate';

const StartupsPage = () => (
  <ServicePageTemplate
    tag="Steuerberatung · Existenzgründer"
    title="Steuerberatung für Existenzgründer"
    subtitle="Von der Gründung bis zum Wachstum — steuerliche Begleitung für Ihren erfolgreichen Start"
    description="Die richtige steuerliche Weichenstellung bei der Gründung spart langfristig Zeit und Geld. Ich begleite Sie von der Wahl der Rechtsform über die Finanzplanung bis zur laufenden steuerlichen Betreuung — damit Ihr Start-Up auf einem soliden Fundament steht."
    benefits={[
      'Beratung zur optimalen Rechtsformwahl',
      'Erstellung von Businessplänen und Finanzprognosen',
      'Gründungszuschüsse und Fördermittelberatung',
      'Steuerliche Erstanmeldungen und Registrierungen',
      'Laufende Buchhaltung ab dem ersten Tag',
    ]}
    clientTypes={[
      { title: 'Start-Up Gründer', desc: 'Innovative Geschäftsideen verdienen eine erstklassige steuerliche Grundlage.' },
      { title: 'Nebenberuflich Gründende', desc: 'Der Übergang vom Angestelltenverhältnis in die Selbstständigkeit — steuerlich optimal gestaltet.' },
      { title: 'Internationale Gründer', desc: 'Gründung in Deutschland mit internationalem Hintergrund — wir kennen die Besonderheiten.' },
    ]}
    faqs={[
      { q: 'Was ist bei einer Unternehmensgründung zu beachten?', a: 'Rechtsform, steuerliche Registrierung, Finanzplanung und Buchhaltungsstruktur sind die wichtigsten Themen. Wir begleiten Sie durch jeden Schritt.' },
      { q: 'Welche Rechtsform ist die richtige?', a: 'Das hängt von Ihren Zielen, der Haftungssituation und steuerlichen Aspekten ab. Wir analysieren gemeinsam die beste Option.' },
      { q: 'Ab wann brauche ich einen Steuerberater?', a: 'Idealerweise bereits vor der Gründung, um von Anfang an die Weichen richtig zu stellen.' },
    ]}
  />
);

export default StartupsPage;
