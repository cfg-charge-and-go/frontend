
import WelcomeImage from '../components/WelcomeImage';
import WelcomeButton from '../components/Button';
import welcomelogo from '../assets/welcomelogo.png';

export default function Welcome() {
  return (
    
    <div className="welcome-body text-center pt-5">
      <>
        <img src={ welcomelogo } alt="white logo: charge and go" className="welcomelogo"/>
        <WelcomeImage />
        <h2 className="welcometext">Find a charger nearby</h2>
        <WelcomeButton />
      </>
    </div>
  ); 
}
