import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function LoadingScreen() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevCount + 20;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);
  const variants = {
    animate: {
      opacity: 0,
      x: "-100vw",
      scale: 0,
      transition: {
        delay: 1.2,
        duration: 1.5,
      },
    },
    animate2: {
      x: "-100vw",
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    animate3: {
      x: "100vw",
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
    animate4: {
      y: "-100vw",
      opacity: 0,
      transition: {
        delay: 0.2,
        duration: 1,
      },
    },
  };

  const loadData = [
    {
      animate: "animate2",
      style: "bg-gradient-to-r from-[#7303c0] to-[#fdeff9]",
      style2: "bg-gradient-to-r from-[#F7971E] to-[#FFD200]",
      style3: "bg-gradient-to-r from-[#56ab2f] to-[#a8e063]",
      style4: "bg-gradient-to-r from-[#e52d27] to-[#b31217]",
      style5: "bg-gradient-to-r from-[#1CD8D2] to-[#93EDC7]",
    },
    {
      animate: "animate3",
      style: "bg-gradient-to-r from-[#fdeff9] to-[#7303c0]",
      style2: "bg-gradient-to-r from-[#FFD200] to-[#F7971E]",
      style3: "bg-gradient-to-r from-[#a8e063] to-[#56ab2f]",
      style4: "bg-gradient-to-r from-[#b31217] to-[#e52d27]",
      style5: "bg-gradient-to-r from-[#93EDC7] to-[#1CD8D2]",
    },
    {
      animate: "animate2",
      style: "bg-gradient-to-r from-[#7303c0] to-[#fdeff9]",
      style2: "bg-gradient-to-r from-[#F7971E] to-[#FFD200]",
      style3: "bg-gradient-to-r from-[#56ab2f] to-[#a8e063]",
      style4: "bg-gradient-to-r from-[#e52d27] to-[#b31217]",
      style5: "bg-gradient-to-r from-[#1CD8D2] to-[#93EDC7]",
    },
    {
      animate: "animate3",
      style: "bg-gradient-to-r from-[#fdeff9] to-[#7303c0]",
      style2: "bg-gradient-to-r from-[#FFD200] to-[#F7971E]",
      style3: "bg-gradient-to-r from-[#a8e063] to-[#56ab2f]",
      style4: "bg-gradient-to-r from-[#b31217] to-[#e52d27]",
      style5: "bg-gradient-to-r from-[#93EDC7] to-[#1CD8D2]",
    },
  ];
  return (
    <motion.aside
      initial={{ opacity: 1 }}
      animate={count === 100 ? "animate" : ""}
      variants={variants}
      className="fixed z-[99999] w-full min-h-screen flex flex-wrap bg-transparent"
    >
      {loadData.map((load, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 1 }}
          animate={count === 100 ? load.animate : ""}
          variants={variants}
          className={`flex items-center justify-center w-1/2 h-[21.07rem]  ${
            location.pathname === "/welcome"
              ? load.style
              : location.pathname === "/profile"
              ? load.style2
              : location.pathname === "/creation"
              ? load.style3
              : location.pathname === "/expertise"
              ? load.style4
              : location.pathname === "/connect"
              ? load.style5
              : ""
          }`}
        ></motion.div>
      ))}
      <motion.h1
        initial={{ opacity: 1 }}
        animate={count === 100 ? "animate4" : ""}
        variants={variants}
        className="absolute text-black font-Protest lg:text-9xl md:text-8xl sm:text-[11vw] text-6xl top-[16rem]  lg:left-[16.5vw] md:left-[20vw] sm:left-[15vw] left-[12vw] "
      >{`Loading ${count}%`}</motion.h1>
    </motion.aside>
  );
}

export default LoadingScreen;
