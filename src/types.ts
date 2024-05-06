import { IconType } from "react-icons";

export interface IMapboxMap {
  center: [number, number];
  style: string;
  zoom: number;
  attributionControl: boolean;
}

export interface ILocation {
  title: string;
  address: string;
  latitude: string;
  longitude: string;
}

export interface IServicesItemExpanded {
  id: number;
  data: {
    image: string;
    title: string;
    subtitle?: string;
  };
  relativePath: string;
  absolutePath: string;
  services?: IServicesItem[];
}

export interface IServicesItem {
  id: number;
  data: {
    image: string;
    title: string;
    subtitle?: string;
  };
  relativePath: string;
  absolutePath: string;
}

export interface IEquipmentItem {
  id: number;
  image?: string;
  title: string;
  subtitle: string;
  relativePath: string;
  absolutePath: string;
}

export interface ITestimonial {
  id: number;
  title: string;
  text: string[];
  image: string;
}

export interface IContactItem {
  id: number;
  icon: IconType;
  title: string;
  text: string;
  href?: string;
}

export interface IUserData {
  id: number;
  username: string;
  email: string;
  phone: string;
  password: string;
  isAdmin: boolean;
}

export interface IUserShortData {
  id: number;
  username: string;
  email: string;
  phone: string;
}

export interface ICategory {
  name: string;
}

export interface ICategoryFull extends ICategory {
  id: number;
}
