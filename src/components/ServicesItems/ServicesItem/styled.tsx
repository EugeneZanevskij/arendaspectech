import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesItemStyle = styled(Link)`
  max-width: 25rem;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 1.5rem;
  background: ${({ theme }) => theme.blackTextColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`;

export const ServicesItemImg = styled.img`
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
  border-radius: 2rem;
`;

export const ServicesItemTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.orange};
`;
