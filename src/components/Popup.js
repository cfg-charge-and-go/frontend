import React from 'react'
import './Popup.css'
function Popup(props) {
    return (props.trigger) ? (
        <div className ='popup'>
            <div className = 'popup-inner'>
                <h3> Welcome to Charge & Go <br/> Enter an adress to see electric charging stations near you</h3>
                <br></br>
                <br></br>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup