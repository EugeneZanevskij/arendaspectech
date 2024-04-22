import { CONTACT_DATA, CONTACT_DATA_TEXT } from "../../constants/contact";
import { MapComponent } from "../Map";
import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";
import { ContactTextItem } from "./ContactTextItem";
import {
  ContactContainer,
  ContactMap,
  ContactParagraph,
  ContactText,
  ContactTitle,
} from "./styled";

const sectionHeading = {
  title: "Контакты",
  subtitle: "Наш адрес и контакты",
};
export const ContactSection = () => {
  return (
    <SectionContainer background={"black"}>
      <>
        <SectionHeading {...sectionHeading} />
        <ContactContainer>
          <ContactText>
            <ContactTitle>СВЯЖИТЕСЬ С НАМИ УДОБНЫМ СПОСОБОМ!</ContactTitle>
            {CONTACT_DATA.map((contact) => (
              <ContactTextItem key={contact.id} {...contact} />
            ))}
          </ContactText>
          <ContactMap>
            <MapComponent />
          </ContactMap>
        </ContactContainer>
        <ContactContainer>
          <ContactText>
            <ContactTitle>Реквизиты</ContactTitle>
            {CONTACT_DATA_TEXT.map((text, index) => (
              <ContactParagraph key={index}>{text}</ContactParagraph>
            ))}
          </ContactText>
        </ContactContainer>
      </>
    </SectionContainer>
  );
};
