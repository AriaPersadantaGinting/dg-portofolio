/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useState } from "react";
const ButttonContact = (props) => {
  const { styles } = props;
  const [isHovered, setIsHovered] = useState(false);
  const variants = {
    animate1: {
      y: 24,
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    initial: {
      opacity: 1,
      y: 1,
      transition: {
        duration: 0.1,
      },
    },
    animate2: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    initial2: {
      opacity: 0,
      y: -24,
      transition: {
        duration: 0.1,
      },
    },
    scaleSpan: {
      y: -5,
      scale: 3,
      opacity: 0.7,
      filter: "brightness(150%)",
      color: "bg-[rgba(61,58,60,0.5)]",
      transition: {
        duration: 0.3,
      },
    },
    animate3: {
      opacity: [0, 0.5, 1],
      scale: [1.2, 1.1, 1],
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <>
      <motion.div
        whileInView="animate3"
        variants={variants}
        className={`bg-[#302830] relative  flex justify-around items-center ${styles}  py-6 rounded-xl cursor-pointer`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.button
          initial="initial"
          animate={isHovered ? "animate1" : "initial"}
          variants={variants}
          className={`text-white lg:text-[2vw] md:text-[1.8vw] left-[2rem] text-left  relative`}
        >
          Let's Talk
        </motion.button>
        <motion.button
          initial="initial"
          animate={isHovered ? "animate2" : "initial2"}
          variants={variants}
          className={`text-white lg:text-[2vw] md:text-[1.8vw] relative lg:-left-[4.4rem] md:-left-[3.4rem]`}
        >
          Let's Talk
        </motion.button>
        <motion.span
          initial={{ color: "white" }}
          variants={variants}
          animate={isHovered ? "scaleSpan" : ""}
          className="text-[2vw]  relative -left-[3vw]"
        >
          •
        </motion.span>
      </motion.div>
    </>
  );
};
export default ButttonContact;
