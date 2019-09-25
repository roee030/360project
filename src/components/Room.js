import React from 'react'
import {Link} from 'react-router-dom';
import defaultImg from '../images/Virtual_Tour.jpg'
import PropTypes from "prop-types";
export default function Room({room}) {
    console.log({room})
    const{_id,description,city,price,iframeSrc,frontImgSrc} = room;
    
    return( 
        
    <article className="room">
        
        <div className="img-container">
            <img src={ frontImgSrc || defaultImg} alt="single room" />
            <div className="price-top">
                <h6>
                    {city}
                    
                </h6>
            </div>
            <Link to={`/rooms/${_id}`} className="btn-primary room-link">
                המשך לדף
            </Link>
        </div>
        <p className="room-info">{description}</p>
    </article>
    );
}
Room.propTypes = {

    room: PropTypes.shape({
  
        _id: PropTypes.string.isRequired,
  
        city: PropTypes.string.isRequired,
  
        frontImgSrc: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
  
    })
  
  };