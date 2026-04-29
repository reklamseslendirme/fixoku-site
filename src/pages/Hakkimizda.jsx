import Header from "../components/Header";
import Footer from "../components/Footer";

const values = [
  {
    title: "Hızlı Okuma",
    text: "Okuma hızını artırırken anlama gücünü koruyan sistemli egzersizler.",
  },
  {
    title: "Dikkat ve Odak",
    text: "Öğrencinin dikkatini yönetmesini ve zihinsel performansını geliştirmesini hedefleyen çalışmalar.",
  },
  {
    title: "Yapay Zekâ Destekli Takip",
    text: "Okuma hızı, anlama düzeyi ve dikkat performansını düzenli ölçümleyen gelişim altyapısı.",
  },
  {
    title: "Ölçülebilir Gelişim",
    text: "Kullanıcının ilerleyişini somut verilerle görünür hale getiren sürdürülebilir eğitim modeli.",
  },
];

const audience = [
  "İlkokul 4. sınıf öğrencileri",
  "Ortaokul ve lise öğrencileri",
  "Üniversite ve lisansüstü öğrencileri",
  "Akademisyenler ve yetişkin bireyler",
];

function Hakkimizda() {
  return (
    <div className="page about-page">
      <Header />

      <main>
        <section className="about-hero-section">
          <div className="about-hero-glow about-hero-glow-left" />
          <div className="about-hero-glow about-hero-glow-right" />

          <div className="about-container about-hero-grid">
            <div className="about-hero-content">
              <div className="about-eyebrow">
                <span />
                Fixoku Eğitim Sistemi
              </div>

              <h1>
                Hızlı okuma, anlama ve dikkat gelişimini tek sistemde buluşturuyoruz.
              </h1>

              <p>
                Fixoku, bireylerin öğrenme kapasitesini artırmak ve bilgiye ulaşma hızını geliştirmek amacıyla kurulmuş; hızlı okuma ve zihinsel gelişim alanında kapsamlı eğitim çözümleri sunan yenilikçi bir eğitim sistemidir.
              </p>

              <div className="about-hero-actions">
                <a href="/iletisim" className="about-primary-btn">Eğitim Hakkında Bilgi Al</a>
                <a href="#misyon" className="about-secondary-btn">Misyonumuzu İncele</a>
              </div>
            </div>

            <div className="about-hero-card" aria-label="Fixoku öne çıkan özellikler">
              <div className="about-card-top">
                <div>
                  <span>Fixoku</span>
                  <strong>Akıllı Eğitim Modeli</strong>
                </div>
                <div className="about-live-dot"><i /> AKTİF</div>
              </div>

              <div className="about-metric-main">
                <span>Gelişim Odakları</span>
                <strong>4+</strong>
                <p>Okuma hızı, anlama, dikkat ve odaklanma becerileri birlikte takip edilir.</p>
              </div>

              <div className="about-mini-grid">
                <div><strong>126</strong><span>Egzersiz</span></div>
                <div><strong>9</strong><span>Analiz Alanı</span></div>
                <div><strong>AI</strong><span>Destekli Yazılım</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-intro-section">
          <div className="about-container about-two-column">
            <div>
              <div className="about-section-label">Biz Kimiz?</div>
              <h2>Bilgiyi daha hızlı, doğru ve etkili işlemeyi öğreten bir eğitim markasıyız.</h2>
            </div>

            <div className="about-rich-text">
              <p>
                Fixoku Eğitim Sistemi, bireylerin yalnızca daha hızlı okumasını değil; aynı zamanda okuduğunu doğru anlamasını, dikkatini yönetmesini ve zihinsel performansını geliştirmesini hedefleyen bütüncül bir eğitim yaklaşımı sunar.
              </p>
              <p>
                Bilgi çağında başarı; bilgiye ulaşmakla değil, bilgiyi doğru, hızlı ve etkili şekilde işleyebilmekle mümkündür. Fixoku, bu ihtiyaçtan doğmuş; hızlı okuma, anlama, dikkat ve zihinsel gelişim alanında güçlü eğitim çözümleri geliştiren bir markadır.
              </p>
              <p>
                Eğitim modelimiz; klasik hızlı okuma yöntemlerinin ötesine geçerek bilimsel araştırmaları, öğrenme psikolojisini ve modern eğitim teknolojilerini bir araya getirir. Böylece öğrenciler, akademisyenler ve yetişkin bireyler için sürdürülebilir ve ölçülebilir bir gelişim süreci oluşturulur.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="about-container">
            <div className="about-centered-heading">
              <div className="about-section-label">Neler Sunuyoruz?</div>
              <h2>Öğrenme sürecini hızlandıran bütüncül yapı</h2>
            </div>

            <div className="about-values-grid">
              {values.map((item, index) => (
                <div className="about-value-card" key={item.title}>
                  <div className="about-value-number">0{index + 1}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-audience-section">
          <div className="about-container about-audience-card">
            <div>
              <div className="about-section-label">Kimler İçin?</div>
              <h2>Her yaş ve seviye için özel tasarlanmış öğrenme modeli</h2>
              <p>
                Fixoku Eğitim Sistemi; ilkokul 4. sınıftan başlayarak farklı yaş ve öğrenme düzeylerine uygun kapsamlı bir gelişim modeli sunar.
              </p>
            </div>

            <div className="about-audience-list">
              {audience.map((item) => (
                <div className="about-audience-item" key={item}>
                  <span>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-mission-section" id="misyon">
          <div className="about-container about-mission-grid">
            <article className="about-mission-card">
              <span>Misyonumuz</span>
              <h2>Öğrenme süreçlerini hızlandıran etkili eğitim sistemleri geliştirmek.</h2>
              <p>
                Fixoku olarak misyonumuz; bireylerin okuma ve anlama becerilerini geliştiren, dikkat ve odaklanma kapasitelerini güçlendiren eğitim sistemleri üretmektir. Öğrencilerin akademik başarılarını artırmalarına, hedefledikleri okullara ulaşmalarına ve öğrenme süreçlerini daha verimli hale getirmelerine katkı sağlamayı amaçlıyoruz.
              </p>
            </article>

            <article className="about-mission-card about-mission-card-highlight">
              <span>Vizyonumuz</span>
              <h2>Türkiye’de ve uluslararası alanda referans gösterilen bir marka olmak.</h2>
              <p>
                Fixoku’nun vizyonu; hızlı okuma ve zihinsel gelişim alanında geliştirdiği yenilikçi eğitim modeliyle yeni neslin öğrenme hızını, anlama kapasitesini, dikkat ve odaklanma becerilerini güçlendiren sürdürülebilir bir eğitim sistemi oluşturmaktır.
              </p>
            </article>
          </div>
        </section>

        <section className="about-final-section">
          <div className="about-container about-final-box">
            <h2>Geleceğin öğrenme modeline Fixoku ile hazırlan.</h2>
            <p>
              Geliştirdiğimiz eğitim modeli ve teknolojik altyapı ile hızlı okuma alanında güvenilir, yenilikçi ve vizyon sahibi bir marka olarak yolumuza devam ediyoruz.
            </p>
            <a href="/iletisim" className="about-primary-btn">Bizimle İletişime Geç</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Hakkimizda;
