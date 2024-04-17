import styled from "styled-components";

export const AdvantagesSection = styled.section`
  background-color: ${({ theme }) => theme.black};
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const AdvantagesWrapper = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
`;

export const AdvantagesText = styled.div`
  max-width: 37.5rem;
  width: 100%;
  margin: 0 auto 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const AdvantagesTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 2rem;
`;

export const AdvantagesSubtitle = styled.p`
  color: ${({ theme }) => theme.whiteTextColor};
  font-size: 1.25rem;
`;

export const AdvantagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
