import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <div className="bg-blue-100">
    <Router>
      < Navbar />
        <AnimatedRoutes />
      <Footer />
    </Router>
    </div>
  );
}

export default App;