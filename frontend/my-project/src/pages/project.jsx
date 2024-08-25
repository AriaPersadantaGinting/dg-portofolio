import ProjectFragment from "../components/Fragments/DashboardFragment/ProjectFragment";
import MainLayouts from "../components/Layouts/MainLayouts";

const Project = () => {
  return (
    <>
      <MainLayouts page="project">
        <ProjectFragment></ProjectFragment>
      </MainLayouts>
    </>
  );
};

export default Project;
