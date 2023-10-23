"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
export default function UnderHero() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className="w-screen bg-gradient-to-b from-blue-500 to-green-500 grid grid-cols-1 xl:grid-cols-2 lg:px-[8vw] pt-12 lg:py-36">
      <div className="w-full relative mx-auto flex items-center lg:items-start flex-col justify-evenly h-full pr-3">
        <h1
          data-aos="fade-down"
          data-aos-delay={250}
          className="text-5xl md:text-6xl text-gray-100 font-bold mb-3 xl:mt-0 drop-shadow-lg shadow-black"
        >
          Jak działamy?
        </h1>
        <div
          data-aos="fade-left"
          data-aos-delay={250}
          className="w-[90%] text-md sm:text-lg md:text-xl font-coco selection:bg-green-400 selection:text-white text text-gray-100  text-center lg:text-left my-6 lg:my-3"
        >
          Każda strona internetowa, tworzona we współpracy z{" "}
          <span className="font-bold text-yellow-400 italic"> Quixy </span>jest
          dostosowywana do
          <span className="font-bold text-yellow-400 italic">
            {" "}
            indywidualnych potrzeb każdego klienta{" "}
          </span>{" "}
          i otrzymuje unikalną szatę graficzną.
        </div>

        <button
          data-aos="fade-left"
          data-aos-delay={250}
          className="mb-6 lg:mb-0 relative inline-flex items-center justify-center p-0.5 mr-2 lg:mt-3 overflow-hidden rounded-lg text-sm font-medium group bg-gradient-to-br from-blue-400 to-green-600 group-hover:from-green-400 group-hover:to-blue-600 group-hover:scale-105 ease-in duration-100  text-white focus:ring-4 focus:outline-none  focus:ring-green-800 hover:drop-shadow-lg hover:shadow-black z-[25]"
        >
          <span className="w-full relative px-6 py-3 transition-all ease-in duration-100 bg-black rounded-md group-hover:bg-opacity-0 text-2xl group-hover:scale-105 z-[25] ">
            Sprawdź design!
          </span>
        </button>
      </div>
      <div className="w-full mx-auto xl:mx-0 mt-12 xl:mt-0">
        <div className="overflow-hidden flex items-center justify-center lg:rounded-xl">
          <Image
            src="/assets/underhero2.png"
            width={1024}
            height={700}
            alt="Strony WWW w przystępnych cenach. Obrazek Quixy.pl"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
}
