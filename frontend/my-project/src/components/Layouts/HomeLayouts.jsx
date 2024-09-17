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
      <main className="lg:h-[100rem] md:h-[110rem] pb-40">
        <HomeSection></HomeSection>
        <ProjectSection></ProjectSection>
        <SkillSection></SkillSection>
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
};
export default PortofolioLayouts;
