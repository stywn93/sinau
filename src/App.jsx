import { useState } from "react";
import "./App.css";
import Logo from "./assets/Logo";
import { Link } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-2 m-3">
        <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-4xl bg-slate-100 dark:bg-slate-900">
          <div className="flex justify-center mb-2">
            <div class="block p-4 shadow-xl bg-slate-100 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-log-in"
                aria-hidden="true"
              >
                <path d="m10 17 5-5-5-5"></path>
                <path d="M15 12H3"></path>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              </svg>
            </div>
          </div>
          <div className="m-2">
            <h1 className="text-3xl font-semibold text-slate-8¥900 dark:text-slate-200 mb-1 text-center">
              Login to start
            </h1>
            <p className="text-sm text-center text-slate-900 dark:text-slate-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <form class="max-w-md mx-auto">
            <div class="my-5">
              <label
                for="email"
                class="block mb-1 font-medium text-gray-900 text-md dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="user@demo.app"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-1 font-medium text-gray-900 text-md dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="password"
                required
              />
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <div className="flex flex-col mb-4 sm:flex-row justify-evenly gap-4">
              <Link
                to="/register"
                className="flex-1 text-slate-900 dark:text-slate-50 bg-slate-200 hover:bg-slate-100 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-50 dark:focus:ring-slate-600"
              >
                Create an Account
              </Link>
              <button
                type="submit"
                className="flex-1 text-slate-100 dark:text-slate-900 bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-slate-100 dark:hover:bg-slate-50 dark:focus:ring-slate-800 cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <footer className="mt-10 text-sm text-center text-slate-500 dark:text-slate-200">
          Sinau - Open Learning Management System
        </footer>
      </div>
    </div>
  );
}

export default App;
