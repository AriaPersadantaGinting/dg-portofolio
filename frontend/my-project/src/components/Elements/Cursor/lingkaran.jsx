import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LingkaranCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const handleMouseOver = (event) => {
      if (event.target.id === "btn") {
        setHovering(true);
      }
    };
    const handleMouseOut = (event) => {
      if (event.target.id !== "btn") {
        setHovering(false);
      }
    };
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      animate={{
        opacity: hovering ? 0 : 1,
        scale: hovering ? 1.6 : 1,
        transition: { duration: 0.3 },
      }}
      className="fixed w-14 h-14 z-[10000] border-4 border-[#d4d1d3] rounded-full bg-transparent bg-opacity-50 pointer-events-none"
      style={{
        left: `${position.x - 28}px`,
        top: `${position.y - 28}px`,
        transition: "transform 0.1s ease",
      }}
    />
  );
};

export default LingkaranCursor;
