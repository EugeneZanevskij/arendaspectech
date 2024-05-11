import { IEquipmentTypeItem } from "../../../types";
import {
  EquipmentTypeItemContainer,
  EquipmentTypeItemImg,
  EquipmentTypeItemStyle,
  EquipmentTypeItemSubtitle,
  EquipmentTypeItemText,
  EquipmentTypeItemTitle,
} from "./styled";

interface EquipmentTypeItemProps {
  equipmentType: IEquipmentTypeItem;
}

export const EquipmentTypeItem = ({
  equipmentType,
}: EquipmentTypeItemProps) => {
  return (
    <EquipmentTypeItemStyle to={equipmentType.absolutePath}>
      <EquipmentTypeItemContainer>
        <EquipmentTypeItemImg
          src={equipmentType.image}
          alt={equipmentType.title}
        />
        <EquipmentTypeItemTitle>{equipmentType.title}</EquipmentTypeItemTitle>
        <EquipmentTypeItemSubtitle>
          {equipmentType.subtitle}
        </EquipmentTypeItemSubtitle>
      </EquipmentTypeItemContainer>
      <EquipmentTypeItemText>ПОДРОБНЕЕ</EquipmentTypeItemText>
    </EquipmentTypeItemStyle>
  );
};
