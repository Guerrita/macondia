import Link from 'next/link';

const Header = () => (
  <header id="header" tabIndex={-1}>
    <div className="header-grid">
      {/* Menú principal */}
      <nav aria-label="Menú" className="menulink large-only">
        <ul className="inline large-only">
          <li>
            <details className="dm lv1 closex" id="Details-1">
              <summary className="dropdown-caret" aria-expanded="false" aria-controls="Menu-1">ROPA</summary>
              <div className="mob-scroller" id="Menu-1">
                <ul className="inline">
                  <li><Link href="/collections/ss25" className="no-style">LO NUEVO</Link></li>
                  <li><Link href="/collections/all" className="no-style">VER TODO</Link></li>
                  <li><Link href="/collections/dress" className="no-style">VESTIDOS</Link></li>
                  <li><Link href="/collections/pants" className="no-style">PANTALONES</Link></li>
                  <li><Link href="/collections/tops" className="no-style">TOPS</Link></li>
                  <li><Link href="/collections/shorts" className="no-style">SHORTS</Link></li>
                  <li><Link href="/collections/macondia-objects" className="no-style">MACONDIA OBJECTS</Link></li>
                </ul>
              </div>
            </details>
          </li>
          <li>
            <details className="dm lv1 closex" id="Details-2">
              <summary className="dropdown-caret" aria-expanded="false" aria-controls="Menu-2">COLECCIONES</summary>
              <div className="mob-scroller" id="Menu-2">
                <ul className="inline">
                  <li><Link href="/collections/ss25" className="no-style">SS25 "NO RAIN NO FLOWERS"</Link></li>
                  <li><Link href="/collections/celebration" className="no-style">CELEBRATION</Link></li>
                  <li><Link href="/collections/fw24" className="no-style">FW24 "EVERYBODY'S TOWN"</Link></li>
                </ul>
              </div>
            </details>
          </li>
          <li>
            <Link href="/collections/sale" className="no-style" style={{ color: 'red', fontWeight: 'bold' }}>SALE</Link>
          </li>
          <li>
            <details className="dm lv1 closex" id="Details-4">
              <summary className="dropdown-caret" aria-expanded="false" aria-controls="Menu-4">EXPLORAR</summary>
              <div className="mob-scroller" id="Menu-4">
                <ul className="inline">
                  <li><Link href="/pages/sobre-nosotros" className="no-style">SOBRE MACONDIA</Link></li>
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
            src="//www.macondia.com.co/cdn/shop/files/Macondia-Logo-Black.svg?v=1735420357&width=400"
            alt="MACONDIA"
            srcSet="//www.macondia.com.co/cdn/shop/files/Macondia-Logo-Black.svg?v=1735420357&width=100 100w, //www.macondia.com.co/cdn/shop/files/Macondia-Logo-Black.svg?v=1735420357&width=200 200w, //www.macondia.com.co/cdn/shop/files/Macondia-Logo-Black.svg?v=1735420357&width=400 400w"
            width={400}
            height={58}
            className="logo"
            style={{ maxHeight: 58 }}
          />
        </Link>
      </div>
      {/* Accesos rápidos */}
      <div className="accounts" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <ul className="inline hasIco">
          {/* Menú hamburguesa solo móvil */}
          <li className="small-only hamburger">
            <button className="is-blank fire-menu no-js-hidden">
              <i className="g-menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 12h18M3 6h18M3 18h18"></path></svg>
              </i>
              <span className="visually-hidden">Menú</span>
            </button>
          </li>
          {/* Cuenta usuario */}
          <li className="large-only">
            <a href="https://account.macondia.com.co?locale=es&region_country=CO" className="no-style">
              <i className="g-user">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"></path></svg>
              </i>
              <span className="visually-hidden">Iniciar sesión</span>
            </a>
          </li>
          {/* Buscar */}
          <li>
            <Link href="/search" className="no-style fire-search">
              <i className="g-search">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path></svg>
              </i>
              <span className="visually-hidden">Buscar</span>
            </Link>
          </li>
          {/* Carrito */}
          <li className="cartCounter">
            <button className="is-blank js" aria-label="Carrito" data-open="#cartBox">
              <span id="counter" data-count="0">
                <span className="visually-hidden">Carrito</span>
                <i className="g-cart">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 0 1 .213.185c.059.092.076.213.111.457L4.571 6m0 0 1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 0 0 .853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 0 0 .841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 0 0-.22-.266C21.532 6 21.366 6 21.034 6H4.571ZM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>
                </i>
                <span className="visually-hidden" data-ajax-cart-bind="item_count">0</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
