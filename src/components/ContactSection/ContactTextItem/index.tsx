import {
  ContactTextItemDescription,
  ContactTextItemIcon,
  ContactTextItemLink,
  ContactTextItemStyled,
  ContactTextItemText,
  ContactTextItemTitle,
} from "./styled";
import { IContactItem } from "../../../types";
import React from "react";

export const ContactTextItem = ({ title, text, icon, href }: IContactItem) => {
  return (
    <ContactTextItemStyled>
      <ContactTextItemIcon>{React.createElement(icon)}</ContactTextItemIcon>
      <ContactTextItemText>
        <ContactTextItemTitle>{title}</ContactTextItemTitle>
        {href ? (
          <ContactTextItemLink href={href}>{text}</ContactTextItemLink>
        ) : (
          <ContactTextItemDescription>{text}</ContactTextItemDescription>
        )}
      </ContactTextItemText>
    </ContactTextItemStyled>
  );
};
