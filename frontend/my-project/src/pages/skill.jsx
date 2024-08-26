import UseAuth from "../components/Elements/Hook/useAuth";
import MainLayouts from "../components/Layouts/MainLayouts";

const Skill = () => {
  return (
    <>
      <UseAuth></UseAuth>
      <MainLayouts page="skill"></MainLayouts>
    </>
  );
};

export default Skill;
