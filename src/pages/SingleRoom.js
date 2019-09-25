import React, { Component } from 'react'
import {RoomContext} from '../context';
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

import StyledHero  from '../components/StyledHero'
const defaultBcg = "../images/Virtual_Tours.jpg";

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
          
          return (
            <div>
           
            </div>
        )
    }
}
export default SingleRoom;