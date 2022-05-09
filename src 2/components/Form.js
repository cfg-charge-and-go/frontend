import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <input type="firstname" className="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="First name" />
        </div>
        <div className="form-group">
          <input type="lastname" className="form-control" id="exampleInputLastName" placeholder="Last name" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  )
}

export default Form;
