import { ADVANTAGES } from "../../constants/advantages";
import { AdvantagesItem } from "./AdvantagesItem";
import {
  AdvantagesContainer,
  AdvantagesSection,
  AdvantagesSubtitle,
  AdvantagesText,
  AdvantagesTitle,
  AdvantagesWrapper,
} from "./styled";

export const Advantages = () => {
  return (
    <AdvantagesSection>
      <AdvantagesWrapper>
        <AdvantagesText>
          <AdvantagesTitle>Преимущества работы с нами</AdvantagesTitle>
          <AdvantagesSubtitle>
            ИП Колонтай поможет вам превратить ваши самые смелые идеи в жизнь.
            Трудное будет сделано немедленно!
          </AdvantagesSubtitle>
        </AdvantagesText>
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
      </AdvantagesWrapper>
    </AdvantagesSection>
  );
};
