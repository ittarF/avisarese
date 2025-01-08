// PageWrapper.jsx - Create a wrapper component for animations
import { motion } from 'framer-motion';

const slideAnimation = {
  initial: {
    x: '100%',
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

const PageWrapper = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <motion.div
        variants={slideAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;