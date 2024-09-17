import { motion } from "framer-motion";

const AboutSection1 = () => {
  const variants = {
    initial: {
      x: -100,
      scale: 0,
      opacity: 0,
    },
    animate1: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    initial2: {
      x: 300,
      opacity: 0,
      scale: 2,
      // delay: 1,
    },
    animate2: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
    initial3: {
      opacity: 1,
      scaleY: 0,
    },
    animate3: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <>
      <section className="flex flex-col mb-64 overflow-hidden">
        <div className="lg:w-[90vw] md:w-[70vw] sm:w-[60vw] w-[90vw] mx-auto mt-[9rem] mb-8">
          <motion.h1
            initial="initial"
            whileInView="animate1"
            variants={variants}
            className="lg:text-[5rem] lg:leading-[6rem] md:text-[3rem] md:leading-[4rem] sm:text-[3rem] sm:leading-[4rem] text-[3.2rem] leading-[4rem]  font-suse  bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 "
          >
            We A Graphic Design Agency Forvisually Compelling Stories.
          </motion.h1>
        </div>
        <div className="lg:w-[58vw] md:w-[70vw] sm:w-[65vw] w-[90.5vw] lg:ml-[5vw] md:ml-[14.2vw] sm:ml-[19vw] ml-4 mb-24">
          <motion.p
            initial="initial2"
            whileInView="animate2"
            variants={variants}
            className="text-white font-suse lg:text-[1.2rem] md:text-[1.2rem] sm:text-[1.3rem] text-[1.3rem]"
          >
            Completely plagiarize intermandated services whereas multifunctional
            mindshare. Monotonectally mesh low-risk high-yield methods of
            empowerment after cross functional testing procedures.
          </motion.p>
        </div>
        <motion.div
          initial="initial3"
          whileInView="animate3"
          variants={variants}
          className="flex flex-wrap mx-auto lg:w-[95vw] md:w-[70vw] sm:w-[70vw] w-[90vw] "
        >
          {[
            ["Years of Experience", "12+"],
            ["Complete Projects", "5P"],
            ["Client Satisfactions", "1C"],
            ["Cup of Cofee", 250],
          ].map((label, index) => (
            <span
              key={index}
              className="ml-4 bg-gradient-to-r from-[#414d0b] to-[#727a17] lg:py-7 rounded-xl lg:text-5xl md:text-5xl text-center font-bold text-white lg:w-[20.5vw] lg:ml-[2rem]  md:w-[32.5vw] md:ml-[1rem] md:py-6 md:my-4 sm:w-[65.5vw] sm:ml-[1rem] sm:py-6 sm:my-4 sm:text-3xl w-[40vw] py-5 my-4 text-[1.5rem]"
            >
              {label[1]}
              <p className="lg:text-2xl md:text-2xl sm:text-[1rem] text-[1rem]">
                {label[0]}
              </p>
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
};
export default AboutSection1;
