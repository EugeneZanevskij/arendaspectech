import { Link } from "react-router-dom";
import styled from "styled-components";

export const EquipmentTypeItemStyle = styled(Link)`
  max-width: 20rem;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem 1rem 1rem;
  border: 2px solid ${({ theme }) => theme.orange};
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  text-decoration: none;
`;

export const EquipmentTypeItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const EquipmentTypeItemImg = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-radius: 2rem;
`;

export const EquipmentTypeItemTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.orange};
`;

export const EquipmentTypeItemSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.blackTextColor};
  text-align: center;
`;

export const EquipmentTypeItemText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.orange};
`;
