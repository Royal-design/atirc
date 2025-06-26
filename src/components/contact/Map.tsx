import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const position: LatLngExpression = [7.1010567, 3.3270426];
  return (
    <div className="map-container max-w-6xl mx-auto h-[500px] my-12 mb-25 px-4 z-10">
      <h1 className="text-accent-black text-xl md:text-2xl font-bold text-center my-4">
        Find us on Google map
      </h1>
      <MapContainer center={position} zoom={14} className="h-full w-full mb-12">
        <TileLayer
          className=""
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>MAPOLY, Abeokuta</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
