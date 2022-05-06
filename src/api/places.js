import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAPAOwoCOwvLzHDrtDUToJUb3Fx8xUV_jg",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export default Places;
