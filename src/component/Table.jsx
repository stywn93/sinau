export default function Table() {
  return (
    <div className="my-2 relative overflow-x-auto bg-neutral-100-soft shadow-xs rounded-2xl border border-gray-300">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-200 border-b border-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Color
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Category
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Price
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50 even:bg-neutral-200 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-fg-brand hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-slate-100 even:bg-neutral-200 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-fg-brand hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-neutral-100 even:bg-neutral-200 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-fg-brand hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-neutral-100 even:bg-neutral-200 border-b border-gray-300">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              Google Pixel Phone
            </th>
            <td className="px-6 py-4">Gray</td>
            <td className="px-6 py-4">Phone</td>
            <td className="px-6 py-4">$799</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-fg-brand hover:underline">
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-neutral-100 even:bg-neutral-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-heading whitespace-nowrap"
            >
              Apple Watch 5
            </th>
            <td className="px-6 py-4">Red</td>
            <td className="px-6 py-4">Wearables</td>
            <td className="px-6 py-4">$999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-fg-brand hover:underline">
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
