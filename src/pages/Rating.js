import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import StarRating from '../components/StarRating';
import Amenities from '../components/Amenities';
import Button from '../components/buttons/Button';
import charge1 from '../assets/charge1.jpg'

export default function Rating() {
  const navigate = useNavigate()

  const routeChange = (event) => {
    event.preventDefault();
    navigate("/memberhomepage");
  };

  return (
    <div className="text-center py-5">
      <Hero loggedIn={true} />
      <img src={ charge1 } style={{borderRadius:"50%", width:"30%"}}/>
      <h2 className="review-title pt-5">Rate your trip at Sandon P&R 1 </h2>
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
 