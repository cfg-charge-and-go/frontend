import React from "react";
import { Link } from 'react-router-dom';
import {
  BoxArrowInRight as LoginIcon,
  InfoCircle as InfoIcon,
  PencilSquare as SignupIcon,
} from "react-bootstrap-icons";

const Footer = ({loggedIn}) => {
  return (
    <div className="container">
      <div className="row max-width-md mx-auto">
        <div className="col">
          <Link to="/login"><span className="fs-4"><LoginIcon /></span><br />Login</Link>
        </div>
        <div className="col">
          <Link to="/generalinfo"><span className="fs-4"><InfoIcon /></span><br />Information</Link>
        </div>
        <div className="col">
          <Link to="/signup"><span className="fs-4"><SignupIcon /></span><br />Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
