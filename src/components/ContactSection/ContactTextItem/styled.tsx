import styled from "styled-components";

export const ContactTextItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ContactTextItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.blackTextColor};
  color: ${({ theme }) => theme.orange};
  font-size: 1.5rem;
`;

export const ContactTextItemText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContactTextItemTitle = styled.p`
  color: ${({ theme }) => theme.black};
  font-size: 1.25rem;
  font-weight: 700;
`;

export const ContactTextItemDescription = styled.p`
  color: ${({ theme }) => theme.blackTextColor};
  font-size: 1rem;
`;

export const ContactTextItemLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.orange};
  font-weight: 700;

  &:hover {
    color: ${({ theme }) => theme.blackTextColor};
  }
`;
