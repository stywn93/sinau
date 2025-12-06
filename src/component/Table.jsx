export default function Table({ 
  columns = [], 
  data = [], 
  renderAction = null,
  firstColumnAsHeader = true 
}) {
  return (
    <div className="my-2 relative overflow-x-auto bg-neutral-100-soft shadow-xs rounded-2xl border border-gray-300">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-200 border-b border-gray-300">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3 font-medium text-gray-600">
                {column.label || column}
              </th>
            ))}
            {renderAction && (
              <th scope="col" className="px-6 py-3 font-medium">
                Action
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={`${
                rowIndex === data.length - 1 
                  ? 'odd:bg-neutral-100 even:bg-neutral-200' 
                  : 'odd:bg-neutral-100 even:bg-neutral-200 border-b border-gray-300'
              }`}
            >
              {columns.map((column, colIndex) => {
                const columnKey = typeof column === 'string' ? column : column.key;
                const cellValue = row[columnKey];
                const isFirstColumn = colIndex === 0 && firstColumnAsHeader;
                
                if (isFirstColumn) {
                  return (
                    <th
                      key={colIndex}
                      scope="row"
                      className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                    >
                      {cellValue}
                    </th>
                  );
                }
                
                return (
                  <td key={colIndex} className="px-6 py-4">
                    {cellValue}
                  </td>
                );
              })}
              {renderAction && (
                <td className="px-6 py-4">
                  {renderAction(row, rowIndex)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
