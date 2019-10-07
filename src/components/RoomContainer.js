import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'
import Room from './Room'

function RoomContainer({ context }) {

    const { loading, sortedRooms, rooms } = context;

    const total_room = rooms;

    console.log(rooms)
   
  
    return (
      <>
        <RoomsFilter rooms={total_room} />
        <RoomsList rooms={rooms} />
      </>
    );
  }

export default withRoomConsumer(RoomContainer);
