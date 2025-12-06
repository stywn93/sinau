import Table from "./Table";

export default function ClassManagement() {
  return (
    <>
      <h1>Ini adalah halaman Class Manajemen</h1>
      <Table 
      columns={["Class Name", "Quota", "Opening Date", "Due Date"]} 
      data={[
        {'Class Name': 'Hadits Qudsi 1', 'Quota': '40 Students', 'Opening Date': '2026-01-01', 'Due Date': '2026-04-01'},
        {'Class Name': 'Hadits Qudsi 2', 'Quota': '40 Students', 'Opening Date': '2026-01-01', 'Due Date': '2026-04-01'},
        {'Class Name': 'Hadits Qudsi 3', 'Quota': '40 Students', 'Opening Date': '2026-01-01', 'Due Date': '2026-04-01'}
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
