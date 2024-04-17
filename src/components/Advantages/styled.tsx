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
