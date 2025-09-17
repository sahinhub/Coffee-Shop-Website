import React from 'react';
import Hero from '../Component/Hero';
import HeroBottom from '../Component/HeroBottom';
import ProductsSection from '../Component/ProductsSection';

const Home = () => {
    return (
        <div className='transition-all duration-1000'>
            {/* Hero section  */}

            <Hero></Hero>
            <HeroBottom></HeroBottom>
            <ProductsSection></ProductsSection>
        </div>
    );
};

export default Home;