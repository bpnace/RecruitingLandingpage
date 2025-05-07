import React from 'react';
import '../index.css';

const testimonials = [
  {
    name: 'Anna Müller',
    role: 'HR Managerin, TechSolutions GmbH',
    text: 'Die Zusammenarbeit war äußerst professionell. Wir haben schnell passende Kandidaten gefunden!',
    rating: 5,
    img: '/profile/profile1.webp',
  },
  {
    name: 'Maximilian Schulz',
    role: 'Geschäftsführer, Schulz Consulting',
    text: 'Sehr freundliches Team und exzellenter Service. Absolut empfehlenswert!',
    rating: 5,
    img: '/profile/profile2.webp',
  },
  {
    name: 'Sophie Becker',
    role: 'Leiterin Personal, MedCare AG',
    text: 'Schnelle und unkomplizierte Vermittlung von Fachkräften. Wir sind sehr zufrieden.',
    rating: 4,
    img: '/profile/profile3.webp',
  },
  {
    name: 'Jonas Wagner',
    role: 'Teamleiter, LogistikPro',
    text: 'Die Agentur hat uns geholfen, unser Team gezielt zu verstärken. Vielen Dank!',
    rating: 5,
    img: '/profile/profile4.webp',
  },
  {
    name: 'Laura Hoffmann',
    role: 'Recruiterin, FinExpert',
    text: 'Kompetente Beratung und tolle Kandidatenprofile. Wir kommen gerne wieder!',
    rating: 4,
    img: '/profile/profile5.webp',
  },
  {
    name: 'Felix Schneider',
    role: 'CEO, Schneider IT',
    text: 'Sehr gute Kommunikation und schnelle Ergebnisse. Top Dienstleister!',
    rating: 5,
    img: '/profile/profile6.webp',
  },
  {
    name: 'Miriam Klein',
    role: 'Personalreferentin, HealthPlus',
    text: 'Die Agentur hat uns bei der Besetzung mehrerer Schlüsselpositionen unterstützt.',
    rating: 5,
    img: '/profile/profile7.webp',
  },
];

function StarRating({ rating }) {
  return (
    <div className="testimonial-modern-stars">
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= rating ? '#FFD700' : '#E0E0E0', fontSize: '1.1rem' }}>★</span>
      ))}
    </div>
  );
}

function DummyProfileIcon() {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{background:'#eaeaea', borderRadius:'50%'}}>
      <circle cx="27" cy="27" r="27" fill="#e0e0e0"/>
      <ellipse cx="27" cy="22.5" rx="9" ry="9.5" fill="#b0b0b0"/>
      <ellipse cx="27" cy="41" rx="14" ry="8" fill="#c8c8c8"/>
    </svg>
  );
}

export default function TestimonialSection() {
  return (
    <section className="testimonials-modern-section">
      <h2 className="testimonials-title">Das sagen unsere Kunden</h2>
      <div className="testimonials-underline"></div>
      <p className="testimonials-subheadline">Vertrauen von über 2000 Unternehmen in Deutschland</p>
      <div className="testimonials-modern-grid">
        {/* Special 'Your testimonial here' card as featured */}
        <div className="testimonial-card featured testimonial-card-future">
          <div className="testimonial-card-text" style={{fontStyle: 'italic', fontWeight: 600}}>
            Ihr Feedback könnte hier stehen!<br />
            <span style={{fontWeight: 400}}>Teilen Sie Ihre Erfolgsgeschichte mit uns und inspirieren Sie andere Unternehmen!</span><br />
            Wir freuen uns auf Ihre Zusammenarbeit und Ihr persönliches Statement.<br />
            <span style={{fontWeight:400, display:'block', marginTop:'0.7rem'}}>
              Egal ob Sie ein kleines Start-up oder ein etabliertes Unternehmen sind – Ihre Meinung zählt und hilft anderen, die richtige Entscheidung zu treffen. Werden Sie Teil unserer wachsenden Community zufriedener Kunden!
            </span>
          </div>
          <div style={{width: '100%', textAlign: 'left', marginBottom: '1.1rem'}}>
            <a href="#kontakt" className="btn-primary" style={{fontSize: '1rem', padding: '0.6em 1.2em', whiteSpace: 'nowrap'}}>Jetzt Kontakt aufnehmen</a>
          </div>
          <div className="testimonial-card-profile" style={{alignItems: 'center', gap: '1.2rem'}}>
            <DummyProfileIcon />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.3rem'}}>
              <div className="testimonial-card-name" style={{color: '#b0b0b0'}}>Dein Name</div>
              <div className="testimonial-modern-stars">
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{ color: '#E0E0E0', fontSize: '1.1rem' }}>★</span>
                ))}
              </div>
              <div className="testimonial-card-role" style={{color: '#b0b0b0'}}>Deine Position</div>
            </div>
          </div>
        </div>
        {/* All real testimonials as regular cards */}
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={t.name}>
            <div className="testimonial-card-quote-icon">&ldquo;</div>
            <div className="testimonial-card-text">{t.text}</div>
            <div className="testimonial-card-profile">
              <img src={t.img} alt={t.name} className="testimonial-card-avatar" />
              <div>
                <div className="testimonial-card-name">{t.name}</div>
                <StarRating rating={t.rating} />
                <div className="testimonial-card-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 