import { useTranslation } from "react-i18next";
import { useState } from "react";
import logo from "../assets/logo-removebg-preview.png";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: t("header.about_me"), href: "#about_me" },
    { title: t("header.services"), href: "#services" },
    { title: t("header.my_jobs"), href: "#my_jobs" },
    { title: t("header.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-600/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
        <a
          href="#hero"
          className="flex items-center transition-transform hover:scale-105"
        >
          <img
            src={logo}
            alt="Szaki Autókozmetika"
            className="h-12 sm:h-16 md:h-20 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 lg:gap-8 text-sm font-semibold text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative hover:text-cyan-400 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all hover:after:w-full"
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="pl-4 border-l border-slate-500">
            <LanguageSwitcher />
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-200 hover:text-cyan-400 transition-colors p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-slate-200 hover:bg-slate-700/50 hover:text-cyan-400 transition-colors border-b border-slate-700/30"
            >
              {link.title}
            </a>
          ))}

          <div className="px-6 py-4 border-t border-slate-700/50">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
