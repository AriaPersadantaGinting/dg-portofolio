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
      <section className="flex flex-col pb-28 ">
        <motion.div
          initial="initial1"
          whileInView="animate1"
          variants={variants}
          className="ml-16 mb-32"
        >
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 text-[5rem] mb-8">
            The Digital Journey
          </h1>
          <p className="text-white lg:w-1/2 lg:text-[1.4rem]">
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
          <div className=" w-[1px] h-[40rem] ml-[4rem] z-[999] bg-white absolute"></div>
          <AboutGraph styles="-top-[2rem] left-[3.3rem]"></AboutGraph>
          <AboutGraph styles="-top-[3.5rem] left-[3.3rem] bg-res-500"></AboutGraph>
          <AboutGraph styles="-top-[5rem] left-[3.3rem]"></AboutGraph>
        </motion.div>
      </section>
    </>
  );
};
export default AboutSection3;
