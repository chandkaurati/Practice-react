import { lazy, Suspense, useCallback, useMemo, useReducer, useRef, useState } from "react";
import "./App.css";
import Lazylading from "./componants/Lazylading";
import { createBrowserRouter, Link, Outlet, Router, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);
  const [value, setvalue] = useState("");
  const inputRef = useRef("");
  const val = Math.floor(Math.random() * 6 + 1);

  return (
     <main>
      <nav style={{display:"flex", gap:"5"}}>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet/>
      </Suspense>
     </main>
  )
}

export default App;
