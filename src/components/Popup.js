function Popup() {
  return (
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="btn-close d-block ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
            <h5 class="modal-title text-center" id="infoModalLabel">Welcome to Charge<span class="text-muted">&amp;</span>Go!</h5>
            <p>Enter an address to see electric charging stations near you. Click on the pins to learn more about each station and nearby amenities.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup;
