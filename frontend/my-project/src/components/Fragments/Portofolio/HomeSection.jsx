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
    <section
      className={`w-full lg:flex lg:flex-row md:flex md:flex-col transition-opacity duration-[3000ms] lg:overflow-hidden overflow-x-hidden`} // Tambahkan `overflow-x-hidden` untuk memastikan tidak ada overflow horizontal
    >
      <div className="flex flex-col items-center mt-32 lg:mt-48 md:mt-32 sm:mt-32 lg:w-[62vw] lg:ml-10 md:w-[80vw] md:ml-[9.5vw] ">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView="h1Effect"
          variants={variants}
          className="text-[2.5rem] ml-14 mr-14 lg:text-[2.5rem] md:text-[2.8rem] md:ml-8 bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 mb-6 tracking-widest leading-tight font-suse"
        >
          Hey there! I'm Aria Persadanta Ginting—your go-to Fullstack Developer
          by night and Personal Trainer by day.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={"pEffect"}
          variants={variants}
          className="text-[#ffff] ml-14 mr-14 text-[1.2rem]
           lg:text-[1.2rem] md:ml-8 md:text-[1.3rem] mb-6 tracking-widest"
        >
          Hi, I'm Aria Persadanta Ginting, a Creative Web Developer with a
          passion for blending design and technology. I craft engaging and
          functional websites that bring your digital vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView="btnEffect"
          variants={variants}
          className={`bg-[#3d3a3c] flex justify-between w-64 h-16 py-5 mt-2  lg:w-[18vw] lg:mr-[40vw] md:w-[23vw] lg:px-[1vw] lg:py-[1.5vw] md:px-[1.5vw] md:py-[1.8vw] md:ml-[2vw] rounded-xl cursor-pointer transition-all duration-100  ${
            isHovered
              ? "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
              : "bg-[#3d3a3c]"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView="imgEffect"
        variants={variants}
        className="ml-8 mr-8 mt-20 lg:ml-2 md:ml-2 lg:h-[40vw] md:mt-40 lg:mt-36 rounded-xl flex justify-center items-center"
      >
        <img
          src="/src/assets/bg12.jpg"
          className="w-[80vw] h-[100vw] lg:w-[27.8vw] lg:h-[40vw] md:w-[70%] md:h-[80vw] mx-auto rounded-xl" // Ubah width pada ukuran md ke 100%
          alt=""
        />
      </motion.div>
    </section>
  );
};
export default HomeSection;
