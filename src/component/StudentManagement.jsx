import Table from "./Table";

export default function StudentManagement() {
  return (
    <>
      <h1 className="text-3xl text-gray-900 dark:text-gray-100 mb-4">
        Ini adalah halaman Manajemen Peserta
      </h1>
      <Table
        columns={[
          { key: "fullName", label: "Full Name" },
          { key: "email", label: "Email" },
          { key: "phoneNumber", label: "Phone Number" },
          { key: "status", label: "Status" },
          { key: "sex", label: "Gender" },
        ]}
        data={[
          {
            fullName: "John Doe",
            email: "john@email.com",
            phoneNumber: "+62 1234567890",
            status: <span>Active</span>,
            sex: "Male"
          },
          {
            fullName: "Jane Doe",
            email: "jane@email.com",
            phoneNumber: "+62 1234567890",
            status: <span>Active</span>,
            sex: "Female"
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
