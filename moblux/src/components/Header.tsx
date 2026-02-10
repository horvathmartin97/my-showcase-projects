import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Főoldal", path: "/" },
    { name: "Modellek", path: "/modellek" },
    { name: "Galéria", path: "/galeria" },
    { name: "Rólunk", path: "/rolunk" },
    { name: "Kapcsolat", path: "/kapcsolat" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/98 backdrop-blur-xl shadow-2xl border-b border-yellow-500/20"
          : "bg-linear-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-4 group relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-yellow-400 to-yellow-600 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

              {/* Logo doboz */}
              <div className="relative w-14 h-14 bg-linear-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center shadow-xl border border-yellow-400/30">
                <div className="text-black font-black text-2xl tracking-tighter">
                  ML
                </div>
              </div>
            </motion.div>

            <div className="hidden sm:block">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-2xl font-black tracking-tight bg-linear-to-r from-yellow-400 via-yellow-300 to-gray-200 bg-clip-text text-transparent">
                  MOBLUX
                </span>
                <p className="text-xs font-light text-gray-400 tracking-[0.25em] uppercase -mt-1">
                  Containers
                </p>
              </motion.div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                >
                  <Link to={link.path} className="relative px-5 py-2.5 group">
                    <span
                      className={`text-sm font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-yellow-400"
                          : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/80"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {!isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1.5 rounded-full bg-linear-to-r from-yellow-500 to-yellow-600 group-hover:w-1.5 transition-all duration-300" />
                    )}

                    <span className="absolute inset-0 rounded-lg bg-gray-800/0 group-hover:bg-gray-800/30 transition-colors duration-300 -z-10" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <a
              href="tel:+36301234567"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden xl:inline">+36 30 123 4567</span>
            </a>

            <Link to="/kapcsolat">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative px-7 py-3 bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-black font-bold rounded-lg shadow-xl overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  style={{ width: "100%" }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  Ajánlatot kérek
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>

                <div className="absolute inset-0 rounded-lg bg-yellow-400/0 group-hover:bg-yellow-400/20 blur-xl transition-all duration-300" />
              </motion.button>
            </Link>
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center group"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 2, backgroundColor: "#fbbf24" }
                    : { rotate: 0, y: -3, backgroundColor: "#d1d5db" }
                }
                className="w-6 h-0.5 rounded-full transition-all duration-300"
              />
              <motion.span
                animate={
                  isOpen
                    ? { opacity: 0, x: -10 }
                    : { opacity: 1, x: 0, backgroundColor: "#d1d5db" }
                }
                className="w-6 h-0.5 my-1.5 rounded-full transition-all duration-300"
              />
              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -2, backgroundColor: "#fbbf24" }
                    : { rotate: 0, y: 3, backgroundColor: "#d1d5db" }
                }
                className="w-6 h-0.5 rounded-full transition-all duration-300"
              />
            </div>
          </button>
        </div>

        <motion.div
          initial={false}
          animate={
            isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-1 border-t border-gray-800/50">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={
                    isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
                  }
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-5 py-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-linear-to-r from-gray-800 via-gray-800 to-gray-900 text-yellow-400 border-l-4 border-yellow-500 shadow-lg shadow-yellow-500/10"
                        : "text-gray-300 hover:bg-gray-800/50 hover:text-white hover:translate-x-2"
                    }`}
                  >
                    <span className="font-semibold text-base">{link.name}</span>
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isOpen ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
              className="pt-6 space-y-4 px-5"
            >
              <a
                href="tel:+36301234567"
                className="flex items-center justify-center gap-3 py-3.5 text-gray-400 hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-800/30"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">+36 30 123 4567</span>
              </a>

              <Link to="/kapcsolat" onClick={() => setIsOpen(false)}>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-6 py-4 bg-linear-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-black font-bold rounded-xl shadow-2xl shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-shadow"
                >
                  <span className="flex items-center justify-center gap-2">
                    Ajánlatot kérek
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
