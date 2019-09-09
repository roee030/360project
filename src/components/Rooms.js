import React from 'react'
import {Link} from 'react-router-dom';
import defaultImg from '../images/Ariel_Home.jpg'

export default function Rooms({room}) {
    console.log({room})
    const{description,price,iframeSrc,frontImgSrc} = room;
    
    return( 
        
    <article className="room">
        {description}
        <div className="img-container">
        <img src={ frontImgSrc } alt="single room" />
        <div className="price-top">
        <h6>{price}</h6>
        </div>
        </div>
    </article>
    );
}
