import UseAuth from "../components/Elements/Hook/useAuth";
import MainLayouts from "../components/Layouts/MainLayouts";

const Dashboards = () => {
  return (
    <>
      <UseAuth></UseAuth>
      <MainLayouts page="dashboards"></MainLayouts>
    </>
  );
};

export default Dashboards;
