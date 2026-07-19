import { Link } from "react-router-dom";
import ContentCta from "../../components/content/ContentCta.jsx";
import ContentPageLayout from "../../components/content/ContentPageLayout.jsx";

function TopicCard({ card }) {
  const content = (
    <>
      <span>{card.eyebrow}</span>
      <strong>{card.heading}</strong>
      <p>{card.summary}</p>
      <small>{card.cardLabel ?? card.statusLabel ?? "İçeriği incele →"}</small>
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
  const hasSeparateArticleGrid = Boolean(hub.cards?.length && articles.length);
  const primaryCards = hasSeparateArticleGrid ? articles : (hub.cards ?? articles);
  const categoryCards = (hub.cards ?? []).map((card) => {
    const articleCount = articles.filter((article) => article.category === card.heading).length;

    return articleCount
      ? { ...card, statusLabel: `${articleCount} makale yayında` }
      : card;
  });

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
        <div className="content-section-kicker">{hasSeparateArticleGrid ? "Güncel makaleler" : "Konu rehberi"}</div>
        <h2 id={`${hub.slug ?? "topic"}-cards-title`}>
          {hasSeparateArticleGrid ? hub.articlesHeading : hub.cardsHeading}
        </h2>
        <p>{hasSeparateArticleGrid ? hub.articlesIntro : hub.cardsIntro}</p>
        <div className="content-hub-grid">
          {primaryCards.map((card) => (
            <TopicCard card={card} key={card.path ?? card.slug} />
          ))}
        </div>
      </section>

      {hasSeparateArticleGrid && (
        <section
          className="content-section content-hub-links"
          aria-labelledby={`${hub.slug ?? "topic"}-category-cards-title`}
        >
          <div className="content-section-kicker">Kategoriler</div>
          <h2 id={`${hub.slug ?? "topic"}-category-cards-title`}>{hub.cardsHeading}</h2>
          <p>{hub.cardsIntro}</p>
          <div className="content-hub-grid">
            {categoryCards.map((card) => (
              <TopicCard card={card} key={card.slug} />
            ))}
          </div>
        </section>
      )}

      <ContentCta cta={hub.cta} />
    </ContentPageLayout>
  );
}
