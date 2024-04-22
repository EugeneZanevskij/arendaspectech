import { ADVANTAGES } from "../../constants/advantages";
import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";
import { AdvantagesItem } from "./AdvantagesItem";
import { AdvantagesContainer } from "./styled";

const sectionHeading = {
  title: "Преимущества работы с нами",
  subtitle:
    "ИП Колонтай поможет вам превратить ваши самые смелые идеи в жизнь. Трудное будет сделано немедленно!",
};

export const Advantages = () => {
  return (
    <SectionContainer background={"black"}>
      <>
        <SectionHeading {...sectionHeading} />
        <AdvantagesContainer>
          {ADVANTAGES.map((advantage) => (
            <AdvantagesItem
              key={advantage.id}
              title={advantage.title}
              text={advantage.text}
              icon={advantage.icon}
            />
          ))}
        </AdvantagesContainer>
      </>
    </SectionContainer>
  );
};
