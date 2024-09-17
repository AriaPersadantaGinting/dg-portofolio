import { useEffect, useState } from "react";
import authService from "../../../service/auth-service";
import { motion } from "framer-motion";

const ProjectSection = () => {
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
        console.info(res);
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
      className={`flex flex-wrap lg:mt-44 md:mt-44 sm:mt-32 mt-32 transition-opacity duration-[3000ms]`}
    >
      <div className="flex w-[100vw] mb-4">
        <h2 className="text-white text-2xl font-indieFLower relative mx-auto tracking-widest">
          Some Recent Work
        </h2>
      </div>

      <div className="w-full">
        <img
          src="/src/assets/arrow.jpg"
          className="w-[20vw] h-[20vw] ml-[42vw] lg:w-[5vw] lg:h-[5vw] lg:ml-[47.5vw] md:w-[7vw] md:h-[7vw] md:ml-[46.5vw] sm:w-[14vw] sm:h-[14vw] sm:ml-[44vw]
          md:mb-4 rounded-full"
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
            className="ml-14 mr-14 mb-4 lg:ml-[1.5vw] lg:mr-[1vw] lg:h-64 lg:mb-8 md:ml-[1.5vw] md:mr-[1.2vw] md:h-[28vw] md:mb-4
            sm:ml-[5.6rem] cursor-pointer relative overflow-hidden"
            onMouseEnter={() => handleMouseEnter(project.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Gambar akan dipilih berdasarkan indeks */}
            <img
              src={`/src/assets/${imageLabels[index % imageLabels.length]}.jpg`}
              className={`w-[80vw] h-[70vw] lg:w-[30.3vw] lg:h-64 md:w-[46.4vw] md:h-[27vw]
                sm:w-[75vw] sm:h-[60vw] rounded-xl transform transition-transform duration-1000 ${
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

export default ProjectSection;
