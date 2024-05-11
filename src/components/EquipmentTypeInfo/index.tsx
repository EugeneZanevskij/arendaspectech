import { IEquipmentTypeItem } from "../../types";
import {
  EquipmentTypeInfoContainer,
  EquipmentTypeInfoTitle,
  EquipmentTypeInfoData,
} from "./styled";

interface EquipmentTypeInfoProps {
  equipmentType: IEquipmentTypeItem;
}
export const EquipmentTypeInfo = ({
  equipmentType,
}: EquipmentTypeInfoProps) => {
  return (
    <EquipmentTypeInfoContainer>
      <EquipmentTypeInfoTitle>{equipmentType.title}</EquipmentTypeInfoTitle>
      <EquipmentTypeInfoData></EquipmentTypeInfoData>
    </EquipmentTypeInfoContainer>
  );
};
