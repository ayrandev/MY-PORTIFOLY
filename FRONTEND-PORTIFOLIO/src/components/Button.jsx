import React from "react";

export default function Button({ Icon, name, onClick, className = "", disabled = false }) {
  return (
    <div onClick={!disabled ? onClick : null} className="pt-2 flex justify-center">
      <button
        className={`bg-transparent rounded-full border-[1px] border-[#00FFEA] hover:border-[#00FFFF] font-[Poppins] text-white max-h-9 px-4 py-2 gap-2 items-center flex justify-center active:scale-95 hover:translate-y-[2px] hover:text-[#A8E5E6] hover:duration-75 
          ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
          ${className}`}
        disabled={disabled}
      >
        <span className="text-lg">{Icon}</span>
        <span className="text-sm sm:text-base">{name}</span>
      </button>
    </div>
  );
}
