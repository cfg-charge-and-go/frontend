import MapContainer from "../api/MapContainer";

import Hero from "../components/Hero";

function MemberHomepage() {
  return (
    <div classNameName="text-center pt-5">
      <Hero loggedIn={true} />
      <MapContainer />
      <div className="d-grid col-6 mx-auto">
        <button type="start" className="btn btn-dark rounded-pill">
          Start
        </button>
      </div>
    </div>
  );
}

export default MemberHomepage;
