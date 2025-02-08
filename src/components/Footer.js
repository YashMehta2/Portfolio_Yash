import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t-2 border-solid border-dark font-medium dark:text-light dark:border-light">
        <Layout className="py-8 flex items-center justify-between">
          <span className="xs:text-xs">
            {new Date().getFullYear()}&copy; All rights Reserved.
          </span>
          <div className="flex items-center xs:text-xs ">
            Build with{" "}
            <span className="text-primary dark:text-primaryDark px-1">
              &#9825;
            </span>
            by&nbsp;
            <Link
              href="/"
              className="underline underline-offset-2"
              target={"_blank"}
            >
              Yash
            </Link>
          </div>
          <Link
            href="/"
            className="underline underline-offset-2 xs:text-xs"
            target={"_blank"}
          >
            Know Me
          </Link>
        </Layout>
      </footer>
    </>
  );
};

export default Footer;
