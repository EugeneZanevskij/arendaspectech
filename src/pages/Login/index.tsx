import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Label,
  LoginContainer,
  LoginForm,
  RegisterButton,
  SubmitButton,
  Title,
} from "./styled";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { login } from "../../slices/authSlice";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(login(values)).unwrap();
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
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
