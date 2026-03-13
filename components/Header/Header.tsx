'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/logo-veta-blanco.png"
              alt="Veta Studios Logo"
              width={40}
              height={40}
              priority
            />
          </Link>
          <Link href="/">
            <span className={styles.logoText}>Veta Studios</span>
          </Link>
        </div>

        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/proyectos">Proyectos</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
          </ul>
        </nav>

        <div className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
          ☰
        </div>

        {isMobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <ul className={styles.navList}>
              <li><Link href="/" onClick={toggleMobileMenu}>Home</Link></li>
              <li><Link href="/servicios" onClick={toggleMobileMenu}>Servicios</Link></li>
              <li><Link href="/proyectos" onClick={toggleMobileMenu}>Proyectos</Link></li>
              <li><Link href="/blog" onClick={toggleMobileMenu}>Blog</Link></li>
              <li><Link href="/contacto" onClick={toggleMobileMenu}>Contacto</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
