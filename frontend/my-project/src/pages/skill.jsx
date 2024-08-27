import UseAuth from "../components/Elements/Hook/useAuth";
import SkillFragment from "../components/Fragments/DashboardFragment/SkillFragment";
import MainLayouts from "../components/Layouts/MainLayouts";

const Skill = () => {
  return (
    <>
      <UseAuth></UseAuth>
      <MainLayouts page="skill">
        <SkillFragment></SkillFragment>
      </MainLayouts>
    </>
  );
};

export default Skill;
