import PerevozkaTekhniki from "../assets/perevozka_techniki.jpg";
import SypuchieGruzy from "../assets/sypuchie_gruzy.jpg";
import UborkaSneg from "../assets/uborka_snega.jpg";
import ZemelnyeRaboty from "../assets/zemelnye_raboty.webp";

export const SERVICES: IServicesItemExpanded[] = [
  {
    id: 1,
    data: {
      title: "Доставка сыпучих грузов",
      image: SypuchieGruzy,
    },
    relativePath: "sypuchie-gruzy",
    absolutePath: "/services/sypuchie-gruzy",
  },
  {
    id: 2,
    data: {
      title: "Перевозка техники",
      image: PerevozkaTekhniki,
      subtitle: "Все виды перевозок",
    },
    relativePath: "perevozka-tekhniki",
    absolutePath: "/services/perevozka-tekhniki",
  },
  {
    id: 3,
    data: {
      title: "Уборка и вывоз снега",
      image: UborkaSneg,
    },
    relativePath: "uborka-sneg",
    absolutePath: "/services/uborka-sneg",
  },
  {
    id: 4,
    data: {
      title: "Земляные работы",
      image: ZemelnyeRaboty,
    },
    relativePath: "zemlya-raboty",
    absolutePath: "/services/zemlya-raboty",
    services: [
      {
        id: 1,
        data: {
          title: "Рытье котлованов и траншей",
          image: ZemelnyeRaboty,
        },
        relativePath: "rytye-kotlovany",
        absolutePath: "/services/zemlya-raboty/rytye-kotlovany",
      },
      {
        id: 2,
        data: {
          title: "Выемка грунта",
          image: ZemelnyeRaboty,
        },
        relativePath: "vyemka-grunta",
        absolutePath: "/services/zemlya-raboty/vyemka-grunta",
      },
      {
        id: 3,
        data: {
          title: "Планировка участка",
          image: ZemelnyeRaboty,
        },
        relativePath: "planirovka-uchastka",
        absolutePath: "/services/zemlya-raboty/planirovka-uchastka",
      },
      {
        id: 4,
        data: {
          title: "Перемещение и разработка грунта",
          image: ZemelnyeRaboty,
        },
        relativePath: "peremeshchenie-grunta",
        absolutePath: "/services/zemlya-raboty/peremeshchenie-grunta",
      },
      {
        id: 5,
        data: {
          title: "Благоустройство территорий",
          image: ZemelnyeRaboty,
        },
        relativePath: "blagoustroystvo-territoriy",
        absolutePath: "/services/zemlya-raboty/blagoustroystvo-territoriy",
      },
    ],
  },
];
