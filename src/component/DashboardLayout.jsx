import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { FaChevronRight, FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  return (
    <div className="flex flex-row">
      <Sidebar isOpen={isOpen}/>
      <main className="w-full bg-slate-200 flex-row ease-in p-4 m-4 rounded-2xl min-h-[calc(100vh-2rem)] h-full">
        <div className="flex items-center justify-between mb-4">
          <button className="p-2 cursor-pointer bg-slate-200 hover:bg-slate-300 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
            <FaChevronRight className="text-2xl text-slate-800" />
          </button>
          <h1 className="text-4xl">Student of Future</h1>
          <FaRegCircleUser className="text-2xl text-slate-800" />
        </div>

        <Outlet />
      </main>
    </div>
  );
}
