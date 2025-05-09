import React from 'react';

const news = [
  {
    title: "Mein Weg zum erfolgreichen Recruiting",
    date: "10.06.2024",
    img: "https://picsum.photos/seed/news1/400/300",
    summary: "Wie ich Unternehmen und Talente persönlich zusammenbringe und worauf ich dabei achte.",
  },
  {
    title: "Tipps für Ihre Bewerbung – aus erster Hand",
    date: "02.06.2024",
    img: "https://picsum.photos/seed/news2/400/300",
    summary: "Als erfahrener Recruiter gebe ich Ihnen meine besten Tipps für eine erfolgreiche Bewerbung.",
  },
  {
    title: "Warum persönliche Beratung im Recruiting zählt",
    date: "25.05.2024",
    img: "https://picsum.photos/seed/news3/400/300",
    summary: "Erfahren Sie, warum individuelle Betreuung für mich im Mittelpunkt steht.",
  },
];

export default function NewsSection() {
  return (
    <section className="section container">
      <h2 className="industries-title text-center">Aktuelles & Einblicke aus meiner Recruiting-Praxis</h2>
      <div className="news-underline"></div>
      <div className="flex gap-2" style={{justifyContent: 'center', flexWrap: 'wrap'}}>
        {news.map((n, i) => (
          <div key={i} className="card" style={{ background: '#fff', border: '1px solid #e0e0e0', maxWidth: '320px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 380 }}>
            <img src={n.img} alt={n.title} style={{ width: '100%', borderRadius: '0.5rem', marginBottom: '0.7rem', objectFit: 'cover', height: 160 }} />
            <div style={{ marginBottom: '0.7rem' }}>
              <strong style={{ fontSize: '1.08rem', display: 'block', marginBottom: '0.3rem' }}>{n.title}</strong>
              <div style={{ fontSize: '0.92rem', color: '#888', marginBottom: '0.5rem' }}>{n.date}</div>
              <div style={{ fontSize: '1rem', color: '#444', marginBottom: '0.7rem' }}>{n.summary}</div>
            </div>
            <button className="btn-secondary" style={{alignSelf: 'flex-start', fontSize: '0.98rem', padding: '0.5em 1.2em'}}>Mehr erfahren</button>
          </div>
        ))}
      </div>
    </section>
  );
} 