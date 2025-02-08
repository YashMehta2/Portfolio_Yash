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

            <h1
              className="text-5xl dark:text-light "
              style={{ textAlign: "center", marginTop: "-90px" }}
            >
              React Projects
            </h1>
            <section className="container" style={{ display: "flex", gap: 50 }}>
              <div className="sticky-wrapper" style={{ width: "80%" }}>
                <div className="container text-dark dark:text-light">
                  {/* While scrolling see  for the image key and display the text on the side of the image according to their image key. */}
                  {currentImageKey === 1 ? (
                    <>
                      <h1 className="py-5 text-3xl">
                        Android Customer Relationship Management App
                      </h1>
                      <p>
                        Customer relationship management (CRM) is a system for
                        managing a company’s interactions with current and
                        future customers. It often involves using technology to
                        organize, automate, and synchronize sales. Company
                        employee must keep track of current and future customers
                        to synchronize sales. Manually it is not possible for
                        the employee to keep records of all the leads. Customer
                        Relationship Management System helps to keep track of
                        number of leads converted by the employee. This System
                        helps to manage sales. This system is a combination of
                        both .Net and android technology.
                      </p>
                    </>
                  ) : currentImageKey === 2 ? (
                    <>
                      <h1 className="py-5 text-3xl">
                        Online Driver Hiring Android App
                      </h1>
                      <p>
                        Many people own a vehicle but cannot drive, hence they
                        prefer hiring a driver for long rides. Most of the
                        people desire to be at ease during their journey and
                        this can only be possible if the driver is decent &
                        experienced. This android based Driver Booking
                        application proposed here will help you find the best
                        drivers for your ride.
                      </p>
                      <p className="mt-5">
                        Both the users & drivers can access the application by
                        registering themselves on the system. The drivers can
                        set their profile by providing their driving experience
                        & can upload the necessary driving documents. The driver
                        & user can see the allotted ride details and can also
                        check the details of previous, upcoming & canceled
                        rides.
                      </p>
                    </>
                  ) : currentImageKey === 3 ? (
                    <>
                      <h1 className="py-5 text-3xl">
                        Android Blood Donation & Blood Bank Finder
                      </h1>
                      <p>
                        Finding a blood donor on time is very crucial as a
                        person’s life may depend on it. Hence, there is a need
                        to find a solution that will solve this issue & help
                        people find blood donors easily on time.
                      </p>
                      <p className="mt-5">
                        Using internet technology people can get connected from
                        almost anywhere. This same internet technology can be
                        utilized to find blood donors online with just one click
                        from the mobile phone. This web based android blood
                        donation application aims at helping out people to get
                        blood donors online in case of an emergency. Users can
                        access the application by creating an account and using
                        this application the users can either register for blood
                        donation to a blood bank or can raise a request to
                        receive blood.
                      </p>
                    </>
                  ) : currentImageKey === 4 ? (
                    <>
                      <h1 className="py-5 text-3xl">
                        Waste Food Management & Donation App
                      </h1>
                      <p>
                        A drastic increase can be seen in food waste. As per
                        data given by Food and Agriculture Organization
                        (http://www.fao.org/food-loss-and-food-waste/flw-data),
                        1/3rd of food produced for human consumption is wasted
                        globally, which accounts for almost 1.3 billion tons per
                        year. On the other hand, also as per WHO 20% of the
                        population face extreme food shortages. Hence there is a
                        need to come up with a solution that can avoid food
                        waste & can help feed the needy.
                      </p>
                      <p className="mt-5">
                        This android-based Food Waste Management system can
                        assist in collecting the leftover food from hotels &
                        restaurants to distribute among those in need. NGOs that
                        are helping poor communities to battle against
                        starvation & malnutrition can raise a request for food
                        supply from restaurants through this application. Once
                        the request is accepted, the NGOs can collect the food
                        from the restaurants for its distribution. In this way
                        this android-based food waste management system will
                        help restaurants to reduce food waste and will help in
                        feeding the poor and needy people.
                      </p>
                    </>
                  ) : (
                    <>
                      <h1 className="py-5 text-3xl">
                        Contactless IOT Doorbell & Security System
                      </h1>
                      We live in the 21st century where everything is preferred
                      to be fast contactless and automated. COVID has even more
                      increased the need for contactless systems. Well here we
                      propose a contactless doorbell as well as safety system
                      using IOT for automatic visitor recognition and alerting
                      home owner. The contactless doorbell uses a raspberry pi
                      controller to work along with a camera module and speaker
                      to perform automatic operations. This system will help
                      home owner know who has arrived at his/her door as well as
                      it will act as a security system when the owner is not at
                      home to alert on any robbery.
                    </>
                  )}
                </div>
              </div>
              <div style={{ marginTop: 25, width: "60%" }}>
                <motion.div
                  ref={carouselRef}
                  className="carousel1"
                  style={{ y }}
                >
                  {Images.map((index, key) => (
                    <motion.div key={key} className="py-4">
                      <Image
                        src={index.url}
                        key={key}
                        height="100%"
                        width="100%"
                        alt="images"
                        className="rounded-2xl"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Oss;
