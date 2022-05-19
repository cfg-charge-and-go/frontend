function InfoModal() {
    return (
      <div className="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn-close d-block ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
              <h5 className="modal-title mb-3" id="infoModalLabel">Welcome to Charge<span className="text-muted">&amp;</span>Go!</h5>
              <p>Enter an address to see electric charging stations near you. Click on the pins to learn more about each station and nearby amenities.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default InfoModal;