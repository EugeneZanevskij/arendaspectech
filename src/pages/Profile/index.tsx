import { useEffect } from "react";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";
import { OrangeLink, LogoutButton } from "./styled";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout } from "../../slices/authSlice";
import { getUser } from "../../slices/userSlice";
import { UserItem } from "../../components/UserItem";
import TableEquipment from "../../components/TableEquipment";

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
            {userProfileInfo.isAdmin && (
              <OrangeLink to="/admin">Панель администратора</OrangeLink>
            )}
            <UserItem user={userProfileInfo} isAdmin={false} />
            <TableEquipment
              isAdmin={userProfileInfo.isAdmin}
              userId={userProfileInfo.id}
            />
            <LogoutButton onClick={handleLogout}>Выйти</LogoutButton>
          </>
        ) : (
          <>
            <OrangeLink to="/login">Авторизация</OrangeLink>
          </>
        )}
      </>
    </SectionContainer>
  );
};
