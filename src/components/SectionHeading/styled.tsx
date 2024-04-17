import styled from "styled-components";

export const SectionHeadingText = styled.div`
  max-width: 37.5rem;
  width: 100%;
  margin: 0 auto 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SectionHeadingTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  font-size: 2rem;
`;

export const SectionHeadingSubtitle = styled.p`
  color: ${({ theme }) => theme.whiteTextColor};
  font-size: 1.25rem;
`;
