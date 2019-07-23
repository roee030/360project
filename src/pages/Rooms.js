import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Results from '../components/Results';

const Rooms = () => {
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

        </>
    )
}

export default Rooms;
