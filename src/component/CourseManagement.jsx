import Table from "./Table";

export default function CourseManagement() {
  return (
    <>
      <h1 className="text-3xl text-gray-900 dark:text-gray-100">Ini adalah halaman Manajemen Kursus</h1>
      <Table
        columns={[
          { key: "coursename", label: "Course Name" },
        ]}
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