import MapContainer from "../api/MapContainer";
import Hero from "../components/Hero";

function StartPointWithChargeStations() {
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <MapContainer searchBarPosition={"bottom"}/>
      <div className="d-grid col-6 mx-auto mt-5">
        <button type="start" className="btn btn-dark rounded-pill">
          Start
        </button>
      </div>
    </div>
  );
}

export default StartPointWithChargeStations;
