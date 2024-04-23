import { IEquipmentItem } from "../../types";
import { EquipmentItem } from "./EquipmentItem";
import { EquipmentContainer } from "./styled";

interface EquipmentItemsProps {
  equipments: IEquipmentItem[];
}

export const EquipmentsItems = ({ equipments }: EquipmentItemsProps) => {
  return (
    <EquipmentContainer>
      {equipments.map((equipment) => (
        <EquipmentItem equipment={equipment} key={equipment.id} />
      ))}
    </EquipmentContainer>
  );
};
