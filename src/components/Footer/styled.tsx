import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContent = styled.footer`
  color: ${({ theme }) => theme.white};
`;

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.orange};
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 1 15px 5px ${({ theme }) => theme.darkOrange};
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 1rem;
`;

export const FooterColumnTitle = styled.h3`
  font-size: 1.5rem;
`;

export const FooterItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FooterItemIcon = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 2rem;
  width: 2rem;
`;

export const FooterItemLink = styled.a`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  font-weight: bold;
  width: 100%;
`;

export const FooterItemText = styled.p`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
`;

export const FooterLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
`;

export const FooterColumnNavLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterColumnNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.blackTextColor};
  text-decoration: none;
  font-weight: bold;
  width: 100%;
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.white};
  }

  &.active {
    color: ${({ theme }) => theme.white};
  }
`;

export const Copyright = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1rem;
  padding: 1.25rem 2rem;
  background-color: ${({ theme }) => theme.black};

  @media screen and (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`;
