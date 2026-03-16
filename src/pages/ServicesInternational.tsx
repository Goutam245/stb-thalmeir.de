import ServicePageTemplate from '@/components/ServicePageTemplate';

const InternationalPage = () => (
  <ServicePageTemplate
    tag="Steuerberatung · International"
    title="Internationale Steuerberatung"
    subtitle="Grenzüberschreitende Steuerberatung mit Expertise in über 15 Ländern"
    description="Internationale Steuerfragen erfordern spezialisiertes Wissen und Erfahrung. Ob Doppelbesteuerungsabkommen, Wegzugsbesteuerung oder grenzüberschreitende Unternehmensstrukturen — ich biete Ihnen maßgeschneiderte Lösungen für Ihre internationalen steuerlichen Herausforderungen."
    benefits={[
      'Beratung zu Doppelbesteuerungsabkommen',
      'Wegzugsbesteuerung nach § 6 AStG',
      'Internationale Unternehmensstrukturen',
      'Expat-Steuerberatung',
      'US-Steuerrecht für in Deutschland Lebende',
      'Grenzüberschreitende Vermögensplanung',
    ]}
    clientTypes={[
      { title: 'Expats', desc: 'Steuerliche Betreuung für nach Deutschland Zugezogene oder ins Ausland Entsandte.' },
      { title: 'US-Bürger in Deutschland', desc: 'Spezialisierung auf die komplexe Doppelbesteuerung zwischen USA und Deutschland.' },
      { title: 'Internationale Unternehmen', desc: 'Steueroptimierung für grenzüberschreitende Geschäftstätigkeit.' },
    ]}
    faqs={[
      { q: 'Was ist die Wegzugsbesteuerung?', a: 'Die Wegzugsbesteuerung nach § 6 AStG besteuert fiktive Veräußerungsgewinne bei Wegzug aus Deutschland. Wir beraten Sie umfassend zu Gestaltungsmöglichkeiten.' },
      { q: 'Brauche ich als Expat einen spezialisierten Steuerberater?', a: 'Ja, internationale Steuerfragen sind komplex und erfordern spezialisiertes Wissen über Doppelbesteuerungsabkommen und die jeweiligen nationalen Steuergesetze.' },
      { q: 'Wie funktioniert die Beratung bei internationalen Fällen?', a: 'Vollständig digital — wir betreuen Mandanten weltweit per Videokonferenz und digitaler Zusammenarbeit.' },
    ]}
  />
);

export default InternationalPage;
