/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ButttonContact = (props) => {
  const { styles } = props;
  const [isHovered, setIsHovered] = useState(false);
  const button = useRef(null);
  const { scrollYProgress } = useScroll({
    target: button,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);
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
      y: 2,
      transition: {
        duration: 0.1,
      },
    },
    animate2: {
      y: -2,
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
  };
  return (
    <>
      <motion.div
        ref={button}
        className={`${styles} overflow-hidden`}
        style={{ opacity, scale }}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          to="/contact"
          className="flex absolute justify-center items-center lg:w-[16rem] lg:h-[4rem] lg:top-[19rem] lg:left-[39vw] md:w-[15rem] md:h-[4rem] md:left-[36vw] md:top-[20rem] sm:w-[15rem] sm:h-[4rem] sm:left-[33vw] sm:top-[20rem] w-[10rem] h-[3.5rem] left-[32vw] top-[26rem]  rounded-xl cursor-pointer bg-[#302830]  "
        >
          <div>
            <motion.p
              initial="initial"
              animate={isHovered ? "animate1" : "initial"}
              variants={variants}
              className="relative lg:top-3 md:top-3 sm:top-3 top-3 tracking-widest text-white text-[1.2rem]"
            >
              Let's Talk
            </motion.p>
            <motion.p
              initial="initial"
              animate={isHovered ? "animate2" : "initial2"}
              variants={variants}
              className="relative lg:bottom-3 md:bottom-3 sm:bottom-3  bottom-3 tracking-widest text-white text-[1.2rem]"
            >
              Let's Talk
            </motion.p>
          </div>
          <motion.span
            initial={{ color: "white" }}
            variants={variants}
            animate={isHovered ? "scaleSpan" : ""}
            className="lg:text-3xl lg:ml-5 lg:mb-1 md:text-3xl md:ml-5 md:mb-1 sm:text-3xl sm:ml-5 sm:mb-1 text-3xl ml-5 mb-1"
          >
            •
          </motion.span>
        </Link>
      </motion.div>
    </>
  );
};
export default ButttonContact;
