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
      <main className="h-[100rem]">
        <HomeSection></HomeSection>
        <ProjectSection></ProjectSection>
        <SkillSection></SkillSection>
        <ContactSection
          styles="top-[141rem]"
          styles2="top-[150rem]"
          styles3="mt-[5rem]"
        />
      </main>
      <FooterSection styles="-bottom-[70rem]" />
    </>
  );
};
export default PortofolioLayouts;
