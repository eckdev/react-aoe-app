import React from 'react';
import banner from '../assets/images/aoe.jpg'

function Home() {
    return (
        <div className="container">
            <div className="centered-img">
                <img src={banner} width="100%" height="100%" alt="" className="mt-3" />
            </div>

        </div>

    )
}

export default Home
