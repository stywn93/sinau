import React, { useRef, useState } from "react";
import Editor from "./Editor";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";

const Delta = Quill.import("delta");

export default function AddMateri() {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [readOnly, setReadOnly] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Not a valid email")
      .required("Email is required"),
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
  });

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  return (
    <div>
      {/* use Formik Library to simplify process */}
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(val) => {
          localStorage.removeItem("users");
          setUsers({
            email: val.email,
            firstName: val.firstName,
            lastName: val.lastName,
          });
          Toastify({
            text: "Data Saved!",
            duration: 1500,
          }).showToast();
          setTimeout(() => {
            navigate("/register-hello");
          }, 1500);
        }}
      >
        <Form className="max-w-md mx-auto">
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
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-2 text-xs text-red-600"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="firstName"
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
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="mt-2 text-xs text-red-600 error"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="lastName"
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
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="mt-2 text-xs text-red-600 error"
            />
          </div>

          <div className="flex flex-col mb-4 sm:flex-row justify-evenly gap-4">
            <Link
              to="/"
              className="flex-1 text-slate-900 dark:text-slate-50 font-medium rounded-xl text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:underline"
            >
              to Login Page
            </Link>
            <button
              type="submit"
              className="flex-1 text-slate-100 dark:text-slate-900 bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-xl text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-slate-100 dark:hover:bg-slate-50 dark:focus:ring-slate-800 cursor-pointer"
            >
              Continue
            </button>
          </div>
        </Form>
      </Formik>
      <Editor
        ref={quillRef}
        readOnly={readOnly}
        defaultValue={new Delta()
          .insert("Hello there")
          .insert("\n", { header: 1 })
          .insert("Some ")
          .insert("initial", { bold: true })
          .insert(" ")
          .insert("content", { underline: true })
          .insert("\n")}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      />
      <div>
        <label>
          Read Only:{" "}
          <input
            type="checkbox"
            value={readOnly}
            onChange={(e) => setReadOnly(e.target.checked)}
          />
        </label>
        <button
          className="ml-auto"
          type="button"
          onClick={() => {
            alert(quillRef.current?.getLength());
          }}
        >
          Get Content Length
        </button>
      </div>
      <div className="my-2.5 mx-0">
        <div className="state-title">Current Range:</div>
        {range ? JSON.stringify(range) : "Empty"}
      </div>
      <div className="state">
        <div className="state-title">Last Change:</div>
        {lastChange ? JSON.stringify(lastChange.ops) : "Empty"}
      </div>
    </div>
  );
}
