import Table from "./Table";
import { Link } from "react-router";

export default function CourseManagement() {
  return (
    <>
      <h1 className="text-3xl text-gray-900 dark:text-gray-100 mb-4">
        Ini adalah halaman Manajemen Kursus
      </h1>
      <div className="flex flex-col mb-4 sm:flex-row">
        <Link
          to="/dashboard/course-management/add"
          className="text-gray-50 bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Add New Course
        </Link>
      </div>
      <Table
        columns={[{ key: "coursename", label: "Course Name" }]}
        data={[
          {
            coursename: "Syarah Hadits Qudsi",
          },
          {
            coursename: "Tafsir Al-Quran",
          },
          {
            coursename: "40 Hadits Pilihan",
          },
        ]}
        renderAction={(row) => (
          <a href="#" className="font-medium text-fg-brand hover:underline">
            Edit
          </a>
        )}
      />
    </>
  );
}
