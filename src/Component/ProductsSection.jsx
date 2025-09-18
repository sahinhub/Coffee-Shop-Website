import Button from 'daisyui/components/button';
import { BiCoffee } from 'react-icons/bi';
import {  useNavigate } from 'react-router-dom';
import leftCup from '../assets/left cup overlay.png'
import rightOverlay from '../assets/Rightimage.png'

const ProductsSection = ({loadedCoffes}) => {
 
    console.log(loadedCoffes);

    const navigate=useNavigate();

    const handleGoToAddCoffeePage=()=>{
        navigate('/add-coffee')
    }

    

    return (
        <div className='py-26 font-raleway text-center space-y-3 relative '>

            <h5 className='text-lg'>--- Sip & Savor ---</h5>
            <h2 className=' text-brandTitle dark:text-white font-rancho text-4xl lg:text-5xl '>Our Popular Products</h2>
            <button onClick={handleGoToAddCoffeePage} className='btn bg-brand text-black font-rancho text-xl dark:hover:text-white hover:bg-transparent border border-brand'>Add a Coffee <BiCoffee></BiCoffee></button>


            <img className='absolute dark:opacity-35 left-0 top-1/4' src={leftCup} alt="" />
            <img className='absolute right-0 top-1/4' src={rightOverlay} alt="" />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
                loadedCoffes.map((coffee)=>{
                    <div key={coffee._id}>
                        <img src={coffee.photo} alt="" />
                        <h3>{coffee.name}</h3>
                        <p>{coffee.details}</p>
                    </div>
                })
            }
            </div>
        </div>
    );
};

export default ProductsSection;