
import { useState } from "react";
import {GoogleMap, Marker } from "@react-google-maps/api";


function Map() {
    const [center, setCenter] = useState({ lat: 51.5072, lng: -0.1276 });
  
    return (
      <GoogleMap zoom={14} center={center} setCenter={setCenter} mapContainerClassName="map-container">
        <Marker position={center} />
      </GoogleMap>
    );
  }

  export default Map;