import MapContainer from "../api/MapContainer";
import Hero from "../components/Hero";
import Button from "../components/buttons/Button";

function StartPointWithChargeStations() {
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <MapContainer searchBarPosition={"bottom"}/>
      <Button title="Start"/>
    </div>
  );
}

export default StartPointWithChargeStations;
