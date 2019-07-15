import React from 'react'
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from '../components/Banner';
function Home() {
    return (
        <Hero hero="defaultHero">
            <Banner title="360° Homes" subtitle="Click here to view all apartments">
                <Link to="/rooms" className="btn-primary">
                    Our Homes
                </Link>
            </Banner>
        </Hero>
    );
}
export default Home;