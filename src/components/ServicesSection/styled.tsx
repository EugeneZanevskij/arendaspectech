import styled from "styled-components";

export const ServicesSectionStyle = styled.section`
  background-color: ${({ theme }) => theme.white};
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
`;
