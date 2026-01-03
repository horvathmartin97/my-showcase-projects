import { useState } from "react";
import logo from "../assets/horse.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-amber-50 to-orange-50 shadow-md border-b border-amber-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Lovas Oktatás Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-amber-900">
                Lovas Akadémia
              </h1>
              <p className="text-xs md:text-sm text-amber-700">
                Professzionális lovaglás oktatás
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="hidden md:block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-md"
          >
            Időpontot kérek
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-amber-900 focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
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

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a
              href="#about"
              className="text-amber-900 font-semibold hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rólam
            </a>
            <a
              href="#services"
              className="text-amber-900 font-semibold hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Szolgáltatások
            </a>
            <a
              href="#gallery"
              className="text-amber-900 font-semibold hover:text-amber-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galéria
            </a>
            <a
              href="#contact"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Időpontot kérek
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
