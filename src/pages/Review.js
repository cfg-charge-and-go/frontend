import Hero from '../components/Hero';
import StarRating from '../components/StarRating';
import Amenities from '../components/Amenities';
import Button2 from '../components/Button2';

export default function Review() {
  return (
    <div className="text-center pt-5">
      <Hero loggedIn={true} />
      <h2 className="review-title pt-5">Rate your trip @ location name</h2>
      <StarRating />
      <h5 className="review-subtitle">Did you visit any of these places nearby?</h5>
      <Amenities />
      <Button2 title="Submit" />
    </div>
  ); 
}
 