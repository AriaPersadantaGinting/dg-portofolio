/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const AboutSection2 = () => {
  const variants = {
    initial1: {
      x: -500,
      opacity: 0,
    },
    animate1: {
      x: [0, 70, 0],
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    initial2: {
      x: 500,
      opacity: 0,
    },
    animate2: {
      x: [0, -15, 0],
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  return (
    <>
      <section className="flex flex-wrap pb-28 mb-24 overflow-hidden">
        <div className="lg:w-[28rem] lg:ml-[4rem] lg:mr-20">
          <motion.img
            src="/src/assets/bg12.jpg"
            initial="initial1"
            whileInView="animate1"
            variants={variants}
            className="lg:w-[32rem] lg:h-[36rem] rounded-xl"
            alt=""
          />
        </div>
        <div className="lg:w-[38.5rem]">
          <motion.article
            initial="initial2"
            whileInView="animate2"
            variants={variants}
            className="mt-32 text-white lg:text-[1.1rem]"
          >
            <h2 className="lg:text-[2.6rem] tracking-tight mb-4 font-suse">
              Approach And Philosophy
            </h2>
            <p className="mb-8">
              I wonder if I've been changed in the night? Let me think. Was I
              the same when I got up this morning? I almost think I can remember
              feeling a little different. But if I'm not the same, the next
              question is 'Who in the world am I?' Ah, that's the great puzzle!
            </p>
            <p>
              In 2014, Steven Smith have gotten so much of our time back that
              we're now able to put towards things that are actually helping our
              company as opposed to just throwing content out there. and the
              idea of Lexend was born. Today, Lexend empowers teams to easily
              communicate with customers through personalized documents that can
              be created in minutes, build meaningful relationships.
            </p>
          </motion.article>
        </div>
      </section>
    </>
  );
};
export default AboutSection2;
