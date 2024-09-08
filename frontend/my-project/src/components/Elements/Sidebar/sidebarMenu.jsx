import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hover: {
    x: "0%", // Posisi teks saat di-hover
    opacity: 1, // Opacity saat di-hover
  },
  noHover: {
    x: "-20%", // Posisi teks saat tidak di-hover
    opacity: 0, // Opacity saat tidak di-hover
  },
  hover1: {
    x: "0%", // Posisi teks saat di-hover
    opacity: 1, // Opacity saat di-hover
  },
  noHover1: {
    x: "-20%", // Posisi teks saat tidak di-hover
    opacity: 1, // Opacity saat tidak di-hover
  },
};

// eslint-disable-next-line react/display-name
const MenuSidebar = forwardRef((props, ref) => {
  const [isHover, setIsHover] = useState(null);

  const handleMouseEnter = (id) => {
    setIsHover(id);
  };

  const handleMouseLeave = () => {
    setIsHover(null);
  };

  // Prevent sidebar from closing when clicking inside
  const handleSidebarClick = (event) => {
    event.stopPropagation();
  };

  return (
    <aside
      ref={ref}
      className="md:w-[18rem] fixed md:right-[2.7rem] top-24 bg-[rgba(61,58,60,0.5)] rounded-xl backdrop-blur-md z-[5000]"
      onClick={handleSidebarClick}
    >
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
          <motion.div
            variants={variants}
            initial="noHover1"
            animate={isHover === index ? "hover1" : "noHover1"}
            transition={{ duration: 0.5 }}
            className="text-2xl text-white w-28 inline-block h-10 mt-2 ml-4"
          >
            <Link
              to={`/${label.toLowerCase()}`}
              className="h-full w-full rounded-xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent link click from closing sidebar
            >
              {label}
            </Link>
          </motion.div>
        </div>
      ))}
    </aside>
  );
});

export default MenuSidebar;
