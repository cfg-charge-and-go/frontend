import MapContainer from "../api/MapContainer";

function StartPointWithChargeStaions() {
  return (
    <div className="MapContainer1">
      <MapContainer />
      <div className="d-grid col-6 mx-auto mt-5">
        <button type="start" className="btn btn-dark rounded-pill">
          Start
        </button>
      </div>
    </div>
  );
}

export default StartPointWithChargeStaions;
