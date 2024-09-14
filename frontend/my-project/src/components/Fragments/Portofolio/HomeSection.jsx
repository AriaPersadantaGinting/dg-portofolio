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
    // <section
    //   className={`lg:w-full md:w-[58rem] lg:flex lg:flex-row md:flex md:flex-col transition-opacity duration-[3000ms] lg:overflow-x-hidden`}
    // >
    //   <div className="flex flex-col items-center lg:mt-52 md:mt-24 lg:w-[50rem] lg:ml-10 md:w-[50rem] md:ml-14">
    //     <motion.h2
    //       initial={{ opacity: 0 }}
    //       whileInView="h1Effect"
    //       variants={variants}
    //       className="lg:text-[2.5rem] md:text-[2.8rem] md:ml-8 bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 mb-6 tracking-widest leading-tight font-suse"
    //     >
    //       Hey there! I'm Aria Persadanta Ginting—your go-to Fullstack Developer
    //       by night and Personal Trainer by day.
    //     </motion.h2>
    //     <motion.p
    //       initial={{ opacity: 0 }}
    //       whileInView={"pEffect"}
    //       variants={variants}
    //       className="text-[#ffff] lg:text-[1.2rem] md:ml-8 md:text-[1.3rem] mb-6 tracking-widest"
    //     >
    //       Hi, I'm Aria Persadanta Ginting, a Creative Web Developer with a
    //       passion for blending design and technology. I craft engaging and
    //       functional websites that bring your digital vision to life.
    //     </motion.p>
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView="btnEffect"
    //       variants={variants}
    //       className={`bg-[#3d3a3c] flex justify-between lg:w-56 md:w-56 lg:px-4 lg:py-4 md:px-4 md:py-3 md:ml-14 rounded-xl cursor-pointer transition-all duration-100 mr-[35.7rem]  ${
    //         isHovered
    //           ? "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
    //           : "bg-[#3d3a3c]"
    //       }`}
    //       onMouseEnter={handleMouseEnter}
    //       onMouseLeave={handleMouseLeave}
    //     >
    //       <div className="relative lg:left-3 lg:top-1 lg:mt-1 md:left-3 md:top-[0.4rem] ">
    //         <button
    //           className={`lg:text-[1.2rem] md:text-[1.2rem] text-[#ffff] font-bold font-mono transform transition-all duration-100 absolute ${
    //             isHovered
    //               ? "translate-y-full opacity-0 text-[#000000]"
    //               : "translate-y-0"
    //           }`}
    //         >
    //           DOWNLOAD CV
    //         </button>
    //         <button
    //           className={`lg:text-[1.2rem] md:text-[1.2rem] text-[#ffff] font-bold font-mono transform transition-all duration-100 ${
    //             !isHovered
    //               ? "translate-y-[-100%]  opacity-0 text-[#000000]"
    //               : "translate-y-0"
    //           }`}
    //         >
    //           DOWNLOAD CV
    //         </button>
    //       </div>
    //       <div
    //         className={`mr-8 relative rounded-full left-6 ${
    //           isHovered
    //             ? "bg-[#3d3a3c]"
    //             : "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
    //         }  w-10 h-10`}
    //       >
    //         <span
    //           className={`absolute -top-2 left-2.5 text-5xl transition-all duration-500 ${
    //             isHovered ? "text-[#000000]" : "text-[#000000]"
    //           }`}
    //         >
    //           {isHovered ? "" : "•"}
    //         </span>
    //         <span
    //           className={`absolute  -top-2 left-2.5 text-5xl transition-all duration-500 ${
    //             !isHovered ? "text-[#000000]" : "text-[#ffff]"
    //           }`}
    //         >
    //           {isHovered ? "•" : ""}
    //         </span>
    //       </div>
    //     </motion.div>
    //   </div>
    //   <motion.div
    //     initial={{ opacity: 0 }}
    //     whileInView="imgEffect"
    //     variants={variants}
    //     className="lg:ml-2 md:ml-4 lg:h-[31rem] mt-40 rounded-xl"
    //   >
    //     <img
    //       src="/src/assets/bg12.jpg"
    //       className="lg:w-[22rem] lg:h-[31rem] lg:ml-2 md:w-[42rem] md:ml-[6.5rem] md:h-[45rem] mx-auto rounded-xl"
    //       alt=""
    //     />
    //   </motion.div>
    // </section>

    <section
      className={`lg:w-full md:w-full lg:flex lg:flex-row md:flex md:flex-col transition-opacity duration-[3000ms] lg:overflow-hidden overflow-x-hidden`} // Tambahkan `overflow-x-hidden` untuk memastikan tidak ada overflow horizontal
    >
      <div className="flex flex-col items-center lg:mt-52 md:mt-28  lg:w-[62vw] lg:ml-10 md:w-[80vw]  md:ml-[9.5vw]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView="h1Effect"
          variants={variants}
          className="lg:text-[2.5rem] md:text-[2.8rem] md:ml-8 bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 mb-6 tracking-widest leading-tight font-suse"
        >
          Hey there! I'm Aria Persadanta Ginting—your go-to Fullstack Developer
          by night and Personal Trainer by day.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={"pEffect"}
          variants={variants}
          className="text-[#ffff] lg:text-[1.2rem] md:ml-8 md:text-[1.3rem] mb-6 tracking-widest"
        >
          Hi, I'm Aria Persadanta Ginting, a Creative Web Developer with a
          passion for blending design and technology. I craft engaging and
          functional websites that bring your digital vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView="btnEffect"
          variants={variants}
          className={`bg-[#3d3a3c] flex justify-between lg:w-[18vw] lg:mr-[40vw] md:w-[23vw] lg:px-[1vw] lg:py-[1.5vw] md:px-[1.5vw] md:py-[1.8vw] md:ml-[2vw] rounded-xl cursor-pointer transition-all duration-100  ${
            isHovered
              ? "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
              : "bg-[#3d3a3c]"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative lg:left-[1vw] lg:top-1 lg:mt-1 md:left-[1vw] md:top-[0.3vw]">
            <button
              className={`lg:text-[1.4vw] md:text-[1.9vw] text-[#ffff] font-bold font-mono transform transition-all duration-100 absolute ${
                isHovered
                  ? "translate-y-full opacity-0 text-[#000000]"
                  : "translate-y-0"
              }`}
            >
              DOWNLOAD CV
            </button>
            <button
              className={`lg:text-[1.5vw] md:text-[1.9vw] text-[#ffff] font-bold font-mono transform transition-all duration-100 ${
                !isHovered
                  ? "translate-y-[-100%]  opacity-0 text-[#000000]"
                  : "translate-y-0"
              }`}
            >
              DOWNLOAD CV
            </button>
          </div>
          <div
            className={`mr-8 relative rounded-full left-6  ${
              isHovered
                ? "bg-[#3d3a3c]"
                : "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
            }  w-[3.2vw] h-[3.2vw]`}
          >
            <span
              className={`absolute -top-[1.5vw] left-[0.85vw] text-[3.8vw] transition-all duration-500 ${
                isHovered ? "text-[#000000]" : "text-[#000000]"
              }`}
            >
              {isHovered ? "" : "•"}
            </span>
            <span
              className={`absolute  -top-2 left-2.5 text-5xl transition-all duration-500 ${
                !isHovered ? "text-[#000000]" : "text-[#ffff]"
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
        className="lg:ml-2 md:ml-2 lg:h-[40vw] mt-40 rounded-xl flex justify-center items-center"
      >
        <img
          src="/src/assets/bg12.jpg"
          className="lg:w-[27.8vw] lg:h-[40vw] md:w-[70%] md:h-[80vw] mx-auto rounded-xl" // Ubah width pada ukuran md ke 100%
          alt=""
        />
      </motion.div>
    </section>
  );
};
export default HomeSection;
