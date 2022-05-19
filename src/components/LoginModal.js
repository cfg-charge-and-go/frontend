import React from 'react';
import Button2 from '../components/Button2';

const LoginModal = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="btn-close d-block ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
            <h5 className="modal-title mb-3" id="loginModalLabel">Welcome to Charge<span className="text-muted">&amp;</span>Go!</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input type="email" name="Email" className="form-control rounded-pill" id="Email" placeholder="Email" />
              </div>
              <div className="form-group mb-3">
                <input type="password" name="Password" className="form-control rounded-pill" id="Password" aria-describedby="passwordHelp" placeholder="Password" />
              </div>
              <Button2 title="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal;
