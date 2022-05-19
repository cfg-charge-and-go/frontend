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
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User Dropdown
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#"><ProfileIcon/>Profile</a>
          <a class="dropdown-item" href="#"><SettingsIcon/>Settings</a>
          <a class="dropdown-item" href="#"><FavouritesIcon/>Favourites</a>
          <a class="dropdown-item" href="#"><LogoutIcon/>Log out</a>
        </div>
      </div>
    </>
  )
}
