import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row-reverse">
        <Link href='#' className="bg-orange-400 text-white px-4 py-2 mb-4 rounded-md hover:opacity-85 border-orange-600 border">Register here</Link>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Name
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Age
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Role
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Edit
            </th>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">John Doe</td>
            <td className="py-2 px-4">30</td>
            <td className="py-2 px-4">Developer</td>
            <td className="py-2 px-4"><Link href='#' className="underline text-blue-500">Edit</Link></td>
            <td className="py-2 px-4"><Link href='#' className="underline text-blue-500">Delete</Link></td>
          </tr>
          <tr>
            <td className="py-2 px-4">Jane Smith</td>
            <td className="py-2 px-4">25</td>
            <td className="py-2 px-4">Designer</td>
            <td className="py-2 px-4"><Link href='#' className="underline text-blue-500">Edit</Link></td>
            <td className="py-2 px-4"><Link href='#' className="underline text-blue-500">Delete</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
