import Header from "../components/Header";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}
