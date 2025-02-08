import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilicons from "../components/Lilicons";

const Details = ({ info, type, time }) => {
  const ref = useRef(null);
  return (
    <>
      <Lilicons
        reference={ref}
        className={"stroke-[5px] fill-light dark:fill-dark absolute"}
      />
      <li className="my-8 first:mt-0 last:mb-0 w-full mx-auto flex flex-col ">
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const Info = [
    {
      type: "Mumbai",
      time: "2019",
      info: "In Mumbai, I began my journey as a web developer. This bustling metropolis provided me with a solid foundation in web development. I worked on various projects, honing my skills in HTML, CSS, and JavaScript, and learned the importance of creating seamless user experiences.",
    },
    {
      type: "Delhi",
      time: "2020",
      info: "My next stop was Delhi, where I continued to grow as a web developer. In this vibrant city, I delved deeper into front-end technologies, particularly React.js. I collaborated with diverse teams on projects ranging from e-commerce platforms to corporate websites, gaining valuable experience in building dynamic web applications.",
    },
    {
      type: "USA",
      time: "2021",
      info: "My journey took me to the United States, a hub of innovation in web development. Here, I had the privilege of working on cutting-edge web applications, implementing advanced features, and ensuring cross-browser compatibility. Collaborating closely with design teams, I contributed to creating visually stunning and functional websites.",
    },
    {
      type: "Africa",
      time: "2022",
      info: "In Africa, I embarked on a unique chapter of my web development career. I had the opportunity to work on projects with a global impact, focusing on responsive design and accessibility. It was here that I gained insights into the importance of user-centered design in web development.",
    },
    {
      type: "Australia",
      time: "2023",
      info: "Australia was my next destination, where I continued to refine my skills as a web developer. I specialized in optimizing website performance and load times, ensuring a seamless browsing experience for users. Working in a diverse environment, I further expanded my skill set and tackled challenging projects.",
    },
    {
      type: "Russia",
      time: "2024",
      info: "My journey concluded in Russia, where I explored new horizons in web development. I dived into the world of web security and data protection, ensuring that websites I worked on were fortified against potential threats. My experience in Russia broadened my perspective on the ever-evolving landscape of web development.",
    },
  ];
  return (
    <>
      <div className="my-64 overflow-hidden">
        <div style={{ paddingBottom: "100px" }}>
          <h2 className="font-bold text-8xl mb-32 w-full text-center dark:text-white xs:text-5xl">
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
            className="absolute w-[4px] h-full bg-dark origin-top dark:bg-light lg:ml-5 xs:ml-6 "
          />
          {Info.map((index, key) => {
            const even = (key + 1) % 2 === 0;
            return (
              <>
                {even ? (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="w-[30%] flex flex-col text-center ml-4 xs:text-xs bg-red-500 p-10 rounded-lg my-10 dark:bg-red-200 lg:p-2 xs:ml-[61%] lg:w-[40%] xs:p-2 redjourney "
                  >
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
                    className="w-[30%] flex flex-col text-center ml-4 xs:text-xs bg-blue-500 p-10 rounded-lg my-10 xs:ml-[14%] dark:bg-blue-200 lg:p-2 lg:w-[40%] bluejourney"
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
