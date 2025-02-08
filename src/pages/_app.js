import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence, useScroll, useSpring, motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Use the useScroll hook to track scroll progress
  const { scrollYProgress } = useScroll();

  // Create a spring animation for scaling the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, // Higher values will create more sudden movement. Set to 100 by default.
    damping: 30, // Strength of opposing force. If set to 0, spring will oscillate indefinitely. Set to 10 by default.
    restDelta: 0.001, // End animation if distance is below this value and speed is below restSpeed. When animation ends, spring gets “snapped” to. Set to 0.01 by default
  });
  return (
    <>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}
      >
        <Navbar />
        {/*  mode="wait" will wait for exit animations to complete */}
        {/* This setup is neccesary in order for framer motion to work */}
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />;
          {/* At the top of the screen a progree bar will be shown accroding to the scroll progress of the user. The color is purple(primary), but if the mode is dark, the color will be blue(primary dark) */}
          <motion.div
            className="progress-bar bg-primary dark:bg-primaryDark lg:hidden xs:flex"
            style={{ scaleX }}
          />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
