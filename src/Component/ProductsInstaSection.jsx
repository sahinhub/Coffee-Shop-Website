'use client'
import { BiCoffee } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import leftCup from '../assets/left cup overlay.png'
import rightOverlay from '../assets/Rightimage.png'
import { useEffect, useState } from 'react';

const ProductsSection = () => {
  const [coffees, setCoffes] = useState([]);
  const [instaImages, setInstaImages] = useState([]);

  const navigate = useNavigate();




  useEffect(() => {
    const loadCoffees = async () => {
      const res = await fetch("http://localhost:5000/coffees");
      const data = await res.json();
      console.log(data);
      setCoffes(data);
    };

    const loadInstaImages = async () => {
      const res = await fetch('/instaImages.json');
      const data = await res.json();
      console.log(data);
      setInstaImages(data);
    };




    loadInstaImages();
    loadCoffees();
  }, []);

  const handleGoToAddCoffeePage = () => {
    navigate('/add-coffee');
  };

  return (
    <div className='py-26  font-raleway relative bg-white text-center space-y-3 px-3 lg:px-0'>
      <h5 className='text-lg text-gray-900'>--- Sip & Savor ---</h5>
      <h2 className='text-brandTitle font-rancho text-4xl lg:text-5xl'>
        Our Popular Products
      </h2>
      <button
        onClick={handleGoToAddCoffeePage}
        className='btn bg-brand text-black font-rancho text-xl hover:bg-transparent border border-brand'
      >
        Add a Coffee <BiCoffee />
      </button>

      <img className='absolute opacity-15 left-0 top-1/4 ' src={leftCup} alt="" />
            <img className='absolute opacity-15 right-0 top-1/4' src={rightOverlay} alt="" />

            <div
  className="mx-auto container grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 z-[9999]"
>
  {coffees.map((coffee, idx) => (
    <div className="bg-[#F5F4F1] rounded-lg flex p-4 justify-center gap-5" key={idx}>
      <img className='w-[200px] h-[220px] object-cover object-top rounded-lg' src={coffee.photo} alt={coffee.name} />
      <div className='flex flex-col justify-center items-start text-left'>
        <h3 className='font-bold text-brandTitle font-rancho text-4xl '>{coffee.name}</h3>
      <p className='text-lg text-gray-700'> {coffee.details}</p>
      </div>
    </div>
  ))}
</div>



{/* Follow on Instagram */}

<div className='py-10'>
   <h5 className='text-lg text-gray-800'>--- Follow Us Now ---</h5>
      <h2 className='text-brandTitle font-rancho text-4xl lg:text-5xl'>
Follow on Instagram  </h2>
</div>

<div className='grid container mx-auto gap-3 lg:gap-5 grid-cols-2 lg:grid-cols-4  mt-10'>
  {
    instaImages.map(i=>
      <img className='w-full' key={i.id} src={i.url}/>
    )
  }
</div>

    </div>
  );
};

export default ProductsSection;
