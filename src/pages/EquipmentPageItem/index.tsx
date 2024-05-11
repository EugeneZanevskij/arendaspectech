import { Link } from "react-router-dom";
import { IEquipmentFullExtended, IEquipmentTypeItem } from "../../types";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import { EQUIPMENTTYPES } from "../../constants/equipmentTypes";

interface EquipmentPageProps {
  equipment: IEquipmentFullExtended;
}

const EquipmentContainer = styled.div`
  background-color: ${({ theme }) => theme.lightGray};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EquipmentName = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const EquipmentDataContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;
`;

const EquipmentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem 3rem;
`;

const EquipmentTextItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: space-between;
`;

const EquipmentTextItemTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

const EquipmentTextItemParagraph = styled.p`
  margin: 0;
`;

const EquipmentImage = styled.img`
  max-width: 100%;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EquipmentDescription = styled.p`
  margin: 0 auto 1rem;
  max-width: 40rem;
  width: 100%;
  font-size: 1.25rem;
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 1rem;
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.orange};
`;

const PriceBlockTitle = styled.h4`
  font-weight: bold;
  font-size: 1.25rem;
`;

const PriceBlockSubtitle = styled.p`
  font-size: 1rem;
`;

const PriceBlockLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;

const EquipmentType = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  border-radius: 2rem;
  padding: 1.5rem;
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;

const EquipmentTypeTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;

const EquipmentTypeDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  max-width: 50rem;
  width: 100%;
`;

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
        <EquipmentTextContainer>
          <EquipmentTextItem>
            <EquipmentTextItemTitle>Гарантия:</EquipmentTextItemTitle>
            <EquipmentTextItemParagraph>4 года</EquipmentTextItemParagraph>
          </EquipmentTextItem>
          <PriceBlock>
            <PriceBlockTitle>Стоимость аренды</PriceBlockTitle>
            <PriceBlockSubtitle>
              {equipment.price} рублей/час
            </PriceBlockSubtitle>
            <PriceBlockLink to="/booking-form">Забронировать</PriceBlockLink>
          </PriceBlock>
        </EquipmentTextContainer>
        <EquipmentImage src={equipment.imagePath} alt={equipment.name} />
      </EquipmentDataContainer>

      <EquipmentDescription>{equipment.description}</EquipmentDescription>
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
