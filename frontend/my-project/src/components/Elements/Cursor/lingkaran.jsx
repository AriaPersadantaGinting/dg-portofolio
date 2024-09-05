import { useEffect, useState } from "react";

const LingkaranCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-14 h-14 z-[10000] border-4 border-[#d4d1d3] rounded-full bg-transparent bg-opacity-50 pointer-events-none"
      style={{
        transform: `translate(-50%, -50%)`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "transform 0.1s ease",
      }}
    ></div>
  );
};

export default LingkaranCursor;
