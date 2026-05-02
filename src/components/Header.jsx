import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const desktopIconPaths = {
  book: <><path d="M5 5.8C5 4.8 5.8 4 6.8 4H11c1.4 0 2.6.5 3.5 1.3A5.2 5.2 0 0 1 18 4h.7c1 0 1.8.8 1.8 1.8V19c0 .6-.4 1-1 1h-1.8c-1.2 0-2.3.4-3.2 1.1A5.5 5.5 0 0 0 11 20H6.8C5.8 20 5 19.2 5 18.2V5.8Z" /><path d="M14.5 5.3v15.6" /></>,
  speed: <><path d="M4 14a8 8 0 1 1 16 0" /><path d="M12 14l4-5" /><path d="M7.5 14h9" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  ai: <><path d="M12 3c-3.5 0-6 2.5-6 5.8 0 1.7.7 3 1.8 4.1.7.7 1.2 1.5 1.2 2.4V16h6v-.7c0-.9.5-1.7 1.2-2.4A5.5 5.5 0 0 0 18 8.8C18 5.5 15.5 3 12 3Z" /><path d="M9.5 19h5M10.5 21h3" /></>,
  chart: <><path d="M5 19V9" /><path d="M12 19V5" /><path d="M19 19v-7" /><path d="M4 19h17" /></>,
  exercise: <><path d="M7 4h10M8 4c0 3-2 4-2 7a6 6 0 0 0 12 0c0-3-2-4-2-7" /><path d="M9 18h6M8 21h8" /></>,
  student: <><path d="M12 4l8 4-8 4-8-4 8-4Z" /><path d="M6 10v5c0 2.2 2.7 4 6 4s6-1.8 6-4v-5" /></>,
  school: <><path d="M4 20V9l8-5 8 5v11" /><path d="M9 20v-6h6v6" /><path d="M3 20h18" /></>,
  trainer: <><circle cx="8" cy="8" r="3.2" /><circle cx="16" cy="7" r="2.8" /><path d="M3 20c.7-4 2.7-6 5-6s4.3 2 5 6" /><path d="M13.5 14.6c.8-.6 1.6-.9 2.7-.9 2 0 3.8 1.8 4.4 5.5" /></>,
  question: <><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.5 2.5 0 1 1 4.4 1.7c-.8.8-1.6 1.2-1.8 2.5" /><path d="M12 17h.01" /></>,
  message: <><path d="M4 5h16v11H8l-4 4V5Z" /><path d="M8 9h8M8 12h5" /></>,
};

const desktopMenuItems = [
  {
    key: "hizli-okuma",
    label: "HIZLI OKUMA",
    items: [
      { label: "Hızlı Okuma Eğitimi", to: "/hizli-okuma", icon: "speed" },
      { label: "Hızlı Okuma Nedir?", to: "/hizli-okuma/nedir", icon: "question" },
      { label: "Kimler İçin?", to: "/hizli-okuma/kimler-icin", icon: "student" },
      { label: "Eğitim Modeli", to: "/hizli-okuma/egitim-modeli", icon: "chart" },
      { label: "Hızlı Okuma Kitabı", to: "/hizli-okuma/kitap", icon: "book" },
    ],
  },
  {
    key: "fixoku",
    label: "FİXOKU SİSTEMİ",
    items: [
      { label: "Neden Fixoku?", to: "/fixoku-sistemi/neden-fixoku", icon: "question" },
      { label: "Eğitim Modeli", to: "/fixoku-sistemi/egitim-modeli", icon: "chart" },
      { label: "Yapay Zeka Destekli Eğitim", to: "/fixoku-sistemi/yapay-zeka", icon: "ai" },
      { label: "126 Egzersiz Sistemi", to: "/fixoku-sistemi/egzersizler", icon: "exercise" },
      { label: "9 Kategoride Analiz", to: "/fixoku-sistemi/analiz", icon: "chart" },
      { label: "Eğitim Süreci", to: "/fixoku-sistemi/egitim-sureci", icon: "target" },
    ],
  },
  {
    key: "programlar",
    label: "PROGRAMLAR",
    items: [
      { label: "Öğrenci Programları", to: "/ogrenci-programlari", icon: "student" },
      { label: "İlkokul Hızlı Okuma", to: "/ogrenci-programlari/ilkokul", icon: "book" },
      { label: "Ortaokul Hızlı Okuma", to: "/ogrenci-programlari/ortaokul", icon: "book" },
      { label: "Lise Hızlı Okuma", to: "/ogrenci-programlari/lise", icon: "book" },
      { label: "LGS Hazırlık", to: "/ogrenci-programlari/lgs", icon: "target" },
      { label: "YKS Hazırlık", to: "/ogrenci-programlari/yks", icon: "target" },
      { label: "Paragraf Çözme Teknikleri", to: "/ogrenci-programlari/paragraf", icon: "speed" },
    ],
  },
  {
    key: "kurumsal",
    label: "KURUMSAL",
    items: [
      { label: "Okullar İçin", to: "/okullar-icin", icon: "school" },
      { label: "Eğitmen Ol", to: "/egitmen-ol", icon: "trainer" },
      { label: "Hakkımızda", to: "/hakkimizda", icon: "message" },
      { label: "Sık Sorulan Sorular", to: "/sss", icon: "question" },
    ],
  },
];

