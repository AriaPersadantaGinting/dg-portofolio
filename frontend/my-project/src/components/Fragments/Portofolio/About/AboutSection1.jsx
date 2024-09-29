import { motion } from "framer-motion";
import { TextRevealCard } from "../../../Elements/ui/text-reveal-card";

const AboutSection1 = () => {
  const variants = {
    initial2: {
      opacity: 0,
      scale: 2,
    },
    animate2: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 2,
      },
    },
    initial3: {
      opacity: 0,
    },
    animate3: {
      opacity: 1,
      transition: {
        delay: 2,
        duration: 2.5,
      },
    },
    initial4: {
      opacity: 0,
    },
    animate4: {
      opacity: 1,
      transition: {
        delay: 1,
      },
    },
    initial5: {
      opacity: 0,
    },
    animate5: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };
  return (
    <>
      <section className="flex flex-col mb-64 overflow-hidden">
        <motion.div
          variants={variants}
          className="lg:w-[90vw] md:w-[70vw] sm:w-[60vw] w-[90vw] mx-auto mt-[5rem] mb-8"
        >
          <TextRevealCard
            text="Creating Visually Striking Web and Android Experiences that
            Captivate and Engage."
            revealText="Creating Visually Striking Web and Android Experiences that
            Captivate and Engage."
            className="lg:text-[5.7vw] md:text-[5.8vw] sm:text-[6.3vw] text-[12vw] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#F7971E] to-[#FFD200] lg:leading-[5rem] md:leading-[5rem] sm:leading-[5rem] leading-[3.5rem]"
            style="sm:text-[6.3vw] lg:text-[5.7vw] md:text-[5.8vw] sm:text-[5vw] text-[12vw] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F7971E] to-[#FFD200] lg:leading-[5rem] md:leading-[5rem] sm:leading-[5rem] leading-[3.5rem]"
            style2="w-[90vw] lg:ml-8 lg:p-2 md:-ml-20 sm:-ml-24"
            style3="lg:h-80"
          ></TextRevealCard>
        </motion.div>
        <div className="lg:w-[58vw] md:w-[70vw] sm:w-[90vw] w-[90.5vw] lg:ml-[8vw] md:ml-[6.6vw] sm:ml-[6.7vw] ml-4 mb-24">
          <motion.p
            initial="initial2"
            animate="animate2"
            variants={variants}
            className="text-white font-suse lg:text-[1.2rem] md:text-[1.2rem] sm:text-[1.3rem] text-[1.3rem]"
          >
            Creating captivating web and Android experiences requires an
            innovative approach. By focusing on user-centered strategies, we
            develop engaging platforms that attract audiences and deliver
            measurable results through thorough collaboration and testing.
          </motion.p>
        </div>
        <motion.div
          initial="initial3"
          animate="animate3"
          variants={variants}
          className="flex flex-wrap mx-auto lg:w-[95vw] md:w-[70vw] sm:w-[70vw] w-[90vw] "
        >
          {[
            ["Years of Experience", "1+"],
            ["Complete Projects", "1P"],
            ["Client Satisfactions", "1C"],
            ["Cup of Cofee", 250],
          ].map((label, index) => (
            <motion.span
              key={index}
              initial="initial5"
              animate="animate5"
              variants={variants}
              className="ml-4 bg-gradient-to-r from-[#F7971E] to-[#FFD200] lg:py-7 rounded-xl lg:text-5xl md:text-5xl text-center font-bold text-white lg:w-[20.5vw] lg:ml-[2rem]  md:w-[32.5vw] md:ml-[1rem] md:py-6 md:my-4 sm:w-[65.5vw] sm:ml-[1rem] sm:py-6 sm:my-4 sm:text-3xl w-[40vw] py-5 my-4 text-[1.5rem]"
            >
              {label[1]}
              <motion.p
                initial="initial4"
                animate="animate4"
                variants={variants}
                className="lg:text-2xl md:text-2xl sm:text-[1rem] text-[1rem]"
              >
                {label[0]}
              </motion.p>
            </motion.span>
          ))}
        </motion.div>
      </section>
    </>
  );
};
export default AboutSection1;
