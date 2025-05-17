import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="w-full h-auto lg:w-full lg:inline-block md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-2xl font-medium">
                As a skilled Frontend Software developer, I am dedicated to
                turning ideas into innovative applications. Explore my latest
                projects and articles, showcasing my expertise in Software
                Development, Web development and App Development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/YashMehta_FrontEnddeveloper_Resume.pdf"
                  target={"_blank"}
                  className="flex items-center xs:text-lg dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light bg-dark text-light p-2.5 px-6 rounded-lg text-4xl hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-8 ml-1 xs:w-5"} />
                </Link>
                <Link
                  href="mailto:myash299@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-4xl font-medium capitalize text-dark underline dark:text-light xs:text-3xl"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className="absolute right-8 bottom-8 inline-block w-24 lg:hidden">
          <Image src={lightBulb} alt="Codebucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
