import React, { useEffect, useRef } from 'react';
import '../index.css';

export default function CallbackFormSection() {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  const lastPos = useRef(0);

  useEffect(() => {
    let animationFrame;
    const handleScroll = () => {
      if (!bgRef.current || !sectionRef.current) return;
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom > 0 && rect.top < windowHeight) {
        const percent = (windowHeight - rect.top) / (windowHeight + rect.height);
        const parallaxTarget = (percent - 0.5) * 60;
        lastPos.current = lastPos.current + (parallaxTarget - lastPos.current) * 0.08;
        bgRef.current.style.backgroundPosition = `center calc(50% + ${lastPos.current}px)`;
      }
      animationFrame = requestAnimationFrame(handleScroll);
    };
    animationFrame = requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="callback-hero-section" ref={sectionRef}>
      <div className="callback-hero-bg" ref={bgRef} />
      <div className="callback-hero-overlay" />
      <div className="callback-hero-content">
        <h2 className="callback-hero-title">Rückruf anfordern.</h2>
        <p className="callback-hero-subtext">
          Möchten Sie mit einem unserer Berater sprechen? Geben Sie einfach Ihre Kontaktdaten ein und wir melden uns kurzfristig.<br />
          Alternativ können Sie uns auch per E-Mail kontaktieren.
        </p>
        <form className="callback-hero-form">
          <select required className="callback-hero-input">
            <option>Wie können wir helfen?*</option>
            <option>Ich suche Personal</option>
            <option>Ich suche eine Stelle</option>
          </select>
          <input type="text" placeholder="Ihr Name*" required className="callback-hero-input" />
          <input type="tel" placeholder="Telefonnummer*" required className="callback-hero-input" />
          <button type="submit" className="callback-hero-btn">Absenden</button>
        </form>
      </div>
      {/* Calendly calendar placeholder image removed */}
    </section>
  );
} 