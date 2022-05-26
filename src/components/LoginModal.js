import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Button from '../components/buttons/Button';

const LoginModal = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  /* eslint-disable no-unused-vars */
  const [cookies, setCookie, removeCookie] = useCookies(['userId'])
  const navigate = useNavigate()
  const dismissButton = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    const response = await fetch('http://127.0.0.1:4000/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    })
    const data = await response.json()
    if (data.length === 0) {
      setError("Login details incorrect")
    } else {
      setError("")
      dismissButton.current?.click()
      setCookie("userId", data.id)
      navigate("/memberhomepage")
    }
  }

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="btn-close d-block ms-auto" data-bs-dismiss="modal" aria-label="Close" ref={dismissButton}></button>
            <h5 className="modal-title mb-3" id="loginModalLabel">Welcome to Charge<span className="text-muted">&amp;</span>Go!</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input type="email" name="Email" className="form-control rounded-pill" id="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <input type="password" name="Password" className="form-control rounded-pill" id="Password" aria-describedby="passwordHelp" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button title="Login" />
              <p className="text-danger">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal;
