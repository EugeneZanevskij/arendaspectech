import {
  FooterContent,
  Copyright,
  FooterWrapper,
  FooterContainer,
  FooterColumn,
  FooterLogo,
  FooterColumnNavLinks,
  FooterColumnNavLink,
  FooterColumnTitle,
  FooterItems,
  FooterItem,
  FooterItemText,
  FooterItemLink,
  FooterItemIcon,
  FooterColumnTwo,
} from "./styled";
import { FOOTER_DATA } from "../../constants/footer";
import { NAV } from "../../constants/nav";
import { MapComponent } from "../Map";

const { logo, title, footerData, copyright } = FOOTER_DATA;

export const Footer = () => {
  return (
    <FooterContent>
      <FooterWrapper>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to="/"
            >
              {logo}
            </FooterLogo>
            <FooterColumnNavLinks>
              {NAV.map((nav) => (
                <FooterColumnNavLink
                  key={nav.name}
                  to={nav.path}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  {nav.name}
                </FooterColumnNavLink>
              ))}
            </FooterColumnNavLinks>
          </FooterColumn>
          <FooterColumn>
            <FooterColumnTitle>{title}</FooterColumnTitle>
            <FooterItems>
              {footerData.map((item) => (
                <FooterItem key={item.title}>
                  <FooterItemIcon>
                    <item.icon size={32} />
                  </FooterItemIcon>
                  {item.href ? (
                    <FooterItemLink href={item.href}>
                      {item.title}
                    </FooterItemLink>
                  ) : (
                    <FooterItemText>{item.title}</FooterItemText>
                  )}
                </FooterItem>
              ))}
            </FooterItems>
          </FooterColumn>
          <FooterColumnTwo>
            <MapComponent />
          </FooterColumnTwo>
        </FooterContainer>
      </FooterWrapper>
      <Copyright>{copyright}</Copyright>
    </FooterContent>
  );
};
