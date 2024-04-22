import { SectionHeading } from "../SectionHeading";
import {
  AboutDetailsContainer,
  AboutParagraph,
  AboutStrongParagraph,
  AboutText,
} from "./styled";
import { ABOUT_DATA } from "../../constants/about";
import { AboutDetail } from "./AboutDetail";
import { SectionContainer } from "../SectionContainer";

const sectionHeading = {
  title: "ИП Колонтай",
  subtitle: "Аренда строительной техники в Гродно и Гродненском районе",
};

export const AboutSection = () => {
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        <AboutText>
          <AboutStrongParagraph>
            ИП Колонтай предлагает спецтехнику широкого назначения в аренду в
            Гродно и Гродненском районе как крупнейшим строительным и
            производственным компаниям, так и представителям малого бизнеса,
            частным заказчикам.
          </AboutStrongParagraph>
          <AboutParagraph>
            Наш автопарк включат в себя наиболее востребованную и универсальную
            строительную технику. Наша техника своевременно проходит все
            необходимые виды осмотров, имеет разрешения Проматомнадзора, а также
            ежедневно проверяется механиком, что гарантирует Вам безопасность во
            время проведения строительных работ.
          </AboutParagraph>
          <AboutParagraph>
            Наша компания обладает большим опытом и экспертизой, наши
            специалисты всегда готовы помочь вам в реализации сложных
            строительных задач и подобрать подходящую технику.
          </AboutParagraph>
        </AboutText>
        <AboutDetailsContainer>
          {ABOUT_DATA.details.map((detail) => (
            <AboutDetail
              key={detail.id}
              title={detail.title}
              text={detail.text}
            />
          ))}
        </AboutDetailsContainer>
      </>
    </SectionContainer>
  );
};
