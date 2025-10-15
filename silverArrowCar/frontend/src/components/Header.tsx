import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";
import { Link } from "react-router"; // Győződj meg róla, hogy a react-router-dom-ot használod
import MobileView from "./MobileMenu";
import HeaderDropdown from "./DropDownMenu";
import { User2, Crown } from "lucide-react"; // Importáljuk a szükséges ikonokat

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const auth = useContext(AuthContext);

  const UserIcon = () => {
    if (auth?.user?.role === "ADMIN") {
      return <Crown className="w-8 h-8 cursor-pointer text-yellow-400" />;
    }
    return (
      <User2 className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 cursor-pointer" />
    );
  };

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link className="text-3xl flex gap-2 items-center" to="/">
          <span className="text-white font-bold">Silver</span>
          <span className="text-red-600 font-bold">Car</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center font-bold">
          <Link className="hover:text-red-500 transition-colors" to="/cars">
            Autóink
          </Link>

          <Link className="hover:text-red-500 transition-colors" to="/contact">
            Elérhetőség
          </Link>
        </nav>

        <div className="hidden md:block">
          {auth?.user ? (
            <HeaderDropdown
              dropDownOpened={dropdownOpen}
              setDropDownOpened={setDropDownOpen}
            >
              <UserIcon />
            </HeaderDropdown>
          ) : (
            <Link
              to="/login"
              className="font-bold hover:text-red-500 transition-colors"
            >
              Bejelentkezés
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <MobileView
            navigationMenuOpened={mobileMenuOpen}
            setNavigationMenuOpened={setMobileMenuOpen}
          />
        </div>
      </div>
    </header>
  );
}
