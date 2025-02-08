import React from "react";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

function education() {
  return (
    <>
      <Head>
        <title>Education</title>
      </Head>
      <TransitionEffect />
      <Education />
      <Experience />
    </>
  );
}

export default education;
