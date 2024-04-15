import { useEffect, useState } from "react";
import { NAV } from "../../constants/nav";
import {
  BurgerMenu,
  HeaderContainer,
  NavItem,
  NavLinkItem,
  NavLinksContainer,
  NavLogo,
  NavbarContainer,
} from "./styled";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <NavbarContainer>
        <NavLogo to="/">ИП Колонтай</NavLogo>
        <BurgerMenu size={28} onClick={toggleMenu}/>
        <NavLinksContainer open={isOpen}>
          {NAV.map((nav) => (
            <NavItem key={nav.name}>
              <NavLinkItem to={nav.path}>{nav.name}</NavLinkItem>
            </NavItem>
          ))}
        </NavLinksContainer>
      </NavbarContainer>
    </HeaderContainer>
  );
};
