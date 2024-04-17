import styled from "styled-components";

export const HomeHeroSection = styled.section`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.orange} 0%,
    ${({ theme }) => theme.white} 80%
  );
  padding: 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const HomeHeroContainer = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
`;

export const HomeHeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HomeHeroTitle = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) => theme.white};

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const HomeHeroImage = styled.img`
  width: 100%;
  max-width: 30rem;
  height: auto;
`;

export const HomeHeroBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 2rem;
  border: 0.5rem solid ${({ theme }) => theme.orange};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomeHeroBlockText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HomeHeroSubtitle = styled.h2`
  color: ${({ theme }) => theme.blackTextColor};
  font-size: 1.5rem;
`;

export const HomeHeroText = styled.p`
  color: ${({ theme }) => theme.blackTextColor};
  font-size: 1.25rem;
`;

export const HomeHeroButton = styled.button`
  background-color: ${({ theme }) => theme.orange};
  color: ${({ theme }) => theme.white};
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.darkOrange};
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.blackTextColor};
  font-weight: bold;
  font-size: 1.25rem;

  &:hover {
    color: ${({ theme }) => theme.black};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
