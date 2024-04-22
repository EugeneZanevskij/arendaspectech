interface IMapboxMap {
  center: [number, number];
  style: string;
  zoom: number;
  attributionControl: boolean;
}

interface ILocation {
  title: string;
  address: string;
  latitude: string;
  longitude: string;
}

interface IServicesItemExpanded {
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

interface IServicesItem {
  id: number;
  data: {
    image: string;
    title: string;
    subtitle?: string;
  };
  relativePath: string;
  absolutePath: string;
}
