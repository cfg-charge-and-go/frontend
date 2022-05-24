import React, { useState } from "react";
import Button from '../components/buttons/Button';


const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");

  const handleChange = async (e) => {
    e.preventDefault();
    console.log(e)
    const loginIn = {email, password };
    try {
      let response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        body: JSON.stringify(loginIn)
      });
      if (response.status === 200) {
        setEmail("");
        setPassword("")
        setMessage("User logged in successfully!");
      } else {
        setMessage("Error. Could not log user in");
      }
    } catch (err) {
      console.log(err);
    }
  };

  
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
              <Button title="Login" />
              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </div>
        </div>
  )
 }

export default LoginUser;