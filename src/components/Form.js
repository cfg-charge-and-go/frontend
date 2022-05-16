import React from 'react';

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <input type="text" name="FirstName" className="form-control" id="exampleInputFirstName" placeholder="First name" />
      </div>
      <div className="form-group">
        <input type="text" name="LastName" className="form-control" id="exampleInputLastName" placeholder="Last name" />
      </div>
      <div className="form-group">
        <input type="date" name="Birthday" className="form-control" id="exampleInputBirthday" placeholder="Birthday DD/MM/YY" />
      </div>
      <div className="form-group">
        <input type="email" name="Email" className="form-control" id="exampleInputEmail" placeholder="Email" />
      </div>
      <div className="form-group">
        <input type="password" name="Password" className="form-control" id="exampleInputPassword" aria-describedby="passwordHelp" placeholder="Password" />
        <small id="passwordHelp" class="form-text text-muted">6-character minimum; case sensitive.</small>
      </div>
      <div className="form-group">
        <input type="text" name="CarRegNumber" className="form-control" id="exampleInputCarMakeModel" placeholder="Car registration number" />
      </div>
      <button type="submit" className="btn btn-dark">Register</button>
    </form>
  )
}

export default Form;
