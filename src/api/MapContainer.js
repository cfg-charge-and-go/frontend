import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import "./MapContainer.css";

function MapContainer({searchBarPosition=null}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAPAOwoCOwvLzHDrtDUToJUb3Fx8xUV_jg",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map searchBarPosition={searchBarPosition}/>;
}

export default MapContainer;