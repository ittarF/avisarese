// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from "../pages/Homepage";
import Contatti from "../pages/Contatti";
import Donazione from "../pages/Donazione";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/Contatti" element={<Contatti />} />
        <Route path="/Donazione" element={<Donazione />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;