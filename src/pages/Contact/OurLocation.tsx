import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LatLngExpression } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { useEffect, useState } from "react";

export default function OurLocation() {
  const [position, setPosition] = useState<LatLngExpression>([-1.957875, 30.112735]); // Kigali coords

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Error getting location:", err);
        }
      );
    }
  }, []);

  const markerIcon = L.icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 py-8">
      <h2 className="text-3xl font-bold text-[#0d9488] mb-6">Our Location</h2>

      <div className="w-4/5 h-[500px] md:h-[600px] rounded-lg shadow-lg">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={true}
          className="w-full h-full rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>We are here!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
