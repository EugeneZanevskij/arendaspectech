import { IEquipmentItem } from "../types";

export const EQUIPMENT: IEquipmentItem[] = [
  {
    id: 1,
    title: "Погрузчик",
    subtitle:
      "Задачами этого вида техники является проведение землеройных работ",
    relativePath: "loader",
    absolutePath: "/equipment/loader",
  },
  {
    id: 2,
    title: "Мини-погрузчик",
    subtitle:
      "Задачами этого вида техники является проведение землеройных работ",
    relativePath: "mini-loader",
    absolutePath: "/equipment/mini-loader",
  },
  {
    id: 3,
    title: "Экскаватор-погрузчик",
    subtitle:
      "Универсальная техника, сочетающая в себе  функции погрузчика и экскаватора. Землеройные работы и транспортировка грузов",
    relativePath: "excavator",
    absolutePath: "/equipment/excavator",
  },
  {
    id: 4,
    title: "Мини-экскаватор",
    subtitle:
      "Задачами этого вида техники является проведение землеройных работ (планировка, копка, выравнивание)",
    relativePath: "mini-excavator",
    absolutePath: "/equipment/mini-excavator",
  },
  {
    id: 5,
    title: "Самосвал",
    subtitle:
      "Задачами этого вида техники являются грузоперевозки, доставка сыпучих материалов: песка, щебня, гальки",
    relativePath: "samosval",
    absolutePath: "/equipment/samosval",
  },
  {
    id: 6,
    title: "Низкорамный трал",
    subtitle:
      "Задачами этого вида техники является перевозка спецтехники, транспорта, эвакуатор",
    relativePath: "lowboy",
    absolutePath: "/equipment/lowboy",
  },
];
