import LingkaranCursor from "../Elements/Cursor/lingkaran";
import LoadingScreen from "../Elements/Loading/Home-Loading";
import ScrollToTop from "../Elements/Scroll";
import CircleScroll from "../Elements/Scroll/CircleScroll";
import ContactSection from "../Fragments/Portofolio/ContactSection";
import FooterSection from "../Fragments/Portofolio/FooterSection";
import NavbarPortofolioNew from "../Fragments/Portofolio/NavbarPortofolioNew";
import ProjectSection1 from "../Fragments/Portofolio/Project/ProjectSection1";
import ProjectSection2 from "../Fragments/Portofolio/Project/ProjectSection2";

const ProjectLayouts = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <LingkaranCursor></LingkaranCursor>
      <NavbarPortofolioNew style="bg-gradient-to-r from-[#56ab2f] to-[#a8e063]"></NavbarPortofolioNew>
      <main className="h-[100rem]">
        <CircleScroll style="text-[#56ab2f]" />
        <LoadingScreen />
        <ProjectSection1 />
        <ProjectSection2 />
        <ContactSection
          style="bg-gradient-to-r from-[#56ab2f] to-[#a8e063]"
          style2="bg-gradient-to-r from-[#a8e063] to-[#56ab2f]"
          style3="mt-10"
        />
        <FooterSection
          styles="lg:top-[2.5rem] md:top-[0.5rem] sm:top-[2.5rem] bg-clip-text text-transparent bg-gradient-to-r from-[#002147] to-[black]"
          styles2="bg-gradient-to-r from-[#56ab2f] to-[#a8e063]"
          styles3="bg-gradient-to-r from-[#56ab2f] to-[#a8e063]"
        ></FooterSection>
      </main>
    </>
  );
};
export default ProjectLayouts;
