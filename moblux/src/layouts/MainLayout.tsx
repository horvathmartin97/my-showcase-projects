import Header from "../components/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <main className="px-2 md:px-40 py-4 ">
        <Outlet />
      </main>
    </div>
  );
}
