import { useState } from "react";
import "./App.css";
import Logo from "./assets/Logo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="border border-slate-100 rounded-2xl p-4">
        <div className="flex justify-center">
          <img
            src="./src/assets/react.svg"
            alt="logo LMS"
            className="w-23"
          />
        </div>

        <h1 className="text-center text-4xl py-4 font-bold">Silahkan Login</h1>
        <input type="text" className="rounded-xl bg-white text-3xl"/>
      </div>
    </div>
  );
}

export default App;
