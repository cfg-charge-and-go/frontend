import React, { useState } from "react";
import { StarFill as Star } from "react-bootstrap-icons";
import './StarRating.css';

export default function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="fs-2 mb-3">
      {[...Array(5)].map((star, i) => {
        const ratingScore = i + 1;

        return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={ratingScore} 
              onClick={() => setRating(ratingScore)}
            /> 
              <Star 
                className="star" 
                color={ ratingScore <= (hover || rating) ? "#000" : "#BBB" }
                onMouseEnter={() => setHover(ratingScore)}
                onMouseLeave={() => setHover(null)}
              />
          </label>  
        );   
      })}      
    </div>
  );   
};
