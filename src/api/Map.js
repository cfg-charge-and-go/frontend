import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import { Compass } from "react-bootstrap-icons";
import { getChargingStations } from "./api";
import PlacesAutocomplete from "./PlacesAutocomplete";

function Map() {
  const [center, setCenter] = useState({ lat: 51.5072, lng: -0.1276 });
  const [chargingStations, setChargingStations] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(function() {
    setMapLoaded(true);
    getChargingStations().then(setChargingStations);
  }, []);

  return (
    <>
      <div className="container d-flex flex-column align-items-center mx-auto">
        <PlacesAutocomplete setCenter={setCenter} />
        <p className="d-flex align-items-center pt-1">Or&nbsp;<a className="text-decoration-underline" href="#">use current location</a>&nbsp;<span className="fs-5 mb-1"><Compass /></span></p>
      </div>

      <div className="Map max-width-md mx-auto my-4">
        <GoogleMap zoom={12} center={center} mapContainerClassName="map-container">
          {mapLoaded && chargingStations.map(chargingStation => <Marker position={chargingStation} onClick={() => setDestination(chargingStation)} />)}
          <DirectionsService options={{origin: center, destination: destination, travelMode: 'DRIVING'}} callback={setDirections} />
          {directions && <DirectionsRenderer options={{directions: directions}} />}
        </GoogleMap>
      </div>
    </>
  );
}

export default Map;
