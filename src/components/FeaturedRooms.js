import React, { Component } from 'react'
import {RoomContext} from '../context';
import Loading from '../components/Loading';
import Room from '../components/Rooms';
import Title from '../components/Title';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {
        let {rooms,loading} = this.context;    
        rooms = rooms.map(room=>{
            return <Room key={room.id} room={room}/>
        })
       console.log(rooms);
        return (
            <section className="featured-rooms">
                <Title title="featured-rooms"/>
                <div className="featured-rooms-center">
                {loading?<Loading/> : rooms}
                </div>
            </section>
        )
    }
}
