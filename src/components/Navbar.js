import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  BsPersonCircle as ProfileIcon,
  BsFillGearFill as SettingsIcon,
  BsFillHeartFill as FavouritesIcon,
  BsBoxArrowInLeft as LogoutIcon
  } from "react-icons/bs";
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate()
  /* eslint-disable no-unused-vars */
  const [cookies, setCookie, removeCookie] = useCookies(['userId'])

  function logout() {
    removeCookie('userId')
    navigate('/home')
  }

  return (
    <>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User Dropdown
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link className="dropdown-item" to="/profile"><ProfileIcon/>Profile</Link>
          <Link className="dropdown-item" to="/settings"><SettingsIcon/>Settings</Link>
          <Link className="dropdown-item" to="/favourites"><FavouritesIcon/>Favourites</Link>
          <button className="dropdown-item" onClick={logout}><LogoutIcon/>Log out</button>
        </div>
      </div>
    </>
  )
}