const mobileMenuItems = [
  {
    key: "hizli-okuma",
    label: "Hızlı Okuma",
    icon: "book",
    items: [
      { label: "Hızlı Okuma Eğitimi", to: "/hizli-okuma" },
      { label: "Hızlı Okuma Nedir?", to: "/hizli-okuma/nedir" },
      { label: "Hızlı Okuma Kazanımları", to: "/hizli-okuma/kazanimlar" },
      { label: "Eğitim Modeli", to: "/hizli-okuma/egitim-modeli" },
      { label: "Hızlı Okuma Kitabı", to: "/hizli-okuma/kitap" },
    ],
  },
  {
    key: "fixoku",
    label: "Fixoku Sistemi",
    icon: "spark",
    items: [
      { label: "Neden Fixoku?", to: "/fixoku-sistemi/neden-fixoku" },
      { label: "Eğitim Modeli", to: "/fixoku-sistemi/egitim-modeli" },
      { label: "Yapay Zeka Destekli Eğitim", to: "/fixoku-sistemi/yapay-zeka" },
      { label: "126 Egzersiz Sistemi", to: "/fixoku-sistemi/egzersizler" },
      { label: "9 Kategoride Analiz", to: "/fixoku-sistemi/analiz" },
      { label: "Eğitim Süreci", to: "/fixoku-sistemi/egitim-sureci" },
    ],
  },
  {
    key: "programlar",
    label: "Programlar",
    icon: "student",
    items: [
      { label: "Öğrenci Programları", to: "/ogrenci-programlari" },
      { label: "İlkokul Hızlı Okuma", to: "/ogrenci-programlari/ilkokul" },
      { label: "Ortaokul Hızlı Okuma", to: "/ogrenci-programlari/ortaokul" },
      { label: "Lise Hızlı Okuma", to: "/ogrenci-programlari/lise" },
      { label: "LGS Hazırlık", to: "/ogrenci-programlari/lgs" },
      { label: "YKS Hazırlık", to: "/ogrenci-programlari/yks" },
      { label: "Paragraf Teknikleri", to: "/ogrenci-programlari/paragraf" },
    ],
  },
  {
    key: "testler",
    label: "Testler",
    icon: "target",
    items: [
      { label: "Ücretsiz Testler", to: "/testler" },
      { label: "Okuma Hızı Testi", to: "/okuma-hizi-testi" },
      { label: "Okuma ve Anlama Testi", to: "/okuma-anlama-testi" },
      { label: "Dikkat Testi", to: "/dikkat-testi" },
      { label: "Odaklanma Testi", to: "/odaklanma-testi" },
    ],
  },
  {
    key: "kurumsal",
    label: "Kurumsal",
    icon: "building",
    items: [
      { label: "Okullar İçin", to: "/okullar-icin" },
      { label: "Eğitmen Ol", to: "/egitmen-ol" },
      { label: "Hakkımızda", to: "/hakkimizda" },
      { label: "Yorumlar", to: "/yorumlar" },
      { label: "Sık Sorulan Sorular", to: "/sss" },
    ],
  },
];

