// import React, { useState } from "react";
// import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  BsPersonCircle as ProfileIcon,
  BsFillGearFill as SettingsIcon,
  BsFillHeartFill as FavouritesIcon,
  BsBoxArrowInLeft as LogoutIcon
  } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
import './Navbar.css';

import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#"><ProfileIcon/>Profile</a>
          <a className="dropdown-item" href="#"><SettingsIcon/>Settings</a>
          <a className="dropdown-item" href="#"><FavouritesIcon/>Favourites</a>
          <a className="dropdown-item" href="#"><LogoutIcon/>Log out</a>
        </div>
      </div>
    </>
  )
}
