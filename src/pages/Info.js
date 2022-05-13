import Popup from '../components/Popup';
import {useState, useEffect} from 'react';
import Home from './Home'
function Info() {
const {timedPopup, setTimedPopup} = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, []);
  return (
    <div className="text-center pt-5">
      <Home/>
    <Popup trigger ={timedPopup} setTrigger ={setTimedPopup}>
    </Popup>

    </div>
  ); 
}

 export default Info;























































