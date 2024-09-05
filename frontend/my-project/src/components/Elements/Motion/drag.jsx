// import { motion } from "framer-motion";
// import { useState } from "react";
// const Drag = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [velocity, setVelocity] = useState({ x: 0, y: 0 });

//   const handleDrag = (event, info) => {
//     // Update position and velocity state
//     setPosition({ x: info.offset.x, y: info.offset.y });
//     setVelocity({ x: info.velocity.x, y: info.velocity.y });
//   };

//   return (
//     <div className="p-6">
//       <motion.div
//         drag
//         onDrag={handleDrag}
//         className="w-32 h-32 bg-blue-500 text-white flex items-center justify-center rounded-md"
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`,
//         }}
//       >
//         Drag me!
//       </motion.div>
//       <div className="mt-4">
//         <p className="text-white">
//           <strong>Position:</strong> x: {Math.round(position.x)} px, y:{" "}
//           {Math.round(position.y)} px
//         </p>
//         <p>
//           <strong>Velocity:</strong> x: {Math.round(velocity.x)}, y:{" "}
//           {Math.round(velocity.y)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Drag;

// import { useState } from "react";
// import { motion } from "framer-motion";

// const Drag = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [velocity, setVelocity] = useState({ x: 0, y: 0 });
//   const [dragEndPosition, setDragEndPosition] = useState({ x: 0, y: 0 });

//   const handleDrag = (event, info) => {
//     // Update position and velocity state while dragging
//     setPosition({ x: info.offset.x, y: info.offset.y });
//     setVelocity({ x: info.velocity.x, y: info.velocity.y });
//   };

//   const handleDragEnd = (event, info) => {
//     // Update position when dragging ends
//     setDragEndPosition({ x: info.offset.x, y: info.offset.y });
//     console.log("Dragging ended at position:", info.offset);
//   };

//   return (
//     <div className="p-6">
//       <motion.div
//         drag
//         onDrag={handleDrag}
//         onDragEnd={handleDragEnd}
//         className="w-32 h-32 bg-blue-500 text-white flex items-center justify-center rounded-md"
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`,
//         }}
//       >
//         Drag me!
//       </motion.div>
//       <div className="mt-4">
//         <p className="text-white">
//           <strong>Current Position:</strong> x: {Math.round(position.x)} px, y:{" "}
//           {Math.round(position.y)} px
//         </p>
//         <p className="text-white">
//           <strong>Velocity:</strong> x: {Math.round(velocity.x)}, y:{" "}
//           {Math.round(velocity.y)}
//         </p>
//         <p className="text-white">
//           <strong>Drag End Position:</strong> x: {Math.round(dragEndPosition.x)}{" "}
//           px, y: {Math.round(dragEndPosition.y)} px
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Drag;

// import Rct from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Drag = () => {
  // Hook useScroll menyediakan nilai scrollYProgress
  const { scrollYProgress } = useScroll();

  // Transformasi scrollYProgress ke rentang nilai yang berbeda
  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]); // Contoh: Pindahkan elemen dari atas ke bawah

  return (
    <div className="relative h-[2000px]">
      {/* Bagian latar belakang untuk menciptakan efek */}
      <motion.div
        style={{ y }}
        className="absolute top-0 min-h-screen left-0 w-full h-full bg-blue-500"
      >
        {/* Konten di sini */}
        <h1 className="text-white">sdcascdcasca</h1>
        <p>llrf</p>
      </motion.div>
    </div>
  );
};

export default Drag;