function DesktopDropdownIcon({ type }) {
  return (
    <span className="dropdown-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">{desktopIconPaths[type] || desktopIconPaths.book}</svg>
    </span>
  );
}

function MobileIcon({ type }) {
  const common = { stroke: "currentColor", strokeWidth: "1.9", strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    home: <><path d="M3 11.5 12 4l9 7.5" {...common} /><path d="M5.5 10.5V20h13v-9.5" {...common} /><path d="M9.5 20v-5h5v5" {...common} /></>,
    book: <><path d="M5 5h7a4 4 0 0 1 4 4v10H9a4 4 0 0 0-4-4V5Z" {...common} /><path d="M5 5v14M16 9h3v10h-3" {...common} /></>,
    spark: <path d="M12 3l2.6 5.4L20 11l-5.4 2.6L12 19l-2.6-5.4L4 11l5.4-2.6L12 3Z" {...common} />,
    student: <><path d="M3 10l9-5 9 5-9 5-9-5Z" {...common} /><path d="M6 12v5c2 2 10 2 12 0v-5" {...common} /></>,
    target: <><circle cx="12" cy="12" r="8" {...common} /><circle cx="12" cy="12" r="3" {...common} /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" {...common} /></>,
    building: <><path d="M4 21V5h16v16" {...common} /><path d="M8 9h.01M12 9h.01M16 9h.01M8 13h.01M12 13h.01M16 13h.01M10 21v-4h4v4" {...common} /></>,
    heart: <path d="M12 20s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11Z" {...common} />,
    user: <><circle cx="12" cy="7" r="4" {...common} /><path d="M4 21c1-5 4-8 8-8s7 3 8 8" {...common} /></>,
    blog: <><path d="M5 4h14v16H5z" {...common} /><path d="M8 8h8M8 12h8M8 16h5" {...common} /></>,
    mail: <><path d="M3 6h18v12H3z" {...common} /><path d="M3 7l9 6 9-6" {...common} /></>,
    phone: <path d="M6 2h4l2 5-2 2a14 14 0 0 0 6 6l2-2 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z" {...common} />,
  };
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{icons[type] || icons.book}</svg>;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.98L0 24l6.31-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.83 9.83 0 0 1-1.51-5.26c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.89 6.98c0 5.45-4.43 9.89-9.88 9.89Zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5a9.08 9.08 0 0 1-1.68-2.08c-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.06 2.9 1.21 3.1.15.2 2.08 3.18 5.03 4.45.7.3 1.25.48 1.68.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" fill="currentColor" />
    </svg>
  );
}

