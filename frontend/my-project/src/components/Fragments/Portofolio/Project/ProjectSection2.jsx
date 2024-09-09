import { useState } from "react";
import { motion } from "framer-motion";
import AllProject from "./ListProject/AllProject";
import WebsiteProject from "./ListProject/WebsiteProject";
import AndroidProject from "./ListProject/AndroidProject";
import VideoProject from "./ListProject/VideoProject";
import BlogProject from "./ListProject/BlogProject";

const ProjectSection2 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [onClick, setOnClick] = useState(0);
  const handleHoveredEnter = (index) => {
    setIsHovered(index);
  };
  const handleHoveredLeave = () => {
    setIsHovered(false);
  };
  const handleOnClickActive = (index) => {
    setOnClick(index);
  };

  const variants = {
    animate: {
      background: "linear-gradient(to right, #3ca55c, #b5ac49)",
    },
  };
  return (
    <>
      <section className="mb-20 pt-48">
        <div className="flex ml-[13.5rem] w-[51rem]">
          {["SHOW ALL", "WEBSITE", "ANDROID", "VIDEO", "BLOG"].map(
            (label, index) => (
              <motion.div
                key={index}
                initial={{ backgroundColor: "bg-[rgba(61,58,60,0.5)]" }}
                animate={`${
                  isHovered === index || onClick === index
                    ? "animate"
                    : "initial"
                }`}
                onMouseEnter={() => handleHoveredEnter(index)}
                onMouseLeave={() => handleHoveredLeave()}
                onClick={() => handleOnClickActive(index)}
                variants={variants}
                className="lg:w-36 lg:px-2 lg:py-4 lg:mb-4 lg:ml-4 rounded-xl text-white bg-[rgba(61,58,60,0.5)] text-center raltive cursor-pointer"
              >
                <button>{label}</button>
                <span></span>
              </motion.div>
            )
          )}
        </div>
        {onClick === 0 && <AllProject />}
        {onClick === 1 && <WebsiteProject />}
        {onClick === 2 && <AndroidProject />}
        {onClick === 3 && <VideoProject />}
        {onClick === 4 && <BlogProject />}
      </section>
    </>
  );
};
export default ProjectSection2;
