### Contacto.tsx
```tsx
// Contacto.tsx
import React from 'react';

const Contacto: React.FC = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Contacto</h2>
      <p>¿Tienes alguna pregunta? ¡Contáctanos!</p>
      <button
        style={{
          backgroundColor: '#e53935',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Enviar Mensaje
      </button>
    </div>
  );
};

export default Contacto;
```