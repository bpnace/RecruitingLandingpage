import React, { useEffect, useRef } from 'react';
import '../index.css';

export default function ClientBannerSection() {
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  // Store the last background position for lerp
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
        const parallaxTarget = (percent - 0.5) * 60; // Lower multiplier for less movement
        // Lerp for smoothness
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
    <section className="client-banner-section" ref={sectionRef}>
      <div className="client-banner-bg" ref={bgRef} />
      <div className="client-banner-overlay" />
      <div className="client-banner-content">
        <h2 className="client-banner-title">
          Unsere Kunden stehen <span className="client-banner-highlight">im Mittelpunkt</span> unseres Handelns.
        </h2>
      </div>
    </section>
  );
} 