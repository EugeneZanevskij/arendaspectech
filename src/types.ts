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
    title: string;
    image: string;
  };
  relativePath: string;
  absolutePath: string;
  services?: IServicesItem[];
}

interface IServicesItem {
  id: number;
  data: {
    title: string;
    image: string;
  };
  relativePath: string;
  absolutePath: string;
}
