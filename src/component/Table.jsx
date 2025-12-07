export default function Table({ 
  columns = [], 
  data = [], 
  renderAction = null,
  firstColumnAsHeader = true 
}) {
  return (
    <div className="my-2 relative overflow-x-auto bg-neutral-100-soft dark:bg-neutral-800 shadow-xs rounded-2xl border border-gray-300 dark:border-gray-700">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-200 dark:bg-neutral-900 border-b border-gray-300 dark:border-gray-700">
          <tr>
            {columns.map((column, index) => (
              <th key={index} scope="col" className="px-6 py-3 font-medium text-gray-600 dark:text-gray-300">
                {column.label || column}
              </th>
            ))}
            {renderAction && (
              <th scope="col" className="px-6 py-3 font-medium text-gray-600 dark:text-gray-300">
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
                  ? 'odd:bg-neutral-100 dark:odd:bg-neutral-800 even:bg-neutral-200 dark:even:bg-neutral-700' 
                  : 'odd:bg-neutral-100 dark:odd:bg-neutral-800 even:bg-neutral-200 dark:even:bg-neutral-700 border-b border-gray-300 dark:border-gray-700'
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
                      className="px-6 py-4 font-medium text-heading whitespace-nowrap text-gray-600 dark:text-gray-50"
                    >
                      {cellValue}
                    </th>
                  );
                }
                
                return (
                  <td key={colIndex} className="px-6 py-4 text-gray-600 dark:text-gray-50">
                    {cellValue}
                  </td>
                );
              })}
              {renderAction && (
                <td className="px-6 py-4 text-gray-600 dark:text-gray-50">
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
