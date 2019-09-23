import React, { Component } from 'react'
import { RoomContext } from '../context';
import Loading from '../components/Loading';
import Room from './Room';
import Title from '../components/Title';
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let { rooms, loading } = this.context;
        rooms = rooms.map(room => {
            if (room.featured === true) {
                return <Room key={room.id} room={room} />
            }
        })
        return (
            <section className="featured-rooms">
                <Title title="featured-rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
        )
    }
}
