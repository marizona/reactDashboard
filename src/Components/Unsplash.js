import React from 'react';
import './Unsplash.css';
import SearchPhotos from "./SearchPhotos.js";
import Draggable from 'react-draggable';
import un from './un.png';

function Unsplash() {
    return (
        <Draggable>
        <div className="Unsplash">
            <div className="container1">
            <div className="title">
            <img src={un} alt=""/>
        </div>
                <SearchPhotos />
            </div>
           
        </div>
        </Draggable>
    );
}

export default Unsplash;