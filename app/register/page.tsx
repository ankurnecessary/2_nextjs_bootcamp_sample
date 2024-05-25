import Link from "next/link";
/*
  TODO: 
  - Create a postgres database on vercel DONE
  - Register the credentials of the database created in the application via prisma.
  - Create a connection utility file if needed.
  - Create an API to save the user.
  - After saving the user control will go back to user list page.
  - At this time check whether user is actually added in the database or not.

*/
export default function register() {
  return (
    <div className="container max-w-md mx-auto p-4">
        <div className="mb-5 pl-5">
          <Link href='/' className="text-blue-500">&#60;&#60; Back</Link>
        </div>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your name" required />
            </div>
            <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 font-semibold mb-2">Age</label>
                <input type="number" id="age" name="age" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter your age" required />
            </div>
            <div className="mb-4">
                <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">Role</label>
                <select id="role" name="role" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300">
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                </select>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
        </form>
    </div>
  );
}