import MapContainer from "../api/MapContainer";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function RouteSuggestion() {
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <MapContainer />
      <Footer loggedIn={true} />
    </div>
  );
}

export default RouteSuggestion;
