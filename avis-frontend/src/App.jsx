import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Contatti from "./components/Contatti";

function App() {
  return (
    <Router>
      < Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Contatti" element={<Contatti />} />
        </Routes>
    </Router>
  );
}

export default App;