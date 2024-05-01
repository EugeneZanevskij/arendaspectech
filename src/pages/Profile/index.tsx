import { useEffect } from "react";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";
import { Link } from "react-router-dom";
import { BoldText, LogoutButton, Text, UserDataWrapper } from "./styled";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout } from "../../slices/authSlice";
import { getUser } from "../../slices/userSlice";
import axiosInstance from "../../api/axiosInstance";

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

  useEffect(() => {
    axiosInstance
      .get(`/users`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async () => {
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
            <UserDataWrapper>
              <Text fontsize="1.5rem">
                <BoldText>Имя: {userProfileInfo.username}</BoldText>
              </Text>
              <Text>E-mail: {userProfileInfo.email}</Text>
              <Text>Номер телефона: {userProfileInfo.phone}</Text>
            </UserDataWrapper>
            <LogoutButton onClick={handleDelete}>Выйти</LogoutButton>
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
