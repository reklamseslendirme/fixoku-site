import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  formatSocialProofCount,
  TRAINED_STUDENT_COUNT,
} from "../data/socialProof.js";

const studentStories = [
  {
    title: "Ali",
    role: "6. Sınıf Öğrencisi",
    badge: "Gerçek Öğrenci Deneyimi",
    video: "/dynavit.mp4",
    poster: "/egitici1.jpeg",
  },
  {
    title: "Ece",
    role: "8. Sınıf Öğrencisi",
    badge: "Gerçek Öğrenci Deneyimi",
    video: "/dynavit.mp4",
    poster: "/egitici2.jpeg",
  },
  {
    title: "Mert",
    role: "5. Sınıf Öğrencisi",
    badge: "Gerçek Öğrenci Deneyimi",
    video: "/dynavit.mp4",
    poster: "/egitici3.jpeg",
  },
  {
    title: "Ayşe Hanım",
    role: "Veli",
    badge: "Fixoku Velisi",
    video: "/dynavit.mp4",
    poster: "/egitici4.jpeg",
  },
  {
    title: "Zeynep",
    role: "7. Sınıf Öğrencisi",
    badge: "Gerçek Öğrenci Deneyimi",
    video: "/dynavit.mp4",
    poster: "/egitici1.jpeg",
  },
  {
    title: "Can",
    role: "4. Sınıf Öğrencisi",
    badge: "Gerçek Öğrenci Deneyimi",
    video: "/dynavit.mp4",
    poster: "/egitici2.jpeg",
  },
  {
    title: "Merve Hanım",
    role: "Veli",
    badge: "Fixoku Velisi",
    video: "/dynavit.mp4",
    poster: "/egitici3.jpeg",
  },
  {
    title: "Kemal",
    role: "8. Sınıf Öğrencisi",
    badge: "Gerçek Öğrenci Deneyimi",
    video: "/dynavit.mp4",
    poster: "/egitici4.jpeg",
  },
];

export default function StudentStoriesSection({ className = "" }) {
  const [storyIndex, setStoryIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const visibleStories = useMemo(
    () => Array.from(
      { length: 4 },
      (_, index) => studentStories[(storyIndex + index) % studentStories.length],
    ),
    [storyIndex],
  );

  const goPrevious = () => {
    setStoryIndex((previous) => (
      previous === 0 ? studentStories.length - 1 : previous - 1
    ));
  };

  const goNext = () => {
    setStoryIndex((previous) => (previous + 1) % studentStories.length);
  };

  return (
    <section className={`stories-section ${className}`.trim()}>
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
          <button
            type="button"
            className="story-slider-arrow story-slider-prev"
            onClick={goPrevious}
            aria-label="Önceki öğrenci videosu"
          >
            ‹
          </button>

          <div className="stories-grid">
            {visibleStories.map((story, index) => (
              <button
                type="button"
                className="story-card"
                key={`${story.title}-${index}`}
                onClick={() => setActiveVideo(story)}
              >
                <div className={`story-badge ${story.role === "Veli" ? "story-badge-parent" : ""}`}>
                  {story.badge}
                </div>
                <div className="story-media" style={{ backgroundImage: `url(${story.poster})` }}>
                  <div className="story-overlay" />
                  <div className="story-play">
                    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
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

          <button
            type="button"
            className="story-slider-arrow story-slider-next"
            onClick={goNext}
            aria-label="Sonraki öğrenci videosu"
          >
            ›
          </button>

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
                <strong>{formatSocialProofCount(TRAINED_STUDENT_COUNT)}</strong> öğrenci eğitim aldı
              </p>
            </div>

            <Link to="/iletisim" className="stories-cta">
              <span>Siz de Fixoku Eğitimi Hakkında Bilgi Alın</span>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div className="trainer-video-modal" onClick={() => setActiveVideo(null)}>
          <div className="trainer-video-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="trainer-video-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Videoyu kapat"
            >
              ×
            </button>
            <video
              src={activeVideo.video}
              controls
              autoPlay
              playsInline
              className="trainer-video-player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
