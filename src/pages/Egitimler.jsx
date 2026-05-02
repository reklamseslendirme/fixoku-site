import { useMemo, useState } from "react";

const courses = [
  {
    id: "hizli-okuma",
    badge: "21 Günlük Program",
    category: "Hızlı Okuma",
    title: "Fixoku Hızlı Okuma Eğitim Programı",
    desc: "Okuma hızını, anlama becerisini ve paragraf çözme performansını geliştirmek isteyen öğrenciler için hazırlanmış temel eğitim programı.",
    level: "İlkokul • Ortaokul • Lise",
    duration: "21 Gün",
    lessons: "126 Egzersiz",
    students: "3.000+ Öğrenci",
    price: "Bilgi Al",
    rating: "5.0",
    tone: "orange",
  },
  {
    id: "dikkat-odaklanma",
    badge: "Dikkat Gelişimi",
    category: "Dikkat ve Odaklanma",
    title: "Dikkat ve Odaklanma Egzersizleri",
    desc: "Görsel dikkat, sürdürülebilir odaklanma, hafıza ve işlem becerilerini destekleyen oyun tabanlı gelişim programı.",
    level: "Seviye Bazlı",
    duration: "30 Gün",
    lessons: "5 Ana Test",
    students: "Canlı Analiz",
    price: "Bilgi Al",
    rating: "5.0",
    tone: "purple",
  },
  {
    id: "lgs",
    badge: "Sınav Hazırlık",
    category: "LGS Hazırlık",
    title: "LGS Paragraf ve Zaman Yönetimi",
    desc: "LGS öğrencilerinin paragraf sorularında hız kazanması, dikkatini koruması ve sınavda süreyi daha verimli kullanması için hazırlanmıştır.",
    level: "7. ve 8. Sınıf",
    duration: "4 Hafta",
    lessons: "Paragraf Modülleri",
    students: "Sınav Odaklı",
    price: "Bilgi Al",
    rating: "4.9",
    tone: "blue",
  },
  {
    id: "yks",
    badge: "Sınav Hazırlık",
    category: "YKS Hazırlık",
    title: "YKS Hızlı Okuma ve Paragraf Eğitimi",
    desc: "TYT paragraf, uzun metin okuma, anlamı koruyarak hızlanma ve sınav süresini yönetme becerilerini geliştirmeye odaklanır.",
    level: "Lise",
    duration: "4 Hafta",
    lessons: "Yoğun Program",
    students: "TYT Uyumlu",
    price: "Bilgi Al",
    rating: "4.9",
    tone: "pink",
  },
  {
    id: "ilkokul",
    badge: "Çocuk Programı",
    category: "İlkokul",
    title: "İlkokul Okuma Alışkanlığı Programı",
    desc: "Okumayı sevdiren, dikkat süresini destekleyen ve temel okuma-anlama becerilerini güçlendiren oyunlaştırılmış program.",
    level: "2-4. Sınıf",
    duration: "21 Gün",
    lessons: "Kolay Seviye",
    students: "Oyunlu Eğitim",
    price: "Bilgi Al",
    rating: "5.0",
    tone: "green",
  },
  {
    id: "ortaokul",
    badge: "Akademik Gelişim",
    category: "Ortaokul",
    title: "Ortaokul Hızlı Okuma Gelişim Seti",
    desc: "Ortaokul öğrencilerinin okuma hızı, dikkat, anlama ve ders çalışma verimliliğini artırmak için yapılandırılmış eğitim seti.",
    level: "5-8. Sınıf",
    duration: "21 Gün",
    lessons: "Orta Seviye",
    students: "Takip Sistemi",
    price: "Bilgi Al",
    rating: "4.9",
    tone: "cyan",
  },
  {
    id: "lise",
    badge: "İleri Seviye",
    category: "Lise",
    title: "Lise Okuma Hızı ve Anlama Seti",
    desc: "Lise öğrencileri için akademik metinleri hızlı okuma, anlamı koruma ve sınav performansını artırmaya yönelik ileri seviye program.",
    level: "9-12. Sınıf",
    duration: "21 Gün",
    lessons: "İleri Seviye",
    students: "Sınav Odaklı",
    price: "Bilgi Al",
    rating: "4.9",
    tone: "red",
  },
  {
    id: "egitmen",
    badge: "Eğitmen Akademisi",
    category: "Eğitmenlik",
    title: "Fixoku Eğitmen Eğitim Paketi",
    desc: "Fixoku sistemiyle hızlı okuma ve dikkat eğitimi vermek isteyen öğretmen ve eğitmenler için hazırlanmış uygulamalı eğitim paketi.",
    level: "Öğretmenler",
    duration: "Sertifika Süreci",
    lessons: "Panel + Materyal",
    students: "Eğitmen Desteği",
    price: "Başvur",
    rating: "5.0",
    tone: "gold",
  },
];

