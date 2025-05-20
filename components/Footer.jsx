"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaPinterest, FaFacebook } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar el email
    console.log('Email registrado:', email);
    // Resetear el campo después de enviar
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.registerContainer}>
        <h2 className={styles.registerTitle}>REGÍSTRATE</h2>
        <p className={styles.registerText}>
          Obtén 10% OFF en tu primera compra más acceso anticipado a futuras ofertas especiales
        </p>
        
        <form onSubmit={handleSubmit} className={styles.emailForm}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="EMAIL@EJEMPLO.COM"
            className={styles.emailInput}
            required
          />
          <button type="submit" className={styles.submitButton}>
            →
          </button>
        </form>
      </div>

      <div className={styles.linksContainer}>
        <nav className={styles.mainLinks}>
          <Link href="/tiendas" className={styles.navLink}>TIENDAS</Link>
          <Link href="/sobre-nosotros" className={styles.navLink}>SOBRE NOSOTROS</Link>
          <Link href="/contacto" className={styles.navLink}>CONTACTO</Link>
        </nav>

        <div className={styles.socialLinks}>
          <Link href="https://instagram.com" className={styles.socialLink} aria-label="Instagram">
            <FaInstagram />
          </Link>
          <Link href="https://tiktok.com" className={styles.socialLink} aria-label="TikTok">
            <FaTiktok />
          </Link>
          <Link href="https://pinterest.com" className={styles.socialLink} aria-label="Pinterest">
            <FaPinterest />
          </Link>
          <Link href="https://facebook.com" className={styles.socialLink} aria-label="Facebook">
            <FaFacebook />
          </Link>
        </div>
      </div>

      <div className={styles.policiesContainer}>
        <Link href="/politica-envios" className={styles.policyLink}>POLÍTICA DE ENVÍOS</Link>
        <Link href="/cambios-devoluciones" className={styles.policyLink}>CAMBIOS Y DEVOLUCIONES</Link>
        <Link href="/politicas-temporales" className={styles.policyLink}>POLÍTICAS TEMPORALES</Link>
        <Link href="/politica-privacidad" className={styles.policyLink}>POLÍTICA DE PRIVACIDAD</Link>
        <Link href="/terminos-condiciones" className={styles.policyLink}>TÉRMINOS Y CONDICIONES</Link>
      </div>

      <div className={styles.copyright}>
        © MACONDIA 2025
      </div>
    </footer>
  );
};

export default Footer;