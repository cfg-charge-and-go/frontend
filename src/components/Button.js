import React from "react";
import Button from "react-bootstrap/Button";
import './Button.css';
import { ArrowRightShort as NextIcon } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


export default function WelcomeButton() {
  return (
    <div>
      <>
        <Link to="/home">
          <Button className="welcome-btn">
            <span className="welcome-text">Get moving<NextIcon className="fs-1"/></span>
            </Button>
        </Link>      
      </>
    </div>
  )
}