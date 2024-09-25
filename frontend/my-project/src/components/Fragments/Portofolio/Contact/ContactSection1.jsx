import { TextRevealCard } from "../../../Elements/ui/text-reveal-card";

/* eslint-disable react/no-unescaped-entities */
const ContactSection1 = () => {
  return (
    <>
      <section className="flex mb-20 pt-48">
        <div>
          <TextRevealCard
            text="Let's Connect"
            revealText="Let's Connect"
            className="lg:text-10xl md:text-[8.5vw] sm:text-[8vw] text-[11vw] py-10 font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#24639b]  to-[#93EDC7]"
            style="sm:text-[3rem] lg:text-10xl md:text-[8.5vw] sm:text-[8vw] text-[11vw] py-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1CD8D2] via-[#24639b]  to-[#93EDC7]"
            style2="lg:w-[50rem] lg:ml-8 lg:p-8  md:w-[75vw] md:ml-7 md:p-8 sm:w-[75vw] sm:ml-16 w-[75vw] mx-6"
            style3="h-40 "
            style4="[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"
          ></TextRevealCard>
          <p className="lg:w-[60vw] lg:ml-16 lg:text-[1.2rem] md:w-[55vw] md:ml-16 md:text-[1.2rem]  sm:w-[80vw] sm:ml-16 sm:text-[1.2rem] w-[86vw] ml-6 text-[1.2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#ECE9E6]  to-[#FFFFFF]">
            Fill out the form below to get in touch with me. I'm always excited
            to hear about new opportunities and I'll do my best to respond to
            your inquiry within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
};
export default ContactSection1;
