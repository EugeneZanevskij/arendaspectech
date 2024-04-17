import { AdvantagesContainer, AdvantagesSection, AdvantagesSubtitle, AdvantagesText, AdvantagesTitle, AdvantagesWrapper } from "./styled"

export const Advantages = () => {
  return (
    <AdvantagesSection>
      <AdvantagesWrapper>
        <AdvantagesText>
          <AdvantagesTitle>Преимущества работы с нами</AdvantagesTitle>
          <AdvantagesSubtitle>ИП Колонтай поможет вам превратить ваши самые смелые идеи в жизнь. Трудное будет сделано немедленно!</AdvantagesSubtitle>
        </AdvantagesText>
        <AdvantagesContainer></AdvantagesContainer>
      </AdvantagesWrapper>
    </AdvantagesSection>
  )
}
