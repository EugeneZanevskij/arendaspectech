import styled from "styled-components";

export const EquipmentTypeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const EquipmentTypeInfoTitle = styled.h3`
  color: ${({ theme }) => theme.black};
  text-align: center;
  font-size: 2.5rem;
`;

export const EquipmentTypeInfoData = styled.div`
  padding: 1rem 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  border-radius: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`;

export const EquipmentTypeInfoDataImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 20rem;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 1rem;
`;

export const EquipmentTypeInfoDataParagraph = styled.p`
  font-size: 1.5rem;
  text-align: center;
  grid-column: 2 / 3;
`;
