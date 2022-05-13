import React from 'react';
import './Form.css';
const Form = () => {
  return (
    <>
      <form>
        <p>Hi new friend!<br/>Welcome to Charge &amp; Go</p>
        <div className="form-group">
          <input type="FirstName" className="form-control" id="exampleInputFirstName" placeholder="First name" />
        </div>
        <div className="form-group">
          <input type="LastName" className="form-control" id="exampleInputLastName" placeholder="Last name" />
        </div>
        <div className="form-group">
          <input type="Birthday" className="form-control" id="exampleInputBirthday" placeholder="Birthday DD/MM/YY" />
        </div>
        <div className="form-group">
          <input type="Email" className="form-control" id="exampleInputEmail" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="Password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" placeholder="Password" />
          <small id="passwordHelp" class="form-text text-muted">6-character minimum; case sensitive.</small>
        </div>
        <div className="form-group">
          <input type="CarMakeModel" className="form-control" id="exampleInputCarMakeModel" placeholder="Car make and model" />
        </div>
        <button type="submit" className="btn btn-dark">Register</button>
      </form>
    </>
  )
}

export default Form;
