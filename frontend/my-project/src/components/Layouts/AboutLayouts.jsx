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
      <NavbarPortofolioNew></NavbarPortofolioNew>
      <main className="h-[100rem]">
        <AboutSection1 />
        <AboutSection2 />
        <AboutSection3 />
        <ContactSection
          styles="top-[193rem]"
          styles2="top-[202rem]"
          styles3="mt-[5rem]"
        />
      </main>
      <FooterSection styles="-bottom-[122rem]"></FooterSection>
    </>
  );
};
export default AboutLayouts;
