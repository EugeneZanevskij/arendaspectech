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
