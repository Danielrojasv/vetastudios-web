import styles from './Proyectos.module.css';

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  stack: string[];
  estado: 'produccion' | 'desarrollo';
}

const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: 'Sistema de Gestión Empresarial',
    descripcion: 'Plataforma integral para la gestión de recursos humanos y finanzas corporativas.',
    stack: ['React', 'Node.js', 'MongoDB'],
    estado: 'produccion'
  },
  {
    id: 2,
    nombre: 'Aplicación de Salud Digital',
    descripcion: 'App móvil para seguimiento de hábitos saludables y consultas médicas online.',
    stack: ['React Native', 'Firebase', 'Python'],
    estado: 'desarrollo'
  }
];

export default function Proyectos() {
  return (
    <section className={styles.proyectosSection}>
      <h2 className={styles.titulo}>
        Lo que hemos <span className={styles.destacado}>construido.</span>
      </h2>
      
      <div className={styles.proyectosGrid}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className={styles.card}>
            <div className={styles.badgeContainer}>
              <span className={
                proyecto.estado === 'produccion' 
                  ? styles.badgeProduccion 
                  : styles.badgeDesarrollo
              }>
                {proyecto.estado === 'produccion' ? 'En producción' : 'En desarrollo'}
              </span>
            </div>
            
            <h3 className={styles.nombre}>{proyecto.nombre}</h3>
            <p className={styles.descripcion}>{proyecto.descripcion}</p>
            
            <div className={styles.stackContainer}>
              {proyecto.stack.map((tech, index) => (
                <span key={index} className={styles.stackItem}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}