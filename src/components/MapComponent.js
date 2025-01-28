import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.7273, // San Francisco latitude
  lng: 77.161583, // San Francisco longitude
};

const MapComponent = (props) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyD3JXT18XEcYyQxrzQLWXSuxFnuQpBdkrg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
