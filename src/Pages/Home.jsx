import React from 'react';
import Hero from '../Component/Hero';
import HeroBottom from '../Component/HeroBottom';
import ProductsSection from '../Component/ProductsSection';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedCoffes=useLoaderData();
    console.log(loadedCoffes);
    return (
        <div className='transition-all duration-1000'>
            {/* Hero section  */}

            <Hero></Hero>
            <HeroBottom></HeroBottom>
            <ProductsSection loadedCoffes={loadedCoffes}></ProductsSection>
        </div>
    );
};

export default Home;