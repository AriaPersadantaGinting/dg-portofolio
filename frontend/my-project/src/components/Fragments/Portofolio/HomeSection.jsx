/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../../Elements/ui/text-generate-effect";
import { HoverBorderGradient } from "../../Elements/ui/hover-border-gradient";
import { ThreeDCardDemo } from "../../Elements/ui/3d-cardDemo";

const HomeSection = () => {
  const words =
    "Hi there! I'm Aria Persadanta Ginting—your go-to Fullstack Developer by night and Personal Trainer by day.";

  // const words2 = [
  //   {
  //     text: "Hi, ",
  //   },
  //   {
  //     text: "I'm ",
  //   },
  //   {
  //     text: "Aria ",
  //   },
  //   {
  //     text: "Persadanta ",
  //   },
  //   {
  //     text: "Ginting, ",
  //   },
  //   {
  //     text: "a ",
  //   },
  //   {
  //     text: "Creative ",
  //   },
  //   {
  //     text: "Web ",
  //   },
  //   {
  //     text: "Developer ",
  //   },
  //   {
  //     text: "with ",
  //   },
  //   {
  //     text: "a ",
  //   },
  //   {
  //     text: "passion ",
  //   },
  //   {
  //     text: "for ",
  //   },
  //   {
  //     text: "blending ",
  //   },
  //   {
  //     text: "design ",
  //   },
  //   {
  //     text: "and ",
  //   },
  //   {
  //     text: "technology. ",
  //   },
  //   {
  //     text: "I ",
  //   },
  //   {
  //     text: "craft ",
  //   },
  //   {
  //     text: "engaging ",
  //   },
  //   {
  //     text: "and ",
  //   },
  //   {
  //     text: "functional ",
  //   },
  //   {
  //     text: "websites ",
  //   },
  //   {
  //     text: "that ",
  //   },
  //   {
  //     text: "bring ",
  //   },
  //   {
  //     text: "your ",
  //   },
  //   {
  //     text: "digital ",
  //   },
  //   {
  //     text: "vision ",
  //   },
  //   {
  //     text: "to ",
  //   },
  //   {
  //     text: "life. ",
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];

  const variants = {
    h1Effect: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    pEffect: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 1,
        duration: 2,
      },
    },
    imgEffect: {
      opacity: 1,
      transition: {
        duration: 10,
      },
    },
  };

  return (
    <section
      className={`w-full lg:flex lg:flex-row md:flex md:flex-col transition-opacity duration-[3000ms] lg:overflow-hidden overflow-x-hidden`}
    >
      <div className="flex flex-col items-center mt-32 lg:mt-48 md:mt-32 sm:mt-32 lg:w-[62vw] lg:ml-10 md:w-[80vw] md:ml-[9.5vw]">
        <TextGenerateEffect
          className="text-[2.5rem] lg:text-[2.5rem] md:text-[2.8rem] bg-clip-text text-transparent bg-gradient-to-r from-[#7303c0] to-[#fdeff9] mb-6 font-suse"
          style="lg:ml-8 md:ml-8 sm:ml-14 ml-12 mx-4"
          duration={0.6}
          words={words}
        />
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={"pEffect"}
          variants={variants}
          className="text-[#ffff] ml-14 mr-14 text-[1.2rem]
           lg:text-[1.2rem] md:ml-8 md:text-[1.3rem] mb-6 tracking-widest"
        >
          Hi, I'm Aria Persadanta Ginting, a Creative Web Developer with a
          passion for blending design and technology. I craft engaging and
          functional websites that bring your digital vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 3.5 },
          }}
          className="flex lg:ml-[2.4vw] md:ml-[3vw] sm:ml-[8vw] ml-[12vw]  text-center lg:w-[55vw] md:w-[60vw] sm:w-[65vw] w-[70vw] mx-auto"
        >
          <HoverBorderGradient>
            <span>Download CV</span>
          </HoverBorderGradient>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView="imgEffect"
        variants={variants}
        className="ml-8 mr-8 mt-20 lg:ml-2 md:ml-2 lg:h-[40vw] md:mt-40 lg:mt-36 rounded-xl flex justify-center items-center relative"
      >
        <ThreeDCardDemo></ThreeDCardDemo>
      </motion.div>
    </section>
  );
};
export default HomeSection;
