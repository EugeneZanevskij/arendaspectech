import {
  WorkStagesItemContainer,
  WorkStagesItemNumber,
  WorkStagesItemSubtitle,
  WorkStagesItemTitle,
  WorkStagesItemTop,
} from "./styled";

interface WorkStagesItemProps {
  number: number;
  title: string;
  description: string;
}
export const WorkStagesItem = ({
  number,
  title,
  description,
}: WorkStagesItemProps) => {
  return (
    <WorkStagesItemContainer>
      <WorkStagesItemTop>
        <WorkStagesItemNumber>{number}</WorkStagesItemNumber>
        <WorkStagesItemTitle>{title}</WorkStagesItemTitle>
      </WorkStagesItemTop>
      <WorkStagesItemSubtitle>{description}</WorkStagesItemSubtitle>
    </WorkStagesItemContainer>
  );
};
