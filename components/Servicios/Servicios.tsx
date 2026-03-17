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