import { useTranslation } from "react-i18next";
import logo from "../assets/generated-image.png";

export default function Header() {
  const { t } = useTranslation();

  const navLinks = [
    { title: t("header.about_me"), href: "#about_me" },
    { title: t("header.services"), href: "#services" },
    { title: t("header.my_jobs"), href: "#my_jobs" },
    { title: t("header.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur border-b border-slate-700">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Auto detailing logo"
            className="h-14 w-auto drop-shadow-md"
          />
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-400 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
