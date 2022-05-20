import React, { useState, useEffect } from "react";
import { GoogleMap, Marker} from "@react-google-maps/api";
import { Compass } from "react-bootstrap-icons";
import { getChargingStations } from "./api";
import PlacesAutocomplete from "./PlacesAutocomplete";
import Pin from '../assets/pin.svg'

function SearchBar({ setCenter }) {
  return (
    <div className="container d-flex flex-column align-items-center mx-auto">
      <PlacesAutocomplete setCenter={setCenter} isEnd={false} />
      <p className="d-flex align-items-center pt-1">
        Or&nbsp;
        <a className="text-decoration-underline" href="#">
          use current location
        </a>
        &nbsp;
        <span className="fs-5 mb-1">
          <Compass />
        </span>
      </p>
    </div>
  );
}

// function SearchBarWithEndPoint({ setCenter }) {
//   return (
//     <div className="container d-flex flex-column align-items-center mx-auto">
//       <PlacesAutocomplete setCenter={setCenter} isEnd={true} />
//     </div>
//   );
// }

function Map({searchBarPosition}) {
  const [center, setCenter] = useState({ lat: 51.5054, lng: 0.0235 });
  const [chargingStations, setChargingStations] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(function () {
    setMapLoaded(true);
    getChargingStations(center).then(setChargingStations);
  }, [center]);

  return (
    <>
      {searchBarPosition === "top" && <SearchBar setCenter={setCenter} />}
      <div className="Map max-width-md mx-auto mb-5">
        <GoogleMap
          zoom={13}
          center={center}
          mapContainerClassName="map-container"
        >
          {mapLoaded &&
            chargingStations.map((chargingStation) => (
              <Marker position={chargingStation} icon={Pin}/>
            ))}
        </GoogleMap>
      </div>
      {searchBarPosition === "bottom" && (
        <SearchBar setCenter={setCenter} />
      )}
      {/* {location.pathname === "/startpoint" && (
        <SearchBarWithEndPoint setCenter={setCenter} />
      )} */}
    </>
  );
}

export default Map;