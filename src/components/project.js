import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/logo.png";
import project2 from "../../public/images/projects/ANPR.jpg";
import project3 from "../../public/images/projects/tour.jpg";
import project4 from "../../public/images/projects/dashboard.png";
import project5 from "../../public/images/projects/weather.png";
import project6 from "../../public/images/projects/gsap.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />

      <Image src={img} alt={title} className="w-full h-auto" />

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>

        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">
          {title}
        </h2>

        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          {/* <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit Project
          </Link> */}
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />

      <Image src={img} alt={title} className="w-full h-auto" />

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>

        <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>

        <div className=" flex items-center justify-between w-full">
          {/* <Link
            href={link}
            target="_blank"
            className="ml-4 text-lg font-semibold underline"
          >
            Visit
          </Link> */}
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <>
      {/* <TransitionEffect /> */}

      <main
        className="w-full mb-16 flex flex-col items-center justify-center dark:text-light"
        style={{ marginLeft: "-25%" }}
      >
        <div style={{ marginLeft: "50%", marginTop: "-8%" }}>
          <AnimatedText
            text="My Projects"
            className="text-4xl margintopproject"
          />
        </div>
        <div className="pt-12" style={{ marginLeft: "50%" }}>
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="PedeProtect"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="Otto-Poster Competition Winner"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link=""
                github="https://github.com/YashMehta2/GRAD_Part1.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="Automatic Number Plate Recognition System"
                img={project2}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link=""
                github="https://github.com/YashMehta2/ANPR_Project.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="Tour And Travel Website"
                img={project3}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="https://github.com/YashMehta2/Tour_and_Travels_Website.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Projects
                title="GSAP-Animations"
                img={project6}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="https://github.com/YashMehta2/GSAP_Animations.git"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Projects
                title="Weather Prediction Using CNN/RNN"
                img={project5}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="https://github.com/YashMehta2/CNN_RNN_Weather.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
              <Projects
                title="Graphs In React.js"
                img={project4}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="https://github.com/YashMehta2/React_Graphs.git"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
