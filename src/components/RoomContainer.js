import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'
import Room from './Room'
function RoomContainer({ context }) {
  
    const { loading, sortedRooms, rooms } = context;

    console.log({rooms})
    if (loading) {
      return <Loading />;
    }
    
    return (
      <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </>
    );
  }
  
  export default withRoomConsumer(RoomContainer);
