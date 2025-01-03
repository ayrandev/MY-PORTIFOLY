import React from "react";

const Cards = ({ title, description }) => {
  return (
    
      <div className="relative w-52 h-28 overflow-hidden rounded-lg shadow-lg group border-r-8 border-[#00FFEA]">
         <h1 className="w-full h-full items-center flex justify-center object-cover transition-transform duration-300 group-hover:translate-x-full font-[Poppins] text-2xl text-white">{title}</h1>

        <div className="absolute inset-0 bg-black text-white flex flex-col justify-center items-center text-center p-4 translate-x-full         transition-transform duration-300 group-hover:translate-x-0">
          <p className="text-sm">{description}</p>
        </div>
      </div>
   
  );
};

export default Cards;
