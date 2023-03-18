import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login";
import Reports from "./pages/Reports/Reports";
import Support from "./pages/Support";
import Products from "./pages/Products";
import Messages from "./pages/Messages";
import Documentations from "./pages/Documentations/Documentations";
import Footer from "./components/Footer/Footer";

const hello = () => {
  let nova = localStorage.getItem("nova");
  if (nova) return nova;
  else return "login";
};

function App() {
  const [nova, setNova] = useState(hello());
  let getNova = (nova) => {
    if (nova === "login") setNova("login");
    else setNova(nova);
  };

  useEffect(() => {
    localStorage.setItem("nova", nova);
  }, [nova]);

  return (
    <>
      <Router>
        <Navbar nova={nova} />
        <Routes>
          {nova === "login" ? (
            <Route path="/" exact element={<Login getnova={getNova} />}></Route>
          ) : (
            <Route>
              <Route path="/" element={<Home getnova={getNova} />}></Route>
              <Route path="/reports" element={<Reports />}></Route>
              <Route
                path="/documentations"
                element={<Documentations />}
              ></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/support" element={<Support />}></Route>
              <Route path="/messages" element={<Messages />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Route>
          )}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
