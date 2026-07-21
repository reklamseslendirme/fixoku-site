import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentStoriesSection from "./components/StudentStoriesSection.jsx";
import {
  AssessmentTestCards,
  AssessmentTestExperience,
} from "./components/assessment/AssessmentTests.jsx";

function HeroSlideHeading({ active, className, children }) {
  const HeadingTag = active ? "h1" : "div";
  return <HeadingTag className={className}>{children}</HeadingTag>;
}

const helpAudienceCards = [
  {
    title: "Öğrenciyim",
    description: "Eğitim almak istiyorum.",
    to: "/iletisim",
    icon: "student",
  },
  {
    title: "Veliyim",
    description: "Çocuğuma eğitim almak istiyorum.",
    to: "/ogrenciler-icin-hizli-okuma-egitimi",
    icon: "parent",
  },
  {
    title: "Eğitmenim",
    description: "Eğitmen olmak istiyorum.",
    to: "/egitmen-ol",
    icon: "trainer",
  },
  {
    title: "Kurum Sahibiyim",
    description: "Kurumumda eğitim vermek istiyorum.",
    to: "/okullar-icin",
    icon: "institution",
  },
];

function HelpAudienceIcon({ type }) {
  if (type === "parent") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="24" cy="22" r="9" stroke="currentColor" strokeWidth="4" />
        <circle cx="44" cy="26" r="7" stroke="currentColor" strokeWidth="4" />
        <path d="M9 52c1-11 7-17 15-17s14 6 15 17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M37 52c.7-8 4-13 9-13 4 0 7 3 9 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M44 11c3-4 10-2 10 4 0 6-10 11-10 11S34 21 34 15c0-6 7-8 10-4Z" fill="currentColor" opacity=".22" />
      </svg>
    );
  }

  if (type === "trainer") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <rect x="9" y="9" width="46" height="32" rx="5" stroke="currentColor" strokeWidth="4" />
        <path d="M20 51h24M32 41v10M18 30l8-8 7 6 12-12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="18" cy="30" r="3" fill="currentColor" />
        <circle cx="45" cy="16" r="3" fill="currentColor" />
      </svg>
    );
  }

  if (type === "institution") {
    return (
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M8 24 32 9l24 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 27h38v25H13V27Z" stroke="currentColor" strokeWidth="4" />
        <path d="M23 52V36h18v16M9 54h46" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <path d="M32 9v11" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" fill="none">
      <path d="m8 22 24-12 24 12-24 12L8 22Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M18 29v12c0 6 6 11 14 11s14-5 14-11V29" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M55 24v16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <circle cx="55" cy="44" r="3" fill="currentColor" />
    </svg>
  );
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [engineActiveModule, setEngineActiveModule] = useState(0);
  const [engineFeedStart, setEngineFeedStart] = useState(0);
  const [liveNumbers, setLiveNumbers] = useState({
    studentsReading: 207,
    focusStudents: 97,
    attentionTasks: 62,
    challenges: 41,
  });

  const [trainerStoryIndex, setTrainerStoryIndex] = useState(0);
  const [activeTrainerVideo, setActiveTrainerVideo] = useState(null);

  const trainerStories = useMemo(
  () => [
    {
      title: "Burak Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / Antalya",
      video: "/dynavit.mp4",
      poster: "/egitici1.jpeg",
    },
    {
      title: "Ayşe Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / Ankara",
      video: "/dynavit.mp4",
      poster: "/egitici2.jpeg",
    },
    {
      title: "Mehmet Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / İstanbul",
      video: "/dynavit.mp4",
      poster: "/egitici3.jpeg",
    },
    {
      title: "Zeynep Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / İzmir",
      video: "/dynavit.mp4",
      poster: "/egitici4.jpeg",
    },
    {
      title: "Elif Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / Bursa",
      video: "/dynavit.mp4",
      poster: "/egitici1.jpeg",
    },
    {
      title: "Can Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / Konya",
      video: "/dynavit.mp4",
      poster: "/egitici2.jpeg",
    },
    {
      title: "Merve Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / Eskişehir",
      video: "/dynavit.mp4",
      poster: "/egitici3.jpeg",
    },
    {
      title: "Kemal Öğretmen",
      role: "Fixoku Eğitmeni",
      badge: "Fixoku Eğitmeni / Adana",
      video: "/dynavit.mp4",
      poster: "/egitici4.jpeg",
    },
  ],
  []
);

  const trainerVisibleStories = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => trainerStories[(trainerStoryIndex + i) % trainerStories.length]);
  }, [trainerStories, trainerStoryIndex]);

  const goTrainerPrev = () => {
    setTrainerStoryIndex((prev) => prev === 0 ? trainerStories.length - 1 : prev - 1);
  };

  const goTrainerNext = () => {
    setTrainerStoryIndex((prev) => (prev + 1) % trainerStories.length);
  };

  useEffect(() => {
    const trainerInterval = setInterval(() => {
      setTrainerStoryIndex((prev) => (prev + 1) % trainerStories.length);
    }, 10000);
    return () => clearInterval(trainerInterval);
  }, [trainerStories.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 90000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const moduleInterval = setInterval(() => {
      setEngineActiveModule((prev) => (prev + 1) % 4);
    }, 3200);

    const feedInterval = setInterval(() => {
      setEngineFeedStart((prev) => (prev + 1) % 8);
    }, 2200);

    const numberInterval = setInterval(() => {
      setLiveNumbers((prev) => ({
        studentsReading: Math.max(
          180,
          prev.studentsReading + (Math.random() > 0.5 ? 1 : -1)
        ),
        focusStudents: Math.max(
          70,
          prev.focusStudents + (Math.random() > 0.5 ? 1 : -1)
        ),
        attentionTasks: Math.max(
          45,
          prev.attentionTasks + (Math.random() > 0.5 ? 1 : -1)
        ),
        challenges: Math.max(
          25,
          prev.challenges + (Math.random() > 0.5 ? 1 : -1)
        ),
      }));
    }, 1800);

    return () => {
      clearInterval(moduleInterval);
      clearInterval(feedInterval);
      clearInterval(numberInterval);
    };
  }, []);

  const engineModules = useMemo(
    () => [
      {
        key: "odak",
        label: "Odaklanma",
        short: "Odak",
        color: "yellow",
        icon: (
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M12 2v3M12 19v3M2 12h3M19 12h3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ),
        title: "Odaklanma Sistemi",
        value: `${liveNumbers.focusStudents}`,
        unit: "aktif kullanıcı",
        sub: "Odak egzersizleri şu anda sistem üzerinde devam ediyor.",
        progress: 74,
        badge: "Canlı Veri",
        score: "374",
      },
      {
        key: "okuma",
        label: "Meydan Okuma",
        short: "Okuma",
        color: "green",
        icon: (
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6.5C4 5.7 4.7 5 5.5 5H10c1.4 0 2.7.5 3.7 1.3.9-.8 2.2-1.3 3.6-1.3h1.2c.8 0 1.5.7 1.5 1.5V18c0 .6-.4 1-1 1h-1.7c-1.3 0-2.5.4-3.6 1.1A6.6 6.6 0 0 0 10 19H5.5c-.8 0-1.5-.7-1.5-1.5v-11Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
            <path
              d="M12.8 6.5V19.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ),
        title: "Meydan Okuma Sistemi",
        value: `${liveNumbers.challenges}`,
        unit: "aktif eşleşme",
        sub: "Öğrenciler canlı olarak birbirleriyle yarışıyor.",
        progress: 81,
        badge: "Canlı Veri",
        score: "441",
      },
      {
        key: "dikkat",
        label: "Dikkat",
        short: "Dikkat",
        color: "blue",
        icon: (
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3c-3.5 0-6 2.4-6 5.5 0 1.7.7 3 1.8 4.1.7.7 1.2 1.5 1.2 2.4V16h6v-1c0-.9.5-1.7 1.2-2.4C17.3 11.5 18 10.2 18 8.5 18 5.4 15.5 3 12 3Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <path
              d="M9.5 19h5M10 16h4M10.5 21h3"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ),
        title: "Dikkat Gelişim Sistemi",
        value: `${liveNumbers.attentionTasks}`,
        unit: "tamamlanan görev",
        sub: "Dikkat egzersizleri düzenli şekilde tamamlanıyor.",
        progress: 68,
        badge: "Canlı Veri",
        score: "328",
      },
      {
        key: "duello",
        label: "Düello",
        short: "Düello",
        color: "red",
        icon: (
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M7 4h10M8 4c0 3-2 4-2 7a6 6 0 0 0 12 0c0-3-2-4-2-7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M9 18h6M8 21h8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ),
        title: "Canlı Düello Sistemi",
        value: "30",
        unit: "aktif yarışma",
        sub: "Öğrenciler karşılıklı rekabet ile hız kazanıyor.",
        progress: 77,
        badge: "Canlı Veri",
        score: "295",
      },
    ],
    [liveNumbers]
  );

  const engineFeedItems = useMemo(
    () => [
      { text: "Yeni düelloda eşleşti", value: "+6", tone: "yellow" },
      { text: "Meydan okuması kazandı", value: "+32", tone: "green" },
      { text: "Aylık sertifika görevini tamamladı", value: "+17", tone: "green" },
      { text: "Hızlı okuma görevine başladı", value: "+9", tone: "blue" },
      { text: "Canlı odaklanma turuna katıldı", value: "+11", tone: "yellow" },
      { text: "Dikkat modülünü tamamladı", value: "+14", tone: "blue" },
      { text: "Yeni rekabet oturumu açtı", value: "+8", tone: "red" },
      { text: "Meydan okuma puanı yükseldi", value: "+21", tone: "green" },
    ],
    []
  );

  const visibleFeed = useMemo(() => {
    return Array.from({ length: 3 }, (_, i) => {
      return engineFeedItems[(engineFeedStart + i) % engineFeedItems.length];
    });
  }, [engineFeedItems, engineFeedStart]);

  const activeEngineModuleData = engineModules[engineActiveModule];

  const educationStoreItems = useMemo(
    () => [
      {
        category: "Hızlı Okuma",
        title: "Fixoku Hızlı Okuma Eğitim Kitabı",
        author: "Fixoku Akademi",
        price: "Eğitim İçeriği",
        lessons: "21 Gün",
        students: "126 Egzersiz",
        tone: "orange",
        coverKicker: "Okuma • Anlama",
        coverTitle: "Hızlı Okuma",
        coverSub: "Kitap + Yazılım",
      },
      {
        category: "Dikkat",
        title: "Dikkat ve Odaklanma Egzersiz Kitabı",
        author: "Fixoku Akademi",
        price: "Eğitim İçeriği",
        lessons: "5 Test",
        students: "9 Analiz",
        tone: "purple",
        coverKicker: "Odak • Dikkat",
        coverTitle: "Dikkat Eğitimi",
        coverSub: "Oyun Tabanlı",
      },
      {
        category: "LGS",
        title: "LGS Paragraf ve Zaman Yönetimi",
        author: "Fixoku Sınav Ekibi",
        price: "Sınav Paketi",
        lessons: "8 Modül",
        students: "LGS Uyumlu",
        tone: "blue",
        coverKicker: "LGS Hazırlık",
        coverTitle: "Paragraf Hızı",
        coverSub: "Süre Kazandırır",
      },
      {
        category: "YKS",
        title: "YKS Hızlı Okuma ve Paragraf Eğitimi",
        author: "Fixoku Sınav Ekibi",
        price: "Sınav Paketi",
        lessons: "8 Modül",
        students: "YKS Uyumlu",
        tone: "pink",
        coverKicker: "YKS Hazırlık",
        coverTitle: "Paragraf Stratejisi",
        coverSub: "Anlama Odaklı",
      },
      {
        category: "İlkokul",
        title: "İlkokul Okuma Alışkanlığı Programı",
        author: "Fixoku Çocuk Ekibi",
        price: "Seviye Paketi",
        lessons: "Kolay Seviye",
        students: "Oyunlu Eğitim",
        tone: "green",
        coverKicker: "İlkokul",
        coverTitle: "Okuma Sevgisi",
        coverSub: "Temel Beceriler",
      },
      {
        category: "Ortaokul",
        title: "Ortaokul Hızlı Okuma Gelişim Seti",
        author: "Fixoku Akademi",
        price: "Seviye Paketi",
        lessons: "Orta Seviye",
        students: "Takip Sistemi",
        tone: "cyan",
        coverKicker: "Ortaokul",
        coverTitle: "Dikkat + Hız",
        coverSub: "Akademik Destek",
      },
      {
        category: "Lise",
        title: "Lise Okuma Hızı ve Anlama Seti",
        author: "Fixoku Akademi",
        price: "Seviye Paketi",
        lessons: "İleri Seviye",
        students: "Sınav Odaklı",
        tone: "red",
        coverKicker: "Lise",
        coverTitle: "Anlama Gücü",
        coverSub: "Yoğun Program",
      },
      {
        category: "Eğitmen",
        title: "Fixoku Eğitmen Eğitim Materyalleri",
        author: "Fixoku Eğitmen Akademisi",
        price: "Eğitmen Paketi",
        lessons: "Sertifika",
        students: "Panel Desteği",
        tone: "gold",
        coverKicker: "Eğitmen",
        coverTitle: "Eğitmen Seti",
        coverSub: "Kurulum Rehberi",
      },
    ],
    []
  );


  const sliderData = [
    {
      id: 1,
      type: "student",
      bg: "/1.webp",
      topBadge: "TÜRKİYE’NİN YAPAY ZEKA DESTEKLİ İLK HIZLI OKUMA EĞİTİM YAZILIMI",
      mobileTopBadge: "TÜRKİYE’NİN AI DESTEKLİ İLK HIZLI OKUMA EĞİTİMİ",
      title: (
        <span className="hero-title-mobile-wrap">
          <span className="hero-title-line hero-title-line-1">
            <span className="highlight">21 Günde</span>
            <span className="hero-title-rest"> Okuma,</span>
          </span>
          <span className="hero-title-line hero-title-line-2">
            Anlama, Dikkat ve Odaklanma Gelişimi
          </span>
        </span>
      ),
      desc: (
        <>
          LGS ve YKS öğrencileri için geliştirilen <strong>Fixoku</strong> sistemi ile
          okuma hızını artırın, paragraf sorularını daha hızlı çözün,
          sınavlarda zaman kazanın.
        </>
      ),
      stats: [
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ),
          text: (
            <>
              21 Gün
              <br />
              Eğitim
            </>
          ),
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 10v4M21 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M7 7h2v10H7zM15 7h2v10h-2z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ),
          text: (
            <>
              126
              <br />
              Egzersiz
            </>
          ),
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M9 3h6l1 2h3a1 1 0 0 1 1 1v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h3l1-2Z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 10h8M8 14h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ),
          text: (
            <>
              9 Kategoride
              <br />
              Analiz
            </>
          ),
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 3c-3.5 0-6 2.4-6 5.5 0 1.7.7 3 1.8 4.1.7.7 1.2 1.5 1.2 2.4V16h6v-1c0-.9.5-1.7 1.2-2.4C17.3 11.5 18 10.2 18 8.5 18 5.4 15.5 3 12 3Z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M9.5 19h5M10 16h4M10.5 21h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ),
          text: (
            <>
              Yapay Zeka
              <br />
              Destekli
            </>
          ),
        },
      ],
    },
    {
      id: 2,
      type: "trainer",
      bg: "/2.webp",
      title: (
        <>
          Sen de
          <br />
          <span className="highlight">Fixoku Eğitmeni</span> Ol!
        </>
      ),
      desc: (
        <div className="trainer-quote">
          <span className="quote-mark quote-open">“</span>

          <div className="trainer-quote-text">
            Türkiye’de yüzlerce eğitmen
            <br />
            Fixoku sistemi ile
            <br />
            <span className="highlight-inline">hızlı okuma ve dikkat eğitimleri</span>
            <br />
            vererek gelir elde ediyor.
          </div>

          <span className="quote-mark quote-close">”</span>
        </div>
      ),
      stats: [
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.8 21c.7-4.2 2.9-6.4 5.2-6.4s4.5 2.2 5.2 6.4M12.8 15.6c.8-.8 1.9-1.2 3.2-1.2 2.2 0 4.2 2.1 4.9 6.1"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ),
          text: (
            <>
              Yüzlerce
              <br />
              Eğitmen
            </>
          ),
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6.5C4 5.7 4.7 5 5.5 5H10c1.4 0 2.7.5 3.7 1.3.9-.8 2.2-1.3 3.6-1.3h1.2c.8 0 1.5.7 1.5 1.5V18c0 .6-.4 1-1 1h-1.7c-1.3 0-2.5.4-3.6 1.1A6.6 6.6 0 0 0 10 19H5.5c-.8 0-1.5-.7-1.5-1.5v-11Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M12.8 6.5V19.8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ),
          text: (
            <>
              Hızlı Okuma
              <br />
              Eğitimi
            </>
          ),
        },
        {
          icon: (
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3c-3.5 0-6 2.4-6 5.5 0 1.7.7 3 1.8 4.1.7.7 1.2 1.5 1.2 2.4V16h6v-1c0-.9.5-1.7 1.2-2.4C17.3 11.5 18 10.2 18 8.5 18 5.4 15.5 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M9.5 19h5M10 16h4M10.5 21h3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ),
          text: (
            <>
              Dikkat
              <br />
              Eğitimi
            </>
          ),
        },
      ],
    },
    {
      id: 3,
      type: "engine",
      bg: "/2.webp",
    },
  ];

  return (
    <AssessmentTestExperience>
      {({ openTest }) => (
        <div className="page">
          <Header />
      <section className="hero-slider">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${
              activeSlide === index ? "is-active" : ""
            } hero-slide-${slide.type}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="hero-slide-overlay" />

            <div className="hero-slide-content">
              {slide.type === "student" && (
                <>
                  {slide.topBadge && (
                    <div className="hero-top-badge">
                      <span className="desktop-badge-text">{slide.topBadge}</span>
                      <span className="mobile-badge-text">{slide.mobileTopBadge || slide.topBadge}</span>
                    </div>
                  )}

                  <HeroSlideHeading active={activeSlide === index} className="hero-slide-title">
                    {slide.title}
                  </HeroSlideHeading>

                  <div className="hero-slide-desc">{slide.desc}</div>

                  <div className="hero-stats-row">
                    {slide.stats.map((item, idx) => (
                      <div key={idx} className="hero-stat-item">
                        <div className="hero-stat-icon">{item.icon}</div>
                        <div className="hero-stat-text">{item.text}</div>
                      </div>
                    ))}
                  </div>

                  <div className="slide-buttons slide-buttons-student">
                    <button type="button" className="slide-btn slide-btn-orange" onClick={() => openTest("reading")}>
                      <span className="slide-btn-icon">
                        <svg viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 3c-3.5 0-6 2.4-6 5.5 0 1.7.7 3 1.8 4.1.7.7 1.2 1.5 1.2 2.4V16h6v-1c0-.9.5-1.7 1.2-2.4C17.3 11.5 18 10.2 18 8.5 18 5.4 15.5 3 12 3Z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          />
                          <path
                            d="M9.5 19h5M10 16h4M10.5 21h3"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span className="desktop-btn-text">
                        Çocuğumun Okuma
                        <br />
                        Seviyesini Ölç
                      </span>
                      <span className="mobile-btn-text">Seviyeni Ölç</span>
                    </button>

                    <button type="button" className="slide-btn slide-btn-purple">
                      <span className="slide-btn-icon">
                        <svg viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                          <path
                            d="M12 10v6M12 7.5h.01"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <span className="desktop-btn-text">
                        Eğitim Hakkında
                        <br />
                        Bilgi al
                      </span>
                      <span className="mobile-btn-text">Eğitim hakkında</span>
                    </button>
                  </div>
                </>
              )}

              {slide.type === "trainer" && (
                <>
                  <HeroSlideHeading active={activeSlide === index} className="hero-slide-title">
                    {slide.title}
                  </HeroSlideHeading>

                  <div className="hero-slide-desc">{slide.desc}</div>

                  <div className="trainer-pill-box">
                    {slide.stats.map((item, idx) => (
                      <div key={idx} className="trainer-pill-item">
                        {item.icon && <span className="trainer-pill-icon">{item.icon}</span>}
                        <span className="trainer-pill-text">{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="slide-actions-trainer">
                    <button type="button" className="apply-btn">
                      HEMEN BAŞVUR
                      <span className="apply-btn-arrow">→</span>
                    </button>

                    <div className="trainer-note-wrap">
                      <span className="trainer-note-arrow">↖</span>
                      <div className="trainer-note">
                        Fixoku ailesine
                        <br />
                        sen de katıl!
                      </div>
                    </div>
                  </div>
                </>
              )}

              {slide.type === "engine" && (
  <div className="engine-layout engine-layout-compact">
    <div className="engine-left engine-left-compact">
      <div className="engine-kicker">Fixoku Canlı Sistem</div>

      <HeroSlideHeading active={activeSlide === index} className="engine-title-main">
        Fixoku’da <span>Eğitim Süreci</span>
        <br />
        Canlı Çalışır
      </HeroSlideHeading>

      <p className="engine-desc-main">
        Öğrenci gelişimi, eğitmen ilerleyişi, meydan okumalar ve analizler tek
        sistem içinde anlık olarak hareket eder.
      </p>

      <div className="engine-feature-cards compact-cards">
        <div className="engine-feature-card compact-feature">
          <div className="engine-feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 19V10"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
              <path
                d="M12 19V5"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
              <path
                d="M19 19v-7"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
              <path
                d="M4 19h16"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="engine-feature-text">
            <strong>Anlık Veri</strong>
            <span>Öğrenci hareketleri canlı izlenir</span>
          </div>
        </div>

        <div className="engine-feature-card compact-feature">
          <div className="engine-feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M7 4h10M8 4c0 3-2 4-2 7a6 6 0 0 0 12 0c0-3-2-4-2-7"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
              <path
                d="M9 18h6M8 21h8"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="engine-feature-text">
            <strong>Meydan Okuma</strong>
            <span>Öğrenciler rekabet ederek ilerler</span>
          </div>
        </div>

        <div className="engine-feature-card compact-feature">
          <div className="engine-feature-icon">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3c-3.5 0-6 2.4-6 5.5 0 1.7.7 3 1.8 4.1.7.7 1.2 1.5 1.2 2.4V16h6v-1c0-.9.5-1.7 1.2-2.4C17.3 11.5 18 10.2 18 8.5 18 5.4 15.5 3 12 3Z"
                stroke="currentColor"
                strokeWidth="1.9"
              />
              <path
                d="M9.5 19h5M10 16h4M10.5 21h3"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="engine-feature-text">
            <strong>Akıllı Analiz</strong>
            <span>Performans sürekli ölçülür ve raporlanır</span>
          </div>
        </div>
      </div>

      <div className="engine-left-actions">
        <button type="button" className="engine-cta-btn compact-btn">
          Canlı Sistemi Keşfet
          <span className="engine-cta-arrow">→</span>
        </button>
      </div>
    </div>

    <div className="engine-right engine-right-compact">
      <div className="engine-panel-new compact-panel">
        <div className="engine-panel-frame compact-frame">
          <div className="engine-header">
            <div className="engine-header-left">
              <div className="engine-panel-logo">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3c-3.5 0-6 2.4-6 5.5 0 1.7.7 3 1.8 4.1.7.7 1.2 1.5 1.2 2.4V16h6v-1c0-.9.5-1.7 1.2-2.4C17.3 11.5 18 10.2 18 8.5 18 5.4 15.5 3 12 3Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M9.5 19h5M10 16h4M10.5 21h3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <div className="engine-mini">Fixoku Live</div>
                <div className="engine-title">Eğitim Motoru</div>
              </div>
            </div>

            <div className="engine-live">
              <span className="dot" />
              AKTİF
            </div>
          </div>

          <div className="engine-dashboard-grid compact-grid">
            <div className="engine-side-modules compact-side-modules">
              {engineModules.map((m, i) => (
                <div
                  key={m.key}
                  className={`engine-side-module ${
                    i === engineActiveModule ? "active" : ""
                  } ${m.color}`}
                >
                  <span className="engine-side-module-icon">{m.icon}</span>
                  <span className="engine-side-module-label">{m.short}</span>
                </div>
              ))}
            </div>

            <div className="engine-main-wrap compact-main-wrap">
              <div className="engine-big-card compact-big-card">
                <div className="engine-big-card-top">
                  <div className="engine-big-card-label">
                    {activeEngineModuleData.label}
                  </div>
                  <div className="engine-big-card-status">
                    {activeEngineModuleData.badge}
                  </div>
                </div>

                <div className="engine-big-card-title">
                  {activeEngineModuleData.title}
                </div>

                <div className="engine-big-number">
                  {activeEngineModuleData.value}
                </div>

                <div className="engine-big-unit">
                  {activeEngineModuleData.unit}
                </div>

                <div className="engine-main-sub">
                  {activeEngineModuleData.sub}
                </div>

                <div className="engine-performance-row">
                  <span>Canlı Performans</span>
                  <span className="engine-performance-rate">
                    %{activeEngineModuleData.progress}
                  </span>
                </div>

                <div className="engine-chart-box compact-chart">
                  <div className="chart-grid-lines" />
                  <div className="chart-line-green" />
                  <div className="engine-chart-score">
                    {activeEngineModuleData.score}
                  </div>
                </div>
              </div>

              <div className="engine-bottom-row compact-bottom-row">
                <div className="engine-feed-card-wide">
                  <div className="engine-feed-title">
                    <span>Canlı Akış:</span>
                    <span className="engine-feed-user">
                      1 · ✏️ ✦ Ali Asaf
                    </span>
                  </div>

                  <div className="engine-feed-list">
                    {visibleFeed.map((item, i) => (
                      <div key={i} className="engine-feed-item">
                        <span
                          className={`engine-feed-bullet ${item.tone}`}
                        />
                        <span className="engine-feed-text">{item.text}</span>
                        <span className="engine-feed-value">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="engine-success-card">
                  <div className="engine-success-label">BAŞARI ORANI</div>
                  <div className="engine-success-value">%94</div>
                  <div className="engine-success-desc">
                    Bugün tamamlanan
                    <br />
                    görevler
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="engine-bottom-mark" />
        </div>
      </div>
    </div>
  </div>
)}
            </div>
          </div>
        ))}

        <div className="hero-slider-dots">
          {sliderData.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-dot ${activeSlide === index ? "is-active" : ""}`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section className="why-fixoku-section">
        <div className="why-fixoku-container">
          <div className="why-fixoku-header">
            <div className="why-fixoku-eyebrow">
              <span aria-hidden="true" />
              <p>Fixoku Eğitim Sistemi</p>
              <span aria-hidden="true" />
            </div>

            <h2>
              Neden <strong>Fixoku?</strong>
            </h2>
          </div>

          <div className="why-fixoku-overview">
            <div className="why-fixoku-content">
              <p>
                Fixoku; akıcı okuma, hızlı okuma, anlama, dikkat, odaklanma ve
                paragraf çözme becerilerini geliştirmeye yönelik{" "}
                <strong>kapsamlı bir eğitim sistemidir.</strong> Program,
                öğrencilerin okuma hızını artırmayı, metni daha doğru anlamalarını
                ve <strong>dikkat becerilerini</strong> güçlendirerek sınavlarda
                başarıya ulaşmalarını sağlar.
              </p>

              <p>
                Fixoku sistemi; <strong>yapay zekâ destekli yazılım</strong>, akıcı
                okuma, hızlı okuma, paragraf kitapları ve özel olarak hazırlanmış
                egzersizler ile öğrencilerin gelişimini ölçebilen yenilikçi bir
                eğitim modelidir. Yapay zekâ destekli yazılım içerisinde yer alan{" "}
                <strong>126 farklı egzersiz</strong>,{" "}
                <strong>21 günlük eğitim</strong> periyodu ile öğrencilerin
                performansını analiz ederek gelişim sürecini takip eder. Program
                sonunda öğrenciler <strong>9 farklı beceri</strong> alanında
                değerlendirilir ve gelişim raporu oluşturulur.
              </p>
            </div>

            <div
              className="why-video-box"
              role="img"
              aria-label="Fixoku eğitim sistemi tanıtım sunumu için görsel alan"
            >
              <span className="why-video-glow" aria-hidden="true" />
              <span className="why-video-mark" aria-hidden="true">
                <svg viewBox="0 0 96 96" fill="none">
                  <circle cx="48" cy="48" r="43" stroke="currentColor" strokeWidth="3" />
                  <path d="M40 31 67 48 40 65V31Z" fill="currentColor" />
                </svg>
              </span>
              <span className="why-video-caption">Fixoku Eğitim Sistemi</span>
            </div>
          </div>

          <div className="help-audience-section">
            <h3>
              Size Nasıl <strong>Yardımcı Olabiliriz?</strong>
            </h3>

            <div className="help-audience-grid">
              {helpAudienceCards.map((card) => (
                <article className="help-audience-card" key={card.title}>
                  <span className="help-audience-icon" aria-hidden="true">
                    <HelpAudienceIcon type={card.icon} />
                  </span>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <Link to={card.to} className="help-audience-link">
                    <span>Bilgi Al</span>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AssessmentTestCards onStartTest={openTest} />
      <StudentStoriesSection />
<section className="how-it-works-section">
  <div className="how-it-works-container">
    <div className="how-it-works-hero">
      <h2 className="how-it-works-title">Fixoku Sistemi Nasıl Çalışır?</h2>

      <p className="how-it-works-subtitle">
        <strong>Fixoku;</strong> kitap, yazılım ve uzman eğitmen desteğini bir
        araya getiren kapsamlı bir hızlı okuma, anlama, dikkat ve odaklanma
        eğitim sistemidir.
      </p>
    </div>

    <div className="how-it-works-panel">
      <div className="how-it-works-grid">
        <article className="how-card">
          <div className="how-card-head how-card-head-orange">
            Fixoku Eğitim Kitapları
          </div>

          <div className="how-card-visual how-card-visual-book">
            <div className="how-card-clouds" />

            <div className="how-card-illustration">
              <img
                className="how-card-image how-card-image-contain"
                src="/images/home/fixoku-system/fixoku-egitim-kitabi.png"
                alt="Fixoku Eğitim Kitapları görseli"
                width="250"
                height="250"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="how-card-body">
            {[
              "Dikkat ve Odaklanma Teknikleri",
              "Akıcı Okuma Teknikleri",
              "Hızlı Okuma Teknikleri",
              "Paragraf Teknikleri",
            ].map((feature) => (
              <div className="how-feature" key={feature}>
                <span className="how-feature-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                    <path d="M7 12.5l3.2 3.2L17.5 8.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="how-card">
          <div className="how-card-head how-card-head-gradient">
            Yapay Zekâ Destekli Yazılım
          </div>

          <div className="how-card-visual how-card-visual-software">
            <div className="how-card-clouds" />

            <div className="how-card-illustration">
              <img
                className="how-card-image how-card-image-contain"
                src="/images/home/fixoku-system/yapay-zeka-destekli-yazilim.png"
                alt="Fixoku yapay zekâ destekli yazılım ekranı"
                width="250"
                height="250"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="how-card-body">
            {[
              "21 Günlük Başarı Serüveni",
              "126 Egzersiz İçeriği",
              "9 Kategoride Ölçümleme ve Analiz",
              "1 Yıl Aktif Serbest Çalışma Alanı",
            ].map((feature) => (
              <div className="how-feature" key={feature}>
                <span className="how-feature-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                    <path d="M7 12.5l3.2 3.2L17.5 8.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="how-card">
          <div className="how-card-head how-card-head-purple">
            Uzman Eğitmen Desteği
          </div>

          <div className="how-card-visual how-card-visual-mentor">
            <div className="how-card-clouds" />

            <div className="how-card-illustration">
              <img
                className="how-card-image how-card-image-cover"
                src="/images/home/fixoku-system/uzman-egitmen-destegi.png"
                alt="Fixoku uzman eğitmen desteğiyle sınıf eğitimi"
                width="250"
                height="250"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="how-card-body">
            {[
              "Müfredat Eşliğinde Eğitim",
              "Kitap ve Yazılım Çözüm Desteği",
              "Birebir Takip ve Değerlendirme",
              "Sonuç Analizi ve Yönlendirme",
            ].map((feature) => (
              <div className="how-feature" key={feature}>
                <span className="how-feature-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                    <path d="M7 12.5l3.2 3.2L17.5 8.5" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="how-it-works-bottom-text">
        21 günlük eğitim sonunda öğrencilerin okuma hızında ve anlama
        becerilerinde belirgin gelişim elde edilmektedir.
      </div>
    </div>
  </div>
</section>
<section className="progress-model-section">
  <div className="progress-model-container">
    <div className="progress-hero">
      <h2 className="progress-title">Gelişiminizi Anlık Takip Edin</h2>

      <p className="progress-subtitle">
        Yapay zekâ destekli yazılımımız, öğrencilerin gelişimini anlık olarak takip
        ederek eğitim sonunda detaylı veriler sunar.
      </p>

      <div className="progress-panel">
        <div className="progress-grid">
          <article className="progress-card">
            <div className="progress-card-head progress-head-orange">
              Okuma Hız Analizi
            </div>

            <div className="progress-card-body">
              <div className="progress-icon" aria-hidden="true">
                <svg viewBox="0 0 96 96" fill="none">
                  <circle cx="58" cy="40" r="20" stroke="#ef2b20" strokeWidth="4" />
                  <path d="M16 42h18M10 34h24M20 50h16" stroke="#ef6418" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="58" cy="40" r="4" fill="#ef2b20" />
                  <path d="M58 40L74 28" stroke="#ef2b20" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

              <div className="progress-value">412</div>
              <div className="progress-sub">Kelime/Dakika</div>
            </div>
          </article>

          <article className="progress-card">
            <div className="progress-card-head progress-head-purple">
              Yazılım Egzersizleri
            </div>

            <div className="progress-card-body">
              <div className="progress-icon" aria-hidden="true">
                <svg viewBox="0 0 96 96" fill="none">
                  <rect x="22" y="20" width="52" height="32" rx="3" stroke="#ef6418" strokeWidth="4" />
                  <path d="M32 62h32M40 52v10M56 52v10" stroke="#ef6418" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

              <div className="progress-value">%86</div>
              <div className="progress-sub">126 egzersizi analiz eder</div>
            </div>
          </article>

          <article className="progress-card">
            <div className="progress-card-head progress-head-mix">
              Kitap Çalışmaları
            </div>

            <div className="progress-card-body">
              <div className="progress-icon" aria-hidden="true">
                <svg viewBox="0 0 96 96" fill="none">
                  <path d="M28 24c10 0 18 3 20 7v32c-2-4-10-7-20-7V24Z" stroke="#ef6418" strokeWidth="4" fill="none" />
                  <path d="M68 24c-10 0-18 3-20 7v32c2-4 10-7 20-7V24Z" stroke="#ef6418" strokeWidth="4" fill="none" />
                  <path d="M48 31v32" stroke="#ef6418" strokeWidth="3" />
                  <path d="M58 48l12 12" stroke="#ef2b20" strokeWidth="5" strokeLinecap="round" />
                  <path d="M60 60l10-2-2-10" stroke="#ef2b20" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="progress-value">%78</div>
              <div className="progress-sub">Öğrencinin gelişimini ölçer</div>
            </div>
          </article>

          <article className="progress-card">
            <div className="progress-card-head progress-head-orange">
              Egzersiz Performansı
            </div>

            <div className="progress-card-body">
              <div className="progress-icon" aria-hidden="true">
                <svg viewBox="0 0 96 96" fill="none">
                  <circle cx="42" cy="40" r="18" stroke="#ef6418" strokeWidth="4" />
                  <path d="M54 54l14 14" stroke="#ef6418" strokeWidth="5" strokeLinecap="round" />
                  <path d="M34 44l6-8 6 5 8-12" stroke="#ef2b20" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 50h24" stroke="#ef6418" strokeWidth="3" strokeLinecap="round" opacity=".5" />
                </svg>
              </div>

              <div className="progress-value">9/10</div>
              <div className="progress-sub">11 gün</div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <div className="education-model-block">
      <h2 className="education-model-title">Fixoku Eğitim Modeli</h2>

      <div className="education-model-panel">
        <div className="education-model-grid">
          <article className="model-card model-card-orange">
            <div className="model-card-icon" aria-hidden="true">
              <svg viewBox="0 0 120 80" fill="none">
                <rect x="46" y="10" width="42" height="28" rx="3" fill="#b9ced9" />
                <rect x="50" y="14" width="34" height="20" rx="2" fill="#e7f1f5" />
                <path d="M58 17c6 0 11 1 13 3v12c-2-2-7-3-13-3V17Z" stroke="#ef6418" strokeWidth="2" />
                <path d="M76 17c-6 0-11 1-13 3v12c2-2 7-3 13-3V17Z" stroke="#ef6418" strokeWidth="2" />
                <path d="M16 34h26M12 42h30M18 50h24M20 58h26" stroke="#b3c8d2" strokeWidth="6" strokeLinecap="round" />
                <path d="M36 46l14 10" stroke="#ffd1b0" strokeWidth="8" strokeLinecap="round" />
                <circle cx="50" cy="59" r="5" fill="#ffd1b0" />
              </svg>
            </div>

            <div className="model-card-text">
              <div className="model-label">Kitap</div>
              <div className="model-rate">%30</div>
            </div>
          </article>

          <article className="model-card model-card-gradient">
            <div className="model-card-icon" aria-hidden="true">
              <svg viewBox="0 0 120 80" fill="none">
                <rect x="10" y="14" width="42" height="26" rx="3" fill="#b9ced9" />
                <rect x="14" y="18" width="34" height="18" rx="2" fill="#e7f1f5" />
                <circle cx="36" cy="30" r="12" stroke="#3f86c9" strokeWidth="4" />
                <path d="M45 39l10 10" stroke="#3f86c9" strokeWidth="5" strokeLinecap="round" />
                <circle cx="78" cy="30" r="12" fill="#4b3a3a" />
                <path d="M66 58c4-12 28-12 32 0" fill="#5a146d" />
                <rect x="20" y="50" width="12" height="18" rx="2" fill="#ef4c55" />
                <path d="M26 50v18" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>

            <div className="model-card-text">
              <div className="model-label">Yazılım</div>
              <div className="model-rate">%30</div>
            </div>
          </article>

          <article className="model-card model-card-purple">
            <div className="model-card-icon" aria-hidden="true">
              <svg viewBox="0 0 120 80" fill="none">
                <rect x="12" y="16" width="42" height="28" rx="3" fill="#9bb0be" />
                <rect x="16" y="20" width="34" height="20" rx="2" fill="#e6eef4" />
                <circle cx="34" cy="30" r="8" fill="#f5c7a8" />
                <path d="M28 28c2-3 10-3 12 0" stroke="#6f4b3c" strokeWidth="2" />
                <path d="M28 36c3 2 9 2 12 0" stroke="#6f4b3c" strokeWidth="2" />

                <rect x="64" y="22" width="28" height="34" rx="3" fill="#fff8f0" stroke="#ef6418" strokeWidth="3" />
                <path d="M70 30h16M70 37h12M70 44h14" stroke="#5a146d" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M78 20l8 8" stroke="#ef2b20" strokeWidth="4" strokeLinecap="round" />
                <circle cx="94" cy="18" r="5" fill="#8a8a8a" />
              </svg>
            </div>

            <div className="model-card-text">
              <div className="model-label">Eğitmen</div>
              <div className="model-rate">%40</div>
            </div>
          </article>
        </div>

        <p className="education-model-desc">
          Fixoku eğitim sistemi; <strong>kitap, yazılım ve uzman eğitmen</strong>{" "}
          desteğini bir araya getirerek öğrencilerin hızlı okuma, anlama ve
          dikkat becerilerini geliştirmeyi hedefler.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="trainer-videos-section">
  <div className="trainer-videos-container">
    <div className="trainer-videos-heading">
      <h2 className="trainer-videos-title"><span>Fixoku</span> Eğitmenleri Ne Söylüyor?</h2>
      <p className="trainer-videos-subtitle">Fixoku eğitmenleri, sistemin öğrenciler üzerindeki etkilerini ve eğitim sürecindeki deneyimlerini anlatıyor.</p>
    </div>
    <div className="trainer-videos-panel">
      <button type="button" className="trainer-slider-arrow trainer-slider-prev" onClick={goTrainerPrev} aria-label="Önceki video">‹</button>
      <div className="trainer-videos-grid">
        {trainerVisibleStories.map((story, index) => (
          <button type="button" className="trainer-video-card" key={story.title + "-" + index} onClick={() => setActiveTrainerVideo(story)}>
            <div className="trainer-video-badge">{story.badge}</div>
            <div className="trainer-video-media" style={{ backgroundImage: "url(" + story.poster + ")" }}>
              <div className="trainer-video-overlay" />
              <div className="trainer-video-play">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.2)" />
                  <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />
                  <path d="M27 21l17 11-17 11V21z" fill="white" />
                </svg>
              </div>
              <div className="trainer-video-meta">
                <div className="trainer-video-name">{story.title}</div>
                <div className="trainer-video-role">{story.role}</div>
              </div>
            </div>
          </button>
        ))}
      </div>
      <button type="button" className="trainer-slider-arrow trainer-slider-next" onClick={goTrainerNext} aria-label="Sonraki video">›</button>
    </div>
    <div className="trainer-apply-panel">
      <h3>Siz de <span>Fixoku</span> Eğitmeni Olabilirsiniz</h3>
      <p>Fixoku eğitmeni olarak kendi eğitim programınızı başlatabilir ve öğrencilerinizin gelişimine katkı sağlayabilirsiniz.</p>
      <Link to="/egitmen-ol" className="trainer-apply-btn"><span>Eğitmen Başvurusu Yap</span><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
    </div>
  </div>
  {activeTrainerVideo && (
    <div className="trainer-video-modal" onClick={() => setActiveTrainerVideo(null)}>
      <div className="trainer-video-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="trainer-video-close" onClick={() => setActiveTrainerVideo(null)} aria-label="Videoyu kapat">×</button>
        <video src={activeTrainerVideo.video} controls autoPlay playsInline className="trainer-video-player" />
      </div>
    </div>
  )}
</section>
<section className="fixoku-experience-section">
  <div className="fixoku-experience-container">
    <div className="fixoku-experience-head">
      <h2>
        <span>Fixoku Yazılımı</span> Öğrenciyi Nasıl Destekler?
      </h2>
      <p>
        Yapay zekâ destekli yazılım; öğrencinin gelişimini analiz ederek eğitim
        sürecini kişiselleştirir, ilerlemeyi anlık olarak takip ederek gelişim
        sürecini raporlar, eksik becerilerin geliştirilmesi için yönlendirmeler
        sunar ve eğitim sonrasında 1 yıl boyunca gelişimin devamını destekler.
      </p>
    </div>

    <div className="fixoku-experience-hero">
      <div className="fixoku-bg-shape fixoku-bg-shape-left"></div>
      <div className="fixoku-bg-shape fixoku-bg-shape-right"></div>

      <div className="fixoku-label label-left-top">Okuma Hızı Analizi</div>
      <div className="fixoku-label label-right-top">Dikkat Egzersizleri</div>
      <div className="fixoku-label label-left-bottom">Konsantrasyon Egzersizleri</div>
      <div className="fixoku-label label-right-bottom">Gelişim Grafikleri</div>

      <img src="/laptop.png" alt="Fixoku eğitim paneli" className="fixoku-laptop-img" />
    </div>

    <div className="fixoku-experience-cards">
      <div className="fixoku-exp-card">
        <div className="exp-card-icon ai-icon">AI</div>
        <h3>Yapay Zekâ<br />Destekli Analiz</h3>
        <p>Yazılım, öğrencinin performansını analiz ederek gelişimini raporlar.</p>
      </div>

      <div className="fixoku-exp-card">
        <div className="exp-card-icon">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M32 8l22 10-22 10L10 18 32 8Z" stroke="currentColor" strokeWidth="4" />
            <path d="M20 28v12c0 7 5 12 12 12s12-5 12-12V28" stroke="currentColor" strokeWidth="4" />
            <path d="M16 42l-6 8M48 42l6 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <h3>Kişiye Özel<br />Eğitim Programı</h3>
        <p>Sistem öğrencinin seviyesine göre egzersizleri otomatik ayarlar.</p>
      </div>

      <div className="fixoku-exp-card">
        <div className="exp-card-icon green-icon">
          <svg viewBox="0 0 64 64" fill="none">
            <path d="M10 46l13-13 11 9 18-25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43 17h9v9" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M18 52V40M32 52V34M46 52V25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <h3>Gelişim Takibi</h3>
        <p>Öğrencinin ilerlemesi grafiklerle düzenli olarak takip edilir.</p>
      </div>
    </div>

    <div className="fixoku-experience-action">
      <Link to="/fixoku-egitimi/yazilim">
        <span>Yapay Zekâ Destekli Yazılımı İnceleyin</span>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </div>

    <div className="fixoku-experience-bottom">
      <h2><span>Kimler Fixoku</span> Eğitiminden Faydalanabilir?</h2>
      <p>
        Fixoku eğitimi; okuma hızını, dikkatini, anlama becerisini ve sınav
        performansını geliştirmek isteyen öğrenciler için uygundur.
      </p>
    </div>
  </div>
</section>
<section className="benefits-faq-section">
  <div className="benefits-faq-container">

    <div className="benefits-block">
      <h2 className="benefits-title">
        Fixoku Eğitimi ile Öğrenciler Neler Kazanır?
      </h2>

      <p className="benefits-subtitle">
        Fixoku; akıcı okuma, hızlı okuma, anlama, dikkat, odaklanma ve paragraf
        becerilerini geliştiren bütüncül eğitim sistemiyle öğrencilerin akademik
        başarılarını destekler.
      </p>

      {/* 🔥 ESKİ WHEEL SİLİNDİ – SVG EKLENDİ */}
      <div className="benefits-infographic">
        <img
          src="/infografik_final.svg"
          alt="Fixoku Eğitim Kazanımları"
          className="benefits-infographic-img"
        />
      </div>
    </div>

    <div className="process-block">
      <h2 className="process-title">Fixoku Eğitim Süreci Nasıl İlerler?</h2>

      <div className="process-steps">
        <div className="process-step">
          <div className="process-pill process-pill-pink">SEVİYE TESPİTİ</div>
          <p className="process-desc">
            Öğrencinin okuma, anlama ve dikkat seviyesi ölçülür
          </p>
          <div className="process-pin process-pin-red">
            <span>01</span>
          </div>
        </div>

        <div className="process-step">
          <div className="process-pill process-pill-orange">EĞİTİM PROGRAMI</div>
          <p className="process-desc">
            Öğrencinin seviyesine uygun eğitim programı planlanır
          </p>
          <div className="process-pin process-pin-orange">
            <span>02</span>
          </div>
        </div>

        <div className="process-step">
          <div className="process-pill process-pill-cyan">EĞİTMEN TAKİBİ</div>
          <p className="process-desc">
            Uzman eğitmen eğitim vererek gelişimi takip eder.
          </p>
          <div className="process-pin process-pin-cyan">
            <span>03</span>
          </div>
        </div>

        <div className="process-step">
          <div className="process-pill process-pill-yellow">GÜNLÜK ÇALIŞMA</div>
          <p className="process-desc">
            21 günlük eğitim periyodunda düzenli egzersizler uygulanır
          </p>
          <div className="process-pin process-pin-yellow">
            <span>04</span>
          </div>
        </div>

        <div className="process-step">
          <div className="process-pill process-pill-purple">GELİŞİM ANALİZİ</div>
          <p className="process-desc">
            Sistem öğrencinin performansını ölçer ve raporlar
          </p>
          <div className="process-pin process-pin-purple">
            <span>05</span>
          </div>
        </div>
      </div>
    </div>


    <div className="education-store-block">
      <div className="education-store-heading">
        <span className="education-store-eyebrow">Fixoku Eğitim Mağazası</span>
        <h2 className="education-store-title">Premium Eğitim Kitapları ve Programları</h2>
        <p className="education-store-subtitle">
          Hızlı okuma, dikkat, odaklanma ve sınav başarısı için hazırlanan Fixoku eğitim içeriklerini keşfedin.
        </p>
      </div>

      <div className="education-store-grid">
        {educationStoreItems.map((item) => (
          <article className={`education-product-card education-product-${item.tone}`} key={item.title}>
            <div className="education-product-cover">
              <button type="button" className="education-product-fav" aria-label={`${item.title} favorilere ekle`}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 20s-7-4.4-9.2-8.4C1 8.3 2.8 5 6.2 5c2 0 3.4 1 4.2 2.1C11.2 6 12.6 5 14.6 5 18 5 20 8.3 18.2 11.6 16 15.6 12 20 12 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="education-product-kicker">{item.coverKicker}</div>
              <div className="education-product-book-icon" aria-hidden="true">
                <svg viewBox="0 0 96 96" fill="none">
                  <path d="M22 20h28c8 0 14 6 14 14v42H35c-7 0-13-6-13-13V20Z" fill="rgba(255,255,255,.82)" />
                  <path d="M64 34c0-8 6-14 14-14h6v56h-6c-8 0-14-6-14-14V34Z" fill="rgba(255,255,255,.55)" />
                  <path d="M34 36h18M34 48h18M34 60h14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  <path d="M64 28v48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <h3>{item.coverTitle}</h3>
              <p>{item.coverSub}</p>
            </div>

            <div className="education-product-body">
              <div className="education-product-stars" aria-label="5 yıldız">
                ★★★★★
              </div>
              <h3 className="education-product-title">{item.title}</h3>
              <p className="education-product-author">by {item.author}</p>
              <div className="education-product-price">{item.price}</div>

              <div className="education-product-meta">
                <span>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 5h10a4 4 0 0 1 4 4v10H9a4 4 0 0 0-4-4V5Z" stroke="currentColor" strokeWidth="2" />
                    <path d="M5 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  {item.lessons}
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 4l8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M6 10v5c0 2 3 4 6 4s6-2 6-4v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  {item.students}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="education-store-action">
        <a href="/egitimler" className="education-store-btn">
          <span>Tüm Eğitimleri Keşfet</span>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>

    <div className="faq-block">
      <h2 className="faq-title">Fixoku Hakkında Sık Sorulan Sorular</h2>

      <div className="faq-list">
        <details className="faq-item">
          <summary>
            <span className="faq-left">
              <span className="faq-arrow">➜</span>
              <span>Fixoku eğitimi kaç gün sürer?</span>
            </span>
            <span className="faq-toggle" />
          </summary>
          <div className="faq-answer">
            Eğitim programı öğrencinin seviyesine göre planlanır. Genel olarak
            21 günlük temel sistem uygulanır.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span className="faq-left">
              <span className="faq-arrow">➜</span>
              <span>Fixoku hangi yaş grupları için uygundur?</span>
            </span>
            <span className="faq-toggle" />
          </summary>
          <div className="faq-answer">
            İlkokul, ortaokul ve lise düzeyindeki öğrenciler için uygun program
            yapısı oluşturulabilir.
          </div>
        </details>

        <details className="faq-item">
          <summary>
            <span className="faq-left">
              <span className="faq-arrow">➜</span>
              <span>Eğitim nasıl yapılmaktadır?</span>
            </span>
            <span className="faq-toggle" />
          </summary>
          <div className="faq-answer">
            Eğitim online ya da yüz yüze olarak yapılabilir.
          </div>
        </details>
      </div>
    </div>

  </div>
</section>
          <Footer />
        </div>
      )}
    </AssessmentTestExperience>
  );
}

export default App;
