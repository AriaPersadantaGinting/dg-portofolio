import UseAuth from "../components/Elements/Hook/useAuth";
import ProjectFragment from "../components/Fragments/DashboardFragment/ProjectFragment";
import MainLayouts from "../components/Layouts/MainLayouts";

const Project = () => {
  return (
    <>
      <MainLayouts page="project">
        <UseAuth />
        <ProjectFragment></ProjectFragment>
      </MainLayouts>
    </>
  );
};

export default Project;
