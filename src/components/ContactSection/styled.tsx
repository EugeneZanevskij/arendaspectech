import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.white};
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  padding: 2rem;
  margin: 0 auto;
`;

export const ContactTextTitle = styled.h3`
  font-size: 1.75rem;
`;
