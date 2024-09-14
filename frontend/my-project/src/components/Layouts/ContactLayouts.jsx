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
      <NavbarPortofolioNew></NavbarPortofolioNew>
      <main className="h-[90rem]">
        <ContactSection1 />
        <ContactSection2 />
      </main>
      <FooterSection styles="-top-[6rem]"></FooterSection>
    </>
  );
};
export default ContactLayouts;
