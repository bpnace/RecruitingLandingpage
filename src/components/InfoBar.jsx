import React from 'react';
import '../index.css';

export default function InfoBar() {
  return (
    <div className="full-width-bg" style={{ background: 'var(--color-dark-gray)', color: '#fff', padding: '1.1rem 0' }}>
      <div
        className="grid-4col infobar-grid"
        style={{ alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}
      >
        <span style={{ fontSize: '1.08rem', fontWeight: 500, gridColumn: '1 / 4' }}>
          Sie möchten direkt mit mir sprechen? Geben Sie einfach Ihre Kontaktdaten ein – ich melde mich persönlich bei Ihnen.
        </span>
        <button
          className="btn-secondary"
          style={{ background: '#fff', color: 'var(--color-primary)', border: 'none', fontWeight: 600, gridColumn: '4 / 5', minWidth: 180 }}
        >
          Rückruf anfordern
        </button>
      </div>
    </div>
  );
} 