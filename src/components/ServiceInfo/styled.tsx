import styled from "styled-components";

export const ServiceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ServiceInfoTop = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  background-color: ${({ theme }) => theme.lightOrange};
  border-radius: 2rem;
`;

export const ServiceInfoTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
`;

export const ServiceInfoTitle = styled.h3`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
`;

export const ServiceInfoSubtitle = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 1.5rem;
`;

export const ServiceInfoButton = styled.div`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.orange};
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ServiceInfoTopImage = styled.img`
  grid-column: 2/4;
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
`;
