import { IEquipmentItem } from "../../types";
import {
  EquipmentInfoContainer,
  EquipmentInfoTitle,
  EquipmentInfoData,
} from "./styled";

interface EquipmentInfoProps {
  equipment: IEquipmentItem;
}
export const EquipmentInfo = ({ equipment }: EquipmentInfoProps) => {
  return (
    <EquipmentInfoContainer>
      <EquipmentInfoTitle>{equipment.title}</EquipmentInfoTitle>
      <EquipmentInfoData></EquipmentInfoData>
    </EquipmentInfoContainer>
  );
};
