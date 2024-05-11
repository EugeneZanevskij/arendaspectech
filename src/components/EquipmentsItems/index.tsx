import { IEquipmentFullExtended } from "../../types";
import { EquipmentItem } from "./EquipmentItem";
import styled from "styled-components";

export const EquipmentContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface EquipmentsItemsProps {
  equipments: IEquipmentFullExtended[];
}

export const EquipmentsItems = ({ equipments }: EquipmentsItemsProps) => {
  return (
    <EquipmentContainer>
      {equipments.map((equipment) => (
        <EquipmentItem equipment={equipment} key={equipment.id} />
      ))}
    </EquipmentContainer>
  );
};
