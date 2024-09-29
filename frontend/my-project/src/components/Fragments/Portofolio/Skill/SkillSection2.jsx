import { motion } from "framer-motion";

const SkillSection2 = () => {
  const levelSkill = [
    {
      level: "Beginner",
      style:
        " relative bg-[#88D66C] lg:-left-2 md:-left-4 sm:-left-6 -left-4  rounded-full",
      style2:
        "relative bg-[#88D66C] lg:-left-[1.75rem] md:-left-[2.24rem]  sm:-left-[2.75rem] -left-[2.24rem] rounded-full",
      style3:
        "relative bg-[#88D66C] lg:left-5 md:left-7 sm:left-9 left-7 rounded-full",
      style4:
        "relative bg-[#88D66C] lg:-left-[0.01rem] md:left-[0.5rem] sm:left-[1rem] left-[0.5rem]  rounded-full",
    },
    {
      level: "Intermediate",
      style:
        " relative bg-[#3a86ff] lg:left-1 md:right-1 sm:right-3 right-1 rounded-full",
      style2:
        "relative bg-[#3a86ff] lg:right-[1rem] md:right-[1.5rem] sm:right-[2rem] right-[1.5rem] rounded-full",
      style3:
        "relative bg-[#3a86ff] lg:left-2 md:left-[1.15rem] sm:left-6 left-4 rounded-full",
      style4:
        "relative bg-[#3a86ff] lg:-left-[0.75rem] md:-left-[0.1rem] sm:left-[0.25rem] right-[0.25rem]  rounded-full",
    },
    {
      level: "Advanced",
      style:
        " relative bg-[#e5383b] lg:right-1.5 md:right-[0.9rem] sm:right-[1.3rem] right-[0.9rem] rounded-full",
      style2:
        "relative bg-[#e5383b] lg:right-[1.61rem] md:right-[2.15rem] sm:right-[2.55rem] right-[2.15rem] rounded-full",
      style3:
        "relative bg-[#e5383b] lg:left-[1.15rem] md:left-[1.6rem] sm:left-[2rem] left-[1.6rem] rounded-full",
      style4:
        "relative bg-[#e5383b] lg:-left-[0.08rem] md:left-[0.35rem] sm:left-[0.75rem] left-[0.35rem]  rounded-full",
    },
    {
      level: "Expert",
      style:
        " relative bg-[#d69f7e] lg:right-[1.2rem] md:right-[1.7rem] sm:right-[2.2rem] right-[1.7rem] rounded-full",
      style2:
        "relative bg-[#d69f7e] lg:right-[2.45rem] md:right-[2.95rem] sm:right-[3.45rem] right-[2.95rem] rounded-full",
      style3:
        "relative bg-[#d69f7e] lg:left-[2rem] md:left-[2.4rem] sm:left-[3rem] left-[2.4rem] rounded-full",
      style4:
        "relative bg-[#d69f7e] lg:left-[0.75rem] md:left-[1.15rem] sm:left-[1.75rem] left-[1.15rem] rounded-full",
    },
    {
      level: "Master",
      style:
        " relative bg-[#ffd500] lg:right-[1.1rem] md:right-[1.6rem] sm:right-[2rem] right-[1.6rem] rounded-full",
      style2:
        "relative bg-[#ffd500] lg:right-[2.37rem] md:right-[2.85rem] sm:right-[3.25rem] right-[2.85rem] rounded-full",
      style3:
        "relative bg-[#ffd500] lg:left-[1.9rem] md:left-[2.2rem] sm:left-[3rem] left-[2.2rem] rounded-full",
      style4:
        "relative bg-[#ffd500] lg:left-[0.67rem] md:left-[0.95rem] sm:left-[1.75rem] left-[0.95rem]  rounded-full",
    },
  ];
  const variants = {
    animate: {
      opacity: [0, 0.5, 0], // Animasi opacity dari 0 ke 1 dan kembali ke 0
      scale: [0.3, 1], // Skala dari 0.5 ke 1 dan kembali ke 0.5
      transition: {
        duration: 2, // Durasi animasi
        repeat: Infinity, // Animasi akan terus berulang
        repeatType: "loop", // Pengulangan tipe loop
        ease: "easeInOut", // Transisi halus
      },
    },
  };
  return (
    <>
      <section className="w-full pt-10">
        <div className="lg:ml-16 md:ml-12 sm:ml-12 ml-6 items-center lg:w-[60vw] md:w-[87vw] sm:w-[87vw] w-[89vw] mb-10 ">
          <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#e52d27] to-[#b31217] mb-4">
            Each skill level is represented by a different color, providing a
            clear visual cue of proficiency.
          </h1>
          <p className="text-white text-[1.2rem]">
            {" "}
            Each color offers a simple and intuitive guide to skill development,
            helping to visualize progress and proficiency in various areas.
          </p>
        </div>
        <div className="lg:w-full md:w-[87vw] sm:w-full w-full mx-auto flex justify-center flex-wrap">
          {levelSkill.map((label, index) => (
            <div
              key={index}
              className="flex bg-[rgba(61,58,60,0.5)] mx-4 py-3 lg:w-44 md:w-48 sm:w-56 w-48 md:mb-2 sm:mb-2 mb-2 items-center justify-center rounded-xl relative"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate="animate"
                variants={variants}
                className={`w-7 h-7 ${label.style}`}
              ></motion.div>
              <motion.div className={`w-3 h-3 ${label.style2}`}></motion.div>
              <h2 className="text-white">{label.level}</h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate="animate"
                variants={variants}
                className={`w-7 h-7 ${label.style3}`}
              ></motion.div>
              <motion.div className={`w-3 h-3 ${label.style4}`}></motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillSection2;
