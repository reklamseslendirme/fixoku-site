import { Link } from "react-router-dom";
import ContentCta from "../../components/content/ContentCta.jsx";
import ContentPageLayout from "../../components/content/ContentPageLayout.jsx";

function TopicCard({ card }) {
  const content = (
    <>
      <span>{card.eyebrow}</span>
      <strong>{card.heading}</strong>
      <p>{card.summary}</p>
      <small>{card.statusLabel ?? "İçeriği incele →"}</small>
    </>
  );

  if (card.path) {
    return (
      <Link to={card.path} className="content-hub-card">
        {content}
      </Link>
    );
  }

  return <div className="content-hub-card content-hub-card-static">{content}</div>;
}

export default function TopicHub({ articles = [], hub }) {
  const cards = hub.cards ?? articles;

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
          {cards.map((card) => (
            <TopicCard card={card} key={card.path ?? card.slug} />
          ))}
        </div>
      </section>

      <ContentCta cta={hub.cta} />
    </ContentPageLayout>
  );
}
