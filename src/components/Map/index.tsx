import React from "react";
import mapboxgl from "mapbox-gl";
import { getEnvVars } from "../../constants/env";
import { INITIAL_MAP, LOCATION_DATA } from "../../constants/map";
import { MapContainer } from "./styled";

interface MapProps {}

export class MapComponent extends React.Component<MapProps> {
  mapContainer: React.RefObject<HTMLDivElement>;
  map: mapboxgl.Map | null;
  markers: mapboxgl.Marker[];

  constructor(props: MapProps) {
    super(props);
    this.mapContainer = React.createRef();
    this.map = null;
    this.markers = [];
  }

  componentDidMount() {
    mapboxgl.accessToken = getEnvVars("mapboxToken");

    if (this.mapContainer.current) {
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        ...INITIAL_MAP,
      });

      this.map.addControl(new mapboxgl.NavigationControl(), "top-left");
      this.addMarkers();
    }
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  addMarkers() {
    const marker = new mapboxgl.Marker()
      .setLngLat([+LOCATION_DATA.longitude, +LOCATION_DATA.latitude])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div><h4>${LOCATION_DATA.title}</h4><p>${LOCATION_DATA.address}</p></div>`,
        ),
      )
      .addTo(this.map!);

    this.markers.push(marker);
  }

  render() {
    return <MapContainer ref={this.mapContainer} />;
  }
}
