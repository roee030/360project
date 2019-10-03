import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../context'
import Loading from './Loading'
export default function RoomContainer() {
    return (
        <RoomConsumer>
        {value =>{
            const {loading, sortedRooms, rooms}=value
            return(
                <div>
                
                Hello from Room Container
                <RoomsFilter rooms={rooms}/>
                <RoomsList  rooms={sortedRooms}/>
            </div>

            )
        }}
        </RoomConsumer>
       
    )
}
