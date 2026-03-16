import ServicePageTemplate from '@/components/ServicePageTemplate';

const SelfEmployedPage = () => (
  <ServicePageTemplate
    tag="Steuerberatung · Selbstständige"
    title="Steuerberatung für Selbstständige"
    subtitle="Maßgeschneiderte Lösungen für Freiberufler und Selbstständige"
    description="Als Selbstständiger stehen Sie vor einzigartigen steuerlichen Herausforderungen. Ich unterstütze Sie bei der optimalen Gestaltung Ihrer Steuersituation, der laufenden Buchhaltung und der strategischen Steuerplanung — damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
    benefits={[
      'Laufende Finanzbuchhaltung und Jahresabschlüsse',
      'Umsatzsteuer-Voranmeldungen und -Erklärungen',
      'Steueroptimierung für Freiberufler',
      'Betriebsausgabenmanagement',
      'Digitale Buchhaltungslösungen',
    ]}
    clientTypes={[
      { title: 'Freiberufler', desc: 'Steuerliche Betreuung für Ärzte, Anwälte, Berater und andere freie Berufe.' },
      { title: 'Einzelunternehmer', desc: 'Von der Gewinnermittlung bis zur Steuerplanung — alles aus einer Hand.' },
      { title: 'Digitale Nomaden', desc: 'Internationale steuerliche Gestaltung für ortsunabhängig Arbeitende.' },
    ]}
    faqs={[
      { q: 'Kann man den Steuerberater einfach wechseln?', a: 'Ja, ein Steuerberaterwechsel ist jederzeit möglich. Wir unterstützen Sie beim reibungslosen Übergang.' },
      { q: 'Welche Unterlagen benötige ich für die Buchhaltung?', a: 'Rechnungen, Belege, Kontoauszüge und Verträge. Wir stellen Ihnen eine digitale Lösung zur einfachen Übermittlung bereit.' },
      { q: 'Wie läuft die Zusammenarbeit ab?', a: 'Vollständig digital möglich — von der Belegübermittlung bis zur Besprechung per Videokonferenz.' },
    ]}
  />
);

export default SelfEmployedPage;
