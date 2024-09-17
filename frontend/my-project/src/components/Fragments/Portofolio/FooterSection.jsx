/* eslint-disable react/prop-types */
import igIcon from "/src/assets/ig.svg";
import ytIcon from "/src/assets/yt.svg";
import tiktokIcon from "/src/assets/tiktok.svg";
import fbIcon from "/src/assets/fb.svg";

const FooterSection = (props) => {
  const { styles } = props;
  const icons = [
    { src: igIcon, alt: "Instagram" },
    { src: ytIcon, alt: "Youtube" },
    { src: tiktokIcon, alt: "Tiktok" },
    { src: fbIcon, alt: "Facebook" },
  ];
  return (
    <>
      <footer className={`flex relative w-full h-14 mt-10 top-20 ${styles}`}>
        <div className="flex lg:w-[70vw] md:w-[70vw] sm:w-[95vw] w-[90vw] mx-auto items-center justify-center">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-[2rem] h-[2rem] lg:ml-16 lg:mr-16 md:ml-16 md:mr-16  sm:ml-16 sm:mr-16 ml-12 mr-12"
            />
          ))}
        </div>
      </footer>
    </>
  );
};
export default FooterSection;
