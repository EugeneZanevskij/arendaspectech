import { ILocation, IMapboxMap } from "../types";

export const INITIAL_MAP: IMapboxMap = {
  center: [23.755149424805474, 53.63433166327404],
  style: "mapbox://styles/mapbox/streets-v11",
  zoom: 11,
  attributionControl: false,
};

export const LOCATION_DATA: ILocation = {
  title: "ИП Колонтай",
  address: "д. Добровольщина, ул. Новая, д. 4",
  latitude: "53.625015",
  longitude: "23.708364",
};
