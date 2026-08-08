import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const { scrollY } = useScroll();

  const navLinks = [
    { name: "Főoldal", path: "/" },
    { name: "Modellek", path: "/modellek" },
    { name: "Galéria", path: "/galeria" },
    { name: "Rólunk", path: "/rolunk" },
    { name: "Kapcsolat", path: "/kapcsolat" },
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

  return (
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
            aria-label="NATURA HOME főoldal"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2d4736] transition-transform duration-300 group-hover:scale-105">
              <span className="text-sm font-bold tracking-tight text-[#f7f5ef]">
                NH
              </span>
            </div>

            <div>
              <p className="text-lg font-semibold leading-none tracking-tight text-[#24382b]">
                NATURA HOME
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#6d7e70]">
                Moduláris otthonok
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

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="tel:+36301234567"
              className="text-sm font-medium text-[#526357] transition hover:text-[#2d4736]"
            >
              +36 30 123 4567
            </a>

            <Link to="/kapcsolat">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex cursor-pointer items-center gap-2 rounded-full bg-[#2d4736] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3c5b46]"
              >
                Konzultáció kérése
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
            aria-label={isOpen ? "Menü bezárása" : "Menü megnyitása"}
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
                <a
                  href="tel:+36301234567"
                  className="block py-3 text-center text-sm font-medium text-[#526357]"
                >
                  +36 30 123 4567
                </a>

                <Link to="/kapcsolat" onClick={closeMenu}>
                  <motion.span
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2d4736] px-5 py-4 font-semibold text-white"
                  >
                    Konzultáció kérése
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
  );
};

export default Header;
