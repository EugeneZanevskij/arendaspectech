import { SectionContainer } from "../../components/SectionContainer";
import { SectionHeading } from "../../components/SectionHeading";
import { Outlet } from "react-router-dom";

const sectionHeading = {
  title: "Список пользователей",
  subtitle: "Пользователи компании Колонтай",
};

export const Users: React.FC = () => {
  return (
    <SectionContainer>
      <>
        <SectionHeading {...sectionHeading} color={true} />
        <Outlet />
      </>
    </SectionContainer>
  );
};
