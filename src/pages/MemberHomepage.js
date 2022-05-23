import MapContainer from "../api/MapContainer";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Button from "../components/buttons/Button";

function MemberHomepage() {
  const navigate = useNavigate();

  const routeChange = (event) => {
    event.preventDefault();
    navigate("/startpoint");
  };

  return (
    <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <MapContainer searchBarPosition={"bottom"}/>
      <div onClick={routeChange}>  
        <Button title="Start"/>
      </div>
    </div>
  );
}

export default MemberHomepage;
