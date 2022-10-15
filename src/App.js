import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Support from "./pages/Support";
import Products from "./pages/Products";
import Messages from "./pages/Messages";
import Documentations from "./pages/Documentations";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/documentations" element={<Documentations />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
