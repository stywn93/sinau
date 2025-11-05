import { Link } from "react-router";

export default function Sidebar(){
  return(
    <aside className="w-64 flex gap-2 bg-slate-300 flex-col ease-in">
      <div className="flex justify-center uppercase text-xl bg-slate-500 text-slate-50 w-full" id="sidebarHeader">
        <span>Sinau Apps</span>
      </div>
      <div className="bg-slate-200 text-slate-600 w-full" id="navigation">
        <ul className="flex flex-col gap-2 list-none">
          <li className="text-md hover:bg-slate-700"><Link to={"/dashboard"}>Dashboard</Link></li>
          <li className="text-md hover:bg-slate-700"><Link to={"/dashboard"}>Dashboard</Link></li>
          <li className="text-md hover:bg-slate-700"><Link to={"/dashboard"}>Dashboard</Link></li>
          <li className="text-md hover:bg-slate-700"><Link to={"/dashboard"}>Dashboard</Link></li>
        </ul>
      </div>
    </aside>
  )
}