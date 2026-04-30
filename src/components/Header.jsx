import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [activeMenu, setActiveMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMenu("");
  };

  const toggleSubMenu = (menuName) => {
    setActiveMenu((current) => (current === menuName ? "" : menuName));
  };

  return (
    <>
      <div className="top-header">
        <div className="top-header-inner top-header-single">
          <div className="top-center">
            <img src="/top-banner.svg" alt="banner" className="top-banner-svg" />
          </div>
        </div>
      </div>

      <header className="topbar">
        <div className="topbar-wrap">
          <div className="logo-floating">
            <a href="#" className="logo-area" aria-label="Fixoku Ana Sayfa">
              <img src="/logo-fixoku.png" alt="Fixoku Logo" className="site-logo" />
            </a>
          </div>

          <button
            type="button"
            className={`hamburger-btn ${isMobileMenuOpen ? "is-open" : ""}`}
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`topbar-inner ${isMobileMenuOpen ? "is-open" : ""}`}>
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Menüyü kapat"
              onClick={closeMobileMenu}
            >
              ×
            </button>

            <nav className="nav" aria-label="Ana menü">
              <div
                className="nav-item has-dropdown"
                onMouseEnter={() => setActiveMenu("neden")}
                onMouseLeave={() => setActiveMenu("")}
              >
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleSubMenu("neden")}
                >
                  NEDEN FİXOKU
                </button>

                {activeMenu === "neden" && (
                  <div className="dropdown">
                    <a href="#">Fixoku Eğitim Sistemi</a>
                    <a href="#">Fixoku Metodu</a>
                    <a href="#">Fixoku Farkı</a>
                    <a href="#">Fixoku Eğitim Kazanımları</a>
                    <a href="#">Fixoku Kimler İçin Uygundur</a>
                  </div>
                )}
              </div>

              <button type="button" className="nav-link">
                EĞİTİMLERİMİZ
              </button>

              <button type="button" className="nav-link">
                HIZLI OKUMA
              </button>

              <div
                className="nav-item has-dropdown"
                onMouseEnter={() => setActiveMenu("yazilim")}
                onMouseLeave={() => setActiveMenu("")}
              >
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => toggleSubMenu("yazilim")}
                >
                  FİXOKU YAZILIMI
                </button>

                {activeMenu === "yazilim" && (
                  <div className="dropdown">
                    <a href="#">Neden Önemli</a>
                    <a href="#">Eğitimin Amacı</a>
                    <a href="#">Neden Eğitmen Eşliğinde Eğitim</a>
                    <a href="#">Fixoku Kitabı</a>
                  </div>
                )}
              </div>

              <Link to="/iletisim" className="nav-link">
                İLETİŞİM
              </Link>
            </nav>

            <div className="top-actions">
              <button className="action-btn login-btn" type="button">
                Sisteme Giriş Yap
              </button>
              <button className="action-btn store-btn" type="button">
                Mağazaya Git
              </button>
            </div>

            <div className="mobile-menu-contact">
              <a className="mobile-contact-link" href="mailto:info@fixoku.com">
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                info@fixoku.com
              </a>

              <a className="mobile-contact-link" href="tel:+902324620743">
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path
                    d="M6 2h4l2 5-2 2a14 14 0 006 6l2-2 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                +90 232 462 07 43
              </a>

              <a className="mobile-contact-link mobile-whatsapp-link" href="https://wa.me/902324620743" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" className="icon whatsapp-icon" aria-hidden="true">
                  <path
                    d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.31-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.83 9.83 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.88 9.89Zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5a9.08 9.08 0 0 1-1.68-2.08c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.21 3.1.15.2 2.08 3.18 5.03 4.45.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
                    fill="currentColor"
                  />
                </svg>
                WhatsApp Destek
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
