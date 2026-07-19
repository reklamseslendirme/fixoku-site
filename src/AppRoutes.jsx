import { Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import SeoRouteManager from "./components/seo/Seo.jsx";
import {
  attentionFocusArticles,
  attentionFocusHub,
} from "./data/attentionFocusContent.js";
import { contentCatalogByPath } from "./data/contentCatalog.js";
import { corporateArticles, corporateHub } from "./data/corporateContent.js";
import {
  fixokuEducationArticles,
  fixokuEducationHub,
} from "./data/fixokuEducationContent.js";
import { knowledgeCenterHub } from "./data/knowledgeCenterContent.js";
import { legalPages } from "./data/legalContent.js";
import { blogArticles } from "./data/blogContent.js";
import { quickReadingArticles } from "./data/quickReadingContent.js";
import { trainingArticles, trainingHub } from "./data/trainingContent.js";
import NotFound from "./pages/NotFound.jsx";
import QuickReadingArticle from "./pages/content/QuickReadingArticle.jsx";
import QuickReadingHub from "./pages/content/QuickReadingHub.jsx";
import TopicArticle from "./pages/content/TopicArticle.jsx";
import TopicHub from "./pages/content/TopicHub.jsx";
import Iletisim from "./pages/iletisim.jsx";
import LegalPage from "./pages/LegalPage.jsx";
import PanelApp from "./panel/PanelApp";

export default function AppRoutes() {
  return (
    <>
      <SeoRouteManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/hizli-okuma" element={<QuickReadingHub />} />
        {quickReadingArticles.map((article) => (
          <Route
            key={article.path}
            path={article.path}
            element={<QuickReadingArticle article={article} />}
          />
        ))}
        <Route
          path={attentionFocusHub.path}
          element={<TopicHub articles={attentionFocusArticles} hub={attentionFocusHub} />}
        />
        {attentionFocusArticles.map((article) => (
          <Route
            key={article.path}
            path={article.path}
            element={<TopicArticle article={article} contentByPath={contentCatalogByPath} />}
          />
        ))}
        <Route
          path={fixokuEducationHub.path}
          element={<TopicHub articles={fixokuEducationArticles} hub={fixokuEducationHub} />}
        />
        {fixokuEducationArticles.map((article) => (
          <Route
            key={article.path}
            path={article.path}
            element={<TopicArticle article={article} contentByPath={contentCatalogByPath} />}
          />
        ))}
        <Route
          path={knowledgeCenterHub.path}
          element={<TopicHub articles={blogArticles} hub={knowledgeCenterHub} />}
        />
        {blogArticles.map((article) => (
          <Route
            key={article.path}
            path={article.path}
            element={<TopicArticle article={article} contentByPath={contentCatalogByPath} />}
          />
        ))}
        <Route
          path={trainingHub.path}
          element={<TopicHub articles={trainingArticles} hub={trainingHub} />}
        />
        {trainingArticles.map((article) => (
          <Route
            key={article.path}
            path={article.path}
            element={<TopicArticle article={article} contentByPath={contentCatalogByPath} />}
          />
        ))}
        <Route
          path={corporateHub.path}
          element={<TopicHub articles={corporateArticles} hub={corporateHub} />}
        />
        {corporateArticles.map((article) => (
          <Route
            key={article.path}
            path={article.path}
            element={<TopicArticle article={article} contentByPath={contentCatalogByPath} />}
          />
        ))}
        {legalPages.map((page) => (
          <Route key={page.path} path={page.path} element={<LegalPage page={page} />} />
        ))}
        <Route path="/panel/*" element={<PanelApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
