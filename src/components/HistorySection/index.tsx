import { SectionContainer } from "../SectionContainer";
import { SectionHeading } from "../SectionHeading";
import {
  HistoryTextBoldParagraph,
  HistoryTextContainer,
  HistoryTextParagraph,
} from "./styled";

const sectionHeading = {
  title: "История ИП Колонтай",
  subtitle: "10 лет на рынке строительных услуг",
};
export const HistorySection = () => {
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        <HistoryTextContainer>
          <HistoryTextBoldParagraph>
            За годы непрерывной работы ИП Колонтай зарекомендовал себя на рынке
            услуг как надежный и порядочный партнер.
          </HistoryTextBoldParagraph>
          <HistoryTextParagraph>
            С 2014 года мы предоставляем спецтехнику в аренду в Гродно и
            Гродненском районе. У нас есть следующие виды спецтранспорта для
            промышленного и гражданского строительства: погрузчик,
            мини-погрузчик, экскаватор-погрузчик, мини-экскаватор, самосвал,
            низкорамный трал. Работаем с частными и юридическими лицами.
          </HistoryTextParagraph>
        </HistoryTextContainer>
      </>
    </SectionContainer>
  );
};
