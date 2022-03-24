import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => (
  <MapContainer
    className="z-0 h-full"
    center={[32.76301228860241, -117.13063799019834]}
    zoom={12}
    scrollWheelZoom={false}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </MapContainer>
);

export default Map;
