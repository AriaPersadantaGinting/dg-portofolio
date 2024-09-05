// import React from "react";
// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee, faApple, faHeart } from "@fortawesome/free-solid-svg-icons";

// const MovingBoxes = () => {
//   const boxVariants = {
//     animate: {
//       x: ["-50vw", "100vw"],
//       transition: {
//         duration: 20,
//         repeat: Infinity,
//         repeatType: "loop",
//         ease: "linear",
//       },
//     },
//   };

//   const icons = [faCoffee, faApple, faHeart, faCoffee, faApple]; // Ikon yang ingin digunakan

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "10px",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {icons.map((icon, index) => (
//         <motion.div
//           key={index}
//           variants={boxVariants}
//           animate="animate"
//           style={{
//             width: "100px",
//             height: "100px",
//             backgroundColor: "#3498db",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             position: "relative",
//             color: "white", // Warna ikon
//             fontSize: "24px", // Ukuran ikon
//           }}
//         >
//           <FontAwesomeIcon icon={icon} />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default MovingBoxes;
