import React, { useEffect, useRef } from 'react';
import '../index.css';

export default function HeroSection() {
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
    <section className="hero-section" ref={sectionRef}>
      <div className="hero-section__bg" ref={bgRef} />
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="hero-section__content">
        <h1>Persönliches Recruiting für Ihr Unternehmen</h1>
        <p>Ich unterstütze Sie als unabhängiger Recruiter dabei, die passenden Talente für Ihr Team zu finden – individuell, engagiert und mit persönlicher Beratung.</p>
        <div>
          <button className="btn-primary">Unverbindliches Angebot anfordern</button>
          <button className="btn-secondary" style={{ marginLeft: '1rem' }}>Mehr über mich</button>
        </div>
      </div>
    </section>
  );
} 