import { useEffect, useState } from "react";
import authService from "../../../../../service/auth-service";
import { motion } from "framer-motion";

const AllProject = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [projects, setProjects] = useState([]);
  const imageLabels = ["bg13", "bg14", "bg15", "bg16", "bg17", "bg18"];

  const handleMouseEnter = (id) => {
    setIsHovered(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleGetAllProject = async () => {
    try {
      await authService.fetchAllProject((res) => {
        setProjects(res);
      });
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    handleGetAllProject();
  }, []);

  const variants = {
    imgEffect: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 1,
      },
    },
    skillMotion1: {
      opacity: 0.5,
      scale: 0.3,
      rotateX: 5,
    },
    skillMotion2: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <section
      className={`flex flex-wrap relative lg:bottom-72 md:bottom-52 sm:bottom-52 bottom-52 justify-center mt-4 transition-opacity duration-[3000ms]`}
    >
      <div className="flex w-full mb-4">
        <h2 className="text-2xl font-indieFLower relative mx-auto tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#56ab2f] to-[#a8e063]">
          Some Recent Work
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <img
          src="/src/assets/arrow.jpg"
          className="lg:w-16 lg:h-16 md:w-20 md:h-20 sm:w-20 sm:h-20 w-20 h-20 rounded-full"
          alt=""
        />
      </div>
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <motion.div
            initial="skillMotion1"
            animate="skillMotion2"
            whileInView="imgEffect"
            variants={variants}
            key={project.id}
            className="cursor-pointer relative overflow-hidden py-4"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={`/src/assets/${imageLabels[index % imageLabels.length]}.jpg`}
              className={`lg:w-[29vw] lg:mx-[1.4rem] lg:h-[25vw] md:w-[42vw] md:mx-[1.4rem]  sm:w-[84vw] sm:mx-[1.4rem] w-[90vw] mx-1  rounded-xl transform transition-transform duration-1000 ${
                isHovered === project.id
                  ? "scale-110 opacity-75 rounded-xl blur-sm"
                  : "scale-100 opacity-100"
              }`}
              alt={project.title}
            />
            <div className="absolute top-15 left-20 w-72">
              <h3
                className={`text-white transform duration-700 transition-all text-3xl font-bold relative font-serif ${
                  isHovered === project.id
                    ? "-translate-y-14 opacity-100"
                    : "translate-y-0 opacity-0"
                }`}
              >
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="text-center text-white py-4 w-full">
          No projects available
        </div>
      )}
    </section>
  );
};

export default AllProject;
