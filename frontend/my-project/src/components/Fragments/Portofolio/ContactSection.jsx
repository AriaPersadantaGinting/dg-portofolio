/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ButttonContact from "../../Elements/Button/buttonContact";

const ContactSection = (props) => {
  const { styles, styles2, styles3 } = props;
  const variants = {
    animate1: {
      opacity: 1,
      x: ["-30vw", "0vw"],
      perspective: 1000,
      transition: {
        duration: 2,
      },
    },
    animate2: {
      opacity: 1,
      x: ["30vw", "0vw"],
      transition: {
        duration: 2,
      },
    },
    animate3: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
      },
    },
    display1: {
      display: "none",
      delay: 5,
    },
  };
  return (
    <>
      <section className="relative flex w-full mt-10">
        <div className="relative flex justify-center lg:w-[95.5vw] md:w-[96vw] sm:w-[80vw] w-[80vw]  mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView="animate1"
            variants={variants}
            className="relative bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500 lg:w-[35rem] lg:h-[24.9rem] md:w-[29rem] md:h-[24.9rem] sm:w-[25rem] sm:h-[24.9rem] w-[45vw] h-[30rem] rounded-l-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView="animate2"
            variants={variants}
            className="relative bg-gradient-to-r from-green-500 via-[#24639b] to-[#6c5483] lg:w-[35rem] lg:h-[24.9rem] md:w-[29rem] md:h-[24.9rem]  sm:w-[25rem] sm:h-[24.9rem] w-[45vw] h-[30rem] rounded-r-xl"
          ></motion.div>

          <div className="absolute lg:left-[10rem] lg:w-[70vw] lg:top-8 md:left-[8.2rem] md:w-[70vw] md:top-8 sm:left-[2.5rem] sm:w-[70vw] sm:top-8">
            <h2 className="lg:text-[4.5vw] md:text-[5.4vw] md:leading-[4rem] sm:text-[6vw] sm:leading-[4rem] text-[8vw] text-center">
              {" "}
              Are you ready to jumpstart your project?
            </h2>
            <p className="lg:text-[1.5vw] lg:w-[70vw] lg:ml-[1rem] lg:mt-1 md:text-[1.9vw] md:w-[70vw] md:ml-[0.1rem] md:mt-1  sm:text-[2.5vw] sm:w-[70vw] sm:ml-[0.1rem] sm:mt-1 text-[1rem] w-[70vw] ml-[1.7rem] mt-1   text-center tracking-wide leading-[2.5rem]">
              {" "}
              Reach out and let's bring your vision to life ✨. I'm available
              for both full-time and part-time roles, eager to push the
              boundaries of design and deliver outstanding results.
            </p>
          </div>
        </div>
        <ButttonContact />
      </section>
    </>
  );
};
export default ContactSection;
