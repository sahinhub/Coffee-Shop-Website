import React from 'react';
import heroBg from '../assets/heroBG.png'
const Hero = () => {
    return (
        <div style={{
            backgroundImage:`url(${heroBg})`
        }} className='bg-cover bg-left lg:bg-bottom-right  flex gap-8 min-h-[500px] lg:min-h-[700px] items-center justify-center' >
            
           <div className=' flex gap-8 items-center justify-center container mx-auto flex-col lg:flex-row'>
            <div className='flex-1 px-3'>

           </div>
           <div className='flex-1 space-y-3 px-3 '>
             <h1 className='text-[28px] lg:text-5xl font-rancho text-white'>Would you like a Cup of Delicious Coffee?</h1>
             <p className='font-raleway text-gray-400'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
             <button className="btn bg-brand border hover:bg-transparent border-brand text-black hover:text-white">Learn More</button>

           </div>
           </div>
        </div>
    );
};

export default Hero;