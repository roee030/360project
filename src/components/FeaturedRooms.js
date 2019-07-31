import React, { Component } from 'react'
import {RoomContext} from '../context';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
        let {rooms,users} = this.context;    
        rooms = rooms.map(room=>{
            return <h5>{room._id}</h5>
        })
        users = users.map(user=>{
            return <h2>{user.name}</h2>
        })
        return (
            <div>
               from FeaturedRooms 
               {rooms}
               {users}
            </div>
        )
    }
}
