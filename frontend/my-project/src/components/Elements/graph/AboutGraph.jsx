/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const AboutGraph = (props) => {
  const { childeren, styles } = props;
  return (
    <>
      <div
        className={`lg:w-[50rem] lg:h-[12rem]  mt-8 relative left-10 ${styles}`}
      >
        <div className="flex text-blue-800 relative">
          <span className="lg:w-2 h-2 ml-2 mt-8 rounded-full bg-white"></span>
          <span className="lg:w-5 h-[1px] mt-9 bg-white"></span>
          <h2 className="lg:w-40 lg:h-12 border-2 border-white rounded-full text-center mt-[0.7rem]">
            <span className="mt-2 inline-block"> 2020 - Present</span>
          </h2>
        </div>
        <div className="lg:w-[50rem] ml-9 text-white ">
          <h2 className="lg:text-[2rem] mb-4">Moon Light Agency</h2>
          <p className="lg:text-[1.1rem] mb-1">UI/UX designer</p>
          <p className="lg:text-[1rem]">
            in the Moon Light agency I am actively involved in creating user
            interfaces for mobile apps and websites.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutGraph;
