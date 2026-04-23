import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Proyectos | Veta Studios',
  description:
    'Proyectos en producción y en desarrollo de Veta Studios: Fasico, Kitty Pot, Lazz y vetastudios.io.',
  openGraph: {
    title: 'Proyectos | Veta Studios',
    description:
      'Proyectos en producción y en desarrollo de Veta Studios: Fasico, Kitty Pot, Lazz y vetastudios.io.',
    url: 'https://vetastudios.io/proyectos',
    siteName: 'Veta Studios',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function Proyectos() {
  return (
    <div className={styles.container}>
      <main>
        <section className={styles.hero}>
          <h1 className={styles.heroH1}>
            Lo que hemos <span className={styles.accent}>construido.</span>
          </h1>
          <p className={styles.heroP}>
            Proyectos propios en producción y en desarrollo. Cada uno es una prueba de nuestra capacidad técnica y nuestro enfoque en calidad.
          </p>
        </section>

        <div className={styles.projectsGrid}>
          <article className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectCardH3}>Fasico</h3>
              <span className={`${styles.badge} ${styles.badgeGreen}`}>En producción</span>
            </div>
            <p className={styles.projectCardP}>
              SaaS integral para empresas constructoras y de servicios. Integra cotizaciones, proyectos, facturación y control operativo en una sola plataforma. Arquitectura React + FastAPI sobre PostgreSQL, diseñada para crecer con la operación de cada cliente.
            </p>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>SaaS B2B</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>FastAPI</span>
              <span className={styles.tag}>PostgreSQL</span>
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectCardH3}>Kitty Pot</h3>
              <span className={`${styles.badge} ${styles.badgeGreen}`}>En producción</span>
            </div>
            <p className={styles.projectCardP}>
              Un puzzle de física para móvil que demuestra nuestro dominio en motores de colisiones y optimización de recursos. Mecánicas de gravedad y rebote empaquetadas en una experiencia lúdica adictiva disponible en App Store y Google Play.
            </p>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>React Native</span>
              <span className={styles.tag}>Motor de Físicas</span>
              <span className={styles.tag}>iOS</span>
              <span className={styles.tag}>Android</span>
            </div>
            <a
              href="https://kittypotgame.com"
              className={styles.btnLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver sitio del juego →
            </a>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectCardH3}>Lazz</h3>
              <span className={`${styles.badge} ${styles.badgeAmber}`}>En validación</span>
            </div>
            <p className={styles.projectCardP}>
              App móvil para profesoras y profesores que corrige pruebas escaneando hojas con la cámara. Combina reconocimiento óptico de marcas (OMR) para alternativas con visión computacional y un modelo de IA para preguntas de desarrollo. Diseñada desde Chile para la realidad de la sala de clases.
            </p>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>React Native</span>
              <span className={styles.tag}>OpenCV</span>
              <span className={styles.tag}>IA</span>
              <span className={styles.tag}>iOS + Android</span>
            </div>
          </article>

          <article className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectCardH3}>vetastudios.io</h3>
              <span className={`${styles.badge} ${styles.badgeGreen}`}>En producción</span>
            </div>
            <p className={styles.projectCardP}>
              El sitio que estás viendo ahora. Migrado desde HTML estático a Next.js con el sistema de diseño propio de Veta Studios, desplegado automáticamente en cada merge a main.
            </p>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>Next.js</span>
              <span className={styles.tag}>TypeScript</span>
              <span className={styles.tag}>CSS Modules</span>
              <span className={styles.tag}>GitHub Actions</span>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
