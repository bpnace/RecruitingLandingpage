import React from 'react';
import '../index.css';

const logos = [
  { alt: 'Kununu', src: '/social/kununu-logo-2023-black.png' },
  { alt: 'LinkedIn', src: '/social/linkedIn.png' },
  { alt: 'Facebook', src: '/social/facebook_logo_RGB-Blue_1024.png' },
  { alt: 'Instagram', src: '/social/ig-icon.png' },
  { alt: 'XING', src: '/social/XING_logo_neu.png' },
  { alt: 'WhatsApp', src: '/social/whatsapp-logo.png' },
  { alt: 'Threads', src: '/social/threads-logo-black-01.png' },
];

export default function LogoBar() {
  return (
    <section className="logobar-slideshow-section">
      <div className="logobar-simple-row">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="logobar-logo"
          />
        ))}
      </div>
    </section>
  );
} 