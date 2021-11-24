import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";

import { Routes, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { auth } from "firebase";
import FindChallenge from "./Pages/FindChallenge";
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userName, setUserName] = React.useState("");

  return (
    <div className="App">
      <NavBar isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} userName={userName} />}
        />
        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setLoggedIn={setIsLoggedIn} />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/find-challenge"
          element={<FindChallenge setUserName={setUserName} />}
        />
      </Routes>
    </div>
  );
}

export default App;
