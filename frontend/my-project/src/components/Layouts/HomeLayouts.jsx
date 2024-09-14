import LingkaranCursor from "../Elements/Cursor/lingkaran";
import ScrollToTop from "../Elements/Scroll";
import ContactSection from "../Fragments/Portofolio/ContactSection";
import FooterSection from "../Fragments/Portofolio/FooterSection";
import HomeSection from "../Fragments/Portofolio/HomeSection";
// import NavbarPortofolio from "../Fragments/Portofolio/NavbarPortofolio";
import NavbarPortofolioNew from "../Fragments/Portofolio/NavbarPortofolioNew";
import ProjectSection from "../Fragments/Portofolio/ProjectSection";
import SkillSection from "../Fragments/Portofolio/SkillSection";

const PortofolioLayouts = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <LingkaranCursor></LingkaranCursor>
      <NavbarPortofolioNew></NavbarPortofolioNew>
      <main className="lg:h-[100rem] md:h-[110rem]">
        <HomeSection></HomeSection>
        <ProjectSection></ProjectSection>
        <SkillSection></SkillSection>
        <ContactSection
          styles="lg:top-[2rem] lg:left-[2rem] md:bottom-[17vw] md:left-[4.5vw]"
          styles2="lg:top-[11rem] lg:left-[5rem] md:bottom-[8vw] md:left-[7.5vw] "
          styles3="lg:mt-[5rem]"
        />
      </main>
      <FooterSection styles="lg:-bottom-[71rem] md:-bottom-[125rem] lg:pb-[5rem] md:pb-[6rem]" />
    </>
  );
};
export default PortofolioLayouts;
