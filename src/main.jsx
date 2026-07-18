import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import "./content.css";
import App from "./App.jsx";
import Iletisim from "./pages/iletisim.jsx";
import Hakkimizda from "./pages/Hakkimizda.jsx";
import PanelApp from "./panel/PanelApp";
import Egitimler from "./pages/Egitimler.jsx";
import SeoRouteManager from "./components/seo/Seo.jsx";
import { quickReadingArticles } from "./data/quickReadingContent.js";
import QuickReadingHub from "./pages/content/QuickReadingHub.jsx";
import QuickReadingArticle from "./pages/content/QuickReadingArticle.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
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
    </BrowserRouter>
  </StrictMode>
);
