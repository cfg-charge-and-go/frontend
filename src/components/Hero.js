import Menu from "./Menu";
import logo from "../assets/logo.png";
import "./Hero.css";

export default function Hero({loggedIn}) {
  return (
    <div className="pt-2.5 pb-4">
      {loggedIn && <Menu />}
      <h1 className="logo">
        <img src={logo} alt="Charge and Go logo" className="logo" />
      </h1>
    </div>
  );
}
