import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const jobs = [
  { title: 'IT Projektmanager (m/w/d)', location: 'Berlin', payment: '60.000–80.000 €', desc: 'Leiten Sie spannende IT-Projekte bei unseren Kunden.' },
  { title: 'Personalreferent (m/w/d)', location: 'München', payment: '45.000–60.000 €', desc: 'Verstärken Sie unser HR-Team und betreuen Sie Bewerber und Kunden.' },
  { title: 'Vertriebsmitarbeiter (m/w/d)', location: 'Remote', payment: '50.000–70.000 €', desc: 'Unterstützen Sie unser Vertriebsteam deutschlandweit.' },
  { title: 'Recruiting Specialist (m/w/d)', location: 'Hamburg', payment: '48.000–65.000 €', desc: 'Finden und begeistern Sie Talente für unsere Kunden.' },
  { title: 'Softwareentwickler (m/w/d)', location: 'Stuttgart', payment: '65.000–90.000 €', desc: 'Entwickeln Sie innovative Softwarelösungen im agilen Team.' },
  { title: 'Marketing Manager (m/w/d)', location: 'Düsseldorf', payment: '55.000–75.000 €', desc: 'Gestalten Sie kreative Marketingkampagnen für unsere Kunden.' },
  { title: 'Office Manager (m/w/d)', location: 'Frankfurt', payment: '40.000–55.000 €', desc: 'Organisieren Sie den Büroalltag und unterstützen Sie das Team.' },
  { title: 'Data Analyst (m/w/d)', location: 'Remote', payment: '60.000–85.000 €', desc: 'Analysieren Sie Daten und liefern Sie wertvolle Insights.' },
  { title: 'Kundenberater (m/w/d)', location: 'Leipzig', payment: '38.000–50.000 €', desc: 'Beraten Sie unsere Kunden kompetent und freundlich.' },
  { title: 'HR Business Partner (m/w/d)', location: 'Köln', payment: '58.000–80.000 €', desc: 'Begleiten Sie HR-Prozesse und beraten Sie Führungskräfte.' },
  { title: 'Sales Manager (m/w/d)', location: 'Nürnberg', payment: '60.000–90.000 €', desc: 'Verantworten Sie den Vertrieb in Ihrer Region.' },
  { title: 'Projektassistenz (m/w/d)', location: 'Bremen', payment: '36.000–48.000 €', desc: 'Unterstützen Sie Projektleiter bei der Umsetzung von Projekten.' },
  { title: 'Frontend Entwickler (m/w/d)', location: 'Remote', payment: '60.000–85.000 €', desc: 'Setzen Sie moderne Webanwendungen mit React um.' },
  { title: 'Backoffice Mitarbeiter (m/w/d)', location: 'Dortmund', payment: '35.000–45.000 €', desc: 'Sorgen Sie für reibungslose Abläufe im Backoffice.' },
  { title: 'Buchhalter (m/w/d)', location: 'Hannover', payment: '42.000–58.000 €', desc: 'Verantworten Sie die Buchhaltung und das Rechnungswesen.' },
  { title: 'Content Creator (m/w/d)', location: 'Remote', payment: '40.000–55.000 €', desc: 'Erstellen Sie ansprechende Inhalte für Social Media.' },
  { title: 'IT Support (m/w/d)', location: 'Essen', payment: '38.000–52.000 €', desc: 'Unterstützen Sie Anwender bei IT-Fragen und Problemen.' },
  { title: 'Teamassistenz (m/w/d)', location: 'Mannheim', payment: '34.000–44.000 €', desc: 'Unterstützen Sie das Team in administrativen Aufgaben.' },
  { title: 'Account Manager (m/w/d)', location: 'Mainz', payment: '55.000–75.000 €', desc: 'Betreuen Sie Bestandskunden und akquirieren Sie neue.' },
  { title: 'UX/UI Designer (m/w/d)', location: 'Remote', payment: '60.000–80.000 €', desc: 'Gestalten Sie nutzerfreundliche Interfaces und Designs.' },
];

function StellenangeboteHero() {
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
          backgroundImage: 'url(/background/stellenangebote.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          transition: 'background-image 0.3s',
        }}
      />
      <div className="hero-section__overlay" style={{ position: 'absolute', inset: 0, background: 'var(--color-primary-overlay)', opacity: 0.55, zIndex: 0 }} />
      <div className="hero-section__content" style={{ position: 'relative', zIndex: 1, color: '#fff', width: '100%', maxWidth: 900, margin: '0 auto', padding: '2.5rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0 }}>Stellenangebote</h1>
      </div>
    </section>
  );
}

export default function Stellenangebote() {
  return (
    <div>
      <Header />
      <StellenangeboteHero />
      {/* Short Description */}
      <section className="section container" style={{paddingTop: '1.5rem', paddingBottom: '0.5rem'}}>
        <p className="text-center" style={{fontSize: '1.15rem', color: '#4a5568', margin: '0 auto 2.5rem auto'}}>
          Entdecken Sie unsere aktuellen Stellenangebote und finden Sie Ihren nächsten Karriereschritt. Wir bieten spannende Positionen in verschiedenen Branchen und Regionen – bewerben Sie sich jetzt!
        </p>
      </section>
      {/* Job Listing */}
      <section className="section container">
        <div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2.5fr 1.2fr 1.2fr 1fr',
            gap: '0.5rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
            background: 'var(--color-light-gray)',
            borderRadius: '0.5rem 0.5rem 0 0',
            padding: '1rem 1.2rem 0.7rem 1.2rem',
            fontSize: '1.08rem',
          }}>
            <div>Position</div>
            <div>Standort</div>
            <div>Gehalt</div>
            <div></div>
          </div>
          <div style={{ borderRadius: '0 0 0.5rem 0.5rem', overflow: 'hidden', boxShadow: '0 2px 8px rgba(34, 43, 56, 0.06)' }}>
            {jobs.map((job, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5fr 1.2fr 1.2fr 1fr',
                  gap: '0.5rem',
                  alignItems: 'center',
                  background: i % 2 === 0 ? '#fff' : 'var(--color-light-gray)',
                  padding: '1.1rem 1.2rem',
                  borderBottom: i === jobs.length - 1 ? 'none' : '1px solid #e5e7eb',
                  transition: 'background 0.18s',
                }}
                onMouseOver={e => (e.currentTarget.style.background = '#f7fafd')}
                onMouseOut={e => (e.currentTarget.style.background = i % 2 === 0 ? '#fff' : 'var(--color-light-gray)')}
              >
                <div style={{ fontWeight: 500, color: '#1a2a3a', fontSize: '1.08rem' }}>{job.title}</div>
                <div style={{ color: '#4a5568', fontSize: '1.01rem' }}>{job.location}</div>
                <div style={{ color: '#1a2a3a', fontSize: '1.01rem' }}>{job.payment}</div>
                <div style={{ textAlign: 'right' }}>
                  <a href="#bewerben" className="navbar-cta" style={{ minWidth: 120, fontSize: '0.98rem', padding: '0.5em 1.1em' }}>Jetzt bewerben</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 