import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      duration: 2,
      x: 300,
      rotation: 360,
      backgroundColor: "#ff6347",
      ease: "power3.inOut",
      repeat: -1, // Looping animasi
      yoyo: true, // Kembali ke posisi awal
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div ref={boxRef} className="w-24 h-24 bg-blue-400 rounded-md"></div>
    </div>
  );
};

export default AnimatedBox;
