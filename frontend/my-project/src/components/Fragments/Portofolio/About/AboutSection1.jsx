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
        <div className="lg:w-[69rem] mx-auto mt-[14rem] mb-8">
          <motion.h1
            initial="initial"
            whileInView="animate1"
            variants={variants}
            className="lg:text-[4.8rem] leading-[6rem] font-suse  bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 "
          >
            We A Graphic Design Agency <br />
            <span className="">Forvisually Compelling Stories.</span>
          </motion.h1>
        </div>
        <div className="w-[46rem] ml-[5.1rem] mb-24">
          <motion.p
            initial="initial2"
            whileInView="animate2"
            variants={variants}
            className="text-white font-suse text-xl"
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
          className="flex flex-wrap w-[71rem] mx-auto"
        >
          {[
            ["Years of Experience", "12+"],
            ["Complete Projects", "5P"],
            ["Client Satisfactions", "1C"],
            ["Cup of Cofee", 250],
          ].map((label, index) => (
            <span
              key={index}
              className="lg:w-[15.7rem] ml-4 bg-[#3d3a3c]  lg:py-6 rounded-xl text-5xl text-center font-bold text-white mr-4"
            >
              {label[1]}
              <p className="text-2xl">{label[0]}</p>
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
};
export default AboutSection1;
