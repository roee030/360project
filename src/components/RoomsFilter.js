import React from 'react'
import {useContext} from 'react'
import {RoomContext, RoomConsumer} from '../context'
import Title from './Title'
export default function RoomsFilter() {
    const context = useContext(RoomContext)
    console.log(context);
        
        
    return (
        <div>
            Hello from RoomFiler
            
        </div>
    )
}
