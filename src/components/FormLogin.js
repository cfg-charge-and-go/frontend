import React, {useState} from 'react';
import './FormLogin.css';
function FormLogin({Login, error }) {
   const[details, setDetails] = useState({InputEmail:"", InputPassword:""})
  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }
   return (
    <>
      <form onSubmit={submitHandler}>
        <p>Login to Your Account</p>
        {/* ERROR! */}
        <div className="form-group">
          <input type="Email" className="form-control" id="InputEmail" on Change={e =>setDetails({...details, InputEmail: e.target.value})} value = {details.InputEmail}
placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="Password" className="form-control" id="InputPassword" onChange={e => setDetails({...details, InputPassword: e.target.value})} value = {details.InputPassword}
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
