import { Link } from "react-router-dom";
import styled from "styled-components";

export const EquipmentContainer = styled.div`
  background-color: ${({ theme }) => theme.lightGray};
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EquipmentName = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const EquipmentDataContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const EquipmentImage = styled.img`
  max-width: 100%;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EquipmentDescription = styled.p`
  grid-column-start: 1;
  grid-column-end: 3;
  margin: 0 auto 1rem;
  max-width: 40rem;
  width: 100%;
  font-size: 1.25rem;
`;

export const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
  width: 100%;
  margin: 1rem auto;
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.orange};
`;

export const PriceBlockTitle = styled.h4`
  font-weight: bold;
  font-size: 1.75rem;
`;

export const PriceBlockSubtitle = styled.p`
  font-size: 1.5rem;
`;

export const PriceBlockLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;

export const EquipmentType = styled.div`
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

export const EquipmentTypeTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;
`;

export const EquipmentTypeDescription = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  max-width: 50rem;
  width: 100%;
`;
