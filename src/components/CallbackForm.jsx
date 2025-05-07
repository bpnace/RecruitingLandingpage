import React from 'react';
import '../index.css';

export default function CallbackFormSection() {
  return (
    <section className="section full-width-bg" style={{ background: 'var(--color-light-gray)', borderRadius: '1rem', margin: '2rem 0' }}>
      <div className="grid-4col">
        <div style={{ gridColumn: '1 / -1' }}>
          <h2 className="text-center" style={{marginBottom: '2rem'}}>Rückruf anfordern</h2>
          <form className="flex flex-wrap gap-1 flex-center" style={{justifyContent: 'center'}}>
            <select required style={{ minWidth: 180, padding: '0.7em 1em', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }}>
              <option>Wie können wir helfen?</option>
              <option>Ich suche Personal</option>
              <option>Ich suche eine Stelle</option>
            </select>
            <input type="text" placeholder="Ihr Name" required style={{ minWidth: 180, padding: '0.7em 1em', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }} />
            <input type="tel" placeholder="Telefonnummer" required style={{ minWidth: 180, padding: '0.7em 1em', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem' }} />
            <button type="submit" className="btn-primary">Absenden</button>
          </form>
        </div>
      </div>
    </section>
  );
} 