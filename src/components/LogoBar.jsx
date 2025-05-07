import React from 'react';
import '../index.css';

const logos = [
  { alt: 'Prime', src: 'https://dummyimage.com/100x40/0074F0/fff&text=Prime' },
  { alt: 'Duo', src: 'https://dummyimage.com/100x40/0056B3/fff&text=Duo' },
  { alt: 'TechConsulting', src: 'https://dummyimage.com/100x40/222B38/fff&text=Tech' },
  { alt: 'Ingeris', src: 'https://dummyimage.com/100x40/F4F6FA/222B38&text=Ingeris' },
  { alt: 'Amaris', src: 'https://dummyimage.com/100x40/0074F0/fff&text=Amaris' },
];

export default function LogoBar() {
  return (
    <section className="section full-width-bg" style={{padding: '2rem 0 1rem 0'}}>
      <div className="grid-4col" style={{justifyContent: 'center', alignItems: 'center'}}>
        {logos.map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt} style={{height: 40, width: 'auto', objectFit: 'contain', background: '#fff', borderRadius: 6, padding: '0.5rem 1.5rem'}} />
        ))}
      </div>
    </section>
  );
} 