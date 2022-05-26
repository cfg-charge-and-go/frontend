import React, { useState, useRef } from "react";
import Button from "../components/buttons/Button";

const SignupModal = () => {
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [date_of_birth, setDateOfBirth] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [car_reg, setCarReg] = useState("")
  const [error, setError] = useState("")
  const dismissButton = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:4000/signup', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        first_name: first_name,
        last_name: last_name,
        date_of_birth: date_of_birth,
        email: email,
        password: password,
        car_reg: car_reg,
      }),
    })
    const data = await response.json()
    console.log(data)
    if (data.status !== "success") {
      setError("User information missing or invalid. Please try again")
    } else {
      setError("User Signed up!")
      setTimeout(function() {
        dismissButton.current?.click()
      }, 2000)
    }
  }

  return (
    <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="btn-close d-block ms-auto" data-bs-dismiss="modal" aria-label="Close" ref={dismissButton}></button>
            <h5 className="modal-title mb-3" id="signupModalLabel">Welcome to Charge<span className="text-muted">&amp;</span>Go!</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input type="text" name="FirstName" className="form-control rounded-pill" id="FirstName" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="text" name="LastName" className="form-control rounded-pill" id="LastName" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="date" name="Birthday" className="form-control rounded-pill" id="Birthday" placeholder="Birthday DD/MM/YY" onChange={(e) => setDateOfBirth(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="email" name="Email" className="form-control rounded-pill" id="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="password" name="Password" className="form-control rounded-pill" id="Password" aria-describedby="passwordHelp" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <small id="passwordHelp" className="form-text text-muted">6-character minimum; case sensitive.</small>
              </div>
              <div className="form-group mb-3">
                <input type="text" name="CarRegNumber" className="form-control rounded-pill" id="CarRegNumber" placeholder="Car registration number" onChange={(e) => setCarReg(e.target.value)} />
              </div>
              <Button title="Register" />
              <p className="text-danger">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupModal;
