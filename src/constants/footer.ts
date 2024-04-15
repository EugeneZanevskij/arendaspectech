import { MdPlace } from "react-icons/md";
import { FaPhone, FaClock } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";

export const FOOTER_DATA = {
  logo: "ИП Колонтай",
  title: "Контактная информация",
  footerData: [
    {
      icon: MdPlace,
      title: "г. Гродно, ул. Поповича, д. 138",
    },
    {
      icon: FaPhone,
      title: "+375 (29) 215-55-21",
      href: "tel:+375292155521",
    },
    {
      icon: FaPhone,
      title: "+375 (29) 666-79-39",
      href: "tel:+375296667939",
    },
    {
      icon: IoIosMailOpen,
      title: "ekskowatorgrodnoo@gmail.com",
      href: "mailto:ekskowatorgrodnoo@gmail.com",
    },
    {
      icon: FaClock,
      title: "Время работы: пн-пт: 9:00-18:00, сб-вс: выходной",
    },
  ],
  get copyright() {
    const currYear = new Date().getFullYear();
    return `ИП Колонтай Вячеслав Юрьевич (УНП 591242157) © 2014-${currYear}, Все права защищены.`;
  },
};
