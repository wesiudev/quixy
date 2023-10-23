"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
export default function UnderHero() {
  useEffect(() => {
    AOS.init({
      offset: 50,
    });
  }, []);
  return (
    <div className="w-screen bg-gradient-to-b from-blue-500 to-green-500 grid grid-cols-1 xl:grid-cols-2 lg:px-[8vw] pt-12 lg:py-36">
      <div className="w-full relative mx-auto flex items-start lg:items-start flex-col justify-evenly h-full px-3">
        <h1
          data-aos="fade-down"
          data-aos-delay={250}
          className="text-3xl lg:text-5xl md:text-6xl text-gray-100 font-bold mb-3 xl:mt-0 drop-shadow-lg shadow-black"
        >
          Strony Quixy
        </h1>
        <div
          data-aos="fade-left"
          data-aos-delay={450}
          className="w-[90%] text-md sm:text-lg md:text-xl font-coco selection:bg-green-400 selection:text-white  text-gray-100  md:text-center lg:text-left my-6 lg:my-3"
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

        <button data-aos="fade-left" data-aos-delay={450} className="">
          <div className="mx-auto w-max relative px-6 py-2 lg:mt-6  text-zinc-700 drop-shadow-sm  shadow-black transition-all ease-in-out  bg-gradient-to-tr from-yellow-400 via-yellow-200 to-yellow-400 rounded-md text-base md:text-2xl z-[100] cursor-pointer duration-200 hover:shadow-yellow-600 shadow-sm">
            Sprawdź ofertę
          </div>
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
