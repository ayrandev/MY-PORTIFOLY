import React from "react";
import { ReactTyped } from "react-typed";

import ImagePerfil from "./ImagePerfil";
import Button from "./Button";
import GifBackGround from "./GifBackGround";



export default function Description() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    return (
            <body className="bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 flex justify-evenly font-sans w-screen relative">
                <GifBackGround/>
                <div>
                    <ImagePerfil />
                </div>
                    <div>
                        <div className="w-[350px]">
                        <p className="font-[Poppins] pb-2 text-xl text-indigo-100 bg-clip-text">
                                Olá, eu sou: </p>
                                <span className="font-[Poppins] text-5xl bg-gradient-to-r from-blue-500 via-cyan-200 to-green-500 text-transparent bg-clip-text">
                                    Ayran Vieira </span>
                                <span className="font-[Poppins] text-2xl text-indigo-100"> Desenvolvedor </span>
                                <ReactTyped
                                strings={[
                                    `<span class="font-mono text-3xl text-violet-500">WEB</span>`,
                                    `<span class="font-mono text-3xl text-violet-500">Criativo</span>`,
                                    `<span class="font-mono text-3xl text-violet-500">Dinâmico</span>`,
                                    `<span class="font-mono text-3xl text-violet-500">Inovador</span>`,

                                ]}
                                typeSpeed={40}
                                backSpeed={40}
                                loop
                                cursorChar="<span class='text-white'>|</span>"
                                />
                            
                        </div>
                        <div className="w-80 pt-4">
                                
                        <p className="font-[Poppins] text-xl font-mono text-3xl text-white"> Entrego soluções digitais que impulsionam negócios e conectam pessoas.</p>
                        </div>
                    </div>
                    
            </body>
        
    );
}

