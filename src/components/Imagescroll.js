import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Layout from "@/components/Layout";

import img5 from "../../public/images/scroll/5.webp";
import TransitionEffect from "./TransitionEffect";

const Images = [
  {
    url: img5,
  },
  {
    url: img5,
  },
  {
    url: img5,
  },
  {
    url: img5,
  },
  {
    url: img5,
  },
  {
    url: img5,
  },
  {
    url: img5,
  },
  {
    url: img5,
  },
  {
    url: img5,
  },
];

function Imagescroll() {
  const carouselRef = useRef(null);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);

  // Use the useScroll hook to track scrolling progress
  const { scrollYProgress } = useScroll({
    smooth: true,
  });

  // Create a transform function for the horizontal position of the carousel
  const x = useTransform(scrollYProgress, [0, 1], [0, carouselEndPosition]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    // Get the parent element of the carousel and the width of the scrollbar
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Calculate the initial position of the carousel
    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        // Calculate the new position based on the carousel's width, window width, and scrollbar width
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          parent.offsetLeft * 2;

        // Set the calculated position as the new end position
        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();

    // Update the position of the carousel when the window is resized
    const handleResize = () => {
      resetCarouselEndPosition();
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the animation gets over
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>Images</title>
      </Head>
      <TransitionEffect />
      <Layout>
        <main>
          <div>
            <section>
              <div className="container" style={{ height: "200vh" }}>
                <div className="sticky-wrapper">
                  <motion.div
                    ref={carouselRef}
                    className="carousel"
                    style={{ x }}
                  >
                    {Images.map((index, key) => (
                      <motion.div key={key} className="carousel__slideimage">
                        <Image
                          src={index?.url}
                          width="100%"
                          height="100%"
                          alt="images"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Imagescroll;
