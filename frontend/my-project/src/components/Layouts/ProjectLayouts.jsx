import LingkaranCursor from "../Elements/Cursor/lingkaran";
import ScrollToTop from "../Elements/Scroll";
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
      <NavbarPortofolioNew></NavbarPortofolioNew>
      <main className="h-[100rem]">
        <ProjectSection1 />
        <ProjectSection2 />
        <ContactSection
          styles="top-[103.5rem]"
          styles2="top-[112rem]"
          styles3="mt-[10rem]"
        />
      </main>
      <FooterSection styles="-bottom-[33.5rem]"></FooterSection>
    </>
  );
};
export default ProjectLayouts;
