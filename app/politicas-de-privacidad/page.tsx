
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Políticas de Privacidad | Veta Studios',
  description: 'Política de privacidad de Veta Studios. Información sobre recopilación, uso y protección de datos.',
  openGraph: {
    title: 'Políticas de Privacidad | Veta Studios',
    description: 'Política de privacidad de Veta Studios.',
    url: 'https://vetastudios.io/politicas-de-privacidad',
    siteName: 'Veta Studios',
    locale: 'es_CL',
    type: 'website',
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Políticas de Privacidad</h1>
        <p className={styles.lastUpdated}><strong>Última actualización:</strong> 2 de Marzo de 2026</p>
        
        <p>En <strong>Veta Studios</strong> ("nosotros", "nuestro" o "la Firma"), desarrollamos soluciones de ingeniería de software, aplicaciones móviles y productos de entretenimiento digital (conjuntamente, los "Servicios"). Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información de nuestros usuarios a través de todo nuestro ecosistema, incluyendo nuestro sitio web (<code className={styles.codeSnippet}>vetastudios.io</code>) y productos específicos como <em>Kitty Pot</em> (<code className={styles.codeSnippet}>kittypot.com</code>).</p>

        <p>Nuestra filosofía técnica es clara: <strong>Minimización de datos</strong>. Recopilamos exclusivamente la telemetría y la información técnica necesaria para garantizar la estabilidad, seguridad y el rendimiento de nuestro software.</p>

        <h2 className={styles.sectionHeading}>1. Información que recopilamos</h2>
        <p>El tipo de información recopilada depende del producto o servicio de Veta Studios que estés utilizando:</p>
        <ul>
            <li><strong>En nuestras aplicaciones web y plataformas:</strong> Información de diagnóstico estándar, como el tipo de navegador, sistema operativo, páginas visitadas y tiempos de respuesta, utilizada para optimizar la arquitectura del sitio.</li>
            <li><strong>En nuestros juegos y aplicaciones móviles (ej. Kitty Pot):</strong> No requerimos la creación de cuentas ni recopilamos información personal identificable (PII). Recopilamos datos técnicos anónimos como:
                <ul>
                    <li><strong>Telemetría de rendimiento:</strong> Estadísticas de uso (niveles, tiempos de sesión) para balancear la dificultad y evaluar el consumo de recursos del dispositivo.</li>
                    <li><strong>Registros de errores (Crash Logs):</strong> Trazas de pila (stack traces) cuando el software se cierra inesperadamente, vitales para que nuestros ingenieros lancen parches de corrección.</li>
                    <li><strong>Identificadores de Publicidad:</strong> Si un producto incluye monetización mediante anuncios, las redes publicitarias pueden acceder a identificadores temporales del dispositivo (ID de publicidad de Android o IDFA de Apple) para ofrecer contenido relevante.</li>
                </ul>
            </li>
            <li><strong>Comunicaciones directas:</strong> Si nos contactas para soporte técnico, retendremos tu correo electrónico y el contenido del mensaje únicamente para resolver la incidencia.</li>
        </ul>

        <h2 className={styles.sectionHeading}>2. Cómo utilizamos la información</h2>
        <p>Los datos técnicos se procesan estrictamente para fines operativos y de desarrollo:</p>
        <ul>
            <li>Garantizar la estabilidad del software y reparar errores de código.</li>
            <li>Analizar patrones de uso para planificar futuras actualizaciones y arquitecturas de nuevos productos.</li>
            <li>Permitir el funcionamiento de integraciones de terceros (como servicios en la nube o redes publicitarias) que financian la operación del estudio.</li>
        </ul>

        <h2 className={styles.sectionHeading}>3. Integraciones y Servicios de Terceros</h2>
        <p>Nuestros productos pueden utilizar motores, frameworks y servicios en la nube de terceros. Estas entidades procesan datos de acuerdo con sus propias políticas. Los proveedores comunes incluyen:</p>
        <ul>
            <li>Infraestructura de alojamiento (ej. GitHub Pages para sitios web).</li>
            <li>Servicios de telemetría y análisis (ej. Firebase Analytics, Google Play Console).</li>
            <li>Redes de monetización publicitaria (ej. Google AdMob, Unity Ads).</li>
        </ul>

        <h2 className={styles.sectionHeading}>4. Privacidad Infantil (COPPA / GDPR-K)</h2>
        <p>Aunque algunos de nuestros productos de entretenimiento (como <em>Kitty Pot</em>) son aptos para todas las edades, Veta Studios no dirige sus servicios a la recopilación intencional de datos personales de menores de 13 años. Si crees que hemos recopilado inadvertidamente información personal de un menor, contáctanos para ejecutar su eliminación inmediata de nuestras bases de datos.</p>

        <h2 className={styles.sectionHeading}>5. Seguridad y Retención de Datos</h2>
        <p>Aplicamos prácticas de ingeniería seguras y cifrado estándar para proteger cualquier información en tránsito. Los datos analíticos anónimos se retienen únicamente durante el ciclo de vida útil del producto o hasta que dejen de ser relevantes para la toma de decisiones técnicas.</p>

        <h2 className={styles.sectionHeading}>6. Control sobre tus Datos</h2>
        <p>Tienes control total sobre los identificadores de tu dispositivo. Puedes restringir el uso de tu ID de publicidad directamente desde la configuración del sistema operativo (iOS o Android) desactivando el rastreo o inhabilitando la personalización de anuncios.</p>

        <h2 className={styles.sectionHeading}>7. Modificaciones a esta Política</h2>
        <p>Nos reservamos el derecho de actualizar este documento para reflejar la evolución de nuestra arquitectura de software o nuevos requisitos legales. Los cambios entrarán en vigor en el momento de su publicación en este dominio.</p>

        <h2 className={styles.sectionHeading}>8. Contacto</h2>
        <p>Para consultas técnicas, auditorías de privacidad o reportes de vulnerabilidades, comunícate con nuestro equipo:</p>
        <p><strong>Correo electrónico:</strong> <a href="mailto:legal@vetastudios.io">legal@vetastudios.io</a></p>
      </main>
    </div>
  );
}
