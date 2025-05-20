"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './Header.module.css'; // Asegúrate de crear este archivo

const Header = () => {
  // Función para cerrar otros detalles cuando se abre uno nuevo
  useEffect(() => {
    const details = document.querySelectorAll('details.closex');
    details.forEach((detail) => {
      detail.addEventListener('toggle', (e) => {
        if (detail.open) {
          details.forEach((d) => {
            if (d !== detail) d.open = false;
          });
        }
      });
    });
    return () => {
      details.forEach((detail) => {
        detail.removeEventListener('toggle', () => {});
      });
    };
  }, []);

  return (
    <header id="header" className="bg-white text-black shadow-md">
      <div className="bg-white header-grid">
        {/* Menú principal */}
        <nav aria-label="Menú" className="bg-white large-only">
          <ul className="flex flex-row gap-6 large-only">
            <li>
              <details className="dm lv1 closex" id="Details-1">
                <summary className="dropdown-caret" aria-expanded="false" aria-controls="Menu-1">ROPA</summary>
              </details>
            </li>
            <li>
              <details className="dm lv1 closex" id="Details-2">
                <summary className="dropdown-caret" aria-expanded="false" aria-controls="Menu-2">COLECCIONES</summary>
              </details>
            </li>
            <li>
              <details className="dm lv1 closex" id="Details-4">
                <summary className="dropdown-caret" aria-expanded="false" aria-controls="Menu-4">NUESTRO UNIVERSO</summary>
                <div className={styles.submenuContainer} id="Menu-4">
                  <ul className={styles.horizontalMenu}>
                    <li><Link href="/nuestro-universo" className="no-style">COLECCIONES</Link></li>
                    <li><Link href="/nuestro-universo" className="no-style">DESFILES</Link></li>
                    <li><Link href="/nuestro-universo" className="no-style">QUIÉNES SOMOS</Link></li>
                  </ul>
                </div>
              </details>
            </li>
          </ul>
        </nav>
        {/* Logo */}
        <div className="bogo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link href="/" className="no-style">
          <img
            src='./macondia-logo.svg'
            alt="MACONDIA"
            width={172}
            height={25}
            className="logo"
            style={{ maxHeight: 25 }}
          />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;