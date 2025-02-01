// AnimatedRoutes.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from "../pages/Homepage";
import Contatti from "../pages/Contatti";
import Donazione from "../pages/Donazione";
import Chisiamo from "../pages/Chisiamo";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/donazione" element={<Donazione />} />
        <Route path="/chisiamo" element={<Chisiamo />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;