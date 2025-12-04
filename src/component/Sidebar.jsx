import { Link } from "react-router";
import {
  FaChevronLeft,
  FaApple,
  FaHouseChimneyWindow,
  FaFileLines,
  FaRegCircleLeft,
  FaFileInvoice,
  FaRedRiver, FaUsersBetweenLines, FaFileCirclePlus
} from "react-icons/fa6";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside
      className={`flex w-full md:w-sm bg-linear-180 from-sky-400 to-sky-900 flex-col rounded-2xl m-4 transition-all duration-700`}
    >
      <div
        className="flex items-center justify-between p-4 text-2xl uppercase text-slate-50"
        id="sidebarHeader"
      >
        <FaApple className="text-6xl" />
        <button
          className="p-2 cursor-pointer bg-sky-50 hover:bg-sky-100 rounded-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaChevronLeft className="text-xl text-slate-800" />
        </button>
      </div>
      <div className="w-full flex-1 text-slate-50" id="navigation">
        <ul className="flex flex-col gap-2 my-4 list-none">
          <li className="p-4 mx-4 text-md hover:bg-slate-100 hover:text-slate-800 hover:rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaHouseChimneyWindow className="text-2xl" />
              Dashboard
            </Link>
          </li>
          <li className="p-4 mx-4 text-md hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaFileInvoice className="text-2xl" />
              Manajemen Kursus
            </Link>
          </li>
          <li className="p-4 mx-4 text-md hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaRedRiver className="text-2xl" />
              Manajemen Kelas
            </Link>
          </li>
          <li className="p-4 mx-4 text-md hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaUsersBetweenLines className="text-2xl" />
              Manajemen Peserta
            </Link>
          </li>
          <li className="p-4 mx-4 text-md hover:bg-slate-100 hover:text-slate-800 rounded-2xl">
            <Link
              to={"/dashboard/add-materi"}
              className="flex flex-row items-center gap-2"
            >
              <FaFileCirclePlus className="text-2xl" />
              Tambah Materi
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full text-slate-50" id="profile">
        <ul className="flex flex-col gap-2 my-4 list-none">
          <li className="p-4 mx-4 text-md bg-orange-400 rounded-2xl hover:bg-orange-500 hover:text-slate-100 hover:rounded-2xl">
            <Link
              to={"/dashboard"}
              className="flex flex-row items-center gap-2"
            >
              <FaRegCircleLeft className="text-2xl" />
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
