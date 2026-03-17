### components/Servicios/Servicios.tsx
```tsx
// components/Servicios/Servicios.tsx
import React from 'react';
import styles from './Servicios.module.css';

interface ServiceCardProps {
  name: string;
  description: string;
  tags: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, tags }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Servicios: React.FC = () => {
  const services = [
    {
      name: "Desarrollo Web",
      description: "Creamos aplicaciones web modernas y responsivas utilizando las últimas tecnologías.",
      tags: ["React", "TypeScript", "Node.js"]
    },
    {
      name: "Diseño UI/UX",
      description: "Diseñamos experiencias de usuario intuitivas y atractivas para cualquier plataforma.",
      tags: ["Figma", "Prototipado", "Wireframing"]
    },
    {
      name: "Consultoría Técnica",
      description: "Asesoramos a empresas en la adopción de tecnologías y mejores prácticas de desarrollo.",
      tags: ["Arquitectura", "Scalability", "Performance"]
    },
    {
      name: "Mantenimiento",
      description: "Mantenemos y optimizamos aplicaciones existentes para garantizar su correcto funcionamiento.",
      tags: ["Refactorización", "Testing", "CI/CD"]
    }
  ];

  return (
    <section className={styles.serviciosSection}>
      <h2 className={styles.title}>
        Lo que <span className={styles.highlight}>construimos.</span>
      </h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Servicios;
```

### components/Servicios/Servicios.module.css
```css
/* components/Servicios/Servicios.module.css */
.serviciosSection {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.highlight {
  color: #ff0000;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .title {
    font-size: 2rem;
  }
  
  .serviciosSection {
    padding: 1.5rem;
  }
}

.card {
  border: 1px solid #222222;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.cardTitle {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  color: #333333;
}

.cardDescription {
  color: #888888;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.tagsContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #f5f5f5;
  color: #333333;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}
```