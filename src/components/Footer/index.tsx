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
} from "./styled";
import { FOOTER_DATA } from "../../constants/footer";
import { NAV } from "../../constants/nav";

const { logo, title, footerData, copyright } = FOOTER_DATA;

export const Footer = () => {
  return (
    <FooterContent>
      <FooterWrapper>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo to="/">{logo}</FooterLogo>
            <FooterColumnNavLinks>
              {NAV.map((nav) => (
                <FooterColumnNavLink key={nav.name} to={nav.path}>
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
        </FooterContainer>
      </FooterWrapper>
      <Copyright>{copyright}</Copyright>
    </FooterContent>
  );
};
