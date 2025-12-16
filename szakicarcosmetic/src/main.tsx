import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import "../i18n";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import MyJobs from "./components/MyJobs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main className="overflow-x-hidden">
      <AboutMe />
      <Services />
      <MyJobs />
      <Contact />
    </main>
    <Footer />
  </StrictMode>
);
