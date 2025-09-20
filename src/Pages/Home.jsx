import React from 'react';
import Hero from '../Component/Hero';
import HeroBottom from '../Component/HeroBottom';
import ProductsSection from '../Component/ProductsInstaSection';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const Home = () => {

    return (
        <div className=''>
            {/* Hero section  */}
            <Hero></Hero>
            <HeroBottom></HeroBottom>
            <ProductsSection></ProductsSection>
            
        </div>
    );
};

export default Home;