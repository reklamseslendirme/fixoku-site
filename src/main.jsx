import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Iletisim from "./pages/iletisim.jsx";
import Hakkimizda from "./pages/Hakkimizda.jsx";
import PanelApp from "./panel/PanelApp";
import Egitimler from "./pages/Egitimler.jsx"; // 👈 EKLENDİ

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ANA SAYFA */}
        <Route path="/" element={<App />} />

        {/* 👇 BURAYI EKLEDİK */}
        <Route path="/egitimler" element={<Egitimler />} />

        {/* DİĞER SAYFALAR */}
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />

        {/* PANEL */}
        <Route path="/panel/*" element={<PanelApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);