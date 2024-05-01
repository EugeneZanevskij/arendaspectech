import { useEffect, useState } from "react";
import axios from "axios";
import { getEnvVars } from "../../constants/env";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";
import { Link } from "react-router-dom";
import { IUserData } from "../../types";
import { BoldText, LogoutButton, Text, UserDataWrapper } from "./styled";

const backendRoute = getEnvVars("backendRoute");
const sectionHeading = {
  title: "Профиль",
};
export const Profile = () => {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<IUserData | null>(null);
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get(`${backendRoute}/api/users/1`)
      .then((res) => {
        if (!res.data.error) {
          setAuth(true);
          setUser(res.data);
        } else {
          setAuth(false);
          setUser(null);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${backendRoute}/api/users/`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = () => {
    axios
      .post(`${backendRoute}/api/logout`)
      .then((res) => {
        if (res.status == 200) {
          location.reload();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        {auth ? (
          <>
            {user && (
              <UserDataWrapper>
                <Text fontsize="1.5rem">
                  <BoldText>Имя: {user.username}</BoldText>
                </Text>
                <Text>E-mail: {user.email}</Text>
                <Text>Номер телефона: {user.phone}</Text>
              </UserDataWrapper>
            )}
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
