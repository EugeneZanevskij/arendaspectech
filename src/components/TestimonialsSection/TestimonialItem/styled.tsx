import styled from "styled-components";

export const TestimonialContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const TestimonialTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TestimonialTextTitle = styled.h3`
  font-size: 2.5rem;
`;

export const TestimonialTextDivider = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.blackTextColor};
`;

export const TestimonialTextDescription = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.blackTextColor};
`;

export const TestimonialImage = styled.img`
  max-width: 400px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    max-width: 300px;
  }
`;
