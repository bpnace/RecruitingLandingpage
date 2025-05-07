import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const jobs = [
  { title: 'IT Projektmanager (m/w/d)', location: 'Berlin', desc: 'Leiten Sie spannende IT-Projekte bei unseren Kunden.' },
  { title: 'Personalreferent (m/w/d)', location: 'München', desc: 'Verstärken Sie unser HR-Team und betreuen Sie Bewerber und Kunden.' },
  { title: 'Vertriebsmitarbeiter (m/w/d)', location: 'Remote', desc: 'Unterstützen Sie unser Vertriebsteam deutschlandweit.' },
  { title: 'Recruiting Specialist (m/w/d)', location: 'Hamburg', desc: 'Finden und begeistern Sie Talente für unsere Kunden.' },
];

export default function Stellenangebote() {
  return (
    <div>
      <Header />
      <section className="section container">
        <h1 className="text-center" style={{marginBottom: '2rem'}}>Aktuelle Stellenangebote</h1>
        <div className="flex flex-wrap gap-2" style={{justifyContent: 'center'}}>
          {jobs.map((job, i) => (
            <div key={i} className="card" style={{ minWidth: 260, maxWidth: 340, flex: '1 1 260px' }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem' }}>{job.title}</div>
              <div style={{ color: 'var(--color-primary)', fontSize: '0.98rem', marginBottom: '0.5rem' }}>{job.location}</div>
              <div style={{ marginBottom: '1rem' }}>{job.desc}</div>
              <a href="#bewerben" className="btn-primary" style={{width: '100%', display: 'inline-block', textAlign: 'center'}}>Jetzt bewerben</a>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
} 