import React from 'react';
import bgImage from '../assets/Rectangle 1.png'
const Header = () => {
    return (
        <div style={{
            backgroundImage:`url(${bgImage})`
        }} className='flex mx-auto bg-cover bg-center flex-col justify-center items-center py-1'>
            <img className='w-[350px]' src='https://i.postimg.cc/NGZmBfpd/Logo.png' alt="" />
        </div>
    );
};

export default Header;