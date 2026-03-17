import { Outlet } from "react-router";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-indigo-950">
      <main className="px-2 md:px-40 py-4 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
