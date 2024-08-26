import UseAuth from "../components/Elements/Hook/useAuth";
import MainLayouts from "../components/Layouts/MainLayouts";

const Contact = () => {
  return (
    <>
      <UseAuth></UseAuth>
      <MainLayouts page="contact"></MainLayouts>
    </>
  );
};

export default Contact;
