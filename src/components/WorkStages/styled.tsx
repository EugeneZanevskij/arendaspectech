import styled from "styled-components";

export const WorkStagesSection = styled.section`
  background-color: ${({ theme }) => theme.orange};
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const WorkStagesWrapper = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
`;

export const WorkStagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
