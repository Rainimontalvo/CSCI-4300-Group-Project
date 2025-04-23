// src/components/MapComponent.tsx
"use client";

import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";

interface MapComponentProps {
  destination: string; // e.g., "Main Library, Athens, GA"
}

export default function MapComponent({ destination }: MapComponentProps) {
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const directionsService = new google.maps.DirectionsService();

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        directionsService.route(
          {
            origin: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            destination,
            travelMode: google.maps.TravelMode.WALKING,
          },
          (result, status) => {
            if (status === "OK") {
              setDirections(result);
            } else {
              setError("Failed to retrieve directions.");
            }
          }
        );
      },
      () => {
        setError("Unable to retrieve your location.");
      }
    );
  }, [destination]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div className="my-4">
        {error && <p className="text-red-600">{error}</p>}
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={{ lat: 33.948, lng: -83.3773 }} // Default center: Athens, GA
          zoom={14}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}
