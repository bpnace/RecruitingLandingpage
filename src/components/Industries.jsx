import React from 'react';
import '../index.css';

const branchen = [
  { title: 'IT & Technologie', desc: 'Ich finde für Sie die passenden IT-Fachkräfte und begleite Ihr Unternehmen bei der digitalen Transformation.', icon: 'tech.png' },
  { title: 'Ingenieurwesen', desc: 'Mit meiner Erfahrung unterstütze ich Sie bei der Suche nach qualifizierten Ingenieuren für Ihre Projekte.', icon: 'engineering.png' },
  { title: 'Gesundheitswesen', desc: 'Ich helfe Kliniken, Praxen und Pflegeeinrichtungen, engagiertes medizinisches Personal zu gewinnen.', icon: 'medics.png' },
  { title: 'Vertrieb & Marketing', desc: 'Profitieren Sie von meinem Netzwerk, um talentierte Vertriebs- und Marketingexperten zu finden.', icon: 'sales.png' },
  { title: 'Finanzen & Buchhaltung', desc: 'Ich stärke Ihre Finanzabteilung mit passenden Kandidaten – von Buchhaltung bis Controlling.', icon: 'accounting.png' },
  { title: 'Industrie & Produktion', desc: 'Verlassen Sie sich auf meine Unterstützung bei der Vermittlung von Fachkräften für Produktion und Logistik.', icon: 'industry.png' },
];

export default function IndustriesSection() {
  return (
    <section className="section full-width-bg" style={{ background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 className="industries-title">Meine Branchen-Schwerpunkte</h2>
        <div className="industries-underline"></div>
        <div className="industries-grid">
          {branchen.map((b, i) => (
            <div key={i} className="industry-item">
              <div className="industry-icon">
                <img src={`/industry/${b.icon}`} alt={b.title + ' Icon'} style={{ width: 40, height: 40, objectFit: 'contain' }} />
              </div>
              <div>
                <div className="industry-title">{b.title}</div>
                <div className="industry-desc">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 