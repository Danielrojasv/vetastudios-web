import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© 2026 Veta Studios. Todos los derechos reservados.</p>
        <nav className={styles.footerNav}>
          <ul className={styles.navList}>
            <li>
              <Link href="/politicas-de-privacidad">
                Políticas de Privacidad
              </Link>
            </li>
            <li>
              <Link href="/contacto">
                Contacto
              </Link>
            </li>
            <li>
              <a href="mailto:contacto@vetastudios.io">
                contacto@vetastudios.io
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
