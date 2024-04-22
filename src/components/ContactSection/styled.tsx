import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.white};

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px;
  padding: 2rem;
  margin: 0 auto;

  @media screen and (max-width: 992px) {
    width: 350px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContactTextTitle = styled.h3`
  font-size: 1.75rem;
`;

export const ContactMap = styled.div`
  width: calc(100% - 500px);

  @media screen and (max-width: 992px) {
    width: calc(100% - 350px);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 20rem;
  }
`;
