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
        <div className="lg:ml-[6vw] lg:mr-20 md:ml-[14vw] md:mr-20 md:mb-2 sm:ml-[14vw] sm:mr-20 sm:mb-2 mx-4  mb-4">
          <motion.img
            src="/src/assets/bg12.jpg"
            initial="initial1"
            whileInView="animate1"
            variants={variants}
            className="lg:w-[35vw] lg:h-[32rem] md:w-[70vw] md:h-[40rem] sm:w-[70vw] sm:h-[40rem] w-[87vw] ml-2 h-[35rem]   rounded-xl"
            alt=""
          />
        </div>
        <div className="lg:w-[45vw] lg:ml-8 md:w-[70vw] md:ml-[14vw] sm:w-[70vw] sm:ml-[14vw] sm:pb-4 w-[90vw] ml-[3.5vw]  pb-4">
          <motion.article
            initial="initial2"
            whileInView="animate2"
            variants={variants}
            className="lg:mt-20 md:mt-4 md:leading-[1.7rem] text-white lg:text-[1rem] ml-2"
          >
            <h2 className="lg:text-[2.6rem] md:text-[2.6rem] sm:text-[2.6rem] text-[2.4rem] tracking-tight mb-4 font-suse py-3 bg-clip-text text-transparent bg-gradient-to-r from-[#F7971E] to-[#FFD200]">
              Approach And Philosophy
            </h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
              error mollitia provident doloribus quidem voluptatem aliquam nobis
              nam, magnam labore perferendis dolores voluptas non rem velit, vel
              tempore nemo quod? dolores voluptas non rem velit, vel
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui,
              dicta autem ut minima voluptatibus earum nemo. Laboriosam
              explicabo pariatur in deleniti ab dicta suscipit alias, sit,
              adipisci possimus impedit qui. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Error at fugit dignissimos sapiente
              voluptate ipsa doloremque. Impedit iste debitis eum cupiditate
              modi natus, nihil est! Consequuntur reprehenderit impedit debitis
              dolor?
            </p>
          </motion.article>
        </div>
      </section>
    </>
  );
};
export default AboutSection2;
