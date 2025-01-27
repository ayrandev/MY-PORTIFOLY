import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-center bg-[#000F0C]">
      <div className="bg-[#000F0C] border-b-[1px] border-[#00FFEA]">
        <div className="pt-2 pb-[2px] px-10">
          <nav>
            {/* Menu normal para telas grandes */}
            <ul className="hidden sm:flex gap-10">
              <li className="font-[Poppins] hover:scale-110 border-transparent">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#Description").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"
                >
                  Home
                </Link>
              </li>
              <li className="font-[Poppins] hover:scale-110">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#CardsAbout").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"
                >
                  About-me
                </Link>
              </li>
              <li className="font-[Poppins] hover:scale-110">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#MyProjects").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"
                >
                  Projects
                </Link>
              </li>
              <li className="font-[Poppins] hover:scale-110">
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#MyContact").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] relative inline-block text-lg before:absolute before:w-0 before:h-[1px] before:bg-[#00FFEA] before:duration-300 hover:before:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Menu Hamburger para telas pequenas */}
            <div className="sm:hidden flex justify-end">
              <button onClick={toggleMenu} className="text-[#00FFEA] bg-[#000F0C]">
                <div className="space-y-2">
                  <div className="w-6 h-1 bg-indigo-100"></div>
                  <div className="w-6 h-1 bg-indigo-100"></div>
                  <div className="w-6 h-1 bg-indigo-100"></div>
                </div>
              </button>
            </div>

            {/* Menu flutuante para dispositivos móveis */}
            <ul
              className={`sm:hidden absolute top-16 right-0 w-64 bg-[#000F0C] p-4 space-y-4 transform transition-transform duration-300 ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#Description").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#CardsAbout").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] text-lg"
                >
                  About-me
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#MyProjects").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] text-lg"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({
                      top: document.querySelector("#MyContact").offsetTop,
                      behavior: "smooth",
                    });
                  }}
                  className="text-indigo-100 hover:text-[#A8E5E6] text-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
