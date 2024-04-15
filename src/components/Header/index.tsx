import { useEffect, useState } from "react";
import { NAV } from "../../constants/nav";
import {
  BurgerMenu,
  ContactLink,
  ContactsContainer,
  HeaderContainer,
  NavItem,
  NavLinkItem,
  NavLinksContainer,
  NavLogo,
  NavbarContainer,
  ViberLink,
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
        <BurgerMenu size={28} onClick={toggleMenu} isOpen={isOpen} />
        <NavLinksContainer isOpen={isOpen}>
          {NAV.map((nav) => (
            <NavItem key={nav.name}>
              <NavLinkItem to={nav.path}>{nav.name}</NavLinkItem>
            </NavItem>
          ))}
        </NavLinksContainer>
        <ContactsContainer>
          <ContactLink href="tel:+375292155521">
            +375 (29) 215-55-21
          </ContactLink>
          <ContactLink href="tel:+375296667939">
            +375 (29) 666-79-39
          </ContactLink>
          <ContactLink href="viber://chat?number=375292155521">
            <ViberLink />
          </ContactLink>
        </ContactsContainer>
      </NavbarContainer>
    </HeaderContainer>
  );
};
