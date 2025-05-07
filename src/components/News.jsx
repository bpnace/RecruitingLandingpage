import React from 'react';

const news = [
  { title: 'Neue Recruiting-Trends 2024', date: '01.06.2024', img: 'https://picsum.photos/seed/news1/400/300' },
  { title: 'Tipps für erfolgreiche Bewerbungen', date: '15.05.2024', img: 'https://picsum.photos/seed/news2/400/300' },
];

export default function NewsSection() {
  return (
    <section className="section container">
      <h2 className="text-center" style={{marginBottom: '2rem'}}>Aktuelle News</h2>
      <div className="flex gap-2" style={{justifyContent: 'center'}}>
        {news.map((n, i) => (
          <div key={i} className="card" style={{ background: '#fff', border: '1px solid #e0e0e0', maxWidth: '300px', padding: '1rem' }}>
            <img src={n.img} alt={n.title} style={{ width: '100%', borderRadius: '0.5rem' }} />
            <div style={{ marginTop: '0.5rem' }}>
              <strong>{n.title}</strong>
              <div style={{ fontSize: '0.9rem', color: '#888' }}>{n.date}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 