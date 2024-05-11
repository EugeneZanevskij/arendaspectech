import { IEquipmentTypeItem } from "../../types";
import { EquipmentTypeItem } from "./EquipmentTypeItem";
import { EquipmentTypeContainer } from "./styled";

interface EquipmentTypeItemsProps {
  equipmentTypes: IEquipmentTypeItem[];
}

export const EquipmentsTypeItems = ({
  equipmentTypes,
}: EquipmentTypeItemsProps) => {
  return (
    <EquipmentTypeContainer>
      {equipmentTypes.map((equipmentType) => (
        <EquipmentTypeItem
          equipmentType={equipmentType}
          key={equipmentType.id}
        />
      ))}
    </EquipmentTypeContainer>
  );
};
