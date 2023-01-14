import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Reports from "./components/Reports/Reports";
import Support from "./pages/Support";
import Products from "./pages/Products";
import Messages from "./pages/Messages";
import Documentations from "./pages/Documentations/Documentations";
import Footer from "./components/Footer/Footer";

function App() {
  const [nova, setNova] = useState("login");
  let getNova = (nova) => {
    setNova(nova);
  };

  return (
    <>
      <Router>
        <Navbar nova={nova} />
        <Routes>
          <Route path="/" exact element={<Login getnova={getNova} />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/documentations" element={<Documentations />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
