import React from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

function Home() {
    
    return (
        <>
        componentDidMount() {
            window.scrollTo(0, 0)
          }
        <Hero hero="defaultHero">
            <Banner title="360° Homes" subtitle="Click here to view all apartments">
                <Link to="/rooms" className="btn-primary">
                    Our Homes
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    );
}
export default Home;