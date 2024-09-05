import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  hover: {
    translateX: "0%", // Posisi teks saat di-hover
    opacity: 1, // Opacity saat di-hover
  },
  noHover: {
    translateX: "-20%", // Posisi teks saat tidak di-hover
    opacity: 0, // Opacity saat tidak di-hover
  },
  hover1: {
    translateX: "0%", // Posisi teks saat di-hover
    opacity: 1, // Opacity saat di-hover
  },
  noHover1: {
    translateX: "-20%", // Posisi teks saat tidak di-hover
    opacity: 1, // Opacity saat tidak di-hover
  },
};

const MenuSidebar = () => {
  const [isHover, setIsHover] = useState(null);

  const handleMouseEnter = (id) => {
    setIsHover(id);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  return (
    <aside className="w-[18rem] fixed right-16 top-24 bg-[rgba(61,58,60,0.5)] rounded-xl backdrop-blur-md">
      {["Home", "About", "Project", "Skill", "Contact"].map((label, index) => (
        <div
          key={index}
          className="h-14 ml-4 flex items-center"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <motion.span
            variants={variants}
            initial="noHover"
            animate={isHover === index ? "hover" : "noHover"}
            transition={{ duration: 0.5 }}
            className="text-3xl text-white"
          >
            →
          </motion.span>
          <motion.a
            href="#"
            variants={variants}
            initial="noHover1"
            animate={isHover === index ? "hover1" : "noHover1"}
            transition={{ duration: 0.5 }}
            className="text-2xl text-white w-28 inline-block h-10 mt-2 ml-4"
          >
            {label}
          </motion.a>
        </div>
      ))}
    </aside>
  );
};

export default MenuSidebar;
