/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TextRevealCard } from "../../../Elements/ui/text-reveal-card";

/* eslint-disable react/no-unescaped-entities */
const SkillSection1 = (props) => {
  const { style } = props;
  return (
    <>
      <section className="w-full mb-64 pt-40 pb-5">
        <div className="flex flex-col ">
          <TextRevealCard
            text="Core Competencies"
            revealText="Core Competencies"
            className="lg:text-8xl md:text-[8.5vw] sm:text-[8vw] text-[9.6vw] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#e52d27] to-[#b31217]"
            style="sm:text-[3rem] lg:text-8xl md:text-[8.5vw] sm:text-[8vw] text-[9.6vw] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#e52d27] to-[#b31217]"
            style2="lg:w-[60rem] lg:ml-8 lg:p-8  md:w-[90vw] md:ml-7 md:p-8 sm:w-[85vw] sm:ml-16 w-[87vw] mx-6 "
            style3="h-40 "
            style4="[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
          ></TextRevealCard>
          {/* <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#e52d27] to-[#b31217] lg:text-8xl lg:ml-16 py-4 md:text-7xl md:ml-16 sm:text-6xl sm:ml-16 text-6xl ml-4">
            Core Competencies
          </h1> */}
          <p className="text-white lg:w-[60vw] lg:ml-16 lg:text-[1.2rem]  md:w-[63vw] md:ml-16 md:text-[1.2rem]  sm:w-[80vw] sm:ml-16 sm:text-[1.2rem] w-[86vw] mx-6 text-[1.2rem]">
            These are the skills that power everything I do. Whether it's
            turning ideas into functional code or crafting smooth user
            experiences, these core competencies are the driving force behind my
            projects. Take a look at what I bring to the table!
          </p>
        </div>
      </section>
    </>
  );
};
export default SkillSection1;
