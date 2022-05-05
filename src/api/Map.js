
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Home() {
  const{isLoaded}= useLoadScript({
    googleMapsApiKey: "AIzaSyAPAOwoCOwvLzHDrtDUToJUb3Fx8xUV_jg", 
  });

  if(!isLoaded) return <div>Loading...</div>;
  return <Map />
}


export default Home;