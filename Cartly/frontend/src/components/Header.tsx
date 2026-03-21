import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, NavLink } from "react-router";

export default function Header() {
  const auth = useContext(AuthContext);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-semibold text-sm"
      : "text-indigo-200 hover:text-white transition text-sm";

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-indigo-900/50 border-b border-indigo-700">
      <Link to="/" className="text-xl font-extrabold text-white">
        🛒 Cartly.
      </Link>

      <div className="flex items-center gap-4">
        {auth?.user ? (
          <>
            <NavLink to="/myLists" className={navClass}>
              My Lists
            </NavLink>
            <span className="text-indigo-400 text-sm">👋 {auth.user.name}</span>
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
    </header>
  );
}
