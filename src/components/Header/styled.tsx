import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.orange};
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  gap: 2rem;
  padding: 1rem 0;
`;

export const NavLogo = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
`;

export const NavLinksContainer = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  max-width: 40rem;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 5rem;
    right: 0;
    width: 50%;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    box-shadow: -5px 5px 15px 5px ${({ theme }) => theme.darkOrange};
  }
`;

export const NavItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    background-color: ${({ theme }) => theme.white};

    &:hover {
      background-color: ${({ theme }) => theme.lightOrange};
    }
  }
`;

export const NavLinkItem = styled(NavLink)`
  color: ${({ theme }) => theme.blackTextColor};
  text-decoration: none;
  font-weight: bold;
  width: 100%;
  padding: 0.5rem;

  &:hover {
    color: ${({ theme }) => theme.white};
  }

  &.active {
    color: ${({ theme }) => theme.black};
    font-weight: bold;
    border: 1px solid ${({ theme }) => theme.black};
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const BurgerMenu = styled(GiHamburgerMenu)<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  color: ${(props) => props.isOpen && "white"};

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.blackTextColor};
  font-weight: bold;
  font-size: 1.25rem;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;
