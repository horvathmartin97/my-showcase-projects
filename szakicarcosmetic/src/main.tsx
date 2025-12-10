import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import "../i18n";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
