import UserFragment from "../components/Fragments/DashboardFragment/UserFragment";
import MainLayouts from "../components/Layouts/MainLayouts";

const User = () => {
  return (
    <>
      <MainLayouts page="user">
        <UserFragment></UserFragment>
      </MainLayouts>
    </>
  );
};

export default User;
