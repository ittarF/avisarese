import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Contatti from "./pages/Contatti";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      < Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Contatti" element={<Contatti />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;