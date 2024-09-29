/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CircleScroll = (props) => {
  const { style = "text-blue-500" } = props;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menghitung progres scroll
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollProgress(scrollPercent);

    // Tampilkan lingkaran hanya ketika scroll lebih dari 0
    if (scrollTop > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Tambahkan event listener ketika komponen di-mount
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Bersihkan event listener ketika komponen di-unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Variants untuk animasi dengan Framer Motion
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="fixed z-[10000] bottom-5 right-5 flex items-center justify-center"
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 36 36"
        className="rotate-[-90deg]"
      >
        <path
          className="text-gray-300"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={`${style}`}
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${scrollProgress}, 100`}
          strokeLinecap="round"
          stroke="currentColor"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      {/* Teks di tengah lingkaran */}
      <span className="absolute text-xl font-semibold text-slate-200 font-Protest">
        DG
      </span>
    </motion.div>
  );
};

export default CircleScroll;
