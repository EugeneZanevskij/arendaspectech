import styled from "styled-components";

export const HistoryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 60rem;
  width: 100%;
  margin: 0 auto;
`;

export const HistoryTextBoldParagraph = styled.p`
  color: ${({ theme }) => theme.blackTextColor};
  font-weight: bold;
  font-size: 1rem;
`;

export const HistoryTextParagraph = styled.p`
  color: ${({ theme }) => theme.blackTextColor};
  font-size: 1rem;
`;
