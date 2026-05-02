import { Link } from "react-router-dom";

const footerColumns = [
  {
    title: "Eğitimler",
    links: [
      { label: "Hızlı Okuma Eğitimi", to: "/hizli-okuma" },
      { label: "Dikkat ve Odaklanma", to: "/dikkat-odaklanma" },
      { label: "LGS Hazırlık", to: "/ogrenci-programlari/lgs" },
      { label: "YKS Hazırlık", to: "/ogrenci-programlari/yks" },
      { label: "Paragraf Teknikleri", to: "/ogrenci-programlari/paragraf" },
    ],
  },
  {
    title: "Fixoku",
    links: [
      { label: "Neden Fixoku?", to: "/fixoku-sistemi/neden-fixoku" },
      { label: "Eğitim Modeli", to: "/fixoku-sistemi/egitim-modeli" },
      { label: "Fixoku Yazılımı", to: "/fixoku-sistemi/yazilim" },
      { label: "Yapay Zeka", to: "/fixoku-sistemi/yapay-zeka" },
      { label: "Analiz Sistemi", to: "/fixoku-sistemi/analiz" },
    ],
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Okullar İçin", to: "/okullar-icin" },
      { label: "Eğitmen Ol", to: "/egitmen-ol" },
      { label: "Okul Başvuru Formu", to: "/okullar-icin/basvuru" },
      { label: "Eğitmen Başvuru Formu", to: "/egitmen-ol/basvuru" },
      { label: "Hakkımızda", to: "/hakkimizda" },
      { label: "Yorumlar", to: "/yorumlar" },
    ],
  },
  {
    title: "Ücretsiz Testler",
    links: [
      { label: "Okuma Hızı Testi", to: "/okuma-hizi-testi" },
      { label: "Okuma ve Anlama Testi", to: "/okuma-anlama-testi" },
      { label: "Dikkat Testi", to: "/dikkat-testi" },
      { label: "Odaklanma Testi", to: "/odaklanma-testi" },
    ],
  },
  {
    title: "Bilgi Merkezi",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Hızlı Okuma Blog", to: "/blog/hizli-okuma" },
      { label: "Dikkat ve Odaklanma Blog", to: "/blog/dikkat-odaklanma" },
      { label: "Sık Sorulan Sorular", to: "/sss" },
      { label: "İletişim", to: "/iletisim" },
    ],
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta-band">
        <div className="footer-cta-inner">
          <div className="footer-cta-text">
            <h2>Çocuğunuzun Gelişimini Bugün Başlatın</h2>
            <p>
              Fixoku ile hızlı okuma, dikkat, anlama ve odaklanma gelişimini
              profesyonel sistem desteğiyle hemen başlatın.
            </p>
          </div>

          <div className="footer-cta-actions">
            <Link to="/okuma-hizi-testi" className="footer-cta-btn primary">
              <span>Ücretsiz Seviye Tespiti Yap</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link to="/iletisim" className="footer-cta-btn secondary">
              <span>Bizimle İletişime Geçin</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-main-inner">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Fixoku Ana Sayfa">
              <img src="/logo-fixoku.png" alt="Fixoku Logo" />
            </Link>

            <p className="footer-brand-text">
              Fixoku; kitap, yazılım ve uzman eğitmen desteğini bir araya getiren
              hızlı okuma, anlama, dikkat ve odaklanma eğitim sistemidir.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
                </svg>
              </a>

              <a href="#" aria-label="YouTube" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 12c0 2.7-.3 4.4-.6 5.3a2.8 2.8 0 0 1-2 2C17.4 20 15 20 12 20s-5.4 0-6.4-.7a2.8 2.8 0 0 1-2-2C3.3 16.4 3 14.7 3 12s.3-4.4.6-5.3a2.8 2.8 0 0 1 2-2C6.6 4 9 4 12 4s5.4 0 6.4.7a2.8 2.8 0 0 1 2 2c.3.9.6 2.6.6 5.3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path d="M10 9.2 15.2 12 10 14.8V9.2Z" fill="currentColor" />
                </svg>
              </a>

              <a href="#" aria-label="Facebook" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.2 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4H16V5.4c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v1.8H8.8V14H11v7h2.2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.2 8.8H3.4V20h2.8V8.8Zm.2-3.4A1.6 1.6 0 1 1 3.2 5.4a1.6 1.6 0 0 1 3.2 0ZM20.6 13.1c0-3.3-1.8-4.8-4.2-4.8-1.9 0-2.8 1.1-3.3 1.8v-1.5h-2.7V20h2.8v-5.6c0-1.5.3-2.9 2.1-2.9s1.8 1.7 1.8 3V20h2.8v-6.9Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div className="footer-links-group" key={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-contact">
            <h3>İletişim</h3>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 6h18v12H3z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <a href="mailto:info@fixoku.com">info@fixoku.com</a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 2h4l2 5-2 2a14 14 0 006 6l2-2 5 2v4c0 1-1 2-2 2C10 21 3 14 3 6c0-1 1-2 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                </svg>
              </span>
              <a href="tel:+902324620743">+90 232 462 07 43</a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
              <span>İzmir, Türkiye</span>
            </div>

            <div className="footer-contact-note">
              Hafta içi 09:00 - 18:00 saatleri arasında destek alabilirsiniz.
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© 2026 Fixoku. Tüm hakları saklıdır.</p>

          <div className="footer-bottom-links">
            <Link to="/kvkk">KVKK</Link>
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/cerez-politikasi">Çerez Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
