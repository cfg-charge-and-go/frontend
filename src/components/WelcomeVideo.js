import React from 'react';
// import ReactPlayer from "react-player";
import WelcomeVideo from '../videos/welcome.mp4';
import './WelcomeVideo.css';

export default function ResponsivePlayer() {
  return ( 
    <div className="player-wrapper">
        <video loop={true} muted={true} autoPlay={true} playsInline={true}
          style={{
            paddingTop: "30px",
            alignContent:"center",
            maxWidth: "100%",
            height: "100%",
            margin: 'auto',
            // position:"relative",
            // top: "0",
            // left: "0"
          }}
        >
          <source src={WelcomeVideo} type="video/mp4"/>
        </video>
      {/* <ReactPlayer
        url={WelcomeVideo}
        loop={true}
        autoPlay={true}
        className="react-player"
        alignContent= "center"
        maxWidth="100%"
        height="100%"
      /> */}
    </div>
  ); 
}
