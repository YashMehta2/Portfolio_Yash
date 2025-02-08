import React from "react";
import { motion, useScroll } from "framer-motion";

const Lilcon = ({ reference }) => {
  // Use the useScroll hook to track scrolling progress based on a given target reference and offset
  const { scrollYProgress } = useScroll({
    target: reference, // Reference element for tracking scroll
    offset: ["center end", "center center"], // Offset positions for tracking
    // The first bracket represents the starting point of the scroll tracking.
    // The second bracket represents the ending point of the scroll tracking.
  });
  return (
    <>
      <figure className="absolute left-0 stroke-dark dark:stroke-light">
        <svg
          className="-rotate-90"
          width="75"
          height="75"
          viewBox="0 0 100 100"
        >
          <circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-1 stroke-primary fill-none dark:stroke-primaryDark"
          />
          <motion.circle
            cx="75"
            cy="50"
            r="20"
            className="stroke-[5px] fill-light dark:fill-dark"
            style={{ pathLength: scrollYProgress }}
          />
          <circle
            cx="75"
            cy="50"
            r="10"
            className="stroke-1 fill-primary animate-pulse dark:fill-primaryDark"
          />
        </svg>
      </figure>
    </>
  );
};

export default Lilcon;
