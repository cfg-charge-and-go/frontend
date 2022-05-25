import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, DirectionsRenderer, DirectionsService, TrafficLayer } from "@react-google-maps/api";
import { Compass } from "react-bootstrap-icons";
import { getChargingStations } from "./api";
import PlacesAutocomplete from "./PlacesAutocomplete";
import Pin from '../assets/pin.svg'

function SearchBar({ setPosition }) {
  return (
    <div className="container d-flex flex-column align-items-center mx-auto">
      <PlacesAutocomplete setPosition={setPosition} isEnd={false} />
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

function SearchBarWithEndPoint({ setPosition }) {
  return (
    <div className="container d-flex flex-column align-items-center mx-auto mb-3">
      <PlacesAutocomplete setPosition={setPosition} isEnd={true} />
    </div>
  );
}

function Map({searchBarPosition}) {
  const [center, setCenter] = useState({ lat: 51.5054, lng: 0.0235 });
  const [zoom, setZoom] = useState(13);
  const [startPoint, setStartPoint] = useState();
  const [endPoint, setEndPoint] = useState();
  const [directions, setDirections] = useState(null);
  const [chargingStations, setChargingStations] = useState([]);
  const [selectedStation, setSelectedStation] = useState();
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(function() {
    setMapLoaded(true); 
    // have local storage get the items set from local storage; call get item, pass in the string to retrieve object
    // setCenter
    getChargingStations(center).then(setChargingStations);
  }, [center]);

  useEffect(function() {
    if (startPoint && endPoint) {
      setCenter({ lat: (startPoint.lat + endPoint.lat) / 2, lng: (startPoint.lng + endPoint.lng) / 2});
      const scale = Math.max(Math.abs(startPoint.lat - endPoint.lat), Math.abs(startPoint.lng - endPoint.lng));
      setZoom(Math.floor(Math.exp(-scale + 9/4) + 5));
    }
  }, [startPoint, endPoint]);

  return (
    <>
      {searchBarPosition === "top" && <SearchBar setPosition={setCenter} />}
      <div className="Map max-width-md mx-auto mb-5">
        <GoogleMap
          zoom={zoom}
          center={center}
          mapContainerClassName="map-container"
        >
          {mapLoaded &&
            <>
              <TrafficLayer />
              {chargingStations.map((chargingStation) => (
                <Marker position={chargingStation} icon={Pin} onClick={() => setSelectedStation(chargingStation)}/>
              ))}
              {selectedStation && <InfoWindow position={{lat: selectedStation.lat + 0.0015, lng: selectedStation.lng}}>
                <div>{selectedStation.name}</div>
              </InfoWindow>}
              {startPoint && endPoint && <DirectionsService
                  options={{
                    destination: endPoint,
                    origin: startPoint,
                    travelMode: "DRIVING"
                  }}
                  callback={(response) => {setDirections(response)}}
                />}
              {startPoint && endPoint && directions && <DirectionsRenderer
                  options={{
                    directions: directions
                  }}
                />}
            </>}
        </GoogleMap>
      </div>
      {searchBarPosition === "bottom" && <>
        <SearchBar setPosition={setStartPoint} />
        <SearchBarWithEndPoint setPosition={setEndPoint} />
      </>}
    </>
  );
}

export default Map;