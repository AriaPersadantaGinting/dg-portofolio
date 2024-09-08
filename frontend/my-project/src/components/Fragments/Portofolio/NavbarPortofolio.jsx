// /* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
// import MenuSidebar from "../../Elements/Sidebar/sidebarMenu";

// const NavbarPortofolio = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isHovered2, setIsHovered2] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };
//   const handleMouseEnter2 = () => {
//     setIsHovered2(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
//   const handleMouseLeave2 = () => {
//     setIsHovered2(false);
//   };
//   const handleOpenMenuSidebar = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   return (
//     <nav className="w-[85.6rem] fixed flex z-[9999] justify-between py-6">
//       <div className="flex relative ml-12 items-center">
//         <img
//           src="/src/assets/bg11.webp"
//           className="w-10 h-10 rounded-md mr-2"
//           alt=""
//         />
//         <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#44dddc] via-[#e17bef] to-green-500 font-bold">
//           Aria Persadanta Ginting
//         </h1>
//       </div>
//       <div className="flex mr-12 w-80 relative">
//         <div
//           className={`flex justify-between items-center w-40 px-2 py-4 mr-4 rounded-xl cursor-pointer transition-all duration-500 ${
//             isHovered
//               ? "bg-gradient-to-r from-[#6c5483] via-[#24639b] to-green-500"
//               : "bg-slate-700"
//           }`}
//           id="button1"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="relative">
//             <button
//               className={`text-white font-bold font-mono transform transition-all duration-500 absolute left-2 top-[-0.7rem] w-24 ${
//                 isHovered
//                   ? "translate-y-full opacity-0 text-black"
//                   : "translate-y-0"
//               }`}
//             >
//               Let's Talk
//             </button>
//             <button
//               className={`text-white font-bold font-mono transform transition-all duration-500 absolute left-2 top-[-0.7rem] w-24 ${
//                 !isHovered
//                   ? "translate-y-[-100%] opacity-0 text-black"
//                   : "translate-y-0"
//               }`}
//             >
//               Let's Talk
//             </button>
//           </div>
//           <span
//             className={`font-bold text-xl transition-all duration-500 mr-4 ${
//               isHovered ? "text-white" : "text-white"
//             }`}
//           >
//             {isHovered ? "" : "•"}
//           </span>
//           <span
//             className={`font-bold text-xl transition-all duration-500 mr-4 absolute ${
//               !isHovered
//                 ? "text-white"
//                 : "text-slate-500 left-[7.5rem] top-2.5 text-[3.5rem]"
//             }`}
//           >
//             {!isHovered ? "" : "•"}
//           </span>
//         </div>
//         <div
//           className="flex justify-between items-center w-28 px-2 py-4 bg-white rounded-xl cursor-pointer"
//           id="button2"
//           onMouseEnter={handleMouseEnter2}
//           onMouseLeave={handleMouseLeave2}
//           onClick={handleOpenMenuSidebar}
//         >
//           <div className="relative">
//             <button
//               className={`text-black font-bold font-serif transform transition-all duration-500 absolute -left-5  w-24 ${
//                 isHovered2
//                   ? "translate-y-full opacity-0 text-black"
//                   : "-translate-y-3"
//               }`}
//             >
//               MENU
//             </button>
//             <button
//               className={`text-black font-serif font-bold  transform transition-all duration-500 absolute -left-5 top-[-0.7rem] w-24 ${
//                 !isHovered2
//                   ? "translate-y-[-100%] opacity-0 text-black"
//                   : "translate-y-0"
//               }`}
//             >
//               MENU
//             </button>
//           </div>
//           <span
//             className={`font-bold font-serif text-xl transition-all duration-500 mr-4 ${
//               isHovered2 ? "text-black" : "text-black"
//             }`}
//           >
//             {isHovered2 ? "" : "•"}
//           </span>
//           <span
//             className={`font-bold font-serif text-xl transition-all duration-500 mr-4 absolute ${
//               !isHovered2
//                 ? "text-black"
//                 : "text-slate-600 left-[15.5rem] top-[1rem] text-[3.5rem]"
//             }`}
//           >
//             {!isHovered2 ? "" : "•"}
//           </span>
//         </div>
//       </div>
//       {isOpen && <MenuSidebar></MenuSidebar>}
//     </nav>
//   );
// };

// export default NavbarPortofolio;
