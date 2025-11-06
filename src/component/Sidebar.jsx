import { Link } from "react-router";
import { FaApple, FaHouseChimneyWindow, FaFileLines } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <aside className="w-64 flex gap-4 bg-slate-800 flex-col ease-in p-4 rounded-2xl ml-4 mt-4 h-[calc(100vh-2rem)]">
      <div
        className="flex justify-center items-center uppercase text-2xl text-slate-50 w-full min-h-[100px]"
        id="sidebarHeader"
      >
        <FaApple className="text-8xl" />
      </div>
      <hr className="text-slate-50" />
      <div className="text-slate-50 w-full" id="navigation">
        <ul className="flex flex-col gap-4 my-4 list-none">
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 hover:rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaHouseChimneyWindow className="text-2xl" />
              Dashboard
            </Link>
          </li>
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaFileLines className="text-2xl" />
              Course 1
            </Link>
          </li>
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaFileLines className="text-2xl" />
              Course 2
            </Link>
          </li>
          <li className="text-md p-4 hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaFileLines className="text-2xl" />
              Course 3
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
