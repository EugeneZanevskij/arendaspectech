import { SectionHeading } from "../../../components/SectionHeading";
import { Outlet } from "react-router-dom";

const sectionHeading = {
  title: "Список пользователей",
  subtitle: "Пользователи компании Колонтай",
};

export const Users: React.FC = () => {
  return (
    <>
      <SectionHeading {...sectionHeading} color={true} />
      <Outlet />
    </>
  );
};
