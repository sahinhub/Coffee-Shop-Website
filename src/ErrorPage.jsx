import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    const navigation = useNavigate();
    const handleGoToHome=()=>{
        navigation('/')
    }
    return (
        <div id='error-page' className=' mx-auto bg-white flex flex-col flex-nowrap items-center justify-center text-center space-y-5 pt-4 py-3 min-h-screen'>
            <div className='flex justify-center items-center'>
        
       <button className={`flex items-center gap-1 bg-black text-white rounded-lg px-4 py-3 cursor-pointer`} onClick={handleGoToHome}><AiOutlineArrowLeft className=''/>Back to Home</button>

      </div>
        <img src='/src/assets/original-d46459760ea9d4b877e1c4a2be9c9334.gif' alt="error" className='w-1/5 mx-auto' />
        <div className='space-y-3'>
            <h2 className='text-5xl font-bold text-center py-5 text-black '>Oops. Page Not Found</h2>
            <p className='text-gray-500'>Sorry, an unexpected error has occurred.</p>
      
        <p className='text-xl text-red-400'>{error.statusText || error.message}</p>
      
      </div>
      
        </div>
    );
};

export default ErrorPage;