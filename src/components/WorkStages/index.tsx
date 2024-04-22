import { SectionHeading } from "../SectionHeading";
import { WorkStagesItem } from "./WorkStagesItem";
import { WorkStagesContainer } from "./styled";
import { WORK_STAGES } from "../../constants/workStages";
import { SectionContainer } from "../SectionContainer";

const sectionHeading = {
  title: "Этапы работы",
  subtitle: "3 простых шага на пути к успешному сотрудничеству",
};

export const WorkStages = () => {
  return (
    <SectionContainer background={"orange"}>
      <>
        <SectionHeading {...sectionHeading} />
        <WorkStagesContainer>
          {WORK_STAGES.map((stage) => (
            <WorkStagesItem
              key={stage.id}
              number={stage.id}
              title={stage.title}
              description={stage.description}
            />
          ))}
        </WorkStagesContainer>
      </>
    </SectionContainer>
  );
};
