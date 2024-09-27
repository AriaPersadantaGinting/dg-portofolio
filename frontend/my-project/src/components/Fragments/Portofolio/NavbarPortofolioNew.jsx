/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from "react";
import MenuSidebar from "../../Elements/Sidebar/sidebarMenu";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NavbarPortofolioNew = (props) => {
  const { style } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef(null);
  const sidebarRef = useRef(null); // Tambahkan ref untuk sidebar

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // 640px adalah breakpoint untuk sm di Tailwind
    };

    // Jalankan saat pertama kali halaman dimuat
    handleResize();

    // Tambahkan event listener untuk resize
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const variantsButton = {
    hover: {
      y: "100%",
      opacity: 0,
    },
    noHover: {
      y: "50%",
      opacity: 1,
      color: "#FFFFFF",
    },
    hover1: {
      y: "-50%",
      opacity: 1,
    },
    noHover1: {
      y: "-100%",
      opacity: 0,
      color: "#FFFFFF",
    },
    hover2: {
      scale: 2.5,
      color: "#334155",
      filter: "blur(2px)",
    },
    noHover2: {
      scale: 1,
      color: "#FFFFFF",
    },
    hover3: {
      y: "140%",
      opacity: 0,
    },
    noHover3: {
      y: "50%",
      opacity: 1,
    },
    hover4: {
      y: "-50%",
      opacity: 1,
    },
    noHover4: {
      y: "-150%",
      opacity: 0,
    },
    hover5: {
      scale: 2.5,
      color: "#334155",
      filter: "blur(2px)",
      y: "-25%",
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

  const handleButtonClick = async () => {
    setIsOpen((prev) => !prev);
  };

  // Fungsi untuk menangani klik di luar elemen, diperbarui agar mengecek klik di luar sidebar juga
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      sidebarRef.current && // Tambahkan pengecekan untuk sidebar
      !sidebarRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed z-[100] flex justify-between items-center w-full px-2 py-4">
        <div className="flex items-center ml-4 lg:ml-10 md:ml-10 sm:ml-10">
          <img
            src="/src/assets/bg11.webp"
            className="w-8 h-8 lg:w-10 lg:h-10 md:w-8 md:h-8  rounded-md mr-2 lg:mr-2 md:mr-2 sm:mr-2"
            alt=""
          />
          <h1
            className={`text-[1.1rem] lg:text-[1.7vw] md:text-[1.7vw] sm:text-[1.7vw] bg-clip-text text-transparent ${style}  font-bold`}
          >
            {isMobile ? "DG13" : "Aria Persadanta Ginting"}
          </h1>
        </div>
        <div className="flex items-center lg:mr-10 md:mr-4 sm:mr-3 py-2">
          <Link to="/connect">
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              variants={variants}
              className={`bg-[rgba(61,58,60,0.5)] relative flex w-36 h-12 lg:w-36 lg:h-14 lg:left-[5.3rem] md:w-32 md:h-12 sm:w-32 sm:h-12 rounded-xl backdrop-blur-sm  ${
                isHovered ? style : "bg-[rgba(61,58,60,0.5)]"
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
                  transition={{ duration: 0.1 }}
                  className="relative ml-5 text-[1.3rem] bottom-2 lg:ml-4 lg:text-[1.1rem] md:ml-4 md:text-[1rem] md:top-[0.025rem] sm:ml-4 sm:text-[1.2rem] sm:bottom-1 z-[100]"
                >
                  Let's Talk
                </motion.button>
                <motion.button
                  initial="noHover1"
                  animate={isHovered ? "hover1" : "noHover1"}
                  variants={variantsButton}
                  transition={{ duration: 0.1 }}
                  className={`relative ml-5 text-[1.3rem] bottom-2 lg:ml-4 lg:text-[1.1rem]  md:ml-4 md:text-[1rem] md:top-[0.025rem] sm:ml-4 sm:text-[1.2rem] sm:bottom-1 z-[101]`}
                >
                  Let's Talk
                </motion.button>
              </div>
              <motion.span
                animate={isHovered ? "hover2" : "noHover2"}
                variants={variantsButton}
                transition={{ duration: 0.1 }}
                className={`relative text-3xl right-4 top-[0.3rem] lg:text-3xl lg:right-5 lg:bottom-4 md:text-3xl md:right-4 md:top-1 sm:text-3xl sm:right-4 sm:top-1 ${
                  isHovered
                    ? "top-[0.5rem] lg:top-[1.1rem] md:top-[0.6rem] sm:top-2"
                    : ""
                }`}
              >
                •
              </motion.span>
            </motion.div>
          </Link>
          <motion.div
            animate={getAnimationVariant() || isOpen ? "hover3" : "noHover3"}
            onClick={handleButtonClick}
            className="flex items-center bg-white ml-2 mr-1 lg:ml-[6.2rem] lg:mr-1 w-28 lg:w-28 lg:h-14 md:mr-2 md:ml-3 md:w-28 sm:w-28 sm:ml-2 rounded-xl cursor-pointer"
            id="button2"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            ref={menuRef}
          >
            <div className="relative">
              <motion.button
                animate={isHovered2 ? "hover3" : "noHover3"}
                variants={variantsButton}
                transition={{ duration: 0.1 }}
                className="ml-5 md:ml-5"
              >
                MENU
              </motion.button>
              <motion.button
                animate={isHovered2 ? "hover4" : "noHover4"}
                variants={variantsButton}
                transition={{ duration: 0.1 }}
                className="ml-5 md:ml-5"
              >
                MENU
              </motion.button>
            </div>
            <motion.span
              initial="noHover5"
              animate={isHovered2 ? "hover5" : "noHover5"}
              variants={variantsButton}
              transition={{ duration: 0.1 }}
              className="relative right-5 text-3xl md:right-4 md:text-3xl"
            >
              •
            </motion.span>
          </motion.div>
        </div>
        {isOpen && <MenuSidebar ref={sidebarRef} />}{" "}
      </nav>

      {/* Tambahkan ref pada sidebar */}
    </>
  );
};

export default NavbarPortofolioNew;
