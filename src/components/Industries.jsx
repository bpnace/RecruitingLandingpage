import React from 'react';
import '../index.css';

const branchen = [
  { title: 'IT & Technologie', desc: 'Wir vermitteln hochqualifizierte IT-Fachkräfte und begleiten Unternehmen bei der digitalen Transformation.', icon: 'tech.png' },
  { title: 'Ingenieurwesen', desc: 'Finden Sie mit uns erfahrene Ingenieure für Ihre Projekte in Bau, Maschinenbau und Elektrotechnik.', icon: 'engineering.png' },
  { title: 'Gesundheitswesen', desc: 'Wir unterstützen Kliniken, Praxen und Pflegeeinrichtungen bei der Suche nach medizinischem Fachpersonal.', icon: 'medics.png' },
  { title: 'Vertrieb & Marketing', desc: 'Wir bringen Unternehmen mit talentierten Vertriebs- und Marketingexperten zusammen.', icon: 'sales.png' },
  { title: 'Finanzen & Buchhaltung', desc: 'Unsere Kandidaten stärken Ihre Finanzabteilung – von Buchhaltung bis Controlling.', icon: 'accounting.png' },
  { title: 'Industrie & Produktion', desc: 'Wir vermitteln qualifizierte Fachkräfte für Produktion, Logistik und industrielle Fertigung.', icon: 'industry.png' },
];

export default function IndustriesSection() {
  return (
    <section className="section full-width-bg" style={{ background: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <h2 className="industries-title">Unsere Branchen</h2>
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