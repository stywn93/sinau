import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-64 flex gap-4 bg-slate-800 flex-col ease-in p-4 rounded-2xl m-4">
      <div
        className="flex justify-center items-center uppercase text-2xl text-slate-50 w-full min-h-[100px]"
        id="sidebarHeader"
      >
        <span>Sinau Apps</span>
      </div>
      <hr className="text-slate-50" />
      <div className="text-slate-50 w-full" id="navigation">
        <ul className="flex flex-col gap-4 my-4 list-none">
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 hover:rounded-2xl">
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
