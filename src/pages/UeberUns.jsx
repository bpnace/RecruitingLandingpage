import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallbackForm from '../components/CallbackForm';

const team = [
  { name: 'Anna Schmidt', role: 'Geschäftsführerin', img: 'https://picsum.photos/seed/team1/120/120' },
  { name: 'Lukas Weber', role: 'Senior Recruiter', img: 'https://picsum.photos/seed/team2/120/120' },
  { name: 'Miriam Klein', role: 'Kundenbetreuung', img: 'https://picsum.photos/seed/team3/120/120' },
  { name: 'Jonas Bauer', role: 'Research Specialist', img: 'https://picsum.photos/seed/team4/120/120' },
];

const values = [
  {
    icon: '🛡️',
    title: 'Transparenz & Vertrauen',
    desc: 'Wir kommunizieren offen und ehrlich – für nachhaltige Partnerschaften.'
  },
  {
    icon: '🤝',
    title: 'Individuelle Beratung',
    desc: 'Jeder Kunde ist einzigartig – wir bieten maßgeschneiderte Lösungen.'
  },
  {
    icon: '🌱',
    title: 'Langfristige Partnerschaften',
    desc: 'Wir setzen auf Beziehungen, die wachsen und Bestand haben.'
  },
  {
    icon: '💡',
    title: 'Innovative Recruiting-Methoden',
    desc: 'Wir nutzen moderne Tools und kreative Ansätze für Ihren Erfolg.'
  },
];

function UeberUnsHero() {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  const lastPos = useRef(0);

  useEffect(() => {
    let animationFrame;
    const handleScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const percent = (windowHeight - rect.top) / (windowHeight + rect.height);
        const parallaxTarget = (percent - 0.5) * 60;
        lastPos.current = lastPos.current + (parallaxTarget - lastPos.current) * 0.08;
        bgRef.current.style.backgroundPosition = `center calc(50% + ${lastPos.current}px)`;
      }
      animationFrame = requestAnimationFrame(handleScroll);
    };
    animationFrame = requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      className="hero-section"
      ref={sectionRef}
      style={{ minHeight: '320px', maxHeight: '420px', height: '36vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0, paddingTop: 0 }}
    >
      <div
        className="hero-section__bg"
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/background/about.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          transition: 'background-image 0.3s',
        }}
      />
      <div className="hero-section__overlay" style={{ position: 'absolute', inset: 0, background: 'var(--color-primary-overlay)', opacity: 0.55, zIndex: 0 }} />
      <div className="hero-section__content" style={{ position: 'relative', zIndex: 1, color: '#fff', width: '100%', margin: '0 auto', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Über Uns</h1>
      </div>
    </section>
  );
}

export default function UeberUns() {
  return (
    <div>
      <Header />
      <UeberUnsHero />
      {/* About Section */}
      <section className="section container flex flex-between gap-2" style={{alignItems: 'center', background: 'var(--color-light-gray)', boxShadow: '0 2px 12px rgba(34,43,56,0.06)', marginTop: '-3rem', padding: '2.5rem 2rem', flexWrap: 'wrap'}}>
        <div style={{flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '2rem'}}>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Anna Schmidt, Gründerin" style={{ borderRadius: '1.5rem', width: 240, height: 240, objectFit: 'cover', boxShadow: '0 8px 32px rgba(34,43,56,0.13)', border: '5px solid #fff' }} />
        </div>
        <div style={{flex: 2, minWidth: 280, marginLeft: '2.5rem'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '1.2rem', color: 'var(--color-dark-gray)'}}>Anna Schmidt – Gründerin & Herz des Unternehmens</h2>
          <p style={{fontSize: '1.15rem', color: '#1a2a3a', marginBottom: '1.5rem'}}>
            Schon als Kind war ich fasziniert davon, wie Menschen zusammenarbeiten und gemeinsam Großes erreichen können. Nach meinem Studium der Wirtschaftspsychologie und mehreren Jahren in der Personalberatung wurde mir klar: Ich möchte mehr bewegen – und zwar auf meine eigene, persönliche Art.
          </p>
          <div style={{
            background: 'var(--color-light-gray)',
            color: 'var(--color-primary)',
            borderRadius: '0.7rem',
            padding: '1.2rem 1.5rem',
            fontSize: '1.18rem',
            fontStyle: 'italic',
            fontWeight: 600,
            margin: '1.5rem 0',
            boxShadow: '0 2px 12px rgba(34,43,56,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <span style={{fontSize: '2rem', color: 'var(--color-dark-gray)', opacity: 0.7, lineHeight: 0}}>&ldquo;</span>
            Mein Antrieb ist es, Menschen und Unternehmen so zusammenzubringen, dass beide Seiten wirklich profitieren – mit Herz, Verstand und viel Engagement.
          </div>
          <p style={{fontSize: '1.15rem', color: '#1a2a3a'}}>
            2021 wagte ich den Schritt in die Selbstständigkeit. Seitdem begleite ich Unternehmen und Talente auf ihrem Weg zum Erfolg – mit Offenheit, Ehrlichkeit und dem festen Glauben daran, dass Recruiting mehr ist als nur das Besetzen von Stellen. Es ist die Kunst, Potenziale zu erkennen und Teams nachhaltig zu stärken.
          </p>
        </div>
      </section>
      <section className="section container" style={{ background: 'white', boxShadow: '0 2px 12px rgba(34,43,56,0.06)', padding: '2.5rem 2rem' }}>
        <h2 className="text-center" style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--color-dark-gray)', marginBottom: '0.2rem' }}>Unsere Werte</h2>
        <div className="testimonials-underline" style={{ width: 60, height: 4, background: 'var(--color-primary)', margin: '0 auto 2.5rem auto', borderRadius: 2 }} />
        <div className="flex flex-wrap gap-2" style={{justifyContent: 'center', gap: '1.2rem', rowGap: '2rem'}}>
          {values.map((v, i) => (
            <div key={i} style={{
              background: 'var(--color-light-gray)',
              borderRadius: '1.2rem',
              minWidth: 180,
              maxWidth: 240,
              flex: '1 1 180px',
              boxShadow: '0 4px 16px rgba(34,43,56,0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1.3rem 1rem 1.2rem 1rem',
              position: 'relative',
              borderTop: '5px solid var(--color-primary)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.1rem', marginBottom: '0.7rem', color: 'var(--color-primary)' }}>{v.icon}</div>
              <div style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '1.08rem', marginBottom: '0.5rem', lineHeight: 1.3 }}>{v.title}</div>
              <div style={{ color: 'var(--color-dark-gray)', fontSize: '0.98rem', fontWeight: 500 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <CallbackForm />
      <Footer />
    </div>
  );
} 