import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./component/Register.jsx";
import RegisterHello from "./component/RegisterHello.jsx";
import DashboardLayout from "./component/DashboardLayout.jsx";
import Resume from "./component/Resume.jsx";
import AddMateri from "./component/AddMateri.jsx";
import ClassManagement from "./component/ClassManagement.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register-hello" element={<RegisterHello />}></Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Resume />}></Route>
          <Route path="add-materi" element={<AddMateri />}></Route>
          <Route path="class-management" element={<ClassManagement/>}/>
          <Route path="student-management" element={<ClassManagement/>}/>
          <Route path="course-management" element={<ClassManagement/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
