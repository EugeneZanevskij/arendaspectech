import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.blackTextColor};

  @media screen and (max-width: 480px) {
    height: 15rem;
  }
`;
