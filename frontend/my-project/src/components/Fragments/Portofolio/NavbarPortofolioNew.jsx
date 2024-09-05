/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import MenuSidebar from "../../Elements/Sidebar/sidebarMenu";
import { motion } from "framer-motion";

const NavbarPortofolioNew = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const variants = {
    hover: {
      backgroundColor: "#6c5483",
    },
    noHover: {
      backgroundColor: "#334155",
    },
    open: {
      backgroundColor: "#6c5483",
    },
    closed: {
      backgroundColor: "#334155",
    },
  };

  const variantsButton = {
    hover: {
      y: "100%",
      opacity: 0,
    },
    noHover: {
      y: "0%",
      opacity: 1,
      color: "#FFFFFF",
    },
    hover1: {
      y: "0%",
      opacity: 1,
    },
    noHover1: {
      y: "-100%",
      opacity: 0,
      color: "#FFFFFF",
    },
    hover2: {
      scale: 3,
      color: "#334155",
      filter: "blur(2px)",
      y: "-20%",
    },
    noHover2: {
      y: "-8%",
      scale: 1,
      color: "#FFFFFF",
    },
    hover3: {
      y: "100%",
      opacity: 0,
    },
    noHover3: {
      y: "-40%",
      opacity: 1,
    },
    hover4: {
      y: "-40%",
      opacity: 1,
    },
    noHover4: {
      y: "-110%",
      opacity: 0,
    },
    hover5: {
      scale: 3,
      color: "#334155",
      filter: "blur(2px)",
      y: "-20%",
    },
    noHover5: {
      y: "-8%",
      scale: 1,
      color: "black",
    },
  };

  const getAnimationVariant = () => {
    if (isOpen) {
      return isHovered2 ? "hover3" : "noHover3";
    }
    return isHovered2 ? "open" : "closed";
  };

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-[85.6rem] fixed flex z-[9999] justify-between py-6 ">
      <div className="flex relative ml-12 items-center">
        <img
          src="/src/assets/bg11.webp"
          className="w-10 h-10 rounded-md mr-2"
          alt=""
        />
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 font-bold">
          Aria Persadanta Ginting
        </h1>
      </div>
      <div className="flex mr-1 w-80 relative backdrop-blur-sm">
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          variants={variants}
          className={`flex justify-between items-center w-40 px-2 py-4 mr-4 rounded-xl cursor-pointer ${
            isHovered
              ? "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
              : "bg-[rgba(61,58,60,0.5)]"
          }`}
          style={{
            backgroundColor: isHovered ? "" : "bg-[rgba(61,58,60,0.5)]",
            backdropFilter: isHovered ? "none" : "blur(4px)",
          }}
        >
          <div className="relative">
            <motion.button
              initial="noHover"
              animate={isHovered ? "hover" : "noHover"}
              variants={variantsButton}
              transition={{ duration: 0.5 }}
              className={`font-bold font-mono absolute left-2 top-[-0.7rem] w-24`}
            >
              Let's Talk
            </motion.button>
            <motion.button
              initial="noHover1"
              animate={isHovered ? "hover1" : "noHover1"}
              variants={variantsButton}
              transition={{ duration: 0.5 }}
              className={`font-bold font-mono absolute left-2 top-[-0.7rem] w-24`}
            >
              Let's Talk
            </motion.button>
          </div>
          <motion.span
            animate={isHovered ? "hover2" : "noHover2"}
            variants={variantsButton}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl mr-4"
          >
            •
          </motion.span>
        </motion.div>
        <motion.div
          animate={getAnimationVariant() || isOpen ? "hover3" : "noHover3"}
          onClick={handleButtonClick}
          className="flex justify-between items-center w-28 px-2 py-4 bg-white rounded-xl cursor-pointer"
          id="button2"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          ref={menuRef}
        >
          <div className="relative">
            <motion.button
              animate={isHovered2 ? "hover3" : "noHover3"}
              variants={variantsButton}
              transition={{ duration: 0.5 }}
              className="text-black font-bold font-serif absolute -left-5 w-24"
            >
              MENU
            </motion.button>
            <motion.button
              animate={isHovered2 ? "hover4" : "noHover4"}
              variants={variantsButton}
              transition={{ duration: 0.5 }}
              className="text-black font-bold font-serif absolute -left-5 w-24"
            >
              MENU
            </motion.button>
          </div>
          <motion.span
            initial="noHover5"
            animate={isHovered2 ? "hover5" : "noHover5"}
            variants={variantsButton}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl mr-4"
          >
            •
          </motion.span>
        </motion.div>
      </div>
      {isOpen && <MenuSidebar />}
    </nav>
  );
};

export default NavbarPortofolioNew;
