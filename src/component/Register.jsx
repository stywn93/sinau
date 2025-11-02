import { Link } from "react-router";

export default function Register() {
  return (
    <div>
      <div className="flex flex-col p-2 m-3 justify-center items-center min-h-screen">
        <div className="border p-5 border-slate-200 dark:border-slate-800 rounded-4xl bg-slate-100 dark:bg-slate-900">
          <div className="flex justify-center mb-2">
            <div class="block bg-slate-100 shadow-xl p-4 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="m-2">
            <h1 className="text-3xl font-semibold text-slate-8¥900 dark:text-slate-200 mb-1 text-center">
              Create an Account
            </h1>
            <p className="text-slate-900 dark:text-slate-600 text-center text-sm">
              You can a new account to access this platform. Please fill up this
              form first.
            </p>
          </div>
          <form class="max-w-md mx-auto">
            <div class="my-5">
              <label
                for="email"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="user@demo.app"
                required
              />
            </div>
            <div class="my-5">
              <label
                for="firstname"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
              >
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div class="my-5">
              <label
                for="lastname"
                class="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
              >
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Smith"
                required
              />
            </div>

            <div className="mb-4 flex flex-col sm:flex-row justify-evenly gap-4">
              <Link
                to="/"
                className="flex-1 text-slate-900 dark:text-slate-50 bg-slate-400 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-50 dark:focus:ring-slate-600"
              >
                Login
              </Link>
              <Link
                to={"/register-hello"}
                className="flex-1 text-slate-100 dark:text-slate-900 bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-slate-100 dark:hover:bg-slate-50 dark:focus:ring-slate-800 cursor-pointer"
              >
                Continue
              </Link>
            </div>
          </form>
        </div>
        <footer className="text-center text-slate-500 dark:text-slate-200 text-sm mt-10">
          Sinau - Open Learning Management System
        </footer>
      </div>
    </div>
  );
}
