import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";

interface ServicesSectionProps {
  children: JSX.Element;
}

const sectionHeading = {
  title: "Наши услуги",
  subtitle: "ИП Колонтай - ваш надежный помощник по аренде спецтехники",
};
export const ServicesSection = ({ children }: ServicesSectionProps) => {
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        {children}
      </>
    </SectionContainer>
  );
};
