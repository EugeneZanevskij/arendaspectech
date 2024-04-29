import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
`;

export const Title = styled.h2`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  width: 15rem;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.orange};
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const RegisterButton = styled(Link)`
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.black};
  font-size: 1rem;
  color: #fff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;
