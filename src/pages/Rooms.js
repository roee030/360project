import React, { Component } from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Results from '../components/Results';
import {RoomContext} from '../context';
import FeaturedRooms from '../components/FeaturedRooms';
export default class Rooms extends Component {
    static contextType = RoomContext;
    render() {
        let {rooms} = this.context;
        return (
        <>
        <Hero hero="roomsHero">
            <Banner title="360° Homes" subtitle="Click here to view all apartments">
                <Link to="/rooms" className="btn-primary">
                    Our Homes
                </Link>
            </Banner>
        </Hero>
        <Results></Results>
        <FeaturedRooms></FeaturedRooms>
        </>
    )
}
}
