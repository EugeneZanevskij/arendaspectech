import styled from "styled-components";

export const EquipmentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const EquipmentInfoData = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  background-color: ${({ theme }) => theme.lightOrange};
  border-radius: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const EquipmentInfoTitle = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
`;
