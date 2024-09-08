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
      x: ["-39rem", 0],
      perspective: 1000,
      transition: {
        duration: 2,
      },
    },
    animate2: {
      opacity: 1,
      x: ["39rem", 0],
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
      <section className={`mt-4 ${styles3}`}>
        <div className="flex w-[71rem]  mx-auto overflow-hidden">
          <motion.h1
            initial={{ scale: 1.4, scaleY: 1.2 }}
            variants={variants}
            whileInView="animate3"
            className={`text-white absolute text-5xl text-center tracking-widest leading-[4rem] top-[137.6rem] left-[13rem] w-2/3 z-[2222]  ${styles}`}
          >
            Are you ready to jumpstart your project?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            className={`absolute text-[1.1rem] text-center tracking-widest leading-[2.5rem] top-[146.5rem] left-[13rem] w-2/3 z-[2222] ${styles2}`}
          >
            Reach out and let's bring your vision to life ✨. I'm available for
            both full-time and part-time roles, eager to push the boundaries of
            design and deliver outstanding results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate1"
            className="bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500 lg:w-[35rem] lg:h-[26.9rem] rounded-l-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate2"
            className="bg-gradient-to-r from-green-500 via-[#24639b] to-[#6c5483] lg:w-[35rem] lg:h-[26.9rem] rounded-r-xl"
          ></motion.div>
        </div>
        <ButttonContact styles="lg:-top-[7rem] lg:left-[16rem] z-[2222]"></ButttonContact>
      </section>
    </>
  );
};
export default ContactSection;
