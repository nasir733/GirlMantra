import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
