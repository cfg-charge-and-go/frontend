import React from 'react'
import './FavCard.css'
import ChargeStation1 from '../assets/charge1.jpg';
import ChargeStation2 from '../assets/charge2.jpg';
import ChargeStation3 from '../assets/charge3.jpg';
import ChargeStation4 from '../assets/charge4.jpg';
import { InfoCircle as InfoIcon } from "react-bootstrap-icons";
import { FaRegComment as CommentIcon } from "react-icons/fa";
import { 
  MdPark as ParkIcon,
  MdRestaurant as FoodIcon,
  MdAccountBalance as LandmarkIcon, 
  MdShoppingBag as ShopIcon,
} from "react-icons/md";

export default function FavCard() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="card-product mt-4 mb-4">
        <img src={ ChargeStation1 } alt="electric car charging station"/>
        <div className="card-product-infos">
          <h2>SSE Greenwatt Way</h2>
          <p>SL1 2UD - <strong>Rapid</strong></p>
          <p className="iconline"><InfoIcon />&nbsp;&nbsp;<CommentIcon />&nbsp;&nbsp;<FoodIcon />&nbsp;&nbsp;<ParkIcon /></p>
        </div>
      </div>
      <div className="card-product mb-4">
        <img src={ ChargeStation2 } alt="electric car charging station" />
        <div className="card-product-infos">
          <h2>Redfields Garden Ctre </h2>
          <p>GU52 8UB - <strong>Ultra Rapid</strong></p>
          <p className="iconline"><InfoIcon />&nbsp;&nbsp;<CommentIcon />&nbsp;&nbsp;<ShopIcon /></p>
        </div>
      </div>
      <div className="card-product mb-4">
        <img src={ ChargeStation3 } alt="electric car charging station" />
        <div className="card-product-infos">
          <h2>Oakwood Road</h2>
          <p>NN2 7HE - <strong>Fast</strong></p>
          <p className="iconline"><InfoIcon />&nbsp;&nbsp;<CommentIcon />&nbsp;&nbsp;<LandmarkIcon />&nbsp;&nbsp;<ParkIcon /></p>
        </div>
      </div>
      <div className="card-product mb-4">
        <img src={ ChargeStation4 } alt="electric car charging station" />
        <div className="card-product-infos">
          <h2>Tesco Extra Watford</h2>
          <p>WD17 2BD - <strong>Slow</strong></p>
          <p className="iconline"><InfoIcon />&nbsp;&nbsp;<CommentIcon />&nbsp;&nbsp;<LandmarkIcon />&nbsp;&nbsp;<ShopIcon />&nbsp;&nbsp;<FoodIcon /></p>
        </div>
      </div>
    </div>
  )
}
