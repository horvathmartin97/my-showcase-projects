import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <AboutMe />
      <Services />
      <Contact />
    </main>
    <Footer />
  </StrictMode>
);