function Header() {
  const location = useLocation();
  const [desktopActiveMenu, setDesktopActiveMenu] = useState("");
  const [mobileActiveMenu, setMobileActiveMenu] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAfterHero, setIsAfterHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero-slider");
      const fallbackLimit = window.innerHeight * 0.72;
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : fallbackLimit;
      setIsAfterHero(heroBottom <= 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("fixoku-menu-open", isMobileMenuOpen);
    return () => document.body.classList.remove("fixoku-menu-open");
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActiveMenu("");
  };

  const toggleMobileSubMenu = (menuName) => {
    setMobileActiveMenu((current) => (current === menuName ? "" : menuName));
  };

  const isActiveMobileMenu = (menu) => menu.items.some((item) => location.pathname === item.to || location.pathname.startsWith(`${item.to}/`));

  return (
    <>
      <div className="top-header desktop-top-header">
        <div className="top-header-inner top-header-single">
          <div className="top-center">
            <img src="/top-banner.svg" alt="banner" className="top-banner-svg" />
          </div>
        </div>
      </div>

      <div className="top-header mobile-top-header">
        <div className="top-header-inner top-header-single top-header-with-contact">
          <div className="top-left top-header-desktop-contact">
            <a className="top-contact" href="mailto:info@fixoku.com"><MobileIcon type="mail" />info@fixoku.com</a>
            <a className="top-contact" href="tel:+902324620743"><MobileIcon type="phone" />+90 232 462 07 43</a>
          </div>
          <div className="top-center"><img src="/top-banner.svg" alt="Fixoku" className="top-banner-svg" /></div>
          <div className="top-right top-header-desktop-contact">
            <a className="whatsapp top-whatsapp-clean" href="https://wa.me/902324620743" target="_blank" rel="noreferrer">
              <span className="whatsapp-icon real-whatsapp-icon"><WhatsAppIcon /></span>WhatsApp Destek
            </a>
          </div>
        </div>
      </div>

      <header className={`desktop-topbar glass-topbar ${isAfterHero ? "is-after-hero" : ""}`}>
        <div className="topbar-wrap">
          <div className="logo-floating">
            <Link to="/" className="logo-area" aria-label="Fixoku Ana Sayfa">
              <img src={isAfterHero ? "/siyah-logo-fixoku.png" : "/logo-fixoku.png"} alt="Fixoku Logo" className="site-logo" />
            </Link>
          </div>

          <div className="topbar-inner glass-menu">
            <nav className="nav" aria-label="Ana menü">
              {desktopMenuItems.map((menu) => (
                <div
                  key={menu.key}
                  className="nav-item has-dropdown"
                  onMouseEnter={() => setDesktopActiveMenu(menu.key)}
                  onMouseLeave={() => setDesktopActiveMenu("")}
                >
                  <button type="button" className="nav-link" aria-expanded={desktopActiveMenu === menu.key}>
                    {menu.label}<span className="nav-caret" aria-hidden="true">▾</span>
                  </button>

                  {desktopActiveMenu === menu.key && (
                    <div className="dropdown icon-dropdown">
                      {menu.items.map((item) => (
                        <Link key={item.to} to={item.to}>
                          <DesktopDropdownIcon type={item.icon} />
                          <span>{item.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/iletisim" className="nav-link contact-nav-link">İLETİŞİM</Link>
            </nav>

            <div className="top-actions">
              <Link to="/panel" className="action-btn login-btn">Sisteme Giriş Yap</Link>
              <Link to="/egitimler" className="action-btn store-btn">Mağazaya Git</Link>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && <button className="mobile-menu-backdrop" type="button" aria-label="Menüyü kapat" onClick={closeMobileMenu} />}

      <header className="mobile-topbar">
        <div className="topbar-wrap">
          <div className="logo-floating">
            <Link to="/" className="logo-area" aria-label="Fixoku Ana Sayfa" onClick={closeMobileMenu}>
              <img src="/logo-fixoku.png" alt="Fixoku Logo" className="site-logo" />
            </Link>
          </div>

          <button
            type="button"
            className={`hamburger-btn ${isMobileMenuOpen ? "is-open" : ""}`}
            aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>

          <aside className={`mobile-drawer ${isMobileMenuOpen ? "is-open" : ""}`} aria-label="Fixoku mobil menü">
            <div className="mobile-drawer-profile mobile-logo-only">
              <Link to="/" className="mobile-profile-logo" onClick={closeMobileMenu}>
                <img src="/siyah-logo-fixoku.png" alt="Fixoku" />
              </Link>
            </div>

            <nav className="mobile-nav-list" aria-label="Ana menü">
              <Link to="/" className={`mobile-main-link ${location.pathname === "/" ? "is-active" : ""}`} onClick={closeMobileMenu}>
                <span className="mobile-main-icon"><MobileIcon type="home" /></span><span>Ana Sayfa</span>
              </Link>

              {mobileMenuItems.map((menu) => (
                <div key={menu.key} className={`mobile-nav-item ${isActiveMobileMenu(menu) ? "is-current" : ""}`}>
                  <button type="button" className="mobile-nav-button" onClick={() => toggleMobileSubMenu(menu.key)} aria-expanded={mobileActiveMenu === menu.key}>
                    <span className="mobile-nav-icon"><MobileIcon type={menu.icon} /></span>
                    <span>{menu.label}</span>
                    <span className={`nav-caret ${mobileActiveMenu === menu.key ? "is-open" : ""}`} aria-hidden="true">▾</span>
                  </button>
                  {mobileActiveMenu === menu.key && (
                    <div className="mobile-accordion-dropdown">
                      {menu.items.map((item) => <Link key={item.to} to={item.to} onClick={closeMobileMenu}>{item.label}</Link>)}
                    </div>
                  )}
                </div>
              ))}

              <Link to="/blog" className={`mobile-main-link ${location.pathname.startsWith("/blog") ? "is-active" : ""}`} onClick={closeMobileMenu}>
                <span className="mobile-main-icon"><MobileIcon type="blog" /></span><span>Blog</span>
              </Link>
              <Link to="/iletisim" className={`mobile-main-link ${location.pathname === "/iletisim" ? "is-active" : ""}`} onClick={closeMobileMenu}>
                <span className="mobile-main-icon"><MobileIcon type="phone" /></span><span>İletişim</span>
              </Link>
            </nav>

            <div className="mobile-actions">
              <Link to="/panel" className="action-btn login-btn" onClick={closeMobileMenu}>Sisteme Giriş Yap</Link>
              <Link to="/egitimler" className="action-btn store-btn" onClick={closeMobileMenu}>Mağazaya Git</Link>
            </div>

            <div className="mobile-menu-contact">
              <a className="mobile-contact-link" href="mailto:info@fixoku.com"><MobileIcon type="mail" /> info@fixoku.com</a>
              <a className="mobile-contact-link" href="tel:+902324620743"><MobileIcon type="phone" /> +90 232 462 07 43</a>
              <a className="mobile-contact-link mobile-whatsapp-link" href="https://wa.me/905334789253?text=Merhaba%2C%20Fixoku%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer"><WhatsAppIcon /> WhatsApp Destek</a>
            </div>
          </aside>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Mobil hızlı menü">
        <Link to="/" className={location.pathname === "/" ? "is-active" : ""}><MobileIcon type="home" /><span>Ana Sayfa</span></Link>
        <Link to="/testler" className={location.pathname.startsWith("/test") || location.pathname.includes("testi") ? "is-active" : ""}><MobileIcon type="target" /><span>Testler</span></Link>
        <Link to="/egitimler" className={location.pathname === "/egitimler" ? "is-active" : ""}><MobileIcon type="heart" /><span>Favoriler</span></Link>
        <Link to="/panel" className={location.pathname.startsWith("/panel") ? "is-active" : ""}><MobileIcon type="user" /><span>Hesabım</span></Link>
      </nav>

      <style>{`
        .mobile-top-header,
        .mobile-topbar,
        .mobile-bottom-nav,
        .mobile-menu-backdrop { display: none; }

        .desktop-top-header { display: block; }

        .glass-topbar {
          position: absolute !important;
          top: 92px !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 999 !important;
          padding: 0 18px !important;
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
          transition: top .28s ease, opacity .28s ease, transform .28s ease, padding .25s ease;
        }

        .glass-topbar.is-after-hero {
          position: fixed !important;
          top: 14px !important;
          animation: stickyMenuDrop .28s ease both;
        }

        @keyframes stickyMenuDrop {
          from { opacity: 0; transform: translateY(-24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .glass-topbar .topbar-wrap {
          max-width: 1350px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .glass-topbar .logo-area {
          min-width: 150px;
          height: 62px;
          padding: 0;
          border-radius: 0;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .glass-topbar .site-logo {
          width: 148px;
          transition: width .25s ease, filter .25s ease;
          filter: drop-shadow(0 10px 18px rgba(20, 0, 33, .18));
        }

        .glass-topbar.is-after-hero .site-logo {
          width: 142px;
          filter: none;
        }

        .glass-menu {
          flex: 1;
          min-height: 74px;
          padding: 10px 16px !important;
          border-radius: 999px !important;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          background: rgba(255, 255, 255, .72) !important;
          border: 1px solid rgba(255, 255, 255, .62) !important;
          box-shadow: 0 20px 54px rgba(20, 0, 33, .16), inset 0 1px 0 rgba(255,255,255,.72) !important;
          backdrop-filter: blur(22px) saturate(150%) !important;
          -webkit-backdrop-filter: blur(22px) saturate(150%) !important;
        }

        .glass-topbar.is-after-hero .glass-menu {
          min-height: 62px;
          background: rgba(255, 255, 255, .88) !important;
          box-shadow: 0 18px 48px rgba(20, 0, 33, .14), inset 0 1px 0 rgba(255,255,255,.78) !important;
        }

        .glass-menu::before { display: none !important; }

        .glass-menu .nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex: 1;
          flex-wrap: wrap;
        }

        .glass-menu .nav-item { position: relative; }
        .glass-menu .nav-item::after { content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 14px; }

        .glass-menu .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #42115f !important;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .12px;
          padding: 10px 13px;
          border-radius: 999px;
        }

        .glass-menu .nav-link:hover,
        .glass-menu .nav-link[aria-expanded="true"] {
          color: #f37021 !important;
          background: rgba(243, 112, 33, .1) !important;
          transform: translateY(-1px);
        }

        .nav-caret { font-size: 11px; line-height: 1; opacity: .7; transition: transform .22s ease; }
        .nav-caret.is-open { transform: rotate(180deg); }

        .contact-nav-link { background: rgba(243, 112, 33, .1) !important; color: #f37021 !important; }

        .icon-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: 310px !important;
          padding: 12px !important;
          border-radius: 24px !important;
          display: flex;
          flex-direction: column;
          gap: 8px;
          background: rgba(255, 255, 255, .94) !important;
          border: 1px solid rgba(255, 255, 255, .8) !important;
          box-shadow: 0 24px 60px rgba(20, 0, 33, .24) !important;
          backdrop-filter: blur(24px) saturate(160%) !important;
          -webkit-backdrop-filter: blur(24px) saturate(160%) !important;
          z-index: 1000;
          animation: dropdownFade .2s ease;
        }

        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .icon-dropdown a {
          min-height: 52px;
          display: grid !important;
          grid-template-columns: 38px 1fr;
          align-items: center;
          gap: 12px;
          padding: 9px 12px !important;
          border-radius: 16px !important;
          color: #42115f !important;
          font-size: 14px !important;
          font-weight: 800;
        }

        .icon-dropdown a:hover {
          color: #f37021 !important;
          background: linear-gradient(135deg, rgba(243,112,33,.12), rgba(124,67,255,.08)) !important;
          transform: translateX(3px) !important;
        }

        .dropdown-icon {
          width: 38px;
          height: 38px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f37021;
          background: rgba(243, 112, 33, .1);
          border: 1px solid rgba(243, 112, 33, .14);
        }

        .dropdown-icon svg { width: 21px; height: 21px; }
        .dropdown-icon svg * { stroke: currentColor; stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

        .glass-menu .top-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .glass-menu .top-actions .login-btn { background: linear-gradient(135deg, #ff8a00, #f37021) !important; color: #fff !important; }
        .glass-menu .top-actions .store-btn { background: rgba(66, 17, 95, .08) !important; color: #42115f !important; border: 1px solid rgba(66, 17, 95, .08) !important; }

        @media (max-width: 768px) {
          body.fixoku-menu-open { overflow: hidden; }
          .desktop-top-header,
          .desktop-topbar { display: none !important; }
          .mobile-top-header,
          .mobile-topbar { display: block; }

          .mobile-top-header .top-header-inner.top-header-with-contact { grid-template-columns: 1fr !important; padding: 9px 14px; }
          .mobile-top-header .top-header-desktop-contact { display: none !important; }
          .mobile-top-header .top-center { justify-content: center; }
          .mobile-top-header .top-banner-svg { width: min(260px, 82vw); }

          .mobile-topbar {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            z-index: 1200;
            padding: 0 14px;
          }

          .mobile-topbar .topbar-wrap {
            max-width: 1350px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .mobile-topbar .logo-area {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
          }

          .mobile-topbar .site-logo { width: 132px; }

          .hamburger-btn {
            position: relative;
            z-index: 1302;
            width: 60px;
            height: 60px;
            border-radius: 25px;
            background: rgba(255,255,255,.88) !important;
            box-shadow: 0 14px 30px rgba(30,0,50,.18);
            border: 1px solid rgba(255,255,255,.68);
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
          }

          .hamburger-btn span {
            width: 22px;
            height: 2px;
            border-radius: 999px;
            background: #23103d !important;
          }

          .mobile-menu-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 1298;
            background: rgba(18, 5, 31, 0.22) !important;
            backdrop-filter: blur(10px) saturate(145%) !important;
            -webkit-backdrop-filter: blur(10px) saturate(145%) !important;
          }

          .mobile-drawer { display: none; }

          .mobile-drawer.is-open {
            display: flex !important;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            width: min(82vw, 330px);
            max-height: 100vh;
            overflow-y: auto;
            padding: 14px 12px 88px;
            border-radius: 0 30px 30px 0;
            z-index: 1300;
            color: #23103d !important;
            animation: fixokuDrawerLeft .26s ease both;
            background: linear-gradient(145deg, rgba(255,255,255,0.78), rgba(246,250,255,0.68) 54%, rgba(255,244,237,0.72)) !important;
            backdrop-filter: blur(28px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(28px) saturate(180%) !important;
            border-right: 1px solid rgba(255,255,255,0.78) !important;
            box-shadow: 26px 0 70px rgba(20, 0, 38, 0.26), inset -1px 0 0 rgba(255,255,255,0.55), inset 0 1px 0 rgba(255,255,255,0.88) !important;
          }

          @keyframes fixokuDrawerLeft {
            from { transform: translateX(-104%); opacity: .6; }
            to { transform: translateX(0); opacity: 1; }
          }

          .mobile-drawer-profile.mobile-logo-only {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin: 2px 0 18px !important;
            padding: 10px 0 8px !important;
            background: rgba(255,255,255,0.46) !important;
            border-radius: 22px !important;
            border: 1px solid rgba(255,255,255,0.62) !important;
            backdrop-filter: blur(20px) saturate(170%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(170%) !important;
            box-shadow: 0 12px 30px rgba(35,16,61,0.07) !important;
          }

          .mobile-profile-logo {
            width: 112px !important;
            height: auto !important;
            border: 0 !important;
            box-shadow: none !important;
            background: transparent !important;
            border-radius: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
          }

          .mobile-profile-logo img { width: 112px !important; max-width: 112px !important; height: auto !important; object-fit: contain !important; }

          .mobile-nav-list { display: flex; flex-direction: column; align-items: stretch; gap: 3px; width: 100%; }
          .mobile-nav-item { width: 100%; }

          .mobile-main-link,
          .mobile-nav-button {
            width: 100%;
            min-height: 42px;
            height: 42px;
            padding: 0 10px;
            border-radius: 14px;
            display: flex !important;
            align-items: center;
            gap: 9px;
            color: #23103d !important;
            background: rgba(255,255,255,0.34) !important;
            border: 1px solid rgba(255,255,255,0.42) !important;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.38) !important;
            text-align: left;
            font-size: 17px;
            line-height: 1;
            font-weight: 950;
            letter-spacing: -0.2px;
          }

          .mobile-main-link.is-active,
          .mobile-main-link:hover,
          .mobile-nav-button:hover,
          .mobile-nav-button[aria-expanded="true"] {
            color: #f37021 !important;
            background: rgba(255,255,255,0.72) !important;
            border-color: rgba(243,112,33,0.18) !important;
            box-shadow: 0 10px 24px rgba(243,112,33,0.10), inset 0 1px 0 rgba(255,255,255,0.72) !important;
          }

          .mobile-nav-icon,
          .mobile-main-icon {
            width: 34px;
            height: 34px;
            min-width: 34px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: #23103d;
          }

          .mobile-nav-icon svg,
          .mobile-main-icon svg { width: 23px; height: 23px; }
          .mobile-nav-button[aria-expanded="true"] .mobile-nav-icon,
          .mobile-main-link.is-active .mobile-main-icon { color: #f37021; }

          .mobile-nav-button .nav-caret {
            margin-left: auto;
            width: 22px;
            min-width: 22px;
            height: 22px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            color: #f37021;
          }

          .mobile-accordion-dropdown {
            margin: 0 0 5px 44px;
            padding: 0 0 5px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            animation: fixokuAccordion .18s ease both;
          }

          @keyframes fixokuAccordion {
            from { opacity: 0; transform: translateY(-4px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .mobile-accordion-dropdown a {
            width: calc(100% - 8px);
            min-height: 31px;
            padding: 6px 9px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            font-size: 13.5px;
            line-height: 1.15;
            font-weight: 850;
            color: #23103d !important;
            background: rgba(255,255,255,0.38) !important;
            border: 1px solid rgba(255,255,255,0.42) !important;
          }

          .mobile-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            margin-top: 16px;
          }

          .mobile-actions .action-btn {
            min-height: 42px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 13px;
            font-weight: 950;
          }

          .mobile-actions .login-btn {
            background: linear-gradient(135deg, #ff8a00, #f37021) !important;
            color: #ffffff !important;
            border: none !important;
            box-shadow: 0 10px 24px rgba(243,112,33,0.24) !important;
          }

          .mobile-actions .store-btn,
          .store-btn {
            background: linear-gradient(135deg, #7c43ff, #5127d9) !important;
            color: #ffffff !important;
            border: none !important;
            box-shadow: 0 10px 24px rgba(81,39,217,0.26) !important;
          }

          .mobile-menu-contact {
            display: flex !important;
            flex-direction: column;
            gap: 8px;
            background: rgba(255,255,255,0.58) !important;
            border: 1px solid rgba(255,255,255,0.64) !important;
            border-radius: 18px !important;
            padding: 12px !important;
            margin-top: 14px !important;
            box-shadow: 0 12px 30px rgba(35,16,61,0.08), inset 0 1px 0 rgba(255,255,255,0.62) !important;
            backdrop-filter: blur(20px) saturate(170%) !important;
            -webkit-backdrop-filter: blur(20px) saturate(170%) !important;
          }

          .mobile-contact-link,
          .mobile-contact-link:link,
          .mobile-contact-link:visited {
            min-height: 36px;
            padding: 7px 8px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
            color: #23103d !important;
            background: rgba(255,255,255,0.54) !important;
            font-size: 13px;
            font-weight: 900;
            opacity: 1;
            visibility: visible;
            text-shadow: none;
          }

          .mobile-contact-link svg { width: 21px; height: 21px; color: #f37021 !important; flex: 0 0 auto; }

          .mobile-contact-link.mobile-whatsapp-link,
          .mobile-contact-link.mobile-whatsapp-link:link,
          .mobile-contact-link.mobile-whatsapp-link:visited {
            background: linear-gradient(135deg, #25d366, #128c7e) !important;
            color: #ffffff !important;
            justify-content: center !important;
            box-shadow: 0 8px 20px rgba(18,140,126,0.22) !important;
          }

          .mobile-contact-link.mobile-whatsapp-link svg { color: #ffffff !important; }

          .mobile-bottom-nav {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1250;
            height: 72px;
            padding: 7px 10px calc(7px + env(safe-area-inset-bottom));
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
            background: rgba(255,255,255,0.72) !important;
            backdrop-filter: blur(26px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(26px) saturate(180%) !important;
            border-top: 1px solid rgba(255,255,255,0.7) !important;
            box-shadow: 0 -18px 42px rgba(35,16,61,0.13), inset 0 1px 0 rgba(255,255,255,0.65) !important;
          }

          .mobile-bottom-nav a {
            min-width: 0;
            border-radius: 18px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 3px;
            color: rgba(35,16,61,.62);
            font-size: 10.5px;
            font-weight: 850;
          }

          .mobile-bottom-nav a svg { width: 22px; height: 22px; }
          .mobile-bottom-nav a.is-active {
            color: #f37021;
            background: rgba(243,112,33,0.12) !important;
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.65) !important;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
