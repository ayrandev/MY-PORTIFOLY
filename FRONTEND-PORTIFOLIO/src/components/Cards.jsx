import React from "react";

const Cards = ({ title, description, className = "", image, Icon, Buttons = null }) => {
  return (
    <div className={`relative w-52 sm:w-64 lg:w-58 h-28 sm:h-32 lg:h-36 overflow-hidden rounded-lg shadow-lg group border-r-8 border-[#00FFEA] ${className}`}>
      <div className="w-full h-full flex items-center justify-start px-4 bg-gradient-to-r from-zinc-900 via-zinc-800 to-black transition-transform duration-300 group-hover:translate-y-full">
        <div className="flex items-center gap-2">
          {Icon && <span className="text-xl sm:text-2xl">{Icon}</span>}
          <h1 className="font-[Poppins] text-lg sm:text-xl lg:text-2xl text-white">{title}</h1>
          {image && <img src={image} alt={title} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />}
        </div>
      </div>
      <div className="absolute inset-0 bg-black text-white flex flex-col justify-center items-center text-center p-4 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
        <p className="text-xs sm:text-sm lg:text-base">{description}</p>
        {Buttons && <div className="flex justify-center gap-2 mt-4">{Buttons}</div>}
      </div>
    </div>
  );
};

export default Cards;
