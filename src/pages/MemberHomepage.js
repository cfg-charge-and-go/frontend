/* eslint-disable react/react-in-jsx-scope */
import MapContainer from "../api/MapContainer";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";

function MemberHomepage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/startpoint`;
    navigate(path);
  };
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <MapContainer />
      <div className="d-grid col-6 mx-auto">
        <button
          type="start"
          className="btn btn-dark rounded-pill"
          onClick={routeChange}
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default MemberHomepage;