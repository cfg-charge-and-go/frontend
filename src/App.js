import './App.css';
import { useLoadScript } from "@react-google-maps/api";
// import Map from './api/googlemap';
import Places from './api/places';


export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAPAOwoCOwvLzHDrtDUToJUb3Fx8xUV_jg",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Places/ >;

}