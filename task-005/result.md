```
### components/Contacto/Contacto.tsx
```typescript
// components/Contacto/Contacto.tsx
import styles from './Contacto.module.css';

const Contacto = () => {
  return (
    <div className={styles.contactoContainer}>
      <h2 className={styles.title}>
        ¿Tienes un <span className={styles.redText}>proyecto?</span>
      </h2>
      <p className={styles.subtitle}>
        Conversemos. Respondemos en menos de 24 horas.
      </p>
      <a 
        href="mailto:contacto@vetastudios.io" 
        className={styles.contactButton}
      >
        Escribirnos
      </a>
      <p className={styles.emailText}>contacto@vetastudios.io</p>
    </div>
  );
};

export default Contacto;
```
```

```
### components/Contacto/Contacto.module.css
```css
/* components/Contacto/Contacto.module.css */
.contactoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.redText {
  color: #e53935;
}

.subtitle {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
}

.contactButton {
  background-color: #e53935;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 1rem;
  transition: background-color 0.3s;
}

.contactButton:hover {
  background-color: #c62828;
}

.emailText {
  color: #888888;
  font-size: 0.9rem;
}
```
```