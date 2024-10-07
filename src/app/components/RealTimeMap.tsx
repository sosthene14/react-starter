import { useState, useEffect, useRef } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  Polyline,
  useMap,
} from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../assets/car.png"; // Importer l'icône personnalisée
import polyline from "@mapbox/polyline";

const start = [48.8566, 2.3522]; // Paris
const end = [52.52, 13.405];

const calculateAngle = (point1, point2) => {
  const lat1 = point1[0];
  const lon1 = point1[1];
  const lat2 = point2[0];
  const lon2 = point2[1];

  const deltaY = lat2 - lat1;
  const deltaX = lon2 - lon1;

  const angleInRadians = Math.atan2(deltaY, deltaX);
  const angleInDegrees = angleInRadians * (180 / Math.PI);

  return angleInDegrees >= 0 ? angleInDegrees : angleInDegrees + 360; // Normaliser à 0-360 degrés
};

const MovingMarker = ({ routeCoordinates }) => {
  const [markerPosition, setMarkerPosition] = useState<LatLngTuple>(start);
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

  const markerRef = useRef();

  const animateMarker = () => {
    if (currentPositionIndex < routeCoordinates.length - 1) {
      const [lat1, lng1] = routeCoordinates[currentPositionIndex];
      const [lat2, lng2] = routeCoordinates[currentPositionIndex + 1];

      const stepCount = 100; // Nombre de pas pour l'animation
      let step = 0;

      const moveMarker = () => {
        step++;
        const progress = step / stepCount;

        // Interpolation linéaire
        const lat = lat1 + (lat2 - lat1) * progress;
        const lng = lng1 + (lng2 - lng1) * progress;

        setMarkerPosition([lat, lng]);

        // Calculer l'angle pour le marqueur
        const rotationAngle = calculateAngle(routeCoordinates[currentPositionIndex], routeCoordinates[currentPositionIndex + 1]);
        
        // Mettre à jour la rotation du marqueur
        if (markerRef.current) {
          markerRef.current.setRotationAngle(rotationAngle);
        }

        if (step < stepCount) {
          setAnimationFrameId(requestAnimationFrame(moveMarker));
        } else {
          setCurrentPositionIndex((prevIndex) => prevIndex + 1);
        }
      };

      moveMarker();
    } else {
      cancelAnimationFrame(animationFrameId!);
    }
  };

  useEffect(() => {
    animateMarker();

    // Nettoyage lors de la désactivation du composant
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [currentPositionIndex, routeCoordinates]);

  const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32],
  });

  return (
    <Marker ref={markerRef} position={markerPosition} icon={customIcon}>
      <Popup>Position actuelle du véhicule</Popup>
    </Marker>
  );
};

const RealTimeMap = () => {
  const [routeCoordinates, setRouteCoordinates] = useState<LatLngTuple[]>([]);
  
  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const startLngLat = `${start[1]},${start[0]}`; // longitude, latitude
        const endLngLat = `${end[1]},${end[0]}`; // longitude, latitude
        const url = `http://router.project-osrm.org/route/v1/driving/${startLngLat};${endLngLat}?overview=full`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.routes && data.routes.length > 0) {
          const geometry = data.routes[0].geometry;
          const decoded = polyline.decode(geometry);
          const coordinates = decoded.map((coord) => [coord[0], coord[1]]);
          setRouteCoordinates(coordinates);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchRoute();
  }, []);

  return (
    <div>
      <h3>Carte avec Route entre Paris et Berlin</h3>
      <MapContainer
        style={{ height: "100vh" }}
        center={start}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={start}
          icon={new L.Icon({ iconUrl: markerIcon, iconSize: [32, 32] })}
        >
          <Popup>Départ : Paris</Popup>
        </Marker>
        <Marker
          position={end}
          icon={new L.Icon({ iconUrl: markerIcon, iconSize: [32, 32] })}
        >
          <Popup>Arrivée : Berlin</Popup>
        </Marker>
        {routeCoordinates.length > 0 && (
          <>
            <Polyline positions={routeCoordinates} color="blue" />
            <MovingMarker routeCoordinates={routeCoordinates} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default RealTimeMap;
