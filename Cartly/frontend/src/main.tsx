import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegsiterPage from "./pages/registerPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegsiterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
