import { Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import SeoRouteManager from "./components/seo/Seo.jsx";
import { quickReadingArticles } from "./data/quickReadingContent.js";
import Egitimler from "./pages/Egitimler.jsx";
import Hakkimizda from "./pages/Hakkimizda.jsx";
import NotFound from "./pages/NotFound.jsx";
import QuickReadingArticle from "./pages/content/QuickReadingArticle.jsx";
import QuickReadingHub from "./pages/content/QuickReadingHub.jsx";
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
        <Route path="/panel/*" element={<PanelApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
