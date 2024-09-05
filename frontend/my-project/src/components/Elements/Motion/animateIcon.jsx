import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";

const AnimateIcon = () => {
  const icons = [
    { name: "fa-js", color: "text-yellow-500" },
    { name: "fa-css3-alt", color: "text-blue-500" },
    { name: "fa-node-js", color: "text-green-500" },
    { name: "fa-js-square", color: "text-blue-600" },
    // { name: "fa-circle", color: "text-gray-500" },
    // { name: "fa-database", color: "text-blue-400" }, // MySQL
    { name: "fa-react", color: "text-blue-400" }, // React
    { name: "fa-bootstrap", color: "text-purple-600" },
  ];

  // Variants untuk animasi
  const variants = {
    moved1: {
      x: [-400, 850],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
      zIndex: 1,
    },
    moved2: {
      x: [-400, 850],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: 5,
      },
    },
    moved3: {
      x: [-400, 850],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: 10,
      },
    },
    moved4: {
      x: [-400, 850],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: 15,
      },
    },
    moved5: {
      x: [-400, 850],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: 20,
      },
    },
    moved6: {
      x: [-400, 850],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        delay: 25,
      },
    },
    initial1: {
      left: "10rem",
    },
    initial2: {
      left: "-0.5rem",
    },
    initial3: {
      left: "-11.5rem",
    },
    initial4: {
      left: "-23rem",
    },
    initial5: {
      left: "-34.5rem",
    },
    initial6: {
      left: "-47rem",
    },
  };
  return (
    <div className="flex space-x-4 justify-center mt-10 bg-white w-[70rem] mx-auto overflow-hidden py-6">
      <motion.div className={` text-4xl bg-green-400 w-full relative flex`}>
        {icons.map((icon, index) => (
          <motion.i
            key={index}
            initial={`initial${index + 1}`}
            variants={variants}
            animate={`moved${index + 1}`}
            className={`fab ${icon.name} ${icon.color}  text-8xl text-center ml-24 relative`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimateIcon;
