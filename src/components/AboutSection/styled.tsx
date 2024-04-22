import styled from "styled-components";

export const AboutText = styled.div`
  max-width: 50rem;
  width: 100%;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AboutParagraph = styled.p`
  color: ${({ theme }) => theme.blackTextColor};
  font-size: 1rem;
`;

export const AboutStrongParagraph = styled.p`
  color: ${({ theme }) => theme.blackTextColor};
  font-size: 1rem;
  font-weight: bold;
`;

export const AboutDetailsContainer = styled.div`
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
