import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router";
import { useLocalStorage } from "react-use";

export default function Register() {
  const [users, setUsers] = useLocalStorage("users", []);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Not a valid email")
      .required("Email is required"),
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
  });

  return (
    <div>
      <div className="flex flex-col p-2 m-3 justify-center items-center min-h-screen">
        <div className="border p-5 border-slate-200 dark:border-slate-800 rounded-4xl bg-slate-100 dark:bg-slate-900">
          <div className="flex justify-center mb-2">
            <div className="block bg-slate-100 shadow-xl p-4 rounded-2xl">
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
          {/* use Formik Library to simplify process */}
          <Formik
            initialValues={{ email: "", firstname: "", lastname: "" }}
            validationSchema={validationSchema}
            onSubmit={(val) => {
              console.log(val);
            }}
          >
            <form className="max-w-md mx-auto">
              <div className="my-5">
                <label
                  htmlFor="email"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
                >
                  Email Address
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="user@demo.app"
                  required
                />
              </div>
              <div className="my-5">
                <label
                  htmlFor="firstname"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
                >
                  Firstname
                </label>
                <Field
                  name="firstName"
                  type="text"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div className="my-5">
                <label
                  htmlFor="lastname"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
                >
                  Lastname
                </label>
                <Field
                  name="lastName"
                  type="text"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Smith"
                  required
                />
              </div>

              <div className="mb-4 flex flex-col sm:flex-row justify-evenly gap-4">
                <Link
                  to="/"
                  className="flex-1 text-slate-900 dark:text-slate-50 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:underline"
                >
                  to Login Page
                </Link>
                <Link
                  to={"/register-hello"}
                  className="flex-1 text-slate-100 dark:text-slate-900 bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-slate-100 dark:hover:bg-slate-50 dark:focus:ring-slate-800 cursor-pointer"
                >
                  Continue
                </Link>
              </div>
            </form>
          </Formik>
        </div>
        <footer className="text-center text-slate-500 dark:text-slate-200 text-sm mt-10">
          Sinau - Open Learning Management System
        </footer>
      </div>
    </div>
  );
}
