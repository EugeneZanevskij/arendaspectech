import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  margin: 1rem 0 2rem;
`;

export const Text = styled.p<{ fontsize?: string }>`
  font-size: ${(props) => props.fontsize || "1rem"};
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const BackButton = styled(Link)`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.orange};
  text-decoration: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const EditButton = styled.button`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.darkGray};
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
