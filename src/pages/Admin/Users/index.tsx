import { SectionHeading } from "../../../components/SectionHeading";
import { Outlet } from "react-router-dom";

const sectionHeading = {
  title: "Список клиентов",
  subtitle: "Клиенты компании Колонтай",
};

export const Users: React.FC = () => {
  return (
    <>
      <SectionHeading {...sectionHeading} color={true} />
      <Outlet />
    </>
  );
};
