import React from 'react';
import footerBg from '../assets/Rectangle 17.png'
import footerLogo from '../assets/footerLogo.png'
import footerBgMain from '../assets/footerBgMain.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationDot, FaPinterest, FaXTwitter } from 'react-icons/fa6';
import { IoIosCall } from 'react-icons/io';
const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerBgMain})`
        }} className='font-raleway bg-white bg-cover object-center bg-no-repeat '>

            <div className='flex px-3 lg:px-0 flex-col container py-10 mx-auto lg:flex-row gap-5 '>

                <div className='flex-1 space-y-2.5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
                    <img className='w-20' src={footerLogo} alt='Espresso Emporium' />
                    <h2 className='font-rancho text-4xl lg:text-left text-brandTitle '>Espresso Emporium</h2>
                    <p className='text-black'>
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className='flex gap-2 text-2xl text-black'>
                        <FaFacebook></FaFacebook>
                        <FaXTwitter></FaXTwitter>
                        <FaInstagram></FaInstagram>
                        <FaPinterest></FaPinterest>
                    </div>
                    <div className='flex flex-col gap-2 text-2xl mt-6 text-black max-w-full lg:max-w-70 '>
                        <h2 className='font-rancho text-4xl text-brandTitle'>Get In touch</h2>

                        <div className='flex gap-1 '>
                        <IoIosCall className='text-2xl'></IoIosCall>
                        <p className='text-base'>+88 01533 333 333</p>
                        </div>
                        <div className='flex gap-1'>
                        <FaEnvelope className='text-xl'></FaEnvelope>
                        <p className='text-base ml-1'>info@gmail.com</p>
                        </div>
                        <div className='flex gap-1'>
                        <FaLocationDot className='text-2xl'></FaLocationDot>
                        <p className='text-base'>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                    
                </div>

                <div className='flex-1 text-center lg:text-left lg:ml-10 space-y-2.5'>
                    <h2 className='font-rancho text-4xl text-brandTitle pt-24'>Connect with Us</h2>

                    {/* contact form */}
                    <form className=" flex flex-col gap-2 max-w-lg lg:items-start  ">


                        <input type="text" className="input bg-white w-full placeholder:text-gray-800" placeholder="Name" />
                        
                        <input type="email " className="input bg-white w-full placeholder:text-gray-500" placeholder="Email" />

                        <textarea rows={3} className="p-2 w-full bg-white placeholder:text-gray-500" placeholder="Write your message"></textarea>                        

                        <button className="btn px-8 bg-transparent hover:bg-brandTitle text-brandTitle hover:text-white border-2 border-brandTitle rounded-full mt-4">Send Message</button>
                    </form>

                </div>



            </div>
            <div style={{
                background: `url(${footerBg})`
            }} className=" text-center bg-base-300 text-base-content p-4 bg-cover bg-no-repeat">
                <p className='text-[13px]'> © {new Date().getFullYear()} - All right Coffee Shop Emporium | All Right Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;