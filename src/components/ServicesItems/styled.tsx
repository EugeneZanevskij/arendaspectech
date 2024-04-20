import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
