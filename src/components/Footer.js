import React from "react";
import {
  ArrowLeftSquare as BackIcon,
  BoxArrowInRight as LoginIcon,
  InfoCircle as InfoIcon,
  HouseDoor as HomeIcon,
  PencilSquare as SignupIcon,
} from "react-bootstrap-icons";

const Footer = ({ loggedIn }) => {
  return (
    <div className="container">
      <div className="row max-width-md mx-auto">
        {loggedIn ? <div className="col">
                      <button className="btn shadow-none"><span className="fs-4"><BackIcon /></span><br />Back</button>
                    </div>
                  : <div className="col">
                      <button className="btn shadow-none" data-bs-toggle="modal" data-bs-target="#loginModal"><span className="fs-4"><LoginIcon /></span><br />Login</button>
                    </div>}
        <div className="col">
          <button className="btn shadow-none" data-bs-toggle="modal" data-bs-target="#infoModal"><span className="fs-4"><InfoIcon /></span><br />Information</button>
        </div>
        {loggedIn ? <div className="col">
                      <button className="btn shadow-none"><span className="fs-4"><HomeIcon /></span><br />Home</button>
                    </div>
                  : <div className="col">
                      <button className="btn shadow-none" data-bs-toggle="modal" data-bs-target="#signupModal"><span className="fs-4"><SignupIcon /></span><br />Sign up</button>
                    </div>}
      </div>
    </div>
  );
};

export default Footer;