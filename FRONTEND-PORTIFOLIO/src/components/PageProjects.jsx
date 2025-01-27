import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Gallery from "./Gallery";
import Button from "./Button";
import GifBackGround from "./GifBackGround";
import projects from "./Projects";

export default function PageProjects() {
  return (
    <section
      id="MyProjects"
      className="relative bg-gradient-to-b from-zinc-950 via-[#000F0C] to-zinc-950 py-8 min-h-screen w-full"
    >
      <GifBackGround />
      <div className="mb-8 border-b-[1px] border-[#00FFEA] w-full max-w-lg mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-[Poppins] text-indigo-100 mb-2">
          Meus Projetos
        </h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 }, 
          1024: { slidesPerView: 1 },
        }}
        className="max-w-4xl mx-auto"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="flex justify-center items-center">
            <Gallery
              image={project.image}
              Icon={project.icon}
              title={project.title}
              description={project.description}
              Buttons={
                <>
                  {project.buttons.map((btn, idx) => (
                    <Button
                      key={idx}
                      name={btn.name}
                      Icon={btn.icon}
                      onClick={btn.action}
                    />
                  ))}
                </>
              }
              className="bg-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
