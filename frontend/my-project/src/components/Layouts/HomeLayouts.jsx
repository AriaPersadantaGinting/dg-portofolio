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
      <NavbarPortofolioNew style="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"></NavbarPortofolioNew>
      <main className="lg:h-[100rem] md:h-[110rem] sm:h-[110rem] h-[100rem] pb-64">
        <HomeSection></HomeSection>
        <ProjectSection></ProjectSection>
        <SkillSection></SkillSection>
        <ContactSection
          style="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"
          style2="bg-gradient-to-r from-[#fdeff9] to-[#7303c0]"
          style3="mt-10 mb-32"
        />
        <FooterSection
          styles="lg:top-[-3rem] md:top-[-5rem] sm:top-[-5rem] bg-clip-text text-transparent bg-gradient-to-r from-[#002147] to-[black]"
          styles2="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"
          styles3="bg-gradient-to-r from-[#7303c0] to-[#fdeff9]"
        />
      </main>
    </>
  );
};
export default PortofolioLayouts;
