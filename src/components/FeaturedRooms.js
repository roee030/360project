import React, { Component } from 'react'
import {RoomContext} from '../context';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
        let {rooms} = this.context;    
        rooms = rooms.map(room=>{
            return <h5>{room._id}</h5>
        })    
        return (
            <div>
               from FeaturedRooms 
               {rooms}
            </div>
        )
    }
}
