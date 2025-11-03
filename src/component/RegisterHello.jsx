import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { data, Link } from "react-router";
import { useEffectOnce, useLocalStorage } from "react-use";

export default function RegisterHello() {
  const [firstname, setFirstname] = useState("");

  const validationYup = Yup.object({
    phoneNumber: Yup.string().required("Phone number is required"),
    password: Yup.string().required("Password is required"),
    repPassword: Yup.string()
      .required("Please retype password")
      .oneOf([Yup.ref("password")], "Password must match"),
    dob: Yup.date()
      .nullable()
      .max(new Date(), "Date of birth cannot be in the future"),
    country: Yup.string()
      .trim()
      .min(2, "Country name must be at least 2 chars"),
  });

  useEffectOnce(() => {
    //gunakan try catch untuk mengecek apakah localStorage ada isinya
    try {
      const userData = localStorage.getItem("users");
      if (!userData) {
        console.error("No user data found");
        return;
      }
      const parsedData = JSON.parse(userData);
      if (parsedData?.firstName) {
        setFirstname(parsedData.firstName);
      }
    } catch (error) {
      console.error("Error loading user data", error);
    }
  });

  const initialValues = {
    phoneNumber: "",
    password: "",
    repPassword: "",
    dob: "",
    country: "",
  };
  const handleSubmit = (val, { setSubmitting }) => {
    try {
      console.log(val);
    } catch (error) {
      console.error("Error on submit", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col p-2 m-3 justify-center items-center min-h-screen">
        <div className="border p-5 border-slate-200 dark:border-slate-800 rounded-4xl bg-slate-100 dark:bg-slate-900">
          <div className="m-2">
            <h1 className="text-3xl font-semibold text-slate-8¥900 dark:text-slate-200 mb-1 text-center">
              Welcome {firstname}
            </h1>
            <p className="text-slate-900 dark:text-slate-600 text-center text-sm">
              Please complete your Registration before we can continue
              processing your request.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationYup}
            onSubmit={handleSubmit}
          >
            <Form className="max-w-md mx-auto">
              <div className="my-5">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
                >
                  Phone Number
                </label>
                <Field
                  name="phoneNumber"
                  type="text"
                  id="phoneNumber"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+62..."
                  required
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-600 text-xs mt-2"
                />
              </div>
              <div className="my-5">
                <label
                  htmlFor="password"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600 text-xs mt-2"
                />
              </div>
              <div className="my-5">
                <label
                  htmlFor="repPassword"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white after:content-['*'] after:text-red-500"
                >
                  Repeat Password
                </label>
                <Field
                  name="repPassword"
                  type="password"
                  id="repPassword"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="password"
                  required
                />
                <ErrorMessage
                  name="repPassword"
                  component="div"
                  className="text-red-600 text-xs mt-2"
                />
              </div>
              <div className="my-5">
                <label
                  htmlFor="dob"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white"
                >
                  Date of Birth
                </label>
                <Field
                  name="dob"
                  type="date"
                  id="dob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Date of Birth"
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="text-red-600 text-xs mt-2"
                />
              </div>
              <div className="my-5">
                <label
                  htmlFor="country"
                  className="block mb-1 text-md font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <Field
                  name="country"
                  type="text"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Country"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-600 text-xs mt-2"
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
            </Form>
          </Formik>
        </div>
        <footer className="text-center text-slate-500 dark:text-slate-200 text-sm mt-10">
          Sinau - Open Learning Management System
        </footer>
      </div>
    </div>
  );
}
