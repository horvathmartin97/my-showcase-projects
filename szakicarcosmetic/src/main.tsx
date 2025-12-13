import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import "../i18n";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main className="">
      <AboutMe />
      <Services />
    </main>
  </StrictMode>
);
