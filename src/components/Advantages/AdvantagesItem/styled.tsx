import styled from "styled-components";

export const AdvantagesItemContainer = styled.div`
  color: ${({ theme }) => theme.white};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 20rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.orange};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.darkGray};
  }
`;

export const AdvantagesItemTitle = styled.h3`
  font-size: 1.5rem;
`;

export const AdvantagesItemSubtitle = styled.p`
  color: ${({ theme }) => theme.whiteTextColor};
  font-size: 1.25rem;
`;
