import { LogOutIcon, User2, ParkingSquareIcon, Crown } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { UserRole } from "@/types/authTypes";

interface HeaderDropdownProps {
  dropDownOpened: boolean;
  setDropDownOpened: (open: boolean) => void;
  children?: React.ReactNode;
}

export default function HeaderDropdown({
  dropDownOpened,
  setDropDownOpened,
}: HeaderDropdownProps) {
  const auth = useContext(AuthContext);

  return (
    <DropdownMenu open={dropDownOpened} onOpenChange={setDropDownOpened}>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer ">
        {auth?.user?.role === UserRole.ADMIN ? (
          <span className="flex justify-center items-center gap-1">
            {auth.user.name.split("Veő")}
            <Crown className="w-8 h-8 rounded-full  text-yellow-500" />
          </span>
        ) : (
          <User2 className="w-8 h-8 rounded-full bg-gray-200 text-gray-500" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-50">
        <DropdownMenuItem className="flex items-center gap-2">
          <User2 className="w-8 h-8 rounded-full bg-gray-200 text-gray-500" />

          <Link to="/editprofile">Saját Profil</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <ParkingSquareIcon size={16} />
          <Link to="/favorites">Parkoló</Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            setDropDownOpened(false);
            auth?.logOut();
          }}
          className="flex items-center gap-2 text-red-500 font-bold"
        >
          <LogOutIcon size={16} />
          {auth?.logOut ? "Logout" : "Login"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
