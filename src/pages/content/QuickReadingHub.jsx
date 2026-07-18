import { Link } from "react-router-dom";
import ContentCta from "../../components/content/ContentCta.jsx";
import ContentPageLayout from "../../components/content/ContentPageLayout.jsx";
import { quickReadingArticles, quickReadingHub } from "../../data/quickReadingContent.js";

export default function QuickReadingHub() {
  return (
    <ContentPageLayout page={quickReadingHub}>
      {quickReadingHub.sections.map((section) => (
        <section className="content-section" id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <section className="content-section content-hub-links" aria-labelledby="hub-cards-title">
        <div className="content-section-kicker">Konu rehberi</div>
        <h2 id="hub-cards-title">{quickReadingHub.cardsHeading}</h2>
        <p>{quickReadingHub.cardsIntro}</p>
        <div className="content-hub-grid">
          {quickReadingArticles.map((article) => (
            <Link to={article.path} className="content-hub-card" key={article.path}>
              <span>{article.eyebrow}</span>
              <strong>{article.heading}</strong>
              <p>{article.summary}</p>
              <small>İçeriği incele →</small>
            </Link>
          ))}
        </div>
      </section>

      <ContentCta cta={quickReadingHub.cta} />
    </ContentPageLayout>
  );
}
