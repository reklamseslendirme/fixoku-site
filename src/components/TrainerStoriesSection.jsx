import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { trainerStories } from "../data/trainerStories.js";

export default function TrainerStoriesSection({
  className = "",
  subtitle = "Fixoku eğitmenleri, sistemin öğrenciler üzerindeki etkilerini ve eğitim sürecindeki deneyimlerini anlatıyor.",
}) {
  const [storyIndex, setStoryIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);

  const visibleStories = useMemo(
    () => Array.from(
      { length: 4 },
      (_, index) => trainerStories[(storyIndex + index) % trainerStories.length],
    ),
    [storyIndex],
  );

  const goPrevious = () => {
    setStoryIndex((previous) => (
      previous === 0 ? trainerStories.length - 1 : previous - 1
    ));
  };

  const goNext = () => {
    setStoryIndex((previous) => (previous + 1) % trainerStories.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStoryIndex((previous) => (previous + 1) % trainerStories.length);
    }, 10000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className={`trainer-videos-section ${className}`.trim()}>
      <div className="trainer-videos-container">
        <div className="trainer-videos-heading">
          <h2 className="trainer-videos-title"><span>Fixoku</span> Eğitmenleri Ne Söylüyor?</h2>
          <p className="trainer-videos-subtitle">{subtitle}</p>
        </div>
        <div className="trainer-videos-panel">
          <button type="button" className="trainer-slider-arrow trainer-slider-prev" onClick={goPrevious} aria-label="Önceki video">‹</button>
          <div className="trainer-videos-grid">
            {visibleStories.map((story) => (
              <button type="button" className="trainer-video-card" key={story.id} onClick={() => setActiveVideo(story)}>
                <div className="trainer-video-badge">{story.badge}</div>
                <div className="trainer-video-media" style={{ backgroundImage: `url(${story.poster})` }}>
                  <div className="trainer-video-overlay" />
                  <div className="trainer-video-play">
                    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
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
          <button type="button" className="trainer-slider-arrow trainer-slider-next" onClick={goNext} aria-label="Sonraki video">›</button>
        </div>
        <div className="trainer-apply-panel">
          <h3>Siz de <span>Fixoku</span> Eğitmeni Olabilirsiniz</h3>
          <p>Fixoku eğitmeni olarak kendi eğitim programınızı başlatabilir ve öğrencilerinizin gelişimine katkı sağlayabilirsiniz.</p>
          <Link to="/hizli-okuma-egitmeni-ol" className="trainer-apply-btn"><span>Eğitmen Başvurusu Yap</span><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
      {activeVideo && (
        <div className="trainer-video-modal" onClick={() => setActiveVideo(null)}>
          <div className="trainer-video-modal-inner" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="trainer-video-close" onClick={() => setActiveVideo(null)} aria-label="Videoyu kapat">×</button>
            <video src={activeVideo.video} controls autoPlay playsInline className="trainer-video-player" />
          </div>
        </div>
      )}
    </section>
  );
}
