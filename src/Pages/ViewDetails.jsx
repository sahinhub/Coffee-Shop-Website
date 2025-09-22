import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import viewDetailsBG from '../assets/viewDetails.png'
import { GoArrowLeft } from 'react-icons/go';

const ViewDetails = () => {
    const coffeeData=useLoaderData();
    console.log(coffeeData);
    return (
        <div style={{
            background:`url(${viewDetailsBG})`,
            backgroundPosition:'center center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
        }} className='min-h-screen flex flex-col justify-center items-center '>


            <div className='w-5xl space-y-4'>
                 <Link to={'/'} className="text-black font-rancho text-xl inline-flex items-center gap-2">
          <GoArrowLeft /> Back to Home
        </Link>




            <div className='min-h-[400px] flex flex-col lg:flex-row gap-5 p-5 bg-[#F4F3F0] rounded-lg'>

            <img className='max-w-[400px] h-auto object-cover rounded-lg' src={coffeeData.photo} alt={coffeeData.name} />

            <div className='flex flex-col justify-center gap-4'>
                <h3 className='text-4xl font-rancho font-bold text-brandTitle py-4'>
                {coffeeData.name}
                </h3>
                <p>
                  <span className=' text-brandTitle/80 text-xl '><b className='font-bold text-brandTitle'>Chef: </b>{coffeeData.chef}</span>
                </p>
                <p>
                  <span className=' text-brandTitle/80 text-xl '><b className='font-bold text-brandTitle'>Price: </b>{coffeeData?.price} $</span>
                </p>
                <p className=''>
                  <span className=' text-brandTitle/80 text-xl '><b className='font-bold text-brandTitle'>Tastes: </b>{coffeeData?.tastes?.map((i,idx)=><span className='mx-2 bg-brand px-3 py-1 rounded-sm  text-[13px]' key={idx}>{i}</span>)}</span>
                </p>
                <p>
                  <span className=' text-brandTitle/80 text-xl '><b className='font-bold text-brandTitle'>Supplier: </b>{coffeeData.supplier} </span>
                </p>
                <p>
                  <span className=' text-brandTitle/80 text-xl '><b className='font-bold text-brandTitle'>Details: </b>{coffeeData.details}</span>
                </p>
              </div>

            </div>
            </div>
            
        </div>
    );
};

export default ViewDetails;