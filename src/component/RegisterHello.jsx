import { Link } from "react-router";

export default function RegisterHello(){
  return(
    <div>
      <div className="flex flex-col p-2 m-3 justify-center items-center min-h-screen">
        <div className="border p-5 border-slate-200 dark:border-slate-800 rounded-4xl bg-slate-100 dark:bg-slate-900">
          <div className="m-2">
            <h1 className="text-3xl font-semibold text-slate-8¥900 dark:text-slate-200 mb-1 text-center">
              Welcome Iwan!
            </h1>
            <p className="text-slate-900 dark:text-slate-600 text-center text-sm">
              Please complete your Registration before we can continue processing your request.
            </p>
          </div>
          <form class="max-w-md mx-auto">
            <div class="my-5">
              <label
                for="phonenumber"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+62..."
                required
              />
            </div>
            <div class="my-5">
              <label
                for="password"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="password"
                required
              />
            </div>
            <div class="my-5">
              <label
                for="reppassword"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
              >
                Repeat Password
              </label>
              <input
                type="password"
                id="reppassword"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="password"
                required
              />
            </div>
            <div class="my-5">
              <label
                for="dob"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Date of Birth"
              />
            </div>
            <div class="my-5">
              <label
                for="country"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Country"
              />
            </div>
            <div className="mb-4 flex flex-col sm:flex-row justify-evenly gap-4">
              <Link
                to="/register"
                className="flex-1 text-slate-900 dark:text-slate-50 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:underline"
              >
                Back to Previous
              </Link>
              <button
                type="submit"
                className="flex-1 text-slate-100 dark:text-slate-900 bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-slate-100 dark:hover:bg-slate-50 dark:focus:ring-slate-800 cursor-pointer"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <footer className="text-center text-slate-500 dark:text-slate-200 text-sm mt-10">
          Sinau - Open Learning Management System
        </footer>
      </div>
    </div>
  )
}