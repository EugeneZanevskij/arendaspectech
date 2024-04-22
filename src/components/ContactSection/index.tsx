import { CONTACT_DATA } from "../../constants/contact";
import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";
import { ContactTextItem } from "./ContactTextItem";
import { ContactContainer, ContactText, ContactTextTitle } from "./styled";

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
            <ContactTextTitle>
              СВЯЖИТЕСЬ С НАМИ УДОБНЫМ СПОСОБОМ!
            </ContactTextTitle>
            {CONTACT_DATA.map((contact) => (
              <ContactTextItem key={contact.id} {...contact} />
            ))}
          </ContactText>
        </ContactContainer>
      </>
    </SectionContainer>
  );
};
