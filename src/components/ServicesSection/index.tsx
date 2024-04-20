import { SectionHeading } from "../SectionHeading";
import { ServicesSectionStyle, ServicesWrapper } from "./styled";

interface ServicesSectionProps {
  children: JSX.Element;
}

const sectionHeading = {
  title: "Наши услуги",
  subtitle: "ИП Колонтай - ваш надежный помощник по аренде спецтехники",
};
export const ServicesSection = ({ children }: ServicesSectionProps) => {
  return (
    <ServicesSectionStyle>
      <ServicesWrapper>
        <SectionHeading {...sectionHeading} color={true} />
        {children}
      </ServicesWrapper>
    </ServicesSectionStyle>
  );
};
