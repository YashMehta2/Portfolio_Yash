import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";

import Articles from "@/components/articles";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInview = useInView(ref, { once: true }); // Check if the component is in view

  useEffect(() => {
    if (isInview) {
      motionValue.set(value); // Set the motion value when the component is in view
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0); // Update the displayed value as animation progresses
        // When in view, the numbers starts from 0 and moves all the way upto the number provided to it. The numbers are provided via props.
      }
    });
  }, [springValue, value]);

  return <span ref={ref}> </span>;
};

const about = () => {
  const titleText = "Biography";
  const titleLetters = titleText.split(""); // Split the title text into individual letters
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="text-4xl mb-16 lg:!text-6xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start lg:!text-3xl lg:order-2 lg:col-span-8 lg:items-center lg:text-6xl">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 dark:text-light/75 ">
                {titleLetters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ rotate: 0, opacity: 0 }} // initial position of the subtitle, before the animation starts
                    whileInView={{ rotateY: 360, opacity: 1 }} // when in view, rotate each letters 360 degress and make them visible(opacity)
                    viewport={{ once: true }} // If set true, the animation will occure only once
                    transition={{ duration: 2, delay: index * 0.2 }} // Total duration for the animation to get over and delay after each letters in the title
                    style={{ display: "inline-block" }}
                  >
                    {/* // Animate individual letters with framer-motion */}
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </h2>
              <p className="font-medium xs:text-xl">
                Hi, I am Yash Mehta, a frontend and software developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 2 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className=" my-4 font-medium xs:text-xl">
                I believe that design is about more than just making things look
                pretty – it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium xs:text-xl">
                Whether I am working on a website, software, mobile app, or
                other digital product, I bring my commitment to design
                excellence and user-centered thinking to every project I work
                on. I look forward to the opportunity to bring my skills and
                passion to your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light lg:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light lg:order-1 lg:col-span-8" />
              <Image
                src={profilePic}
                alt="Text"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between lg:col-span-8 lg:flex-row lg:items-center lg:order-3">
              <div className="flex flex-col items-end justify-center lg:items-start">
                <span className="inline-block text-5xl font-bold xs:text-2xl">
                  <AnimatedNumber value="20" />+
                </span>
                <h2 className="text-3xl xs:text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center lg:items-start">
                <span className="inline-block text-5xl font-bold  xs:text-2xl">
                  <AnimatedNumber value="10" />+
                </span>
                <h2 className="text-3xl xs:text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center lg:items-start">
                <span className="inline-block text-5xl font-bold xs:text-2xl">
                  <AnimatedNumber value="2" />+
                </span>
                <h2 className="text-3xl xs:text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          {/* <Articles /> */}
        </Layout>
      </main>
    </>
  );
};

export default about;
