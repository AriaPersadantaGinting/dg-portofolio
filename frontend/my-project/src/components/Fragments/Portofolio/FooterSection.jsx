/* eslint-disable react/prop-types */
import igIcon from "/src/assets/ig.svg";
import ytIcon from "/src/assets/yt.svg";
import tiktokIcon from "/src/assets/tiktok.svg";
import fbIcon from "/src/assets/fb.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const FooterSection = (props) => {
  const { styles, styles2, styles3 } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (event) => {
    const id = event.target.id;
    setIsHovered(id);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const icons = [
    { src: igIcon, alt: "Instagram" },
    { src: ytIcon, alt: "Youtube" },
    { src: tiktokIcon, alt: "Tiktok" },
    { src: fbIcon, alt: "Facebook" },
  ];
  return (
    <>
      <footer
        className={`flex relative w-full lg:h-[10rem] md:h-[12rem] h-[14rem] mt-10 pb-20 ${styles}`}
      >
        <div className="flex w-full justify-center flex-wrap">
          <div
            id="one"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex items-center justify-center lg:w-[16rem] md:w-[18rem] sm:w-[27.5rem] w-[32rem] rounded-xl bg-[#302830] mx-4 h-16 mb-2 ${
              isHovered === "one" ? styles2 : "bg-[#302830]"
            }`}
          >
            <span
              className={`bg-clip-text text-transparent ${
                isHovered === "one" ? styles : styles3
              }`}
            >
              ©2024 Danta.Gt
            </span>
          </div>

          <div
            id="two"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex flex-wrap justify-center items-center bg-[#302830] rounded-xl lg:w-[16rem] sm:w-[27.5rem] md:w-[23rem] w-[28rem] none mx-4 h-16  mt-2 sm:mt-2 md:mt-0 lg:mt-0 order-last  lg:order-none ${
              isHovered === "two" ? styles2 : "bg-[#302830]"
            }`}
          >
            {icons.map((icon, index) => (
              <Link key={index}>
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  className="w-7 h-7 mx-3 "
                ></img>
              </Link>
            ))}
          </div>
          <div
            id="three"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex lg:w-[16rem] md:w-[18rem] sm:w-[27.5rem] w-[32rem] h-16 bg-[#302830] rounded-xl mx-4 items-center justify-center ${
              isHovered === "three" ? styles2 : "bg-[#302830]"
            } `}
          >
            <span
              id="three"
              className={`bg-clip-text text-transparent  ${
                isHovered === "three" ? styles : styles3
              }`}
            >
              Created by Danta.Gt
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default FooterSection;
