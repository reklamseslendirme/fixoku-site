import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import ReadingSpeedTest from "./ReadingSpeedTest";
import AttentionFocusTest from "./AttentionFocusTest";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Iletisim from "./pages/iletisim";
import Egitimler from "./pages/Egitimler";
import PanelApp from "./panel/PanelApp";


function App() {
  const location = useLocation();

  const [activeSlide, setActiveSlide] = useState(0);
  const [isReadingTestOpen, setIsReadingTestOpen] = useState(false);
  const [isAttentionTestOpen, setIsAttentionTestOpen] = useState(false);

  const [engineActiveModule, setEngineActiveModule] = useState(0);
  const [engineFeedStart, setEngineFeedStart] = useState(0);
  const [liveNumbers, setLiveNumbers] = useState({
    studentsReading: 207,
    focusStudents: 97,
    attentionTasks: 62,
    challenges: 41,
  });

  const [testCounter, setTestCounter] = useState(0);

  const [trainerStoryIndex, setTrainerStoryIndex] = useState(0);
  const [activeTrainerVideo, setActiveTrainerVideo] = useState(null);
  const [studentStoryIndex, setStudentStoryIndex] = useState(0);
  const [activeStudentVideo, setActiveStudentVideo] = useState(null);

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

  const studentStories = useMemo(
    () => [
      { title: "Ali", role: "6. Sınıf Öğrencisi", badge: "Gerçek Öğrenci Deneyimi", video: trainerStories[0].video, poster: trainerStories[0].poster },
      { title: "Ece", role: "8. Sınıf Öğrencisi", badge: "Gerçek Öğrenci Deneyimi", video: trainerStories[1].video, poster: trainerStories[1].poster },
      { title: "Mert", role: "5. Sınıf Öğrencisi", badge: "Gerçek Öğrenci Deneyimi", video: trainerStories[2].video, poster: trainerStories[2].poster },
      { title: "Ayşe Hanım", role: "Veli", badge: "Fixoku Velisi", video: trainerStories[3].video, poster: trainerStories[3].poster },
      { title: "Zeynep", role: "7. Sınıf Öğrencisi", badge: "Gerçek Öğrenci Deneyimi", video: trainerStories[4].video, poster: trainerStories[4].poster },
      { title: "Can", role: "4. Sınıf Öğrencisi", badge: "Gerçek Öğrenci Deneyimi", video: trainerStories[5].video, poster: trainerStories[5].poster },
      { title: "Merve Hanım", role: "Veli", badge: "Fixoku Velisi", video: trainerStories[6].video, poster: trainerStories[6].poster },
      { title: "Kemal", role: "8. Sınıf Öğrencisi", badge: "Gerçek Öğrenci Deneyimi", video: trainerStories[7].video, poster: trainerStories[7].poster },
    ],
    [trainerStories]
  );

  const studentVisibleStories = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => studentStories[(studentStoryIndex + i) % studentStories.length]);
  }, [studentStories, studentStoryIndex]);

  const goTrainerPrev = () => {
    setTrainerStoryIndex((prev) => prev === 0 ? trainerStories.length - 1 : prev - 1);
  };

  const goTrainerNext = () => {
    setTrainerStoryIndex((prev) => (prev + 1) % trainerStories.length);
  };

  const goStudentPrev = () => {
    setStudentStoryIndex((prev) => prev === 0 ? studentStories.length - 1 : prev - 1);
  };

  const goStudentNext = () => {
    setStudentStoryIndex((prev) => (prev + 1) % studentStories.length);
  };

  useEffect(() => {
    const trainerInterval = setInterval(() => {
      setTrainerStoryIndex((prev) => (prev + 1) % trainerStories.length);
    }, 10000);
    return () => clearInterval(trainerInterval);
  }, [trainerStories.length]);

  useEffect(() => {
  const target = 12000;
  const duration = 3000;
  const pauseBetweenLoops = 2000;
  const steps = 120;
  const stepTime = duration / steps;

  let intervalId;
  let restartTimeoutId;

  const runCounter = () => {
    let currentStep = 0;
    setTestCounter(0);

    intervalId = setInterval(() => {
      currentStep += 1;
      const progress = currentStep / steps;
      const value = Math.floor(target * progress);

      setTestCounter(value);

      if (currentStep >= steps) {
        clearInterval(intervalId);
        setTestCounter(target);

        restartTimeoutId = setTimeout(() => {
          runCounter();
        }, pauseBetweenLoops);
      }
    }, stepTime);
  };

  runCounter();

  return () => {
    clearInterval(intervalId);
    clearTimeout(restartTimeoutId);
  };
}, []);

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

  useEffect(() => {
    const target = 12000;
    const duration = 3000;
    const pauseBetweenLoops = 2000;
    const steps = 120;
    const stepTime = duration / steps;

    let intervalId;
    let restartTimeoutId;

    const runCounter = () => {
      let currentStep = 0;
      setTestCounter(0);

      intervalId = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;
        const value = Math.floor(target * progress);

        setTestCounter(value);

        if (currentStep >= steps) {
          clearInterval(intervalId);
          setTestCounter(target);
          restartTimeoutId = setTimeout(runCounter, pauseBetweenLoops);
        }
      }, stepTime);
    };

    runCounter();

    return () => {
      clearInterval(intervalId);
      clearTimeout(restartTimeoutId);
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

  if (location.pathname === "/egitimler") {
    return (
      <div className="page">
        <Header />
        <Egitimler />
        <Footer />
      </div>
    );
  }

  if (location.pathname.startsWith("/panel")) {
    return <PanelApp />;
  }

  return (
    <div className="page">
      
      <ReadingSpeedTest isOpen={isReadingTestOpen} onClose={() => setIsReadingTestOpen(false)} />
      <AttentionFocusTest isOpen={isAttentionTestOpen} onClose={() => setIsAttentionTestOpen(false)} />
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

                  <h1 className="hero-slide-title">{slide.title}</h1>

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
                    <button type="button" className="slide-btn slide-btn-orange" onClick={() => setIsReadingTestOpen(true)}>
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
                  <h1 className="hero-slide-title">{slide.title}</h1>

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

      <h1 className="engine-title-main">
        Fixoku’da <span>Eğitim Süreci</span>
        <br />
        Canlı Çalışır
      </h1>

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
        <span></span>
        <p>Fixoku Eğitim Sistemi</p>
        <span></span>
      </div>

      <h2>
        Neden <strong>Fixoku?</strong>
      </h2>
    </div>

    <div className="why-fixoku-content">
      <p>
        <strong>Fixoku;</strong> hızlı okuma, anlama, dikkat ve odaklanma
        becerilerini geliştirmeye yönelik <b>kapsamlı bir eğitim sistemidir.</b>
        Program, öğrencilerin okuma hızını artırmayı, metni daha doğru
        anlamalarını sağlamayı ve <b>dikkat becerilerini</b> güçlendirmeyi hedefler.
      </p>

      <p>
        Fixoku sistemi; <b>yapay zekâ destekli</b> yazılımı ve özel olarak
        geliştirilmiş egzersizleri ile öğrencilerin gelişimini ölçebilen
        yenilikçi bir eğitim modelidir. Sistem içerisindeki 126 farklı egzersiz,
        öğrencilerin performansını analiz ederek gelişim sürecini takip eder.
        Program sonunda öğrenciler <b>9 farklı beceri alanında</b> değerlendirilir.
      </p>
    </div>

    <div className="why-fixoku-work">
      <div className="why-video-box">
        <svg viewBox="0 0 180 120" fill="none">
          <rect x="34" y="28" width="112" height="64" rx="5" stroke="currentColor" strokeWidth="7" />
          <path d="M78 45L110 60L78 75V45Z" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" />
          <path d="M34 42H49M131 42H146M34 60H49M131 60H146M34 78H49M131 78H146" stroke="currentColor" strokeWidth="6" />
        </svg>
      </div>

      <div className="why-work-content">
        <h3>
          <strong>Fixoku</strong> Sistemi Nasıl Çalışır?
        </h3>

        <div className="why-feature-grid">
          <div className="why-feature-card">
            <div className="why-feature-svg">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M10 35V23M20 35V15M30 35V9M38 35V19" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <path d="M8 38H40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <strong>Yapay Zekâ Destekli</strong>
            <span>Ölçüm Sistemi</span>
          </div>

          <div className="why-feature-card">
            <div className="why-feature-svg">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M18 8C12 8 8 12 8 18c0 3 1 5 3 7-3 2-5 5-5 9 0 6 5 10 11 10h14c6 0 11-4 11-10 0-4-2-7-5-9 2-2 3-4 3-7 0-6-4-10-10-10-3 0-5 1-6 3-1-2-3-3-6-3Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
                <path d="M24 11V40M15 23c4-2 8-1 9 3M33 23c-4-2-8-1-9 3" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
            <strong>126</strong>
            <span>Özel Gelişim Egzersizi</span>
          </div>

          <div className="why-feature-card">
            <div className="why-feature-svg">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M10 34L20 24L27 31L39 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M30 15H39V24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <strong>9 Kategoride</strong>
            <span>Gelişim Analizi</span>
          </div>

          <div className="why-feature-card">
            <div className="why-feature-svg">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M10 12H22C25 12 27 14 27 17V38C27 35 25 33 22 33H10V12Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
                <path d="M38 12H32C29 12 27 14 27 17V38C27 35 29 33 32 33H38V12Z" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
                <path d="M14 19H21M14 25H21M32 19H35M32 25H35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <strong>Kitap + Yazılım</strong>
            <span>Destekli Eğitim</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="free-tests-section">
  <div className="free-tests-bg" />

  <div className="free-tests-container">
    <h2 className="free-tests-title">
      Çocuğunuzun Okuma Hızını ve
      <br />
      Dikkat Seviyesini <span>2 Dakikada Ücretsiz</span>
      <br />
      Öğrenin
    </h2>

    <div className="free-tests-cards">
      <div className="free-test-card free-test-card-purple">
        <div className="free-test-card-head">
          Ücretsiz Dikkat Testi
        </div>

        <div className="free-test-card-body">
          <div className="free-test-pattern free-test-pattern-focus" />

          <div className="free-test-icon free-test-icon-purple" aria-hidden="true">
            <svg viewBox="0 0 128 128" fill="none">
              <path
                d="M49 22C38 22 29 30 29 41c0 5 2 10 5 13-6 2-10 8-10 15 0 10 8 18 18 18h5c3 10 11 16 21 16 12 0 21-9 22-21 8-1 14-8 14-17 0-8-5-14-12-17 1-2 2-5 2-8 0-10-8-18-18-18-4 0-7 1-10 3-4-2-10-3-15-3Z"
                fill="#f4a9dc"
                stroke="#5a1480"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M52 34c-7 3-12 9-12 17 0 6 3 11 7 15"
                stroke="#5a1480"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M65 30c-4 3-7 8-7 13 0 5 2 9 5 12"
                stroke="#5a1480"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M79 34c6 3 10 9 10 16 0 6-2 10-6 14"
                stroke="#5a1480"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M46 61c6-1 12 1 16 5 4-4 10-6 16-5"
                stroke="#5a1480"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M63 42v31"
                stroke="#5a1480"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M64 103c-2-9-8-14-17-16"
                stroke="#5a1480"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="98" cy="33" r="4" fill="#ff9a1f" />
              <circle cx="103" cy="45" r="3" fill="#ff9a1f" />
              <circle cx="92" cy="44" r="2.5" fill="#ff9a1f" />
            </svg>
          </div>

          <p className="free-test-desc">
            Çocuğunuzun dikkat ve odaklanma seviyesini 2 dakikalık test ile ölçün
            ve gelişim alanlarını öğrenin.
          </p>

          <button type="button" className="free-test-btn free-test-btn-purple" onClick={() => setIsAttentionTestOpen(true)}>
            <span className="free-test-btn-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 7L10 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Çocuğumun Dikkatini Ölç</span>
          </button>
        </div>
      </div>

      <div className="free-test-card free-test-card-orange">
        <div className="free-test-card-head">
          Ücretsiz Okuma ve Anlama Testi
        </div>

        <div className="free-test-card-body">
          <div className="free-test-pattern free-test-pattern-reading" />

          <div className="free-test-icon free-test-icon-orange" aria-hidden="true">
            <svg viewBox="0 0 128 128" fill="none">
              <rect
                x="34"
                y="24"
                width="42"
                height="60"
                rx="6"
                fill="#ffffff"
                stroke="#43115d"
                strokeWidth="5"
              />
              <path
                d="M44 40h22M44 49h22M44 58h18M44 67h20"
                stroke="#8d73a2"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M83 35l12 12"
                stroke="#43115d"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M66 64l23-23c4-4 11-4 15 0s4 11 0 15L81 79l-17 4 2-19Z"
                fill="#ffb11a"
                stroke="#ef6418"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M86 44l10 10"
                stroke="#43115d"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="28" cy="92" r="8" fill="#ef6418" opacity="0.12" />
              <circle cx="102" cy="91" r="6" fill="#ef6418" opacity="0.18" />
            </svg>
          </div>

          <p className="free-test-desc">
            Çocuğunuzun okuma hızını, anlama oranını ve paragraf anlama
            seviyesini hemen ölçün.
          </p>

          <button type="button" className="free-test-btn free-test-btn-orange" onClick={() => setIsReadingTestOpen(true)}>
            <span className="free-test-btn-check" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 7L10 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Çocuğumun Okuma Hızını Ölç</span>
          </button>
        </div>
      </div>
    </div>

    <div className="trusted-users-box" aria-label="Fixoku kullanıcı güven göstergesi">
      <div className="trusted-avatar-stack" aria-hidden="true">
        {[
          "/egitici1.jpeg",
          "/egitici2.jpeg",
          "/egitici3.jpeg",
          "/egitici4.jpeg",
          "/egitici1.jpeg",
        ].map((avatar, index) => (
          <span className={`trusted-avatar trusted-avatar-${index + 1}`} key={avatar + index}>
            <img src={avatar} alt="" loading="lazy" />
          </span>
        ))}
      </div>

      <div className="trusted-users-content">
        <div className="trusted-stars" aria-label="5 yıldız değerlendirme">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg key={index} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.4l2.9 6 6.6.9-4.8 4.7 1.1 6.6L12 17.5l-5.8 3.1 1.1-6.6-4.8-4.7 6.6-.9L12 2.4Z" />
            </svg>
          ))}
        </div>

        <p className="trusted-users-text">
          <strong className="trusted-counter-fixed">
            {testCounter.toLocaleString("tr-TR")}+
          </strong>
          <span>FixOku Öğrencisi Bu testleri Çözdü</span>
        </p>
      </div>
    </div>
  </div>
