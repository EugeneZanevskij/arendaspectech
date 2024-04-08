import { NAV } from "../../constants/nav";
import { NavLinksContainer, NavbarContainer, SwitchContainer } from "./styled";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <NavbarContainer>
      {/* <Logotype src={logo} alt="logo" /> */}
      <NavLinksContainer>
        {NAV.map((nav) => (
          <NavLink key={nav.name} to={nav.path}>
            {nav.name}
          </NavLink>
        ))}
      </NavLinksContainer>
      <SwitchContainer>THEME</SwitchContainer>
    </NavbarContainer>
  );
};
