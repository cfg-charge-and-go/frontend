import React from 'react';
import './FormLogin.css';
const FormLogin = () => {
  return (
    <>
      <form>
        <p>Login to Your Account</p>
        <div className="form-group">
          <input type="Email" className="form-control" id="InputEmail" 
placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="Password" className="form-control" id="InputPassword" 
aria-describedby="passwordHelp" placeholder="Password" />
          <small id="passwordHelp" class="form-text text-muted">6-character minimum; 
case sensitive.</small>
        </div>
        <br></br>
        <button type="submit" className="btn btn-dark">Submit</button>
      </form>
    </>
  )
}

export default FormLogin;
