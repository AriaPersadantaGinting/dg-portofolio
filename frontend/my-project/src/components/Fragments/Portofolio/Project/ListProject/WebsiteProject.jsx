/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import authService from "../../../../../service/auth-service";
import { motion } from "framer-motion";

const WebsiteProject = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [projects, setProjects] = useState([]);
  const imageLabels = ["bg19", "bg20", "bg21", "bg22", "bg23", "bg24"];

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
  }, []); // Dependency array to prevent infinite loop

  const variants = {
    imgEffect: {
      opacity: 1,
      // filter: ["blur(3px)", "blur(2px)", "blur(1px)", "blur(0px)"],
      transition: {
        duration: 2,
        delay: 1,
      },
    },
    skillMotion1: {
      opacity: 0.5,
      scale: 0.3,
      rotateX: 10,
    },
    skillMotion2: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.section
      initial="skillMotion1"
      whileInView="skillMotion2"
      variants={variants}
      className={`flex flex-wrap justify-center mt-4 transition-opacity duration-[3000ms]`}
    >
      <div className="flex w-full mb-4">
        <h2 className="text-white text-2xl font-indieFLower relative mx-auto tracking-widest">
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
            initial={{ opacity: 0.3 }}
            whileInView="imgEffect"
            variants={variants}
            key={project.id}
            className="mb-8 cursor-pointer relative overflow-hidden"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Gambar akan dipilih berdasarkan indeks */}
            <img
              src={`/src/assets/${imageLabels[index % imageLabels.length]}.jpg`}
              className={`lg:w-[29vw] lg:mx-[1.4rem] lg:h-[25vw] md:w-[42vw] md:mx-[1.4rem]  sm:w-[84vw] sm:mx-[1.4rem] w-[90vw] mx-1   rounded-xl transform transition-transform duration-1000 ${
                isHovered === project.id
                  ? "scale-110 opacity-75 blur-sm"
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
    </motion.section>
  );
};

export default WebsiteProject;
