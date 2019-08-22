import React from 'react'
import {Link} from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg'
export default function Rooms({room}) {
    const{name,slug,images,price} = room;
    return( 
    <article className="room">
        Hello from room
        <div className="img-container">
        <img src={ defaultImg } alt="single room" />
        </div>
    </article>
    );
}
