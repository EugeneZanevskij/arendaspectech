import { Link } from "react-router-dom";
import styled from "styled-components";

export const EquipmentItemStyle = styled(Link)`
  max-width: 20rem;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.orange};
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-decoration: none;
`;

export const EquipmentItemImg = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-radius: 2rem;
`;

export const EquipmentItemTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.orange};
`;

export const EquipmentItemSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.blackTextColor};
  text-align: center;
`;
