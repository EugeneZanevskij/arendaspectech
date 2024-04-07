import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Equipment } from "../pages/Equipment";
import { Contact } from "../pages/Contact";
import { Profile } from "../pages/Profile";
import { ROUTES } from "./routes";

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
    name: "Техника",
    path: ROUTES.EQUIPMENT,
    component: Equipment,
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
