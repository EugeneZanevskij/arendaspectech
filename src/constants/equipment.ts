import { IEquipmentItem } from "../types";

export const EQUIPMENT: IEquipmentItem[] = [
  {
    id: 1,
    title: "Погрузчик",
    subtitle:
      "Задачами этого вида техники является проведение землеройных работ",
    description:
      "Фронтальный погрузчик является одной из самых универсальных спецмашин для перемещения грузов на строительной площадке. Он устойчивый и достаточно мощный, чтобы перемещать грузы массой до 3-х тонн. Грузы могут быть различными: сыпучими и не только. Данный вид техники также может использоваться для земляных и дорожно-строительных работ. Из-за своей мобильности он в основном выступает в роли перевозчика грузов, а также техники для уборочных работ.",
    relativePath: "loader",
    absolutePath: "/equipment-type/loader",
  },
  {
    id: 2,
    title: "Мини-погрузчик",
    subtitle:
      "Задачами этого вида техники является проведение землеройных работ",
    relativePath: "mini-loader",
    absolutePath: "/equipment-type/mini-loader",
  },
  {
    id: 3,
    title: "Экскаватор-погрузчик",
    subtitle:
      "Универсальная техника, сочетающая в себе  функции погрузчика и экскаватора. Землеройные работы и транспортировка грузов",
    relativePath: "excavator",
    absolutePath: "/equipment-type/excavator",
  },
  {
    id: 4,
    title: "Мини-экскаватор",
    subtitle:
      "Задачами этого вида техники является проведение землеройных работ (планировка, копка, выравнивание)",
    relativePath: "mini-excavator",
    absolutePath: "/equipment-type/mini-excavator",
  },
  {
    id: 5,
    title: "Самосвал",
    subtitle:
      "Задачами этого вида техники являются грузоперевозки, доставка сыпучих материалов: песка, щебня, гальки",
    relativePath: "samosval",
    absolutePath: "/equipment-type/samosval",
  },
  {
    id: 6,
    title: "Низкорамный трал",
    subtitle:
      "Задачами этого вида техники является перевозка спецтехники, транспорта, эвакуатор",
    relativePath: "lowboy",
    absolutePath: "/equipment-type/lowboy",
  },
];
