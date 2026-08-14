import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

const languages = [
  { code: "hu", label: "HU" },
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { scrollY } = useScroll();

  const currentLanguage = i18n.language.split("-")[0];

  const navLinks = [
    { name: t("header.home"), path: "/" },
    { name: t("header.models"), path: "/modellek" },
    { name: t("header.gallery"), path: "/galeria" },
    { name: t("header.about"), path: "/rolunk" },
    { name: t("header.contact"), path: "/kapcsolat" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("moblux-language", language);
  };

  const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => (
    <div
      className={
        mobile
          ? "flex w-full items-center justify-between rounded-xl bg-[#e5e9df] p-2"
          : "fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 overflow-hidden rounded-l-xl border border-r-0 border-[#24382b]/15 bg-[#f7f5ef]/95 shadow-lg backdrop-blur-xl lg:flex lg:flex-col"
      }
      aria-label={t("header.changeLanguage")}
    >
      {languages.map((language) => {
        const isActive = currentLanguage === language.code;

        return (
          <button
            key={language.code}
            type="button"
            onClick={() => changeLanguage(language.code)}
            className={`min-w-12 px-3 py-3 text-xs font-bold tracking-wide transition ${
              isActive
                ? "bg-[#2d4736] text-white"
                : "text-[#6d7e70] hover:bg-[#e5e9df] hover:text-[#2d4736]"
            }`}
            aria-label={`${t("header.changeLanguage")}: ${language.label}`}
            aria-pressed={isActive}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-[#24382b]/10 bg-[#f7f5ef]/95 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-[#f7f5ef]/85 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
              aria-label="Moblux"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2d4736] transition-transform duration-300 group-hover:scale-105">
                <span className="text-sm font-bold tracking-tight text-[#f7f5ef]">
                  MH
                </span>
              </div>

              <div>
                <p className="text-lg font-semibold leading-none tracking-tight text-[#24382b]">
                  Moblux
                </p>

                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6d7e70]">
                  {t("header.brandSubtitle")}
                </p>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "text-[#2d4736]"
                        : "text-[#526357] hover:text-[#2d4736]"
                    }`}
                  >
                    {link.name}

                    {isActive && (
                      <motion.span
                        layoutId="activeNavigation"
                        className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#bb7050]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <Link to="/kapcsolat">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-[#2d4736] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c5b46]"
                >
                  {t("header.requestConsultation")}

                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </motion.span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label={isOpen ? t("header.closeMenu") : t("header.openMenu")}
              aria-expanded={isOpen}
            >
              <div className="flex w-6 flex-col">
                <motion.span
                  animate={
                    isOpen
                      ? { rotate: 45, y: 4, backgroundColor: "#2d4736" }
                      : { rotate: 0, y: 0, backgroundColor: "#2d4736" }
                  }
                  className="h-0.5 w-6 rounded-full"
                />

                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="my-1.5 h-0.5 w-6 rounded-full bg-[#2d4736]"
                />

                <motion.span
                  animate={
                    isOpen
                      ? { rotate: -45, y: -4, backgroundColor: "#2d4736" }
                      : { rotate: 0, y: 0, backgroundColor: "#2d4736" }
                  }
                  className="h-0.5 w-6 rounded-full"
                />
              </div>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-[#24382b]/10 bg-[#f7f5ef] lg:hidden"
            >
              <div className="px-6 py-5">
                <div className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;

                    return (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.2 }}
                      >
                        <Link
                          to={link.path}
                          onClick={closeMenu}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition ${
                            isActive
                              ? "bg-[#e5e9df] text-[#2d4736]"
                              : "text-[#526357] hover:bg-[#ecece5] hover:text-[#2d4736]"
                          }`}
                        >
                          {link.name}

                          <svg
                            className="h-4 w-4 text-[#7d8d80]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m9 5 7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  className="mt-6 border-t border-[#24382b]/10 pt-5"
                >
                  <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#6d7e70]">
                    {t("header.changeLanguage")}
                  </p>

                  <LanguageSwitcher mobile />

                  <a
                    href="tel:+36301234567"
                    className="mt-4 block py-3 text-center text-sm font-medium text-[#526357]"
                  >
                    +36 30 123 4567
                  </a>

                  <Link to="/kapcsolat" onClick={closeMenu}>
                    <motion.span
                      whileTap={{ scale: 0.98 }}
                      className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2d4736] px-5 py-4 font-semibold text-white"
                    >
                      {t("header.requestConsultation")}

                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </motion.span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <LanguageSwitcher />
    </>
  );
};

export default Header;
