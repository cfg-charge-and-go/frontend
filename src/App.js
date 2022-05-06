import { useLoadScript } from "@react-google-maps/api";
import Places from './api/Places';
import './App.css';

function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAPAOwoCOwvLzHDrtDUToJUb3Fx8xUV_jg",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Places/ >;
}

export default Home;
