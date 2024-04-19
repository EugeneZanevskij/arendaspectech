import styled from "styled-components";

export const WorkStagesItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 20rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 3rem;
  border: 1px solid ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
`;

export const WorkStagesItemTop = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const WorkStagesItemNumber = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.darkOrange};
`;

export const WorkStagesItemTitle = styled.h3`
  font-size: 1.5rem;
`;

export const WorkStagesItemSubtitle = styled.p`
  color: ${({ theme }) => theme.blackTextColor};
  font-size: 1rem;
`;
