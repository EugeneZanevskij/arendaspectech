import {
  ContactLink,
  HomeHeroBlock,
  HomeHeroBlockText,
  HomeHeroButton,
  HomeHeroContainer,
  HomeHeroContent,
  HomeHeroImage,
  HomeHeroSection,
  HomeHeroSubtitle,
  HomeHeroText,
  HomeHeroTitle,
} from "./styled";
import HomeHeroImg from "../../assets/home_hero_img.png";

export const HomeHero = () => {
  return (
    <HomeHeroSection>
      <HomeHeroContainer>
        <HomeHeroContent>
          <HomeHeroTitle>Аренда строительной спецтехники</HomeHeroTitle>
          <HomeHeroImage
            src={HomeHeroImg}
            alt="Строительная техника ИП Колонтай"
          />
        </HomeHeroContent>
        <HomeHeroBlock>
          <HomeHeroBlockText>
            <HomeHeroSubtitle>Консультация по услугам</HomeHeroSubtitle>
            <HomeHeroText>
              Наш менеджер свяжется с вами и ответит на все интересующие вас
              вопросы
            </HomeHeroText>
            <HomeHeroBlock>
              <ContactLink href="tel:+375292155521">
                +375 (29) 215-55-21
              </ContactLink>
              <ContactLink href="tel:+375296667939">
                +375 (29) 666-79-39
              </ContactLink>
            </HomeHeroBlock>
          </HomeHeroBlockText>
          <HomeHeroButton
            to="/booking-form"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Сделать заказ
          </HomeHeroButton>
        </HomeHeroBlock>
      </HomeHeroContainer>
    </HomeHeroSection>
  );
};
