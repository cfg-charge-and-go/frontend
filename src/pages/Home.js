import MapContainer from '../api/MapContainer';
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import InfoModal from '../components/InfoModal';
import SignupModal from '../components/SignupModal';

export default function Home() {
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={false} />
      <MapContainer searchBarPosition={"top"} />
      <Footer loggedIn={false} />
      <LoginModal />
      <InfoModal />
      <SignupModal />
    </div>
  ); 
}
