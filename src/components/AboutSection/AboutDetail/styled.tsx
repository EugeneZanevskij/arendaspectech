import styled from "styled-components";

export const AboutDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  max-width: 12.5rem;
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.blackTextColor};
  border: 1px solid ${({ theme }) => theme.black};
`;

export const AboutDetailTitle = styled.h3`
  color: ${({ theme }) => theme.orange};
  font-size: 2rem;
`;

export const AboutDetailText = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  text-align: center;
`;
