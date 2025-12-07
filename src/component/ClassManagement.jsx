import Table from "./Table";

export default function ClassManagement() {
  return (
    <>
      <h1 className="text-3xl text-gray-900">
        Ini adalah halaman Class Manajemen
      </h1>
      <Table
        columns={[
          { key: "course", label: "Course" },
          { key: "classname", label: "Class Name" },
          { key: "quota", label: "Quota" },
          { key: "openDate", label: "Opening Date" },
          { key: "closeDate", label: "Closing Date" },
        ]}
        data={[
          {
            course: "Syarah Hadits Qudsi",
            classname: "Hadits Qudsi 2",
            quota: "40 Students",
            openDate: "2026-01-01",
            closeDate: "2026-04-01",
          },
          {
            course: "Syarah Hadits Qudsi",
            classname: "Hadits Qudsi 3",
            quota: "40 Students",
            openDate: "2026-01-01",
            closeDate: "2026-04-01",
          },
          {
            course: "Syarah Hadits Qudsi",
            classname: "Hadits Qudsi 1",
            quota: "40 Students",
            openDate: "2026-01-01",
            closeDate: "2026-04-01",
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
