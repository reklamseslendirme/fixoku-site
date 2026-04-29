import Header from "../components/Header";
import Footer from "../components/Footer";

function Iletisim() {
  return (
    <div className="page contact-page">
      <Header />

      <main className="contact-main">
        <section className="contact-hero">
          <div className="contact-hero-bg contact-hero-bg-left" />
          <div className="contact-hero-bg contact-hero-bg-right" />

          <div className="contact-container contact-hero-inner">
            <div className="contact-hero-copy">
              <span className="contact-eyebrow">Fixoku ile iletişime geçin</span>
              <h1>
                Size en uygun <span>Fixoku</span> eğitim çözümünü birlikte planlayalım.
              </h1>
              <p>
                Öğrenci eğitimleri, eğitmen başvuruları, yazılım kullanımı ve kurum iş birlikleri için bize ulaşabilirsiniz.
              </p>

              <div className="contact-quick-actions">
                <a href="tel:+902324620743" className="contact-action-card">
                  <div className="contact-action-icon">☎</div>
                  <div>
                    <strong>Telefon</strong>
                    <span>+90 232 462 07 43</span>
                  </div>
                </a>

                <a href="mailto:info@fixoku.com" className="contact-action-card">
                  <div className="contact-action-icon">✉</div>
                  <div>
                    <strong>E-posta</strong>
                    <span>info@fixoku.com</span>
                  </div>
                </a>

                <a href="https://wa.me/902324620743" target="_blank" rel="noreferrer" className="contact-action-card contact-whatsapp-card">
                  <div className="contact-action-icon">☘</div>
                  <div>
                    <strong>WhatsApp</strong>
                    <span>Hızlı destek alın</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-panel">
              <div className="contact-form-head">
                <h2>İletişim Formu</h2>
                <p>Bilgilerinizi bırakın, en kısa sürede sizinle iletişime geçelim.</p>
              </div>

              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="contact-form-grid">
                  <label>
                    <span>Ad Soyad</span>
                    <input type="text" placeholder="Adınız Soyadınız" />
                  </label>

                  <label>
                    <span>Telefon</span>
                    <input type="tel" placeholder="05xx xxx xx xx" />
                  </label>
                </div>

                <label>
                  <span>E-posta</span>
                  <input type="email" placeholder="ornek@mail.com" />
                </label>

                <label>
                  <span>İlgilendiğiniz konu</span>
                  <select defaultValue="">
                    <option value="" disabled>Seçiniz</option>
                    <option>Öğrenci eğitimi hakkında bilgi almak istiyorum</option>
                    <option>Fixoku eğitmeni olmak istiyorum</option>
                    <option>Kurum / okul iş birliği hakkında görüşmek istiyorum</option>
                    <option>Yazılım kullanımı hakkında destek istiyorum</option>
                  </select>
                </label>

                <label>
                  <span>Mesajınız</span>
                  <textarea rows="5" placeholder="Bize kısaca ihtiyacınızı yazın..." />
                </label>

                <button type="submit" className="contact-submit-btn">
                  Mesaj Gönder <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-info-section">
          <div className="contact-container contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <h3>Adres</h3>
              <p>Fixoku Eğitim ve Yazılım Ofisi<br />İzmir / Türkiye</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">⏰</div>
              <h3>Çalışma Saatleri</h3>
              <p>Pazartesi - Cuma<br />09:00 - 18:00</p>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">🚀</div>
              <h3>Hızlı Dönüş</h3>
              <p>Form ve WhatsApp başvurularına<br />en kısa sürede dönüş yapılır.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Iletisim;