import React from "react";
import Button from "./Button";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";
import GifBackGround from "./GifBackGround";
import GifContact from "./GifContact";
import axios from "axios";

export default function FormContact() {

  return (
    <section id="Contact" className="relative flex flex-col justify-between bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 min-h-screen">
      <GifBackGround />

      {/* Container principal */}
      <div className="flex flex-col justify-center items-center w-full pt-8 pb-16">
        <div className="flex justify-center w-full max-w-4xl">
          {/* Div Container */}
          <div className="relative w-full flex gap-16 bg-black bg-opacity-20 backdrop-blur-md p-8 rounded-lg">
            <div className="flex flex-col items-center w-1/2 gap-8">
              <h1 className="text-center pt-8 text-4xl font-[Poppins] bg-gradient-to-r from-blue-800 via-green-300 to-indigo-100 text-transparent bg-clip-text">
                Contact-me
              </h1>
              <div className="flex flex-col justify-center items-center w-full">
                <SocialMedia />
                <GifContact />
              </div>
            </div>

            {/* Linha divisória */}
            <div className="border-l-[1px] border-[#00FFEA] opacity-50 h-full"></div>

            <div className="w-1/2 max-w-sm">
              <form  onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const data = Object.fromEntries(formData);

                      try {
                        const response = await axios.post("http://localhost:3000/form", data, {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        });

                        if (response.status === 200) {
                          alert("Formulário enviado com sucesso!");
                        } else {
                          alert("Erro ao enviar o formulário!");
                        }
                      } catch (error) {
                        console.error("Erro na requisição:", error);
                        alert("Erro de conexão!");
                      }
                    }}
                    method="POST"
                    className="p-8 flex flex-col items-center gap-4 bg-transparent"
                  >
                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Nome completo*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    required
                    className="h-10 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Email*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    required
                    className="h-10 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]">Whatsapp*</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Digite seu whatsapp"
                    required
                    className="h-10 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                  />
                </div>

                <div className="w-full">
                  <label className="text-indigo-200 font-[Poppins]"> Qual motivo do seu contato?* </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Digite sua mensagem"
                    required
                    className="h-24 w-full bg-transparent border-b-[1px] border-[#00FFEA] text-white px-2"
                  ></textarea>
                </div>

                <div className="w-full flex justify-end mt-4">
                  <Button type="submit" name="Enviar" />
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
