import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilicons from "../components/Lilicons";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";

const Details = ({ info, type, time }) => {
  const ref = useRef(null);
  return (
    <>
      {/* Render the Lilicons component with a reference and CSS classes */}
      <Lilicons
        reference={ref}
        className={"stroke-[5px] fill-light dark:fill-dark absolute"}
      />
      <li className="my-8 first:mt-0 last:mb-0 w-full mx-auto flex flex-col ">
        {/* Apply animation using motion: initial y-position and animation when in view */}
        <motion.div ref={ref} initial={{ y: 20 }} whileInView={{ y: 0 }}>
          <h3 className="capitalize font-bold text-2xl ">{type}</h3>
          <span className="capitalize font-medium text-dark/75 dark:text-dark/75">
            {time}
          </span>
          <p className="font-medium w-full">{info}</p>
        </motion.div>
      </li>
    </>
  );
};

const Articles = () => {
  const ref = useRef(null);
  // Use useScroll to get scrollYProgress for scroll tracking
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const Info = [
    {
      type: "Mumbai",
      time: "2019",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      type: "Delhi",
      time: "2020",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      type: "USA",
      time: "2021",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      type: "Africa",
      time: "2022",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      type: "Australia",
      time: "2023",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      type: "Russia",
      time: "2024",
      info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ];
  return (
    <>
      <div className="my-64 overflow-hidden">
        <div style={{ paddingBottom: "100px" }}>
          <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-white">
            Journey
          </h2>
        </div>
        <div
          ref={ref}
          className="w-full relative "
          style={{ paddingTop: "100px" }}
        >
          <motion.div
            style={{
              scaleY: scrollYProgress,
              left: "50.4%",
              top: "-40px",
            }}
            className="absolute w-[4px] h-full bg-dark origin-top dark:bg-light "
          />
          {Info.map((index, key) => {
            const even = (key + 1) % 2 === 0; // Check if the index is even
            return (
              <>
                {/* If the key is even display the content on the right hand side or else if the key is odd display the content on the lft hand side */}
                {even ? (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="w-[30%] flex flex-col text-center ml-4 bg-red-500 p-10 rounded-lg my-10 dark:bg-red-20000000
                    +m-3.5"
                    style={{ marginLeft: "644px" }}
                  >
                    {/* Call the function described above */}
                    <Details
                      key={key}
                      time={index.time}
                      type={index.type}
                      info={index.info}
                    />
                  </motion.ul>
                ) : (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="w-[30%] flex flex-col text-center ml-4 bg-blue-500 p-10 rounded-lg my-10 dark:bg-blue-200"
                    style={{ marginLeft: "246px" }}
                  >
                    <Details
                      key={key}
                      time={index.time}
                      type={index.type}
                      info={index.info}
                    />
                  </motion.ul>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Articles;
