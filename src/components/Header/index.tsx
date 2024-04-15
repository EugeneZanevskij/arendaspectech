import { NAV } from "../../constants/nav";
import {
  HeaderContainer,
  NavItem,
  NavLinkItem,
  NavLinksContainer,
  NavLogo,
  NavbarContainer,
} from "./styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <NavbarContainer>
        <NavLogo to="/">ИП Колонтай</NavLogo>
        <NavLinksContainer>
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
