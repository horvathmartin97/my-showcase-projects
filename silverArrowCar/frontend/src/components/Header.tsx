import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState } from "react";
import { Link } from "react-router";
import MobileView from "./MobileMenu";
import { User2 } from "lucide-react";
import HeaderDropdown from "./DropDownMenu";

export default function Header() {
  const [navigationMenuOpened, setNavigationMenuOpened] = useState(false);
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const auth = useContext(AuthContext);
  return (
    <header className=" bg-gray-800 flex justify-between items-center">
      <div>
        <Link className="text-4xl flex gap-2 ml-20" to="/">
          <span className="text-black font-bold">Silver</span>
          <span className="text-red-600 font-bold">Car</span>
        </Link>
      </div>

      <nav className=" w-180 flex justify-around items-center text-white font-bold">
        <Link className="hover:underline" to="/cars">
          Autóink
        </Link>
        <Link className="hover:underline" to="/about">
          Rólunk
        </Link>
        <Link className="hover:underline" to="/contact">
          Elérhetőség
        </Link>
      </nav>

      <div className="hover:underline w-30 mr-10 text-white font-bold">
        {auth?.user?.id ? (
          <HeaderDropdown
            dropDownOpened={dropdownOpen}
            setDropDownOpened={setDropDownOpen}
          >
            <User2 className="w-10 h-10 rounded-full cursor-pointer" />
          </HeaderDropdown>
        ) : (
          <Link to="/login" className="hover:underline font-bold">
            Bejelentkezés
          </Link>
        )}
      </div>
      <div className="md:hidden">
        <MobileView
          navigationMenuOpened={navigationMenuOpened}
          setNavigationMenuOpened={setNavigationMenuOpened}
        />
      </div>
    </header>
  );
}
