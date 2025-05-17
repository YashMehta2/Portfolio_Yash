import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      {/* Creates an underline animation for the active link */}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleclick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleclick}
    >
      {title}
      {/* Creates an underline animation for the active link on mobile */}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }
          dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  // Initialize state for the theme (light/dark mode) and mobile menu
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const handleclick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-32 py-6 w-full font-medium flex items-center justify-between dark:text-light relative lg:py-10 ">
      <button
        className="flex flex-col justify-center items-center hidden lg:flex xs:-ml-12"
        onClick={handleclick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm   ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden xs:hidden ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 text-3xl" />
          <CustomLink href="/about" title="About" className="mx-4 text-3xl" />
          {/* <CustomLink
            href="/education"
            title="Education"
            className="ml-4 text-3xl"
          /> */}
          <CustomLink
            href="/project"
            title="Project"
            className="ml-4 text-3xl"
          />
        </nav>

        <nav className="flex items-center justify-center">
          <motion.a
            href="https://github.com/Yashmehta2"
            target={"_blank"}
            whileHover={{ y: -2 }} // move the icon down by 2 on hover
            whileTap={{ scale: 0.9 }} // enlarge by 0.9, when the user clicks on the icon
            className="w-9 mx-3 "
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yash-mehta294"
            target={"_blank"}
            whileHover={{ y: -2 }} // move the icon down by 2 on hover
            whileTap={{ scale: 0.9 }} // enlarge by 0.9, when the user clicks on the icon
            className="w-9 mx-3"
          >
            <LinkedInIcon />
          </motion.a>

          {/* {Onclick of this button, change the mode of the system. If bydefault the mode is light then onclick of this button set it dark.} */}
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark" // For light mode set background color to light and text color to dark and for dark mode set backgorund color to dark and textcolor to light
            }`}
          >
            {/* {If the mode is light show a moon icon on the button and if the mode is dark than show a sun icon on the button} */}
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
      {/* {Used for mobile versions} */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] xs:min-w-[72vw] xs:max-h-[85vw] xs:mt-[30px] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleclick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleclick}
            />
            <CustomMobileLink
              href="/education"
              title="Education"
              className=""
              toggle={handleclick}
            />

            <CustomMobileLink
              href="/awards"
              title="Awards"
              className=""
              toggle={handleclick}
            />
          </nav>

          <nav className="flex items-center justify-center mt-2">
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 mr-3 sm:mx-1"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 mx-3 sm:mx-1"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 mx-3 sm:mx-1"
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://pinterest.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 mx-3 sm:mx-1"
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://dribbble.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 ml-3 sm:mx-1"
            >
              <DribbbleIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
