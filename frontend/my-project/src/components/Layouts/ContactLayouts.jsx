import LingkaranCursor from "../Elements/Cursor/lingkaran";
import ScrollToTop from "../Elements/Scroll";
import ContactSection1 from "../Fragments/Portofolio/Contact/ContactSection1";
import ContactSection2 from "../Fragments/Portofolio/Contact/ContactSection2";
import FooterSection from "../Fragments/Portofolio/FooterSection";
import NavbarPortofolioNew from "../Fragments/Portofolio/NavbarPortofolioNew";

const ContactLayouts = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <LingkaranCursor></LingkaranCursor>
      <NavbarPortofolioNew style="bg-gradient-to-r from-[#1CD8D2] via-[#24639b] to-[#93EDC7]"></NavbarPortofolioNew>
      <main className="h-[90rem]">
        <ContactSection1 />
        <ContactSection2 />
        <FooterSection
          styles="lg:top-[-6rem] md:top-[-2.5rem] sm:top-[-2rem] top-[-2rem] bg-clip-text text-transparent bg-gradient-to-r from-[#f5f5f5] to-[white]"
          styles2="bg-gradient-to-r from-[#1CD8D2] via-[#24639b]  to-[#93EDC7]"
          styles3="bg-gradient-to-r from-[#1CD8D2] via-[#24639b]  to-[#93EDC7]"
        ></FooterSection>
      </main>
    </>
  );
};
export default ContactLayouts;
