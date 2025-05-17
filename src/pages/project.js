import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import image1 from "../../public/images/oss/project1.webp";
import image2 from "../../public/images/oss/project2.webp";
import image3 from "../../public/images/oss/project3.webp";
import image4 from "../../public/images/oss/project4.webp";
import image5 from "../../public/images/oss/project5.webp";
import { motion, useTransform, useScroll } from "framer-motion";
import Project from "@/components/project";

const Images = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
  {
    url: image4,
  },
  {
    url: image5,
  },
];

function Oss() {
  const carouselRef = useRef(null);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0); // State for the carousel end position
  const [currentImageKey, setCurrentImageKey] = useState(null); // State for the current image key
  // Use useScroll to get scrollYProgress for smooth scrolling
  const { scrollYProgress } = useScroll({
    smooth: true,
  });

  // Use useTransform to map scroll position to a range
  // Create a transform function for the verticle position of the carousel
  const y = useTransform(
    scrollYProgress,
    [carouselRef, carouselEndPosition],
    [0, carouselEndPosition]
  );

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    // Get the parent element of the carousel and the height of the scrollbar
    const scrollbarHeight =
      window.innerHeight - document.documentElement.clientHeight;
    // Calculate the initial position of the carousel
    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        // Calculate the new position based on the carousel's height, window height, and scrollbar height
        const newPosition =
          carouselRef.current.clientHeight -
          window.innerHeight +
          scrollbarHeight +
          parent.offsetTop * 2;
        // Set the calculated position as the new end position
        setCarouselEndPosition(-newPosition);
      }
    };
    resetCarouselEndPosition();
    const handleResize = () => {
      resetCarouselEndPosition();
    };

    const handleScroll = () => {
      const currentIndex = Math.floor(
        scrollYProgress.get() * Images.length - 0.7 // Change according to the height of the image or else if you want to change the trigger point for the images
      );

      if (currentIndex >= 0 && currentIndex < Images.length) {
        const newImageKey = currentIndex + 1;

        // know the image key while scrolling
        setCurrentImageKey(newImageKey);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <TransitionEffect />
      <Layout>
        <main>
          <div className={styles.container}>
            <section>
              <div className="container">
                <Project />
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Oss;
