import styled from "styled-components";

export const AboutSectionStyle = styled.section`
  background-color: ${({ theme }) => theme.white};
  padding: 5rem 2rem;
  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const AboutWrapper = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
`;

export const AboutText = styled.div`
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
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

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
