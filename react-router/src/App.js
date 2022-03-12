import React from "react";
import "./App.css";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Login from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user } = useAuth0();

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Nav />
          hello welcome to react-routers
          <div className="app-body">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
