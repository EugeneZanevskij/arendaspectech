import styled from "styled-components";

export const UserDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 2rem;
`;
export const UserDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`;

export const Text = styled.p<{ fontsize?: string }>`
  font-size: ${(props) => props.fontsize || "1rem"};
`;

export const BoldText = styled.span`
  font-weight: 700;
`;

export const LogoutButton = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.red};
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;
