import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Onhover, enlarge the thing by a scale of 1.05
      initial={{ x: 0, y: 0 }} // Initial positions for each icon before the aniamtions
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} // When the user scrolls and reaches that div, the icons will disperse to the location specified for each icon. (The position for x and y are passed as props )
      viewport={{ once: false }} // Describe how many time you whant the animations to occur. If you want the animations to occur infinite times set once as false or else true.
      className="cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 py-3 px-6 shadow-dark absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center lg:text-6xl lg:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer p-8 shadow-dark flex items-center justify-center lg:p-6 md:p-4 rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark"
        >
          Technical Skills
        </motion.div>
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="HTML+CSS" x="-25vw" y="2vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="Wordpress" x="-5vw" y="-10vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="Javascript" x="20vw" y="6vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="ReactJS" x="0vw" y="12vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="React Native" x="15vw" y="-12vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="Python" x="32vw" y="-5vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="SQL" x="0vw" y="-20vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="Node.js" x="-25vw" y="18vw" />
        {/* Name on the Div, the position of that Div when the div is in view */}
        <Skill name="FlutterFlow" x="18vw" y="18vw" />
        <Skill name="Git" x="0vw" y="18vw" />
        <Skill name="Chart.js" x="-10vw" y="-18vw" />
        <Skill name="Tableau" x="-10vw" y="-5vw" />
      </div>
    </>
  );
};

export default Skills;
