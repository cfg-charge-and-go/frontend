import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "./MapContainer.css";
import apikey from "D:\\Javascript\\ChargeAndGo\\frontend\\src\\config.js";


function MapContainer({searchBarPosition=null}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apikey,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map searchBarPosition={searchBarPosition}/>;
}

export default MapContainer;