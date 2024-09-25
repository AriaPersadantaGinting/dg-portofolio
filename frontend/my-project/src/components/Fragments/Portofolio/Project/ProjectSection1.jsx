import { TextRevealCard } from "../../../Elements/ui/text-reveal-card";

const ProjectSection1 = () => {
  return (
    <>
      <section className="mb-20 pt-48 w-full">
        <div className="lg:w-[89vw] lg:mx-14 md:w-[87vw]  md:mx-14 sm:w-[87vw] sm:mx-[2.6rem] w-[87vw] mx-6">
          <TextRevealCard
            text="Experiments"
            revealText="Experiments"
            className="lg:text-9xl md:text-[9vw] sm:text-[8vw] text-[13vw] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#56ab2f] to-[#a8e063]"
            style="sm:text-[3rem] lg:text-9xl md:text-[9vw] sm:text-[10vw] text-[13vw] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#56ab2f] to-[#a8e063]"
            style2="lg:w-[67vw] lg:ml-8 lg:p-8 md:w-[70vw] md:ml-7 md:p-8 sm:w-[70vw] sm:ml-16 w-[87vw] mx-1"
            style3="h-40"
            style4="[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
          ></TextRevealCard>
          <p className="lg:w-[49rem] lg:text-[1.4rem] lg:ml-16 md:w-[80vw] md:text-[1.4rem] sm:w-[80vw] sm:text-[1.4rem] sm:ml-16 w-[85vw] text-[1.2rem] ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#ECE9E6]  to-[#FFFFFF]">
            Take a look at the theme provided. Choose the suitable layout.
            Customize it. Use the selected style and launch the project.
          </p>
        </div>
      </section>
    </>
  );
};
export default ProjectSection1;
