import { Outlet } from "react-router";
import Sidebar from "./Sidebar";



export default function DashboardLayout() {
  
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar/>
      <main className="w-full bg-slate-200 flex-row ease-in p-4 m-4 rounded-2xl min-h-[calc(100vh-2rem)] h-full">
        <div className="flex items-center justify-between mb-4">
          
          <h1 className="text-4xl text-sky-900">Student of Future</h1>

        </div>

        <Outlet />
      </main>
    </div>
  );
}
