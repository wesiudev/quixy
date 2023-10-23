"use client";
import Image from "next/image";
import * as Scroll from "react-scroll";
import { useEffect } from "react";
import AOS from "aos";
export default function ProductHero({ page }: { page: any }) {
  useEffect(() => {
    AOS.init({
      offset: 25,
    });
  }, []);
  let ScrollLink = Scroll.Link;
  return (
    <div className="h-screen w-screen relative font-coco">
      <div className="absolute left-0 top-0 w-full h-full flex overflow-hidden z-0">
        <Image
          src="/assets/macbook-color.webp"
          width={1980}
          height={1359}
          alt={`quixy hero page ${page.name}`}
          className="object-cover"
        />
      </div>
      <div className="w-full h-full bg-black bg-opacity-60 flex items-center justify-center absolute left-0 top-0 z-50">
        <h1 className="flex flex-col items-start">
          <div
            data-aos="fade-down"
            className="text-white text-center text-4xl md:text-6xl sm:text-5xl mx-auto lg:text-6xl drop-shadow-xl tracking-widest font-bold shadow-yellow-500 "
          >
            {page.name.toUpperCase()}
          </div>
          <div className="flex justify-between flex-col md:flex-row  items-center w-full mt-12">
            <div
              data-aos="fade-right"
              data-aos-delay={300}
              className="text-yellow-400 font-light text-right text-lg md:text-sm md:px-6 lg:px-12 xl:px-16 "
            >
              Quixy to coś więcej niż software house
            </div>
            <div className="flex flex-col-reverse md:flex-row md:items-center">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                delay={200}
                data-aos="fade-up"
                data-aos-delay={300}
                className="mx-auto w-max relative px-12 py-2  lg:my-0 text-zinc-700 drop-shadow-md  shadow-black transition-all ease-in-out duration-500 bg-gradient-to-tr from-yellow-400 via-yellow-200 to-yellow-400 rounded-md text-2xl z-[100] cursor-pointer  hover:shadow-yellow-600 shadow-lg"
              >
                Sprawdź
              </ScrollLink>

              <div
                data-aos="fade-left"
                data-aos-delay={300}
                className="text-yellow-400 font-light text-left text-sm md:px-6 lg:px-12 xl:px-16 "
              >
                niezapomniane doświadczenie użytkownika
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}
