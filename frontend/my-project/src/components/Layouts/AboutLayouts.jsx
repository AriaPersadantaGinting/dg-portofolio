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
        <ContactSection />
        <FooterSection styles="lg:top-[5rem] md:top-[5rem] sm:top-[5rem] top-[5rem]"></FooterSection>
      </main>
    </>
  );
};
export default AboutLayouts;
