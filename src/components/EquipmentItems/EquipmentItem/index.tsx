import { IEquipmentItem } from "../../../types";
import {
  EquipmentItemContainer,
  EquipmentItemImg,
  EquipmentItemStyle,
  EquipmentItemSubtitle,
  EquipmentItemText,
  EquipmentItemTitle,
} from "./styled";

interface EquipmentItemProps {
  equipment: IEquipmentItem;
}

export const EquipmentItem = ({ equipment }: EquipmentItemProps) => {
  return (
    <EquipmentItemStyle to={equipment.absolutePath}>
      <EquipmentItemContainer>
        <EquipmentItemImg src={equipment.image} alt={equipment.title} />
        <EquipmentItemTitle>{equipment.title}</EquipmentItemTitle>
        <EquipmentItemSubtitle>{equipment.subtitle}</EquipmentItemSubtitle>
      </EquipmentItemContainer>
      <EquipmentItemText>ПОДРОБНЕЕ</EquipmentItemText>
    </EquipmentItemStyle>
  );
};
