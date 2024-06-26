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

export interface ITestimonial {
  id: number;
  title: string;
  text: string[];
  image: string;
}

export interface IEquipmentTypeItem {
  id: number;
  title: string;
  image?: string;
  subtitle: string;
  description?: string;
  relativePath: string;
  absolutePath: string;
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

export interface IEquipment {
  name: string;
  description: string;
  imagePath: string;
  equipmentTypeId: number;
  price: number;
  relativePath: string;
}

export interface IEquipmentFull extends IEquipment {
  id: number;
}

export interface IEquipmentFullExtended extends IEquipmentFull {
  services: ICategoryFull[];
}

export interface IEquipmentToServices {
  id: number;
  equipmentId: number;
  servicesId: number;
}

export interface IBooking {
  userId: number;
  equipmentToServicesId: number;
  date: Date;
  leaseDuration: number;
  comment: string;
  statusId: number;
}

export interface IBookingFull extends IBooking {
  id: number;
}
