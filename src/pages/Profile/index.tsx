import { useEffect, useState } from "react";
import axios from "axios";
import { getEnvVars } from "../../constants/env";
import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";
import { Link } from "react-router-dom";

const backendRoute = getEnvVars("backendRoute");
const sectionHeading = {
  title: "Профиль",
};
export const Profile = () => {
  const [auth, setAuth] = useState(false);
  // const [message, setMessage] = useState("");
  // const [users, setUsers] = useState({});
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios
      .get(`${backendRoute}/api/users/me`)
      .then((res) => {
        if (!res.data.error) {
          setAuth(true);
        } else {
          setAuth(false);
        }
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
            <h1>Профиль</h1>
            <button onClick={handleDelete}>Выйти</button>
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
