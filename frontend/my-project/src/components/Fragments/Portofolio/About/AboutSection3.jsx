import AboutGraph from "../../../Elements/graph/AboutGraph";
import { motion } from "framer-motion";

const AboutSection3 = () => {
  const variants = {
    initial1: {
      opacity: 0,
      scale: 0,
    },
    animate1: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
    initial2: {
      opacity: 0,
    },
    animate2: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <>
      <section className="flex flex-col pb-28 w-full">
        <motion.div
          initial="initial1"
          whileInView="animate1"
          variants={variants}
          className="lg:mx-[5vw] mb-32 lg:w-[88.5vw] md:w-[80vw] md:mx-[9vw] sm:w-[80vw] sm:mx-[9vw] w-[90vw] mx-[3.4vw]"
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 lg:text-[5rem] md:text-[3rem] sm:text-[3rem] text-[3rem] mb-4">
            The Digital Journey
          </h1>
          <p className="text-white lg:w-[55vw] lg:text-[1.4rem] md:w-[75vw] md:text-[1.4rem] sm:w-[65vw] sm:text-[1.4rem] text-[1.3rem]">
            Established history of success in design and development,
            consistently delivering valuable insights and driving significant
            results.
          </p>
        </motion.div>
        <motion.div
          initial="initial2"
          whileInView="animate2"
          variants={variants}
          className="relative"
        >
          <AboutGraph></AboutGraph>
        </motion.div>
      </section>
    </>
  );
};
export default AboutSection3;
