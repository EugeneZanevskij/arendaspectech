import { useEffect } from "react";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";
import { Link } from "react-router-dom";
import { LogoutButton } from "./styled";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout } from "../../slices/authSlice";
import { getUser } from "../../slices/userSlice";
import { UserItem } from "../../components/UserItem";

const sectionHeading = {
  title: "Профиль",
};
export const Profile = () => {
  const dispatch = useAppDispatch();

  const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
  const userProfileInfo = useAppSelector((state) => state.user.userProfileData);

  useEffect(() => {
    if (basicUserInfo) {
      dispatch(getUser(basicUserInfo.id));
    }
  }, [basicUserInfo]);

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        {userProfileInfo ? (
          <>
            <UserItem user={userProfileInfo} isAdmin={false} />
            <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
          </>
        ) : (
          <>
            <h1>Авторизация</h1>
            <Link to="/login">Авторизация</Link>
          </>
        )}
      </>
    </SectionContainer>
  );
};
