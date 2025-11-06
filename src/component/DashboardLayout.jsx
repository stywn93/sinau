import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { FaChevronRight } from "react-icons/fa6";

export default function DashboardLayout() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="w-full bg-slate-200 flex-row ease-in p-4 m-4 rounded-2xl h-[calc(100vh-2rem)]">
        <div className="block mb-2">
          <FaChevronRight className="block text-2xl text-slate-800" />
        </div>

        <Outlet />
      </main>
    </div>
  );
}
