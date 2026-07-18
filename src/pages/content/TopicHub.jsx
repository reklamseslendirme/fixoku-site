import { Link } from "react-router-dom";
import ContentCta from "../../components/content/ContentCta.jsx";
import ContentPageLayout from "../../components/content/ContentPageLayout.jsx";

export default function TopicHub({ articles, hub }) {
  return (
    <ContentPageLayout page={hub}>
      {hub.sections.map((section) => (
        <section className="content-section" id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul>
              {section.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section className="content-section content-hub-links" aria-labelledby={`${hub.slug ?? "topic"}-cards-title`}>
        <div className="content-section-kicker">Konu rehberi</div>
        <h2 id={`${hub.slug ?? "topic"}-cards-title`}>{hub.cardsHeading}</h2>
        <p>{hub.cardsIntro}</p>
        <div className="content-hub-grid">
          {articles.map((article) => (
            <Link to={article.path} className="content-hub-card" key={article.path}>
              <span>{article.eyebrow}</span>
              <strong>{article.heading}</strong>
              <p>{article.summary}</p>
              <small>İçeriği incele →</small>
            </Link>
          ))}
        </div>
      </section>

      <ContentCta cta={hub.cta} />
    </ContentPageLayout>
  );
}
