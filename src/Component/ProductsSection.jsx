import Button from 'daisyui/components/button';
import React from 'react';
import { BiCoffee } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const ProductsSection = () => {

    const navigate=useNavigate();

    const handleGoToAddCoffeePage=()=>{
        navigate('/add-coffee')
    }

    return (
        <div className='py-26 font-raleway text-center space-y-3 '>

            <h5 className='text-lg'>--- Sip & Savor ---</h5>
            <h2 className=' text-brandTitle dark:text-white font-rancho text-4xl lg:text-5xl '>Our Popular Products</h2>
            <button onClick={handleGoToAddCoffeePage} className='btn bg-brand text-black font-rancho text-xl dark:hover:text-white hover:bg-transparent border border-brand'>Add a Coffee <BiCoffee></BiCoffee></button>
        </div>
    );
};

export default ProductsSection;