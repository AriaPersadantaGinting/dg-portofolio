/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion, useScroll, useTransform } from "framer-motion";
import ButttonContact from "../../Elements/Button/buttonContact";
import { useRef } from "react";

const ContactSection = (props) => {
  const { style, style2, style3 } = props;
  const contact1 = useRef(null);
  // const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll({
    target: contact1,
    offset: ["start end", "end end"],
  });

  // Transformasi berdasarkan scroll progress
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["-60vw", "0vw"]);
  const perspective = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const xs = useTransform(scrollYProgress, [0, 1], ["80vw", "0vw"]);
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
      <section className={`relative flex w-full ${style3}`}>
        <div className="relative flex justify-center lg:w-[95.5vw] md:w-[96vw] sm:w-[80vw] w-[80vw]  mx-auto overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            // whileInView="animate1"
            ref={contact1}
            variants={variants}
            className={`relative ${style}  lg:w-[35rem] lg:h-[24.9rem] md:w-[29rem] md:h-[24.9rem] sm:w-[25rem] sm:h-[24.9rem] w-[45vw] h-[30rem] rounded-l-xl`}
            style={{ opacity, x, perspective, scaleX: scrollYProgress }}
          ></motion.div>
          <motion.div
            ref={contact1}
            initial={{ opacity: 0 }}
            variants={variants}
            className={`relative ${style2} lg:w-[35rem] lg:h-[24.9rem] md:w-[29rem] md:h-[24.9rem]  sm:w-[25rem] sm:h-[24.9rem] w-[45vw] h-[30rem] rounded-r-xl`}
            style={{ opacity, x: xs }}
          ></motion.div>

          <div className="absolute lg:left-[10rem] lg:w-[70vw] lg:top-8 md:left-[8.2rem] md:w-[70vw] md:top-8 sm:left-[2.5rem] sm:w-[70vw] sm:top-8">
            <h2 className="lg:text-[4.5vw] md:text-[5.4vw] md:leading-[4rem] sm:text-[6vw] sm:leading-[4rem] text-[8vw] text-center">
              {" "}
              Are you ready to jumpstart your project?
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              variants={variants}
              className="lg:text-[1.5vw] lg:w-[70vw] lg:ml-[1rem] lg:mt-1 md:text-[1.9vw] md:w-[70vw] md:ml-[0.1rem] md:mt-1  sm:text-[2.5vw] sm:w-[70vw] sm:ml-[0.1rem] sm:mt-1 text-[1rem] w-[70vw] ml-[1.7rem] mt-1   text-center tracking-wide leading-[2.5rem]"
            >
              {" "}
              Reach out and let's bring your vision to life ✨. I'm available
              for both full-time and part-time roles, eager to push the
              boundaries of design and deliver outstanding results.
            </motion.p>
          </div>
        </div>
        <ButttonContact />
      </section>
    </>
  );
};
export default ContactSection;
