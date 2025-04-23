'use client';

import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';

interface MapComponentProps {
  destination: string; // can be single or multiple comma-separated locations
  travelMode?: 'DRIVING' | 'WALKING' | 'TRANSIT';
}

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapComponent: React.FC<MapComponentProps> = ({
  destination,
  travelMode = 'DRIVING',
}) => {
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  // Get user's current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserLocation(coords);
      },
      (err) => {
        console.error('Failed to get user location:', err);
        alert('Location permission denied. Defaulting to UGA.');
        setUserLocation({ lat: 33.948, lng: -83.377 }); // fallback: UGA
      }
    );
  }, []);

  // Generate directions
  useEffect(() => {
    if (!userLocation || !destination) return;

    const destinations = destination.split(',').map(loc => loc.trim());

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: userLocation,
        destination: destinations[destinations.length - 1],
        travelMode: google.maps.TravelMode[travelMode],
        waypoints: destinations.slice(0, -1).map(loc => ({
          location: loc,
          stopover: true,
        })),
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          setDirections(result);
        } else {
          console.error('Directions request failed:', status);
        }
      }
    );
  }, [userLocation, destination, travelMode]);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={userLocation || { lat: 33.948, lng: -83.377 }}
        zoom={13}
        options={{
          fullscreenControl: false,
          streetViewControl: false,
          zoomControl: true,
          mapTypeControl: false,
        }}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
