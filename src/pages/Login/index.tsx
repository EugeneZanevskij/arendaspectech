import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getEnvVars } from "../../constants/env";
import {
  Input,
  Label,
  LoginContainer,
  LoginForm,
  RegisterButton,
  SubmitButton,
  Title,
} from "./styled";

const backendRoute = getEnvVars("backendRoute");

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${backendRoute}/api/login/`, values)
      .then((response) => {
        if (!response.data.error) {
          navigate("/");
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Вход</Title>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Введите ваш email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
        <Label htmlFor="password">Пароль</Label>
        <Input
          id="password"
          type="password"
          placeholder="Введите ваш пароль"
          value={values.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
        <SubmitButton type="submit">Войти</SubmitButton>
        <RegisterButton to="/register">Регистрация</RegisterButton>
      </LoginForm>
    </LoginContainer>
  );
};
