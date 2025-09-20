import {
  LogOutIcon,
  MapPinHouse,
  Calendar1,
  HeartPlus,
  User2,
} from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
        {auth?.user?.name ? (
          <img
            src={auth.user.name}
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <User2 className="w-8 h-8 rounded-full bg-gray-200 text-gray-500" />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-50">
        <DropdownMenuItem className="flex items-center gap-2">
          {auth?.user?.name ? (
            <img
              src={auth.user.name}
              alt="Profile Avatar"
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <User2 className="w-8 h-8 rounded-full bg-gray-200 text-gray-500" />
          )}
          <Link to="/editprofile">Edit profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <MapPinHouse size={16} />
          <Link to="/my-locations">My Locations</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <Calendar1 size={16} />
          <Link to="/my-events">My Events</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-2">
          <HeartPlus size={16} />
          <Link to="/favorites">Favorites</Link>
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
