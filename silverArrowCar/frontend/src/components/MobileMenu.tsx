import { useContext } from "react";
import { Link } from "react-router";
import {
  Contact,
  Crown,
  Home,
  Info,
  LogIn,
  ParkingSquareIcon,
  Menu,
  User2,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { AuthContext } from "../contexts/AuthContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface MobileViewProps {
  navigationMenuOpened: boolean;
  setNavigationMenuOpened: (open: boolean) => void;
}

export default function MobileView({
  navigationMenuOpened,
  setNavigationMenuOpened,
}: MobileViewProps) {
  const auth = useContext(AuthContext);

  return (
    <div className="md:hidden ">
      <Sheet open={navigationMenuOpened} onOpenChange={setNavigationMenuOpened}>
        <SheetTrigger>
          <Menu className="mt-1" />
        </SheetTrigger>

        <SheetContent className=" rounded-l-4xl bg-gray-700 text-white">
          <SheetHeader>
            <SheetTitle className="mb-4 text-lg font-bold text-white">
              Menü
            </SheetTitle>

            <SheetDescription className="">
              <Link
                className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-blue-200 transition mb-2 text-white font-medium"
                to="/"
                onClick={() => setNavigationMenuOpened(false)}
              >
                <Home />
                Home
              </Link>

              <Link
                className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-blue-200 transition mb-2 text-white font-medium"
                to="/contact"
                onClick={() => setNavigationMenuOpened(false)}
              >
                <Contact />
                Elérhetőség
              </Link>

              <Link
                className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-blue-200 transition text-white mb-2 font-medium"
                to="/about"
                onClick={() => setNavigationMenuOpened(false)}
              >
                <Info />
                Rólunk
              </Link>

              {auth?.user?.id && (
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white font-medium">
                      {auth.user.name}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-white font-medium">
                      <Link
                        to="/editprofile"
                        className="flex items-center gap-2"
                      >
                        {auth?.user?.name ? (
                          <Crown className="h-8 w-8" />
                        ) : (
                          <User2 className="w-8 h-8 rounded-full bg-gray-200 text-gray-500" />
                        )}
                        Saját Profil
                      </Link>
                      <Link to="/favorites" className="flex items-center gap-2">
                        <ParkingSquareIcon className="h-8 w-8" />
                        Parkoló
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}

              {!auth?.user?.id ? (
                <Link
                  className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-blue-200 transition mb-2 text-black font-medium"
                  to="/login"
                  onClick={() => setNavigationMenuOpened(false)}
                >
                  <LogIn />
                  Sign In
                </Link>
              ) : (
                <Button
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-white transition font-medium"
                  onClick={() => {
                    setNavigationMenuOpened(false);
                    auth.logOut();
                  }}
                >
                  <LogIn />
                  Kijelentkezés
                </Button>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
