import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Veta Studios | Software Engineering & Digital Products',
  description: 'Estudio de ingeniería de software enfocado en arquitecturas sólidas, productos digitales y experiencias interactivas. Desde Puerto Montt, Chile.',
  openGraph: {
    title: 'Veta Studios | Software Engineering & Digital Products',
    description: 'Estudio de ingeniería de software enfocado en arquitecturas sólidas, productos digitales y experiencias interactivas. Desde Puerto Montt, Chile.',
    url: 'https://vetastudios.io',
    siteName: 'Veta Studios',
    locale: 'es_CL',
    type: 'website',
  }
};

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Omitting logo image as next/image path/config not provided and general <img> is disallowed */}
        <h1 className={styles.h1}>Veta Studios</h1>
      </header>

      <main>
        <section className={styles.hero}>
          <h2 className={styles.heroH2}>
            Ingeniería aplicada a <br />soluciones <span className={styles.accent}>digitales.</span>
          </h2>
          <p className={styles.heroP}>
            Somos una firma de ingeniería de software independiente. Construimos aplicaciones robustas, sistemas escalables y productos digitales que destacan por su arquitectura técnica y diseño minimalista.
          </p>
          <div className={styles.locationTag}>
            📍 Puerto Montt, Región de Los Lagos, Chile
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutBox}>
            <h3 className={styles.aboutBoxH3}>Nuestra Misión</h3>
            <p className={styles.aboutBoxP}>
              Desarrollar software de alto rendimiento que resuelva problemas complejos con elegancia. Transformamos la lógica computacional y la ingeniería de datos en productos funcionales, estables y optimizados, operando con estándares globales desde el sur de Chile.
            </p>
          </div>
          <div className={styles.aboutBox}>
            <h3 className={styles.aboutBoxH3}>Nuestra Visión</h3>
            <p className={styles.aboutBoxP}>
              Consolidarnos como un referente tecnológico en la Patagonia chilena, demostrando que mediante código limpio, precisión matemática y un enfoque analítico, se pueden crear herramientas, aplicaciones y plataformas competitivas a nivel internacional.
            </p>
          </div>
        </section>

        <section>
          <h3 className={styles.projectsSectionH3}>Productos Internos</h3>

          <div className={styles.projectCard}>
            <h4 className={styles.projectCardH4}>Fasico</h4>
            <p className={styles.projectCardP}>
              SaaS integral para empresas constructoras y de servicios. Integra cotizaciones, proyectos, facturación y control operativo en una sola plataforma. Arquitectura React + FastAPI diseñada para crecer con la operación de cada cliente.
            </p>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>SaaS B2B</span>
              <span className={styles.tag}>React</span>
              <span className={styles.tag}>FastAPI</span>
              <span className={styles.tag}>PostgreSQL</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h4 className={styles.projectCardH4}>Kitty Pot</h4>
            <p className={styles.projectCardP}>
              Una demostración técnica de nuestro dominio en motores físicos y optimización de recursos móviles. Un puzzle dinámico de colisiones y manejo de gravedad, empaquetado como una experiencia lúdica altamente adictiva.
            </p>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>App Móvil</span>
              <span className={styles.tag}>Motor de Físicas</span>
              <span className={styles.tag}>Optimización 2D</span>
              <span className={styles.tag}>Producto Propio</span>
            </div>
            <a href="https://kittypotgame.com" className={styles.btn}>Ver Proyecto</a>
          </div>

          <div className={styles.projectCard}>
            <h4 className={styles.projectCardH4}>Lazz</h4>
            <p className={styles.projectCardP}>
              App móvil para profesoras y profesores que corrige pruebas escaneando hojas con la cámara. Combina reconocimiento óptico de marcas (OMR) para selección múltiple con visión computacional y un modelo de IA para preguntas de desarrollo. Diseñada desde Chile, pensada en la realidad de la sala de clases.
            </p>
            <div className={styles.tagContainer}>
              <span className={styles.tag}>React Native</span>
              <span className={styles.tag}>OpenCV</span>
              <span className={styles.tag}>IA</span>
              <span className={styles.tag}>iOS + Android</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>&copy; 2026 Veta Studios. Todos los derechos reservados.</div>
        <div>
          <a href="/politicas-de-privacidad" className={styles.footerA}>Políticas de Privacidad</a> |{' '}
          <a href="mailto:contacto@vetastudios.io" className={styles.footerA}>Contacto</a>
        </div>
      </footer>
    </div>
  );
}
