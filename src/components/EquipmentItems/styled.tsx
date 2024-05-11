import styled from "styled-components";

export const EquipmentTypeContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
