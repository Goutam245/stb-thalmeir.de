import ServicePageTemplate from '@/components/ServicePageTemplate';

const PrivatePage = () => (
  <ServicePageTemplate
    tag="Steuerberatung · Privatpersonen"
    title="Steuerberatung für Privatpersonen"
    subtitle="Individuelle steuerliche Beratung für Ihre persönliche Situation"
    description="Ob Einkommensteuererklärung, Vermögensplanung oder internationale Steuerfragen — ich begleite Sie mit persönlichem Engagement und höchstem fachlichen Anspruch. Mein Ziel ist es, Ihre steuerliche Belastung legal zu optimieren und Ihnen langfristig finanzielle Sicherheit zu bieten."
    benefits={[
      'Optimierung Ihrer Einkommensteuererklärung',
      'Beratung bei Kapitalerträgen und Vermögensplanung',
      'Internationale Steuerfragen für Privatpersonen',
      'Erbschaft- und Schenkungsteuerberatung',
      'Persönliche und vertrauliche Betreuung',
    ]}
    clientTypes={[
      { title: 'Angestellte', desc: 'Optimale Steuererklärung und Nutzung aller Freibeträge und Abzugsmöglichkeiten.' },
      { title: 'Familien', desc: 'Steuerliche Gestaltung für Familien — von Kindergeld bis zur Vermögensübertragung.' },
      { title: 'Vermögende Privatpersonen', desc: 'Komplexe Vermögensstrukturen und internationale Steuerfragen.' },
    ]}
    faqs={[
      { q: 'Welche Kosten entstehen für die Steuerberatung?', a: 'Die Kosten richten sich nach der Steuerberatergebührenverordnung und dem individuellen Aufwand. Im Erstgespräch besprechen wir transparent die zu erwartenden Kosten.' },
      { q: 'Was kostet ein Erstgespräch?', a: 'Das Erstgespräch ist kostenfrei und unverbindlich. Hier lernen wir uns kennen und besprechen Ihre Situation.' },
      { q: 'Wie läuft die Zusammenarbeit ab?', a: 'Nach dem Erstgespräch erstellen wir einen individuellen Plan. Die gesamte Zusammenarbeit kann digital erfolgen.' },
    ]}
  />
);

export default PrivatePage;
