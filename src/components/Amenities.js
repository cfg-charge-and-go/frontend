import './Amenities.css';
import { 
  MdPark as ParkIcon,
  MdRestaurant as FoodIcon,
  MdAccountBalance as LandmarkIcon, 
  MdShoppingBag as ShopIcon,
} from "react-icons/md";

export default function Amenities() {
  return (
    <div className="amenities">
      <div> 
        <input 
          type="checkbox" 
          id="tree" 
          hidden class="cb-btn"
        />
        <label class="btn btn-dark" for="tree">
          <ParkIcon className="fs-4" /><br></br>Parks
        </label>
        <input 
          type="checkbox" 
          id="bag" 
          hidden class="cb-btn"
        />
        <label class="btn btn-dark" for="bag">
          <ShopIcon className="fs-4" /><br></br>Shops
        </label>
      </div>
      <div>   
        <input 
          type="checkbox" 
          id="landmark" 
          hidden class="cb-btn"
        />
        <label class="btn btn-dark" for="landmark">
          <LandmarkIcon className="fs-4" /><br></br>Landmarks
        </label>
        <input 
          type="checkbox" 
          id="food" 
          hidden class="cb-btn"
        />
        <label class="btn btn-dark" for="food">
          <FoodIcon className="fs-4"/><br></br>Food
        </label>
      </div>
      <div className="fav"> 
        <input 
          type="checkbox" 
          id="fav" 
          hidden class="cb-btn"
          value="Add to Favourites"
        />&nbsp;
        <label class="btn btn-dark fav" for="fav">
          Add to Favourites?
        </label> 
      </div> 
    </div>
  )
}