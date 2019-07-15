import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
function Error() {
    return (
        <Hero>
        <Banner title="Error 404" subtitle="Page not found please return to safe zone">
        <Link to="/" className="btn-primary">
        Return Home
        </Link>
        </Banner>
        </Hero>
    )
}
export default Error;