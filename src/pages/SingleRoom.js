import React, { Component } from 'react'
import {RoomContext} from '../context';
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import defaultBcg from "../images/room-1.jpeg";

import StyledHero  from '../components/StyledHero'

class SingleRoom extends Component {
    static contextType = RoomContext;
    constructor(props)
    {
        super(props);
        this.state={
            id:this.props.match.params.id
        }
    }
    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.id);
        //If there is no room = Go back to rooms page
        if (!room) {
            return (
              <div className="error">
                <h3> no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </div>
            );
          }    
          const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            city,
            frontImgSrc,
            iframeSrc,
            streetView
          } = room;
          console.log(room)
          return (
            <>
            <StyledHero img={frontImgSrc || this.state.defaultBcg}>
              <Banner title={`מיקום:${city}`}>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </Banner>
            </StyledHero>
            <section className="single-room">
            <div className="single-room-images">
              
                <iframe src={iframeSrc} />
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>price : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                
              
              </article>
            </div>
          </section>
  
            </>
        );
    }
}
export default SingleRoom;