</section>
<section className="stories-section">
  <div className="stories-container">
    <div className="stories-heading">
      <h2 className="stories-title">
        <span>Fixoku</span> Eğitimi Alan Öğrenciler ve Veliler
        <br />
        Ne Söylüyor?
      </h2>

      <p className="stories-subtitle">
        Fixoku hızlı okuma ve dikkat geliştirme eğitimi alan öğrenciler ve veliler,
        eğitim sürecindeki deneyimlerini paylaşıyor.
      </p>
    </div>

    <div className="stories-panel">
      <button type="button" className="story-slider-arrow story-slider-prev" onClick={goStudentPrev} aria-label="Önceki öğrenci videosu">‹</button>

      <div className="stories-grid">
        {studentVisibleStories.map((story, index) => (
          <button type="button" className="story-card" key={story.title + "-" + index} onClick={() => setActiveStudentVideo(story)}>
            <div className={`story-badge ${story.role === "Veli" ? "story-badge-parent" : ""}`}>{story.badge}</div>
            <div className="story-media" style={{ backgroundImage: "url(" + story.poster + ")" }}>
              <div className="story-overlay" />
              <div className="story-play">
                <svg viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="30" fill="rgba(255,255,255,0.18)" />
                  <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
                  <path d="M27 21l16 11-16 11V21z" fill="white" />
                </svg>
              </div>

              <div className="story-meta">
                <div className="story-name">{story.title}</div>
                <div className="story-role">{story.role}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button type="button" className="story-slider-arrow story-slider-next" onClick={goStudentNext} aria-label="Sonraki öğrenci videosu">›</button>

<div className="stories-footer">
  
  <div className="stories-footer-left">
    <div className="stories-coin" aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" fill="url(#storiesCoinGrad)" />
        <path
          d="M32 18l4.4 8.9 9.8 1.4-7.1 6.9 1.7 9.8L32 40.4l-8.8 4.6 1.7-9.8-7.1-6.9 9.8-1.4L32 18Z"
          fill="#8f5a00"
        />
      </svg>
    </div>

    <p>
      <strong>3.000+</strong> öğrenci eğitim aldı
    </p>
  </div>

  <a href="#" className="stories-cta">
    <span>Siz de Fixoku Eğitimi Hakkında Bilgi Alın</span>

    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>

</div>
    </div>
  </div>

  {activeStudentVideo && (
    <div className="trainer-video-modal" onClick={() => setActiveStudentVideo(null)}>
      <div className="trainer-video-modal-inner" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="trainer-video-close" onClick={() => setActiveStudentVideo(null)} aria-label="Videoyu kapat">×</button>
        <video src={activeStudentVideo.video} controls autoPlay playsInline className="trainer-video-player" />
      </div>
    </div>
  )}
</section>
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
            Fixoku Eğitim Kitabı
          </div>

          <div className="how-card-visual how-card-visual-book">
            <div className="how-card-clouds" />

            <div className="how-card-illustration" aria-hidden="true">
              <svg viewBox="0 0 220 160" fill="none">
                <g>
                  <path d="M48 118l50-28 42 24-48 29-44-25Z" fill="#d7d0e4" />
                  <path d="M70 46l36-21 36 21-36 22-36-22Z" fill="#4f5d73" />
                  <path d="M70 46v42l36 22V68L70 46Z" fill="#66758a" />
                  <path d="M142 46v42l-36 22V68l36-22Z" fill="#3d4b5f" />

                  <path d="M96 31l12-7 20 12-12 7-20-12Z" fill="#f39a2e" />
                  <path d="M94 30l3 46 4 2 4-2 3-46h-14Z" fill="#f39a2e" />
                  <path d="M98 78h8" stroke="#c96f00" strokeWidth="2" />

                  <path d="M58 108l28-16 28 16-28 17-28-17Z" fill="#f0f0f5" />
                  <path d="M58 108v12l28 16v-11l-28-17Z" fill="#d9dbe7" />
                  <path d="M114 108v12l-28 16v-11l28-17Z" fill="#c8cbdb" />
                  <path d="M82 95h8" stroke="#ef6418" strokeWidth="3" strokeLinecap="round" />

                  <path d="M106 84l30-18 24 14-30 19-24-15Z" fill="#ea8a32" />
                  <path d="M106 84v34l24 15V99l-24-15Z" fill="#d87d2b" />
                  <path d="M160 80v34l-30 19V99l30-19Z" fill="#ef9b4a" />

                  <path d="M132 74l20-12 20 12-20 12-20-12Z" fill="#f3f5fb" />
                  <path d="M132 74v30l20 12V86l-20-12Z" fill="#dce3f1" />
                  <path d="M172 74v30l-20 12V86l20-12Z" fill="#c7d1e3" />
                  <path d="M148 62h8" stroke="#4aa3df" strokeWidth="3" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          <div className="how-card-body">
            <div className="how-feature">
              <span className="how-feature-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                  <path
                    d="M7 12.5l3.2 3.2L17.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Hızlı Okuma Teknikleri</span>
            </div>

            <div className="how-feature">
              <span className="how-feature-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                  <path
                    d="M7 12.5l3.2 3.2L17.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Dikkat Odaklanma Teknikleri</span>
            </div>
          </div>
        </article>

        <article className="how-card">
          <div className="how-card-head how-card-head-gradient">
            Yapay Zeka Destekli Yazılım
          </div>

          <div className="how-card-visual how-card-visual-software">
            <div className="how-card-clouds" />

            <div className="how-card-illustration" aria-hidden="true">
              <svg viewBox="0 0 220 160" fill="none">
                <g>
                  <path d="M52 110l45-27 34 20-45 28-34-21Z" fill="#d9d0e6" />
                  <path d="M91 44l54 31v44l-54-31V44Z" fill="#39485f" />
                  <path d="M145 75l16-9v45l-16 8V75Z" fill="#242f40" />
                  <path d="M98 53l40 23v32L98 85V53Z" fill="#ff6a00" />
                  <path d="M107 62h10v18h-10z" fill="#fff3d7" />
                  <path d="M120 69h10v31h-10z" fill="#ffd24d" />
                  <path d="M103 86l33 20" stroke="#243041" strokeWidth="3" />

                  <path d="M122 125l27-16 31 18-28 17-30-19Z" fill="#3b4254" />
                  <path d="M122 125v10l30 19v-10l-30-19Z" fill="#212839" />
                  <path d="M180 127v9l-28 18v-10l28-17Z" fill="#525d74" />
                  <path d="M136 116l13-8 31 18-13 8-31-18Z" fill="#59657e" />

                  <path d="M163 54c8 0 15 5 17 13-2 2-5 5-9 7-7 4-15 4-22 0 2-12 6-20 14-20Z" fill="#ffd8bf" />
                  <path d="M160 72l21 12" stroke="#ffcf9e" strokeWidth="10" strokeLinecap="round" />
                  <circle cx="176" cy="60" r="4" fill="#ffb65c" />
                </g>
              </svg>
            </div>
          </div>

          <div className="how-card-body">
            <div className="how-feature">
              <span className="how-feature-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                  <path
                    d="M7 12.5l3.2 3.2L17.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>9 Farklı Beceri Alanında</span>
            </div>

            <div className="how-feature">
              <span className="how-feature-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                  <path
                    d="M7 12.5l3.2 3.2L17.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>126 Egzersizi Analiz Eder</span>
            </div>
          </div>
        </article>

        <article className="how-card">
          <div className="how-card-head how-card-head-purple">
            Uzman Eğitmen Desteği
          </div>

          <div className="how-card-visual how-card-visual-mentor">
            <div className="how-card-clouds" />

            <div className="how-card-illustration" aria-hidden="true">
              <svg viewBox="0 0 220 160" fill="none">
                <g>
                  <path d="M126 44l18-10 18 10-18 10-18-10Z" fill="#55b0e8" />
                  <path d="M126 44v30l18 10V54l-18-10Z" fill="#3f8fc8" />
                  <path d="M162 44v30l-18 10V54l18-10Z" fill="#78c1ef" />

                  <circle cx="176" cy="38" r="14" fill="#7ad15e" />
                  <path d="M176 24v28M162 38h28" stroke="#2d7d45" strokeWidth="2" opacity=".55" />

                  <path d="M44 102l32-18 24 14-33 19-23-15Z" fill="#ef4f7f" />
                  <path d="M44 102v20l23 15v-20l-23-15Z" fill="#cf3f6d" />
                  <path d="M100 98v19l-33 20v-20l33-19Z" fill="#ff7197" />

                  <path d="M58 86l30-17 24 14-31 18-23-15Z" fill="#ffcb39" />
                  <path d="M58 86v16l23 15v-16l-23-15Z" fill="#e2ac15" />
                  <path d="M112 83v18l-31 16v-16l31-18Z" fill="#ffd85b" />

                  <path d="M70 72l28-16 22 13-28 16-22-13Z" fill="#7e59d9" />
                  <path d="M70 72v14l22 14V85L70 72Z" fill="#6846c3" />
                  <path d="M120 69v16l-28 15V85l28-16Z" fill="#8d6de3" />

                  <path d="M98 108l37-21 38 22-38 22-37-23Z" fill="#f4f4f7" />
                  <path d="M98 108v18l37 23v-18l-37-23Z" fill="#dfe3ee" />
                  <path d="M173 109v17l-38 23v-18l38-22Z" fill="#cfd5e3" />

                  <circle cx="84" cy="60" r="8" fill="#ffd2b8" />
                  <path d="M84 68v11M79 74h10" stroke="#5a3f3a" strokeWidth="3" strokeLinecap="round" />
                  <path d="M80 53h8" stroke="#414b5a" strokeWidth="4" strokeLinecap="round" />

                  <circle cx="150" cy="104" r="8" fill="#ffd2b8" />
                  <path d="M150 112v10M145 118h10" stroke="#555" strokeWidth="3" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          <div className="how-card-body">
            <div className="how-feature">
              <span className="how-feature-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                  <path
                    d="M7 12.5l3.2 3.2L17.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Uzman Eğitmenler Eşliğinde</span>
            </div>

            <div className="how-feature">
              <span className="how-feature-check" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.4" />
                  <path
                    d="M7 12.5l3.2 3.2L17.5 8.5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Birebir Takip Edilir</span>
            </div>
          </div>
        </article>
      </div>

      <div className="how-it-works-bottom-text">
        21 gün sonunda öğrencilerde ortalama <strong>2 kat okuma hız artışı</strong>{" "}
        görülmektedir.
      </div>
    </div>
  </div>
</section>
<section className="progress-model-section">
  <div className="progress-model-container">
    <div className="progress-hero">
      <h2 className="progress-title">Gelişiminizi Anlık Takip Edin</h2>

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
      <a href="#" className="trainer-apply-btn"><span>Eğitmen Başvurusu Yap</span><svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
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
        <span>Fixoku</span> Eğitim Deneyimi
      </h2>
      <p>
        Fixoku yazılımı, kitap çalışmaları ve uzman eğitmen desteği ile
        öğrenciler için özel bir öğrenme deneyimi sunar.
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
        <h3>Yapay Zeka<br />Destekli Analiz</h3>
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
        Fixoku hızlı okuma, anlama, dikkat ve odaklanma eğitimi öğrencilerin
        akademik başarısını artırmaya yardımcı olur.
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
            Fixoku yazılımı öğrenci için özel bir eğitim programı oluşturur
          </p>
          <div className="process-pin process-pin-orange">
            <span>02</span>
          </div>
        </div>

        <div className="process-step">
          <div className="process-pill process-pill-yellow">GÜNLÜK ÇALIŞMA</div>
          <p className="process-desc">
            Öğrenci günlük ortalama 30 dakika egzersiz yapar
          </p>
          <div className="process-pin process-pin-yellow">
            <span>03</span>
          </div>
        </div>

        <div className="process-step">
          <div className="process-pill process-pill-cyan">EĞİTMEN TAKİBİ</div>
          <p className="process-desc">
            Uzman eğitmenler öğrencinin gelişimini takip eder
          </p>
          <div className="process-pin process-pin-cyan">
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
              <span>Eğitim online mi yapılmaktadır?</span>
            </span>
            <span className="faq-toggle" />
          </summary>
          <div className="faq-answer">
            Eğitim modeli kitap, yazılım ve uzman eğitmen desteğini bir arada
            sunar. Süreç online ve takip edilebilir şekilde ilerler.
          </div>
        </details>
      </div>
    </div>

  </div>
</section>
      <Footer />

    </div>
  );
}

export default App;