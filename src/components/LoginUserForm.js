import React, { useState } from "react";
import Button2 from "./Button2";


const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    const loginIn = {email, password };

    fetch('http://127.0.0.1:5000/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginIn)
      }).then(() => {
        console.log("User Logged in!")
      })
  }


  
  return (
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <form onSubmit={handleChange}>
              <div className="form-group mb-3">
                <input type="email" name="email" required value={email} className="form-control rounded-pill" id="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="password" name="password" required value={password} className="form-control rounded-pill" id="Password" aria-describedby="passwordHelp" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <small id="passwordHelp" className="form-text text-muted">6-character minimum; case sensitive.</small>
              </div>
              <Button2 title="Login" />
            </form>
          </div>
        </div>
  )
 }

export default LoginUser;