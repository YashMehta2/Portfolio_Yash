import React from "react";
import { motion } from "framer-motion";

// Decribes the entrance effect when the user enters the screen or naviages from once screen to another
const TransitionEffect = () => {
  return (
    <>
      {/* Animation 1: Initial curtain-like animation */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primaryDark"
        // The animation will work from right to left
        initial={{ x: "100%", width: "100%" }} // Initial position and width
        animate={{ x: "0%", width: "0%" }} // Animation when it enters the screen
        // On exit, the animaiton will work from right to left
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }} // Exit animation when navigating away
        transition={{ duration: 0.8, ease: "easeInOut" }} //  Total Duration for the animation to take place
      />
      {/* Animation 2: Background animation */}
      {/* This animation will work after the first animation starts */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        initial={{ x: "100%", width: "100%" }} // Initial position and width
        animate={{ x: "0%", width: "0%" }} // Animation when it enters the screen
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }} // Delay after the first animation starts
      />
      {/* Animation 2: Background animation */}
      {/* This animation will work after the Second animation starts */}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        initial={{ x: "100%", width: "100%" }} // Initial position and width
        animate={{ x: "0%", width: "0%" }} // Animation when it enters the screen
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }} // Delay after the Second animation starts
      />
    </>
  );
};

export default TransitionEffect;
