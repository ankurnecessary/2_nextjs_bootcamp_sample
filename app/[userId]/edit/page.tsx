import Link from 'next/link';
import React from 'react'
import { editUser, getUser } from './action';

const EditUserPage = async({params}:{params: {userId:number}}) => {
  const userId = Number(params.userId);
  const user = await getUser(userId);
  return (
    <div className="container max-w-md mx-auto p-4">
      <div className="mb-5 pl-5">
        <Link href="/" className="text-blue-500">
          &#60;&#60; Back
        </Link>
      </div>
      <form
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
        action={editUser}
      >
        <input type="hidden" name="userId" defaultValue={user?.id ?? 0} />
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your name"
            defaultValue={user?.name ?? ''}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-gray-700 font-semibold mb-2"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter your age"
            defaultValue={user?.age ?? ''}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 font-semibold mb-2"
          >
            Role
          </label>
          <select
            id="role"
            name="role"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            defaultValue={user?.role ?? ''}
          >
            <option value="">Select role</option>
            <option value="developer" >Developer</option>
            <option value="designer" >Designer</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUserPage
