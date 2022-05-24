import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { List as MenuIcon } from 'react-bootstrap-icons';
import { 
  BsPersonCircle as ProfileIcon,
  BsFillGearFill as SettingsIcon,
  BsFillHeartFill as FavouritesIcon,
  BsBoxArrowInLeft as LogoutIcon,
} from "react-icons/bs";
import './Menu.css';

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <div className='menu-container'>
      <span className='menu-icon'><MenuIcon onClick={() => setOpen(!open)}/></span>
      <nav className={`menu ${open ? "menu-show" : "menu-hide"}`}>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/profile" className="nav-link link-dark mt-2"><ProfileIcon className='icon'/>&nbsp;&nbsp;Profile</Link>
          </li>
          <li className="nav-item">
            <Link to='/settings' className="nav-link link-dark"><SettingsIcon className='icon' />&nbsp;&nbsp;Settings</Link>
          </li>
          <li className="nav-item">
            <Link to='/favourites' className="nav-link link-dark"><FavouritesIcon className='icon'/>&nbsp;&nbsp;Favourites&nbsp;</Link>
          </li>
          <li className="nav-item">
            <Link to='/home' className="nav-link link-dark mb-2"><LogoutIcon className='icon'/>&nbsp;&nbsp;Logout</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

