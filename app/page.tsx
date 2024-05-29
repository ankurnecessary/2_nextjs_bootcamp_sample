import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import DeleteUserButton from "./components/deleteUserButton";

export default async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row-reverse mb-5">
        <Link
          href="/addUser"
          className="bg-orange-400 text-white px-4 py-2 rounded-md hover:opacity-85 border-orange-600 border"
        >
          Add User
        </Link>
      </div>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-left font-semibold text-gray-600">
              Id
            </th>
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
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-2 px-4">{user.id}</td>
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.age}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">
                <Link
                  href={`/${user.id}/edit`}
                  className="underline text-blue-500"
                >
                  Edit
                </Link>
              </td>
              <td className="py-2 px-4">
                <DeleteUserButton userId={user.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
