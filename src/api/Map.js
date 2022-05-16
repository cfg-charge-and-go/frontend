import { useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Compass } from "react-bootstrap-icons";
import PlacesAutocomplete from "./PlacesAutocomplete";

function Map() {
  const [center, setCenter] = useState({ lat: 51.5072, lng: -0.1276 });

  return (
    <>
      <div className="container d-flex flex-column align-items-center mx-auto">
        <PlacesAutocomplete setCenter={setCenter} />
        <p className="d-flex align-items-center pt-1">Or&nbsp;<a className="text-decoration-underline" href="#">use current location</a>&nbsp;<span className="fs-5 mb-1"><Compass /></span></p>
      </div>

      <div className="Map max-width-md mx-auto my-4">
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
          {center && <Marker position={center} />}
        </GoogleMap>
      </div>
    </>
  );
}

export default Map;
