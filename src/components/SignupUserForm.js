import React, { useState } from "react";
import Button from '../components/buttons/Button';


const SignupUser = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const signingup = {first_name, last_name, date_of_birth, email, password };

    fetch('http://127.0.0.1:5000/signup', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signingup)
    }).then(() => {
        console.log("New User Created!")
      })
  }


  
  return (
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <form onSubmit={handleChange}>
              <div className="form-group mb-3">
                <input type="text" name="FirstName" required value={first_name} className="form-control rounded-pill" id="FirstName" placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="text" name="last_name" required value={last_name} className="form-control rounded-pill" id="LastName" placeholder="LastName" onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="date" name="date_of_birth" required value={date_of_birth} className="form-control rounded-pill" id="Birthday" placeholder="DateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="email" name="email" required value={email} className="form-control rounded-pill" id="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="password" name="password" required value={password} className="form-control rounded-pill" id="Password" aria-describedby="passwordHelp" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <small id="passwordHelp" className="form-text text-muted">6-character minimum; case sensitive.</small>
              </div>
              <div className="form-group mb-3">
                <input type="text" name="CarRegNumber" className="form-control rounded-pill" id="CarRegNumber" placeholder="Car registration number" />
              </div>
              <Button title="Register" />
            </form>
          </div>
        </div>
  )
 }

export default SignupUser;