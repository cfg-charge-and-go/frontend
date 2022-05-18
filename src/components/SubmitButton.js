import React from 'react'
import { Link } from "react-router-dom";
import './SubmitButton.css';

export default function SubmitButton() {
  return (
    <div>
      <Link to="/home">
        <button className="btn-btn-dark mt-3 submit">
          Submit
        </button>
      </Link>
    </div>
  )
}

