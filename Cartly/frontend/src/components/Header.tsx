import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, NavLink } from "react-router";

export default function Header() {
  const auth = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-semibold text-sm"
      : "text-indigo-200 hover:text-white transition text-sm";

  return (
    <header className="px-6 py-4 bg-indigo-900/50 border-b border-indigo-700">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-white">
          Cartly.
        </Link>

        <div className="hidden sm:flex items-center gap-4">
          {auth?.user ? (
            <>
              <NavLink to="/myLists" className={navClass}>
                My Lists
              </NavLink>
              <span className="text-indigo-400 text-sm">
                👋 {auth.user.name}
              </span>
              <button
                onClick={() => auth.logOut()}
                className="px-4 py-1.5 bg-pink-500/20 border border-pink-500/40 text-pink-300 rounded-xl text-sm font-medium hover:bg-pink-500/30 transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={navClass}>
                Log In
              </NavLink>
              <Link
                to="/register"
                className="px-4 py-1.5 bg-linear-to-r from-lime-400 to-emerald-500 text-gray-900 rounded-xl text-sm font-bold hover:opacity-90 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          className="sm:hidden text-indigo-200 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-4 flex flex-col gap-3 pb-2">
          {auth?.user ? (
            <>
              <span className="text-indigo-400 text-sm">
                👋 {auth.user.name}
              </span>
              <NavLink
                to="/myLists"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                My Lists
              </NavLink>
              <button
                onClick={() => {
                  auth.logOut();
                  setMenuOpen(false);
                }}
                className="text-left px-4 py-1.5 bg-pink-500/20 border border-pink-500/40 text-pink-300 rounded-xl text-sm font-medium hover:bg-pink-500/30 transition w-fit"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={navClass}
                onClick={() => setMenuOpen(false)}
              >
                Log In
              </NavLink>
              <Link
                to="/register"
                className="px-4 py-1.5 bg-linear-to-r from-lime-400 to-emerald-500 text-gray-900 rounded-xl text-sm font-bold hover:opacity-90 transition w-fit"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
