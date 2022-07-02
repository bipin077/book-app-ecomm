import React from 'react';
import About from './About';
import Banner from './Banner';
import BestSeller from './BestSeller';
import LatestProducts from './LatestProducts';
import WhyChooseUs from './WhyChooseUs';


function Home() {
    return (
        <>
            <Banner />
            <WhyChooseUs />
            <LatestProducts />
            <BestSeller />
            <About />
        </>
    )
}

export default Home;