import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import { Navigate } from "react-router-dom";

const AdminLayout = () => {
  const userProfileData = useAppSelector((state) => state.user.userProfileData);

  if (!userProfileData || !userProfileData.isAdmin) {
    return <Navigate replace to={"/profile"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default AdminLayout;
