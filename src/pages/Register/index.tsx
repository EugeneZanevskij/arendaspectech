import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getEnvVars } from "../../constants/env";
import {
  Input,
  Label,
  LoginButton,
  RegisterContainer,
  RegisterForm,
  SubmitButton,
  TelInput,
  Title,
} from "./styled";

const backendRoute = getEnvVars("backendRoute");

export const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${backendRoute}/api/register`, values)
      .then((response) => {
        if (response.status === 201) {
          navigate("/login");
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit}>
        <Title>Регистрация</Title>
        <Label htmlFor="username">Имя и Фамилия</Label>
        <Input
          id="username"
          type="text"
          placeholder="Введите ваше имя и фамилию"
          value={values.username}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Введите ваш email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <Label htmlFor="tel">Номер телефона</Label>
        <TelInput
          id="tel"
          mask="+375 (99) 999-99-99"
          placeholder="Введите ваш номер"
          value={values.phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValues({ ...values, phone: e.target.value })
          }
        />
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          placeholder="Введите ваш пароль"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <SubmitButton type="submit">Регистрация</SubmitButton>
        <LoginButton to="/login">Логин</LoginButton>
      </RegisterForm>
    </RegisterContainer>
  );
};
