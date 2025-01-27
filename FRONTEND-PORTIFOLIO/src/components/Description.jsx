import React from "react";
import { ReactTyped } from "react-typed";

import ImagePerfil from "./ImagePerfil";
import GifBackGround from "./GifBackGround";

export default function Description() {
  return (
    <div id="Description" className="bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 flex flex-col lg:flex-row items-center justify-evenly font-sans w-full min-h-screen relative">
      <GifBackGround />
      <div className="flex-shrink-0">
        <ImagePerfil />
      </div>
      <div className="text-center lg:text-left mt-8 lg:mt-0">
        <div className="w-full max-w-[350px] mx-auto lg:mx-0">
          <p className="font-[Poppins] text-indigo-100 text-xl">Olá, eu sou:</p>
          <h1 className="font-[Poppins] text-5xl bg-gradient-to-r from-blue-500 via-[#00FFEA] to-green-500 text-transparent bg-clip-text">
            Ayran Vieira
          </h1>
          <h2 className="font-[Poppins] font-bold text-2xl text-indigo-100">
            Desenvolvedor{" "}
            <ReactTyped
              strings={[
                `<span class="font-mono font-bold text-[#00FFEA]">WEB</span>`,
                `<span class="font-mono font-bold text-[#00FFEA]">Full Stack</span>`,
                `<span class="font-mono font-bold text-[#00FFEA]">Criativo</span>`,
                `<span class="font-mono font-bold text-[#00FFEA]">Dinâmico</span>`,
                `<span class="font-mono font-bold text-[#00FFEA]">Inovador</span>`,
              ]}
              typeSpeed={40}
              backSpeed={40}
              loop
              cursorChar="<span class='text-white'>|</span>"
            />
          </h2>
        </div>
        <div className="w-full max-w-[350px] mx-auto lg:mx-0 mt-6">
          <p className="font-[Poppins] text-xl text-white">
            Transformando ideias em experiências digitais impactantes.
          </p>
        </div>
      </div>
    </div>
  );
}

