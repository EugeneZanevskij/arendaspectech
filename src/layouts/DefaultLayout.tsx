import { Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import { Navigate } from "react-router-dom";

const DefaultLayout = () => {
  const basicUserInfo = useAppSelector((state) => state.user.userProfileData);

  if (basicUserInfo) {
    return <Navigate replace to={"/profile"} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
