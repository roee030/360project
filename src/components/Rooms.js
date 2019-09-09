import React from 'react'
import {Link} from 'react-router-dom';
import defaultImg from '../images/Ariel_Home.jpg'

export default function Rooms({room}) {
    const{name,slug,images,price,iframeSrc,frontImgSrc} = room;
    return( 
    <article className="room">
        {name}
        <div className="img-container">
        <img src={ frontImgSrc } alt="single room" />
        <div id="myPanoViewer"></div>
        </div>
    </article>
    );
}
