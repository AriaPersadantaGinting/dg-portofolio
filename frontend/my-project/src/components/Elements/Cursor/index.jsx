import { useEffect, useRef, useState } from "react";

function ColorChangingCursor() {
  const lineRef = useRef(null);
  const trail = useRef([]);
  const [color, setColor] = useState("red");
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      trail.current.push({ x, y });

      if (trail.current.length > 20) {
        // Ubah panjang trail sesuai kebutuhan
        trail.current.shift();
      }

      if (lineRef.current) {
        const pathData = trail.current
          .map((point, index) => {
            const nextPoint = trail.current[index + 1];
            if (nextPoint) {
              return `M ${point.x},${point.y} L ${nextPoint.x},${nextPoint.y}`;
            }
            return "";
          })
          .join(" ");

        lineRef.current.setAttribute("d", pathData);
      }

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fadeOutTrail();
      }, 200); // Delay before starting fade out
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const changeColor = () => {
      const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
    };

    const colorInterval = setInterval(changeColor, 500); // Ganti warna setiap 500ms

    return () => clearInterval(colorInterval);
  }, []);

  const fadeOutTrail = () => {
    const interval = setInterval(() => {
      if (trail.current.length > 0) {
        trail.current.shift();

        if (lineRef.current) {
          const pathData = trail.current
            .map((point, index) => {
              const nextPoint = trail.current[index + 1];
              if (nextPoint) {
                return `M ${point.x},${point.y} L ${nextPoint.x},${nextPoint.y}`;
              }
              return "";
            })
            .join(" ");

          lineRef.current.setAttribute("d", pathData);
        }
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust this value to control the fade-out speed
  };

  return (
    <svg
      className="fixed pointer-events-none"
      style={{ width: "100%", height: "100%", zIndex: 50 }}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0 }} />
        </linearGradient>
      </defs>
      <path
        ref={lineRef}
        stroke="url(#grad1)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        style={{
          filter: "drop-shadow(0 0 6px rgba(0,0,0,0.5))",
          transition: "stroke-dashoffset 0.2s ease-out",
        }}
      />
    </svg>
  );
}

export default ColorChangingCursor;
