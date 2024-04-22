import styled from "styled-components";

export const SectionContainerStyled = styled.section<{ background?: string; color?: string}>`
  background-color: ${(props) => props.background==="orange" ? ({ theme }) => theme.orange : props.background==="black" ? ({ theme }) => theme.black : ({ theme }) => theme.white};
  color: ${(props) => props.color==="orange" ? ({ theme }) => theme.orange : props.color==="white" ? ({ theme }) => theme.white : ({ theme }) => theme.black};
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const SectionWrapper = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
`;
