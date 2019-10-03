import React, { Component } from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Results from '../components/Results';
import {RoomContext} from '../context';
import FeaturedRooms from '../components/FeaturedRooms';
import RoomContainer from '../components/RoomContainer';
export default class Rooms extends Component {
    static contextType = RoomContext;
    componentDidMount() {
        window.scrollTo(0, 0)
      }
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
       <RoomContainer/>
        </>
    )
}
}
