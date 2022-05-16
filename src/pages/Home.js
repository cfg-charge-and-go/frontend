import MapContainer from '../api/MapContainer';
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import Popup from '../components/Popup';

function Home() {
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={false} />
      <MapContainer />
      <Footer loggedIn={false} />
      <Popup />
    </div>
  ); 
}

export default Home;
