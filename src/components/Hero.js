import Menu from "./Menu";
import logo from "../assets/logo.png";
import "./Hero.css";
import {NavLink} from 'react-router-dom'

export default function Hero({loggedIn}) {
  return (
    <div className="pt-5 pb-4">
      {loggedIn && <Menu />}
      <h1 className="logo">
        <NavLink to="/" className={'home-button'} ><img src={logo} alt="Charge and Go logo" className="logo" /></NavLink>
      </h1>
    </div>
  );
}
