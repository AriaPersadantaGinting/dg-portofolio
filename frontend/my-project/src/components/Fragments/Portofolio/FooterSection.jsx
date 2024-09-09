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
      <footer className={`relative pb-14 ${styles}`}>
        <div className="flex justify-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center ml-20 mr-4 cursor-pointer"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-[2rem] h-[2rem]" // Adjust size as needed
              />
            </div>
          ))}
        </div>
      </footer>
    </>
  );
};
export default FooterSection;
