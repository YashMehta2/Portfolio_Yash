import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden lg:right-8 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute xs:max-w-[170px] ">
      <div className="w-48 flex items-center justify-center relative">
        {/* Call Circular text, if you want to display the text ina circular path which will keep moving clockwise */}
        {/* See tailwind.config.js for "animate-spin-slow" in classname */}
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:myash299@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark h-20 p-2 xs:p-[10px] rounded-full hover:bg-light hover:text-dark  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
          target={"_blank"}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
