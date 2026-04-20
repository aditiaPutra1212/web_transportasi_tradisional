"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon in leaflet with Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const startIcon = new L.DivIcon({
  className: "custom-div-icon",
  html: "<div style='background-color: #ea580c; width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.4);'></div>",
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

const endIcon = new L.DivIcon({
  className: "custom-div-icon",
  html: "<div style='background-color: #ea580c; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.4);'><div style='background-color: white; width: 8px; height: 8px; border-radius: 50%;'></div></div>",
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

export default function MapComponent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full bg-gray-100 animate-pulse flex items-center justify-center text-gray-400">Memuat peta...</div>;
  }

  // Yogyakarta coordinates
  const startPos: [number, number] = [-7.793, 110.366]; // Malioboro Mall
  const endPos: [number, number] = [-7.805, 110.364]; // Keraton Yogyakarta

  // Dummy route points
  const route: [number, number][] = [
    startPos,
    [-7.795, 110.366],
    [-7.798, 110.365],
    [-7.801, 110.365],
    endPos
  ];

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[-7.799, 110.365]}
        zoom={15}
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        <Marker position={startPos} icon={startIcon}>
          <Popup>Titik Jemput: Malioboro Mall</Popup>
        </Marker>
        
        <Marker position={endPos} icon={endIcon}>
          <Popup>Tujuan: Keraton Yogyakarta</Popup>
        </Marker>

        <Polyline positions={route} color="#ea580c" weight={4} opacity={0.8} dashArray="8, 8" />
      </MapContainer>
    </div>
  );
}
