import LingkaranCursor from "../Elements/Cursor/lingkaran";
import ScrollToTop from "../Elements/Scroll";
import AboutSection1 from "../Fragments/Portofolio/About/AboutSection1";
import AboutSection2 from "../Fragments/Portofolio/About/AboutSection2";
import AboutSection3 from "../Fragments/Portofolio/About/AboutSection3";
import ContactSection from "../Fragments/Portofolio/ContactSection";
import FooterSection from "../Fragments/Portofolio/FooterSection";
import NavbarPortofolioNew from "../Fragments/Portofolio/NavbarPortofolioNew";

const AboutLayouts = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <LingkaranCursor></LingkaranCursor>
      <NavbarPortofolioNew style="bg-gradient-to-r from-[#F7971E] to-[#FFD200]"></NavbarPortofolioNew>
      <main className="h-[100rem]">
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <ContactSection
          style="bg-gradient-to-r from-[#F7971E] to-[#FFD200]"
          style2="bg-gradient-to-r from-[#FFD200] to-[#F7971E]"
          style3="top-[15rem]"
        />
        <FooterSection
          styles="lg:top-[17.5rem] md:top-[15.5rem] sm:top-[14rem] top-[15rem]
          bg-clip-text text-transparent bg-gradient-to-r from-[#002147] to-[black]"
          styles2="bg-gradient-to-r from-[#F7971E] to-[#FFD200]"
          styles3="bg-gradient-to-r from-[#F7971E] to-[#FFD200]"
        ></FooterSection>
      </main>
    </>
  );
};
export default AboutLayouts;
