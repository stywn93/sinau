import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { FaBurger } from "react-icons/fa6";

export default function DashboardLayout() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="bg-slate-200">
        <Outlet />
      </main>
    </div>
  );
}
