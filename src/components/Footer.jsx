import React from 'react';
import '../index.css';

export default function Footer() {
  return (
    <footer className="full-width-bg" style={{ background: 'var(--color-dark-gray)', color: '#fff', padding: '3rem 0 1.5rem 0' }}>
      <div className="grid-4col" style={{alignItems: 'flex-start'}}>
        <div style={{minWidth: 200}}>
          <div style={{ fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            <img src="/logo2.svg" alt="Max Mustermann Recruiting" style={{ width: '100%', maxWidth: 200, height: 'auto' }} />
          </div>
          <div style={{ fontSize: '1rem', marginBottom: '1rem' }}>
            Vorname Nachname<br />
            Musterstraße 1, 12345 Musterstadt<br />
            max@mustermann-recruiting.de<br />
            +49 123 456789
          </div>
        </div>
        <div style={{minWidth: 160}}>
          <div style={{ fontWeight: 600, marginBottom: '0.7rem' }}>Links</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
              <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Startseite</a></li>
              <li><a href="/ueber-uns" style={{ color: '#fff', textDecoration: 'none' }}>Über mich</a></li>
              <li><a href="/stellenangebote" style={{ color: '#fff', textDecoration: 'none' }}>Stellenangebote</a></li>
              <li><a href="#kontakt" style={{ color: '#fff', textDecoration: 'none' }}>Kontakt</a></li>
            </ul>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
              <li><a href="/impressum" style={{ color: '#fff', textDecoration: 'none' }}>Impressum</a></li>
              <li><a href="/datenschutz" style={{ color: '#fff', textDecoration: 'none' }}>Datenschutz</a></li>
            </ul>
          </div>
        </div>
        <div style={{minWidth: 200}}>
          <div style={{ fontWeight: 600, marginBottom: '0.7rem' }}>Aktuelle News</div>
          <div style={{ fontSize: '0.98rem', marginBottom: '0.5rem' }}>Mein Weg zum erfolgreichen Recruiting</div>
          <div style={{ fontSize: '0.98rem' }}>Tipps für Ihre Bewerbung – aus erster Hand</div>
        </div>
        <div style={{minWidth: 220}}>
          <div style={{ fontWeight: 600, marginBottom: '0.7rem' }}>Newsletter</div>
          <form className="flex gap-1" style={{marginBottom: '0.5rem'}}>
            <input type="email" placeholder="Ihre E-Mail" style={{ padding: '0.6em 1em', borderRadius: 6, border: 'none', fontSize: '1rem', flex: 1 }} />
            <button type="submit" className="btn-primary">Abonnieren</button>
          </form>
          <div style={{ fontSize: '0.9rem', color: '#bbb' }}>Erhalten Sie persönliche Recruiting-Updates von mir.</div>
        </div>
      </div>
      <div className="text-center" style={{marginTop: '2rem', fontSize: '0.95rem', color: '#bbb'}}>
        © 2024 Max Mustermann Recruiting. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
} 