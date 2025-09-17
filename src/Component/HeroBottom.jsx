import React from "react";
import cupIcon from "../assets/Icons/cup icon.png";
import awardIcon from "../assets/Icons/award.png";
import pureIcon from "../assets/Icons/pure.png";
import coffeeIcon from "../assets/Icons/coffee.png";

const HeroBottom = () => {
  const data = [
    {
      title: "Awesome Aroma",
      icon: cupIcon,
      desc: "You will definitely be a fan of the design & aroma of your coffee",
    },
    {
      title: "High Quality",
      icon: awardIcon,
      desc: "We served the coffee to you maintaining the best quality",
    },
    {
      title: "Pure Grades",
      icon: pureIcon,
      desc: "The coffee is made of the green coffee beans which you will love",
    },
    {
      title: "Proper Roasting",
      icon: coffeeIcon,
      desc: "Your coffee is brewed by first roasting the green coffee beans",
    },
  ];

  return (
    <div className="bg-[#ECEAE3] py-10 font-raleway">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-7">
        {data.map((item, idx) => (
          <div key={idx} className="gap-2 flex flex-col items-center lg:items-start">
            <img className='w-12' src={item.icon} alt={item.title} />
            <h3 className="text-brandTitle font-rancho text-3xl">{item.title}</h3>
            <p className="text-neutral-700 max-w-80 ">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBottom;
