/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const AboutGraph = (props) => {
  const { childeren, styles } = props;
  const texts = [
    {
      article:
        "in the Moon Light agency I am actively involved in creating user interfaces for mobile apps and websites.",
    },
    {
      article:
        "in the Moon Light agency My job was to create adverts, branding, signage and other media products.",
    },
    {
      article:
        "I created original images for a range of digital and printed products.",
    },
  ];
  return (
    <>
      <div className="flex relative w-full mt-6">
        <div
          className="flex relative lg:w-[96vw] lg:mx-[3vw]
        md:w-[96vw] md:mx-[3vw] sm:w-[96vw] sm:mx-[3vw] w-[96vw] mx-[3vw] "
        >
          <div className="w-[1px] relative lg:h-[35rem] md:h-[40rem] sm:h-[40rem] h-[40rem] ml-[1vw] bg-white"></div>
          <div className="">
            {texts.map((text, index) => (
              <div key={text} className="mb-4">
                <span className="lg:right-[0.42rem] lg:top-[2rem] lg:text-3xl md:right-[0.42rem] md:top-[1rem] md:text-3xl sm:right-[0.42rem] sm:top-[1rem] sm:text-3xl right-[0.42rem] top-[1rem] text-3xl  relative text-white ">
                  •
                </span>
                <div className="relative w-4 h-[1px] lg:top-[1rem] sm:top-[0.03rem] top-[0.03rem] bg-white"></div>
                <h2
                  className="relative w-40 lg:left-[1rem] lg:bottom-[0.65rem]
                md:left-[1rem] md:bottom-[1.65rem] sm:left-[1rem] sm:bottom-[1.65rem] left-[1rem] bottom-[1.65rem] text-center py-3 rounded-full border-2 bg-clip-text text-transparent bg-gradient-to-r from-[#7474BF] to-[#348AC7] border-white"
                >
                  2023 - Present
                </h2>
                <h3 className="relative text-white lg:text-3xl lg:top-1 left-[1.3rem] md:text-3xl md:bottom-5 sm:text-3xl sm:bottom-5 text-3xl bottom-5">
                  Moon Light agency
                </h3>
                <h4 className="relative text-white lg:text-[1rem] lg:top-1 md:bottom-5 sm:bottom-5 bottom-5 left-[1.3rem]">
                  UI/UX designer
                </h4>
                <p className="relative left-[1.4rem] lg:w-[86vw] lg:top-[0.2rem] md:bottom-5 md:w-[86vw] sm:bottom-5 sm:w-[86vw] bottom-5 w-[86vw] text-white">
                  in the Moon Light agency I am actively involved in creating
                  user interfaces for mobile apps and websites
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutGraph;
