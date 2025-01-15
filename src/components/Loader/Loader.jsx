import React from 'react';
import { motion } from 'framer-motion';

const FullscreenDarkLoader = () => {
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const dotVariants = {
    animate: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        className="relative w-16 h-16"
        animate="animate"
        variants={containerVariants}
      >
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute w-4 h-4 bg-blue-500 rounded-full"
            style={{
              top: index === 0 || index === 1 ? 0 : "auto",
              bottom: index === 2 || index === 3 ? 0 : "auto",
              left: index === 0 || index === 3 ? 0 : "auto",
              right: index === 1 || index === 2 ? 0 : "auto",
            }}
            variants={dotVariants}
            animate="animate"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default FullscreenDarkLoader;