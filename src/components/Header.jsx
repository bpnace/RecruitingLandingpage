import React from 'react';
import '../index.css';

export default function Header() {
  return (
    <nav className="main-navbar">
      <div className="navbar-logo">
        <img src="/logo2.svg" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Startseite</a></li>
        <li><a href="/ueber-uns">Über uns</a></li>
        <li><a href="/stellenangebote">Stellenangebote</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
      <a href="#angebot" className="navbar-cta">Angebot anfordern</a>
    </nav>
  );
} 