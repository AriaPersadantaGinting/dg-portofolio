/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ButttonContact from "../../Elements/Button/buttonContact";

const ContactSection = (props) => {
  const { styles, styles2, styles3 } = props;
  const variants = {
    animate1: {
      opacity: 1,
      scaleZ: 2,
      x: ["-39vw", "0vw"],
      perspective: 1000,
      transition: {
        duration: 2,
      },
    },
    animate2: {
      opacity: 1,
      x: ["39vw", "0vw"],
      perspective: 1000,
      transition: {
        duration: 2,
      },
    },
    animate3: {
      opacity: 1,
      // scaleY: 1.4,
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
      {/* <section
        className={`mt-20 ${styles3} overflow-hidden relative z-[1000] lg:w-full md:w-full`}
      >
        <div className="flex lg:w-[71rem] md:w-[50rem] mx-auto overflow-hidden relative z-[1001]">
          <motion.h1
            initial={{ scale: 1.4, scaleY: 1.2 }}
            variants={variants}
            whileInView="animate3"
            className={`text-white absolute lg:text-5xl text-center tracking-widest lg:leading-[4rem] md:leading-[3rem] lg:top-[10rem] lg:left-[5rem] lg:w-2/3 md:top-[15rem] md:w-[50rem] md:text-[2.5rem] md:left-8 z-[2222] ${styles}`}
          >
            Are you ready to jumpstart your project?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            className={`absolute lg:text-[1.1rem] text-center lg:tracking-widest lg:leading-[2.5rem] md:leading-[2rem] md:tracking-wide lg:top-[18rem] lg:left-[5rem] lg:w-2/3 md:w-[45rem] md:left-[6rem] md:text-[1.2rem] z-[2222] ${styles2}`}
          >
            Reach out and let's bring your vision to life ✨...
          </motion.p>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate1"
            className="bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500 lg:w-[35rem] lg:h-[26.9rem] md:w-[30rem] md:h-[23rem] rounded-l-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate2"
            className="bg-gradient-to-r from-green-500 via-[#24639b] to-[#6c5483] lg:w-[35rem] lg:h-[26.9rem] md:w-[30rem] md:h-[23rem] rounded-r-xl"
          ></motion.div>
        </div>
        <ButttonContact styles="lg:-top-[7rem] lg:left-[16rem] md:-top-[5rem] md:left-[10.5rem] z-[2222] md:w-52 md:py-4"></ButttonContact>
      </section> */}
      <section
        className={`mt-20 ${styles3} overflow-hidden relative z-[1000] lg:w-[98vw] md:w-[98.45vw]`}
      >
        <div className="flex lg:w-[92vw] md:w-[75vw] mx-auto overflow-hidden relative z-[1001]">
          <motion.h1
            initial={{ scale: 1.4, scaleY: 1.2 }}
            variants={variants}
            whileInView="animate3"
            className={`text-white absolute lg:text-[4vw] text-center tracking-widest lg:leading-[4rem] md:leading-[3rem] lg:w-[78.5vw] md:w-[60vw] md:text-[3vw] z-[2222] ${styles}`}
          >
            Are you ready to jumpstart your project?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            className={`absolute lg:text-[1.5vw] text-center lg:tracking-widest lg:leading-[3vw] md:leading-[3vw] md:tracking-wide lg:w-[71vw] md:w-[52vw] md:text-[1.3vw] z-[2222] ${styles2}`}
          >
            Reach out and let's bring your vision to life ✨. I'm available for
            both full-time and part-time roles, eager to push the boundaries of
            design and deliver outstanding results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate1"
            className="bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500 
        lg:w-[45vw] lg:h-[34.54vw] 
        md:w-[40vw] md:h-[28.8vw] 
        sm:w-[20rem] sm:h-[15rem] 
        rounded-l-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate2"
            className="bg-gradient-to-r from-green-500 via-[#24639b] to-[#6c5483] 
        lg:w-[45vw] lg:h-[34.54vw] 
       md:w-[40vw] md:h-[28.8vw] 
        sm:w-[20rem] sm:h-[15rem] 
        rounded-r-xl"
          ></motion.div>
        </div>
        <ButttonContact styles="lg:-top-[7vw] lg:left-[20.5vw] md:-top-[7.2vw] md:left-[24vw] z-[2222] lg:w-[18vw] lg:py-[1.5vw] md:w-[18vw] md:py-[1.4vw]"></ButttonContact>
      </section>
    </>
  );
};
export default ContactSection;
