// src/pages/AddCoffeePage.jsx (or .tsx)
import bg from '../assets/coffeeBG.png';
import { Link, useLoaderData } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import Select from 'react-select';
import Swal from 'sweetalert2'
import '../App.css';


const UpdateCoffee = () => {

    const loadedCoffee=useLoaderData();
    console.log(loadedCoffee);


    

      const handleUpdateCoffee = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = parseInt(form.price.value) ;
        const supplier = form.supplier.value;
  
    
        const coffeeInfoUpdate = { name, chef, supplier,price};
        console.log('Sending:', coffeeInfoUpdate);
    
        fetch(`https://mongo-coffee-shop-server.vercel.app/coffee/update/${loadedCoffee._id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(coffeeInfoUpdate),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Server response:', data);
            if (data.modifiedCount) {
              Swal.fire({
                title: 'Success!',
                text: 'Coffee Successfully Updated',
                icon: 'success',
                confirmButtonText: 'Close'
              })
            }
          })
          .catch((err) => console.error(err));
      };
    
    return (
        <div
      style={{ background: `url(${bg})` }}
      className="py-8 bg-contain bg-no-repeat bg-center min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-3xl mx-auto space-y-5 px-2">
        <Link to={'/'} className="text-black font-rancho text-xl inline-flex items-center gap-2">
          <GoArrowLeft /> Back to Home
        </Link>

        <div className="bg-[#F4F3F0] rounded-lg space-y-3 mx-auto py-8 px-5 flex flex-col items-center">
          <h2 className="font-rancho text-4xl lg:text-5xl text-center text-brandTitle">Update Coffee Details</h2>
          <p className="text-neutral-600 max-w-3xl text-center">
            {loadedCoffee.name}
          </p>

          <form onSubmit={handleUpdateCoffee} className="flex flex-col gap-3 font-raleway w-full pt-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Name</label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="input w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand"
                />
              </div>

              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Chef</label>
                <input
                  required
                  name="chef"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Supplier</label>
                <input
                  required
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand"
                />
              </div>

              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Price</label>
                <input
                type='number'
                  required
                  name="price"
                  placeholder="Enter coffee Price"
                  className="text-area w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand p-2"
                />
              </div>


            </div>

            <button type="submit" className="btn bg-brand dark:text-black font-rancho text-xl hover:bg-transparent border border-brand">
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateCoffee;