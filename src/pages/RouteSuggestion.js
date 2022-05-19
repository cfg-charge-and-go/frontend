import MapContainer from "../api/MapContainer";
import Footer from "../components/Footer";

function RouteSuggestion() {
  return (
    <div className="MapContainer1">
      <MapContainer />
      <Footer loggedIn={true} />
    </div>
  );
}

export default RouteSuggestion;
