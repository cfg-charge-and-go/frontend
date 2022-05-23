import WelcomeHero from "../components/WelcomeHero";
import WelcomeButton from "../components/buttons/WelcomeButton";
import ResponsivePlayer from "../components/WelcomeVideo";

export default function Welcome() {
  return (
    <div className="welcome-body text-center pt-5">
      <WelcomeHero />
      <ResponsivePlayer />
      <h3 className="welcometext pt-5" >Find a charging station near you</h3>
      <WelcomeButton />
    </div>
  ); 
}
