/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import ButttonContact from "../../Elements/Button/buttonContact";

const ContactSection = () => {
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
      <section className="mt-4 pb-48">
        <div className="flex w-[78rem] mx-auto overflow-hidden">
          <motion.h1
            initial={{ scale: 1.4, scaleY: 1.2 }}
            variants={variants}
            whileInView="animate3"
            className="text-white absolute text-6xl text-center tracking-widest leading-[5rem] top-[140.6rem] left-[15rem] w-2/3 z-[2222]"
          >
            Are you ready to jumpstart your project?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 3 } }}
            className="absolute text-2xl text-center tracking-widest leading-[2.5rem] top-[151.5rem] left-[15rem] w-2/3 z-[2222] "
          >
            Reach out and let's bring your vision to life ✨. I'm available for
            both full-time and part-time roles, eager to push the boundaries of
            design and deliver outstanding results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate1"
            className="bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500 w-1/2 h-[30rem] rounded-l-xl"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, perspective: 1000, scaleZ: 1, rotate: 50 }}
            variants={variants}
            whileInView="animate2"
            className="bg-gradient-to-r from-green-500 via-[#24639b] to-[#6c5483] w-1/2 rounded-r-xl"
          ></motion.div>
        </div>
        <ButttonContact styles="-top-[6rem] left-[19rem] z-[2222]"></ButttonContact>
      </section>
    </>
  );
};
export default ContactSection;
