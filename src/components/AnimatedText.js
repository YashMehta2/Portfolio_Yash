import React from "react";
import { motion } from "framer-motion";

// Define the animation variants for the entire text block
const quote = {
  initial: {
    opacity: 1, // Starting with full opacity
    // y: 50,
  },
  animate: {
    opacity: 1, // Ending with full opacity
    // y: 0,
    transition: {
      delay: 0.5, // Delay the animation start by 0.5 seconds
      staggerChildren: 0.08, // Stagger the animation of child elements
    },
  },
};

// Define the animation variants for individual words
const singleWord = {
  initial: {
    opacity: 0, // Starting with zero opacity (hidden)
    y: 50, // Starting 50 pixels below its final position
  },
  animate: {
    opacity: 1, // Ending with full opacity (visible)
    y: 0, // Ending at its final vertical position
    transition: {
      duration: 2, // Animation duration of 2 second
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <>
      <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ">
        <motion.h1
          className={`inline-block w-full text-dark font-bold capitalize text-5xl dark:text-light ${className}`}
          variants={quote}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={word + "-" + index}
              className="inline-block"
              variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </>
  );
};

export default AnimatedText;
