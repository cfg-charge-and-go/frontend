import welcomelogo from "../assets/welcomelogo.png";
import "./Hero.css";

export default function WelcomeHero() {
  return (
    <div className="pt-5 pb-4">
      <h1 className="logo pt-5">
        <img src={welcomelogo} alt="Charge and Go logo" className="welcomelogo" />
      </h1>
    </div>
  );
}
