import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLInk = motion(Link); //motion allows you to add animation and motion-related properties to components

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 xs:hidden">
      <MotionLInk
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-1xl font-bold border border-solid border-transparent dark:border-light"
        // If the user hovers his mouse over the text, the backgorund color of that div will keep changing
        whileHover={{
          backgroundColor: [
            "#121212", // Dark gray
            "rgba(131,58,180,1)", // Purple
            "rgba(253,29,29,1)", // Red
            "rgba(252,176,69,1)", // Orange
            "rgba(131,58,180,1)", // Purple
            "#121212", // Dark gray
          ],
          transition: { duration: 1, repeat: Infinity }, // The duration to complete one round of each color. And the animation will work infinite times.
        }}
        href="/"
      >
        YM
      </MotionLInk>
    </div>
  );
};

export default Logo;
