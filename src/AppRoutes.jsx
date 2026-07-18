import { Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import SeoRouteManager from "./components/seo/Seo.jsx";
import {
  attentionFocusArticles,
  attentionFocusHub,
} from "./data/attentionFocusContent.js";
import { contentCatalogByPath } from "./data/contentCatalog.js";
import { quickReadingArticles } from "./data/quickReadingContent.js";
import Egitimler from "./pages/Egitimler.jsx";
import Hakkimizda from "./pages/Hakkimizda.jsx";
import NotFound from "./pages/NotFound.jsx";
import QuickReadingArticle from "./pages/content/QuickReadingArticle.jsx";
import QuickReadingHub from "./pages/content/QuickReadingHub.jsx";
import TopicArticle from "./pages/content/TopicArticle.jsx";
import TopicHub from "./pages/content/TopicHub.jsx";
import Iletisim from "./pages/iletisim.jsx";
import PanelApp from "./panel/PanelApp";

export default function AppRoutes() {
  return (
    <>
      <SeoRouteManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/egitimler" element={<Egitimler />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
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
        <Route path="/panel/*" element={<PanelApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
