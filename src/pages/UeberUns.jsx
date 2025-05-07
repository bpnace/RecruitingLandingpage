import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const team = [
  { name: 'Anna Schmidt', role: 'Geschäftsführerin', img: 'https://picsum.photos/seed/team1/120/120' },
  { name: 'Lukas Weber', role: 'Senior Recruiter', img: 'https://picsum.photos/seed/team2/120/120' },
  { name: 'Miriam Klein', role: 'Kundenbetreuung', img: 'https://picsum.photos/seed/team3/120/120' },
  { name: 'Jonas Bauer', role: 'Research Specialist', img: 'https://picsum.photos/seed/team4/120/120' },
];

const values = [
  'Transparenz & Vertrauen',
  'Individuelle Beratung',
  'Langfristige Partnerschaften',
  'Innovative Recruiting-Methoden',
];

export default function UeberUns() {
  return (
    <div>
      <Header />
      <section className="section container flex flex-between gap-2" style={{alignItems: 'center'}}>
        <div>
          <h1 style={{fontSize: '2.2rem', marginBottom: '1rem'}}>Über Lorem Ipsum</h1>
          <p style={{fontSize: '1.15rem', marginBottom: '1.5rem', maxWidth: 500}}>
            Wir sind Ihre Experten für Recruiting und Personalvermittlung. Unser Ziel ist es, Unternehmen und Talente nachhaltig zusammenzubringen – mit Leidenschaft, Erfahrung und Innovation.
          </p>
        </div>
        <img src="https://picsum.photos/seed/about/350/300" alt="Unser Team" style={{ borderRadius: '1rem', maxWidth: '320px', width: '100%', height: 'auto' }} />
      </section>

      <section className="section container">
        <h2 className="text-center" style={{marginBottom: '2rem'}}>Unser Team</h2>
        <div className="flex flex-wrap gap-2" style={{justifyContent: 'center'}}>
          {team.map((m, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', minWidth: 180, maxWidth: 220 }}>
              <img src={m.img} alt={m.name} style={{ borderRadius: '50%', width: 80, height: 80, objectFit: 'cover', marginBottom: '0.7rem' }} />
              <div style={{ fontWeight: 600 }}>{m.name}</div>
              <div style={{ color: 'var(--color-primary)', fontSize: '0.98rem' }}>{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2 className="text-center" style={{marginBottom: '2rem'}}>Unsere Werte</h2>
        <div className="flex flex-wrap gap-2" style={{justifyContent: 'center'}}>
          {values.map((v, i) => (
            <div key={i} className="card" style={{ minWidth: 180, maxWidth: 260, textAlign: 'center', fontWeight: 500 }}>{v}</div>
          ))}
        </div>
      </section>

      <section className="section container text-center" style={{paddingBottom: '3rem'}}>
        <h2>Kontaktieren Sie uns</h2>
        <p style={{marginBottom: '1.5rem'}}>Sie möchten mehr über uns erfahren oder ein unverbindliches Beratungsgespräch vereinbaren?</p>
        <a href="#kontakt" className="btn-primary">Jetzt Kontakt aufnehmen</a>
      </section>
      <Footer />
    </div>
  );
} 