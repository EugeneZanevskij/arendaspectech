import { IEquipmentFullExtended, IEquipmentTypeItem } from "../../types";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { EQUIPMENTTYPES } from "../../constants/equipmentTypes";
import {
  EquipmentContainer,
  EquipmentDataContainer,
  EquipmentDescription,
  EquipmentImage,
  EquipmentName,
  EquipmentType,
  EquipmentTypeDescription,
  EquipmentTypeTitle,
  PriceBlock,
  PriceBlockLink,
  PriceBlockSubtitle,
  PriceBlockTitle,
} from "./styled";

interface EquipmentPageProps {
  equipment: IEquipmentFullExtended;
}

export const EquipmentPageItem = ({ equipment }: EquipmentPageProps) => {
  const [category, setCategory] = useState<IEquipmentTypeItem>(
    {} as IEquipmentTypeItem,
  );
  const fetchEquipmentType = async () => {
    axiosInstance
      .get(`/admin/equipment-type/${equipment.id}`)
      .then((res) => {
        setCategory(
          EQUIPMENTTYPES.find((eq) => eq.title === res.data.name) ||
            ({} as IEquipmentTypeItem),
        );
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchEquipmentType();
  }, []);

  return (
    <EquipmentContainer>
      <EquipmentName>{equipment.name}</EquipmentName>
      <EquipmentDataContainer>
        <EquipmentDescription>{equipment.description}</EquipmentDescription>
        <EquipmentImage src={equipment.imagePath} alt={equipment.name} />
      </EquipmentDataContainer>
      <PriceBlock>
        <PriceBlockTitle>Стоимость аренды</PriceBlockTitle>
        <PriceBlockSubtitle>{equipment.price} рублей/час</PriceBlockSubtitle>
        <PriceBlockLink to="/booking-form">Забронировать</PriceBlockLink>
      </PriceBlock>

      {category && (
        <EquipmentType>
          <EquipmentTypeTitle>
            Тип оборудования: {category!.title}
          </EquipmentTypeTitle>
          <EquipmentTypeDescription>
            {category!.description}
          </EquipmentTypeDescription>
        </EquipmentType>
      )}
    </EquipmentContainer>
  );
};
