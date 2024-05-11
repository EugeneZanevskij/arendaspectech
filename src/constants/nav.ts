import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { EquipmentType } from "../pages/EquipmentType";
import { Contact } from "../pages/Contact";
import { Profile } from "../pages/Profile";
import { ROUTES } from "./routes";
import { EquipmentPage } from "../pages/EquipmentPage";

export const NAV = [
  {
    name: "Главная",
    path: ROUTES.HOME,
    component: Home,
  },
  {
    name: "О нас",
    path: ROUTES.ABOUT,
    component: About,
  },
  {
    name: "Услуги",
    path: ROUTES.SERVICES,
    component: Services,
  },
  {
    name: "Категории",
    path: ROUTES.EQUIPMENTTYPE,
    component: EquipmentType,
  },
  {
    name: "Техника",
    path: ROUTES.EQUIPMENT,
    component: EquipmentPage,
  },
  {
    name: "Контакты",
    path: ROUTES.CONTACT,
    component: Contact,
  },
  {
    name: "Профиль",
    path: ROUTES.PROFILE,
    component: Profile,
  },
];
