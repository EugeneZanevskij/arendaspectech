import { IEquipmentFullExtended } from "../../../types";
import {
  EquipmentItemContainer,
  EquipmentItemImg,
  EquipmentItemStyle,
  EquipmentItemSubtitle,
  EquipmentItemTitle,
} from "./styled";

interface EquipmentItemProps {
  equipment: IEquipmentFullExtended;
}

export const EquipmentItem = ({ equipment }: EquipmentItemProps) => {
  const absolutePath = `/equipment/${equipment.relativePath}`;
  return (
    <EquipmentItemStyle to={absolutePath}>
      <EquipmentItemContainer>
        <EquipmentItemImg src={equipment.imagePath} alt={equipment.name} />
        <EquipmentItemTitle>{equipment.name}</EquipmentItemTitle>
        <EquipmentItemSubtitle>{equipment.price} руб.</EquipmentItemSubtitle>
        <EquipmentItemSubtitle>{equipment.price} руб.</EquipmentItemSubtitle>
      </EquipmentItemContainer>
    </EquipmentItemStyle>
  );
};