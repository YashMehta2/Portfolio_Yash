import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";
import AnimatedText from "./AnimatedText";

const Details = ({ info, type, time, place }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
      style={{ textAlign: "left" }}
    >
      <Lilcon reference={ref} />
      <motion.div whileInView={{ y: 0 }}>
        <h3 className="capitalize font-bold text-2xl ">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <>
      <div className="my-20">
        <AnimatedText text="Education" className="text-4xl mb-16 " />
        <div
          ref={ref}
          className="w-[75%] mx-auto relative dark:text-primaryDark"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
          />
          <ul className="w-full flex flex-col justify-between items-start ml-4">
            <Details
              type="Bachelor of Technology In Computer Engineering"
              time="2018-2024"
              place="Mukesh Patel School of Technology Management and Engineering"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            />
            <Details
              type="Master Of Science In Computer and Information Science"
              time="2025-2026"
              place="Syracuse University"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
