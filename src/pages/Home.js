import MapContainer from '../api/MapContainer';
import Footer from '../components/Footer';
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={false} />
      <MapContainer />
      <Footer loggedIn={false} />
    </div>
  ); 
}

export default Home;
