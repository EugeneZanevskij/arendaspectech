import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  flex-direction: column;
`;

export const UserCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid ${({ theme }) => theme.black};
`;

export const UserCardItem = styled.div`
  padding: 10px;
`;

export const UserCardLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
`;
