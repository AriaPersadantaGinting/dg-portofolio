/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  //   setHomeTransition(true);
  // }, []);
  const variants = {
    h1Effect: {
      translateX: [-100, 0],
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    pEffect: {
      translateX: [-100, 0],
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
    btnEffect: {
      opacity: 1,
      transition: {
        duration: 3,
        delay: 1,
      },
    },
    imgEffect: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <section className={`w-full flex transition-opacity duration-[3000ms]`}>
      <div className="flex flex-col items-center mt-52 w-[50rem] lg:ml-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView="h1Effect"
          variants={variants}
          className="lg:text-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 mb-6 tracking-widest leading-tight font-suse"
        >
          Hey there! I'm Aria Persadanta Ginting—your go-to Fullstack Developer
          by night and Personal Trainer by day.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={"pEffect"}
          variants={variants}
          className="text-white lg:text-[1.2rem] mb-6 tracking-widest"
        >
          Hi, I'm Aria Persadanta Ginting, a Creative Web Developer with a
          passion for blending design and technology. I craft engaging and
          functional websites that bring your digital vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView="btnEffect"
          variants={variants}
          className={`bg-[#3d3a3c] flex justify-between lg:w-56 lg:px-4 lg:py-4 rounded-xl cursor-pointer transition-all duration-100 mr-[35.7rem]  ${
            isHovered
              ? "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
              : "bg-[#3d3a3c]"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative left-3 top-1 mt-1">
            <button
              className={`lg:text-[1.2rem] text-white font-bold font-mono transform transition-all duration-100 absolute ${
                isHovered
                  ? "translate-y-full opacity-0 text-black"
                  : "translate-y-0"
              }`}
            >
              DOWNLOAD CV
            </button>
            <button
              className={`lg:text-[1.2rem] text-white font-bold font-mono transform transition-all duration-100 ${
                !isHovered
                  ? "translate-y-[-100%]  opacity-0 text-black"
                  : "translate-y-0"
              }`}
            >
              DOWNLOAD CV
            </button>
          </div>
          <div
            className={`mr-8 relative rounded-full left-6 ${
              isHovered
                ? "bg-[#3d3a3c]"
                : "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
            }  w-10 h-10`}
          >
            <span
              className={`absolute -top-2 left-2.5 text-5xl transition-all duration-500 ${
                isHovered ? "text-black" : "text-black"
              }`}
            >
              {isHovered ? "" : "•"}
            </span>
            <span
              className={`absolute  -top-2 left-2.5 text-5xl transition-all duration-500 ${
                !isHovered ? "text-black" : "text-white"
              }`}
            >
              {isHovered ? "•" : ""}
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView="imgEffect"
        variants={variants}
        className="bg-blue-600 lg:ml-4 h-[31rem] mt-40 rounded-xl"
      >
        <img
          src="/src/assets/bg12.jpg"
          className="lg:w-[22rem] lg:h-[31rem] mx-auto rounded-xl"
          alt=""
        />
      </motion.div>
    </section>
  );
};
export default HomeSection;
