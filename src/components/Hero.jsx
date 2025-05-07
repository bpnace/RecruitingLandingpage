import React from 'react';
import '../index.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="hero-section__content">
        <h1>Recruiting & Personalvermittlung</h1>
        <p>Egal wie groß Ihr Unternehmen ist – wir finden die passenden Talente.</p>
        <div>
          <button className="btn-primary">Angebot anfordern</button>
          <button className="btn-secondary" style={{ marginLeft: '1rem' }}>Unsere Leistungen</button>
        </div>
      </div>
    </section>
  );
} 