import React from "react";
import Draggable from "react-draggable";
import styles from "./Player.css";
import spot from "./spot.png";


const Player = props => {
    const backgroundStyles = {
      backgroundImage:`url(${props.item.album.images[0].url})`,
    };
    
    const progressBarStyles = {
      width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
    };
    
    return (
      <Draggable>
      <div className="w-full md:w-1/3 h-64 bg-black text-white rounded-lg shadow mx-auto">
        <div className="main-wrapper ">
          <div className="now-playing__img">
            <img src={props.item.album.images[0].url} />
          </div>
          <div className="title">
            <img src={spot} alt=""/>
        </div>
          <div className="now-playing__side">
            <div className="now-playing__name">{props.item.name}</div>
            <div className="now-playing__artist">
              {props.item.artists[0].name}
            </div>
            <div className="now-playing__status">
              {props.is_playing ? "Playing" : "Paused"}
            </div>
            <div className="progress">
              <div
                className="progress__bar"
                style={progressBarStyles}
              />
            </div>
          </div>
          <div className="background" style={backgroundStyles} />{" "}
        </div>
      </div>
      </Draggable>
    );
  }
  export default Player;