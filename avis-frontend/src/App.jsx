import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Contatti from "./pages/Contatti";
import Footer from "./components/Footer";
import Donazione from "./pages/Donazione";

function App() {
  return (
    <Router>
      < Navbar />

        <Routes>
          <Route path="/Contatti" element={<Contatti />} />
          <Route path="/Donazione" element={<Donazione />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;