import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import StarRating from '../components/StarRating';
import Amenities from '../components/Amenities';
import Button from '../components/buttons/Button';

export default function Rating() {
  const navigate = useNavigate()

  const routeChange = (event) => {
    event.preventDefault();
    navigate("/memberhomepage");
  };

  return (
    <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <h2 className="review-title pt-5">Rate your trip @ location name</h2>
      <div>
        <StarRating />
        <h5 className="review-subtitle">Did you visit any of these places nearby?</h5>
        <Amenities />
        <div  onClick={routeChange}>
          <Button title="Submit" />
        </div>  
      </div>
    </div>
  ); 
}
 