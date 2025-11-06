import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./component/Register.jsx";
import RegisterHello from "./component/RegisterHello.jsx";
import DashboardLayout from "./component/DashboardLayout.jsx";
import Resume from "./component/Resume.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/register-hello" element={<RegisterHello />}></Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="home" element={<Resume />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
