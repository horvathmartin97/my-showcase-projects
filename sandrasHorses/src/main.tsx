import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <AboutMe />
    </main>
  </StrictMode>
);
