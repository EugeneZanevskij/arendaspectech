import { MdPlace } from "react-icons/md";
import { FaPhone, FaClock } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { IContactItem } from "../types";

export const CONTACT_DATA: IContactItem[] = [
  {
    id: 1,
    icon: FaPhone,
    title: "Телефон",
    text: "+375 (29) 215-55-21",
    href: "tel:+375292155521",
  },
  {
    id: 2,
    icon: FaPhone,
    title: "Телефон",
    text: "+375 (29) 666-79-39",
    href: "tel:+375296667939",
  },
  {
    id: 3,
    icon: MdPlace,
    title: "Адрес",
    text: "Город Гродно и Гродненский район",
  },
  {
    id: 4,
    icon: IoIosMailOpen,
    title: "E-mail",
    text: "ekskowatorgrodnoo@gmail.com",
    href: "mailto:ekskowatorgrodnoo@gmail.com",
  },
  {
    id: 5,
    icon: FaClock,
    title: "Время работы",
    text: "пн-пт: 9:00-18:00, сб-вс: выходной",
  },
];

export const CONTACT_DATA_TEXT = [
  "ИП Колонтай Вячеслав Юрьевич",
  "УНП: 591242157",
  "Регистрация в Торговом реестре №1578975 от 19.06.2014",
  "Государственная регистрация от 19.06.2014",
  "Администрация Октябрьского района г Гродно",
  "Номер плательщика в ЕРИП: 568865446",
];