const curriculum = [
  "Seviye tespit ve başlangıç analizi",
  "Kitap destekli hızlı okuma çalışmaları",
  "Yazılım egzersizleri ve canlı performans ölçümü",
  "Dikkat, odaklanma ve hafıza egzersizleri",
  "Eğitmen takibi ve gelişim raporu",
];

export default function Egitimler() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const relatedCourses = useMemo(
    () => courses.filter((course) => course.id !== selectedCourse.id).slice(0, 4),
    [selectedCourse]
  );

  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero-bg" />
        <div className="courses-container courses-hero-grid">
          <div className="courses-hero-content">
            <div className="courses-breadcrumb">Ana Sayfa › Eğitimler › {selectedCourse.category}</div>
            <span className="courses-pill">{selectedCourse.badge}</span>
            <h1>{selectedCourse.title}</h1>
            <p>{selectedCourse.desc}</p>

            <div className="courses-hero-stats">
              <span>★ {selectedCourse.rating} Puan</span>
              <span>{selectedCourse.duration}</span>
              <span>{selectedCourse.lessons}</span>
            </div>

            <div className="courses-hero-actions">
              <a href="/iletisim" className="courses-primary-btn">Eğitim Hakkında Bilgi Al</a>
              <a href="#tum-egitimler" className="courses-secondary-btn">Tüm Eğitimleri Gör</a>
            </div>
          </div>

          <aside className={`courses-side-card courses-tone-${selectedCourse.tone}`}>
            <div className="courses-cover-card">
              <span>{selectedCourse.category}</span>
              <h2>{selectedCourse.title}</h2>
              <p>Fixoku Akademi</p>
            </div>

            <div className="courses-side-price">{selectedCourse.price}</div>

            <div className="courses-side-list">
              <div><strong>Seviye:</strong> {selectedCourse.level}</div>
              <div><strong>Süre:</strong> {selectedCourse.duration}</div>
              <div><strong>İçerik:</strong> {selectedCourse.lessons}</div>
              <div><strong>Katılım:</strong> {selectedCourse.students}</div>
            </div>

            <a href="/iletisim" className="courses-side-btn">Başvuru / Bilgi Al</a>
          </aside>
        </div>
      </section>

      <section className="courses-detail-section">
        <div className="courses-container courses-detail-grid">
          <article className="courses-main-panel">
            <section className="courses-content-block">
              <h2>Program Hakkında</h2>
              <p>
                Fixoku eğitimleri; kitap, yazılım ve uzman eğitmen desteğini bir araya getirerek öğrencinin okuma,
                anlama, dikkat ve odaklanma gelişimini sistemli şekilde takip eder. Programlar öğrencinin seviyesine
                göre yapılandırılır ve gelişim süreci ölçülebilir verilerle raporlanır.
              </p>
            </section>

            <section className="courses-content-block">
              <h2>Kazanımlar</h2>
              <div className="courses-feature-grid">
                <div><strong>Okuma Hızı</strong><span>Metni daha kısa sürede okuyabilme becerisi.</span></div>
                <div><strong>Anlama</strong><span>Okunan metindeki ana fikri ve detayları yakalama.</span></div>
                <div><strong>Dikkat</strong><span>Uzun süre odaklanmayı sürdürebilme.</span></div>
                <div><strong>Analiz</strong><span>Gelişimi raporlarla takip edebilme.</span></div>
              </div>
            </section>

            <section className="courses-content-block">
              <div className="courses-section-head">
                <h2>Eğitim İçeriği</h2>
                <span>5 Ana Bölüm</span>
              </div>

              <div className="courses-curriculum">
                {curriculum.map((item, index) => (
                  <details key={item} open={index === 0}>
                    <summary>
                      <span>{index + 1}. Bölüm</span>
                      <strong>{item}</strong>
                    </summary>
                    <p>
                      Bu bölümde öğrenci seviyesine uygun egzersizler, kısa görevler ve eğitmen yönlendirmeleri ile
                      gelişim süreci desteklenir.
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="courses-content-block">
              <h2>Sık Sorulan Sorular</h2>
              <div className="courses-faq-list">
                <details>
                  <summary>Bu eğitim kimler için uygundur?</summary>
                  <p>Program içeriği seçilen seviyeye göre ilkokul, ortaokul, lise, sınav öğrencileri ve eğitmenler için uyarlanabilir.</p>
                </details>
                <details>
                  <summary>Eğitim online mı ilerler?</summary>
                  <p>Fixoku; yazılım, kitap ve eğitmen takibi ile online destekli, ölçülebilir bir eğitim süreci sunar.</p>
                </details>
                <details>
                  <summary>Gelişim nasıl takip edilir?</summary>
                  <p>Öğrencinin performansı egzersiz sonuçları, okuma hızı, dikkat ve anlama verileriyle raporlanır.</p>
                </details>
              </div>
            </section>
          </article>

          <aside className="courses-sticky-sidebar">
            <div className="courses-review-card">
              <h3>Öne Çıkan Yorum</h3>
              <p>
                “Öğrencilerimizin okuma hızında ve paragraf sorularındaki süre yönetiminde gözle görülür gelişim sağladık.”
              </p>
              <div>★★★★★</div>
            </div>

            <div className="courses-package-card">
              <h3>Program İçeriği</h3>
              <ul>
                <li>Kitap destekli çalışma</li>
                <li>Yazılım egzersizleri</li>
                <li>Uzman eğitmen takibi</li>
                <li>Gelişim raporları</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="courses-list-section" id="tum-egitimler">
        <div className="courses-container">
          <div className="courses-list-head">
            <span className="courses-pill">Tüm Eğitimler</span>
            <h2>Fixoku Eğitim Programları</h2>
            <p>İhtiyacınıza uygun eğitimi seçin, detaylarını inceleyin ve başvuru için bizimle iletişime geçin.</p>
          </div>

          <div className="courses-list-grid">
            {courses.map((course) => (
              <button
                type="button"
                className={`courses-list-card courses-tone-${course.tone} ${selectedCourse.id === course.id ? "active" : ""}`}
                key={course.id}
                onClick={() => {
                  setSelectedCourse(course);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="courses-list-cover">
                  <span>{course.category}</span>
                  <h3>{course.title}</h3>
                </div>
                <div className="courses-list-body">
                  <div className="courses-stars">★★★★★</div>
                  <h3>{course.title}</h3>
                  <p>by Fixoku Akademi</p>
                  <strong>{course.price}</strong>
                  <div className="courses-list-meta">
                    <span>{course.duration}</span>
                    <span>{course.lessons}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="courses-related-section">
        <div className="courses-container">
          <h2>İlginizi Çekebilecek Eğitimler</h2>
          <div className="courses-related-grid">
            {relatedCourses.map((course) => (
              <button
                key={course.id}
                type="button"
                className={`courses-related-card courses-tone-${course.tone}`}
                onClick={() => {
                  setSelectedCourse(course);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <div className="courses-related-cover">{course.category}</div>
                <h3>{course.title}</h3>
                <div>★★★★★</div>
                <span>{course.price}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
