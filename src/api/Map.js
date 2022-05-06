import { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import PlacesAutocomplete from "./PlacesAutocomplete";

function Map() {
  const [center, setCenter] = useState({ lat: 51.5072, lng: -0.1276 });

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setCenter={setCenter} />
      </div>

      <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName="map-container"
      >
        {center && <Marker position={center} />}
      </GoogleMap>
    </>
  );
}

export default Map;
