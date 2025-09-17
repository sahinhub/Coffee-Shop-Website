// src/pages/AddCoffeePage.jsx (or .tsx)
import React, { useState } from 'react';
import bg from '../assets/coffeeBG.png';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';
import Select from 'react-select';
import '../App.css';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'kiwi', label: 'Kiwi' },
];

const AddCoffeePage = () => {
  // <-- state moved here (not inside handler)
  const [selectedTastes, setSelectedTastes] = useState([options[2], options[3]]); // initial default

  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    // convert selected react-select objects to array of values
    const taste = (selectedTastes || []).map((t) => t.value);

    const coffeeInfo = { name, chef, supplier, taste, category, details, photo };
    console.log('Sending:', coffeeInfo);

    fetch('http://localhost:5000/coffees', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(coffeeInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log('Server response:', data))
      .catch((err) => console.error(err));
  };

  return (
    <div
      style={{ background: `url(${bg})` }}
      className="py-8 bg-cover bg-center min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-3xl mx-auto space-y-5 px-2">
        <Link to={'/'} className="text-black font-rancho text-xl inline-flex items-center gap-2">
          <GoArrowLeft /> Back to Home
        </Link>

        <div className="bg-[#F4F3F0] rounded-lg space-y-3 mx-auto py-8 px-5 flex flex-col items-center">
          <h2 className="font-rancho text-4xl lg:text-5xl text-center text-brandTitle">Add New Coffee</h2>
          <p className="text-neutral-600 max-w-3xl text-center">
            It is a long established fact that a reader will be distracted by the readable content...
          </p>

          <form onSubmit={handleAddCoffee} className="flex flex-col gap-3 font-raleway w-full pt-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="input w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand"
                />
              </div>

              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Chef</label>
                <input
                  name="chef"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand"
                />
              </div>
            </div>


            <div className="flex flex-col gap-4">
              <div className="space-y-3">
                <label className="text-base mb-2 text-neutral-800">Taste</label>
                
                {/* ======= React-Select (controlled) ======= */}
                <Select
                  options={options}
                  isMulti
                  name="tastes"
                  value={selectedTastes}
                  onChange={(val) => setSelectedTastes(val || [])}
                  className="basic-multi-select text-base"
                  classNamePrefix="select"
                  placeholder="Enter coffee taste"
                  /* classNames inject Tailwind classes */
                  classNames={{
                    control: () =>
                      'w-full bg-white text-neutral-700 placeholder:text-neutral-500 border border-neutral-300 rounded-md focus:outline-none',
                    menu: () => 'bg-white rounded-md shadow-md border border-neutral-200 mt-1',
                    option: (state) =>
                      state.isSelected
                        ? 'px-3 py-2 bg-brand text-white cursor-pointer rounded-md'
                        : state.isFocused
                        ? 'px-3 py-2 bg-brand/90 text-white cursor-pointer rounded-md'
                        : 'px-3 py-2 text-neutral-700 cursor-pointer rounded-md hover:bg-brand hover:text-white',
                    multiValue: () => 'bg-brand/10 text-brand rounded px-2 py-0.5 mr-1 flex items-center',
                    multiValueLabel: () => 'text-brand text-sm',
                    multiValueRemove: () => 'text-brand hover:bg-brand hover:text-white rounded-sm cursor-pointer',
                  }}
                  /* Remove react-select default inline background/color so Tailwind hover works */
                  styles={{
                    control: (provided) => {
                      // remove inline background/borders so classes take effect
                      const { backgroundColor, boxShadow, ...rest } = provided;
                      return { ...rest };
                    },
                    menu: (provided) => {
                      const { backgroundColor, ...rest } = provided;
                      return { ...rest };
                    },
                    option: (provided) => {
                      // remove inline background/color so our Tailwind hover/bg-brand works
                      const { backgroundColor, color, ...rest } = provided;
                      return { ...rest };
                    },
                    multiValue: (provided) => {
                      const { backgroundColor, ...rest } = provided;
                      return { ...rest };
                    },
                  }}
                />
              </div>
            </div>


            <div className="flex flex-col lg:flex-row gap-4">
              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Supplier</label>
                <input
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand"
                />
              </div>

              
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Category</label>
                <input
                  name="category"
                  type="text"
                  placeholder="Enter coffee category"
                  className="input w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand"
                />
              </div>

              <div className="space-y-3 flex-1">
                <label className="text-base mb-2 text-neutral-800">Details</label>
                <textarea
                  name="details"
                  rows={1}
                  placeholder="Enter coffee details"
                  className="text-area w-full bg-white text-neutral-700 placeholder:text-neutral-500 focus:outline-0 focus:border-brand p-2"
                />
              </div>
            </div>
        

            
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="space-y-3 flex-1 flex flex-col">
                <label className="text-base mb-2 text-neutral-800 ">Coffee Image</label>
                <label className="input bg-white text-neutral-800 w-full focus-within:border-brand validator focus-within:outline-none">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </g>
                  </svg>
                  <input
                    className="outline-none focus:outline-none focus:ring-0 focus:border-transparent"
                    type="url"
                    name="photo"
                    required
                    placeholder="https://"
                    defaultValue="https://"
                    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
                    title="Must be valid URL"
                  />
                </label>

                <p className="validator-hint py-0 my-0">Must be valid URL</p>
              </div>
            </div>

            <button type="submit" className="btn bg-brand dark:text-black font-rancho text-xl hover:bg-transparent border border-brand">
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffeePage;
