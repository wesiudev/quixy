import Image from "next/image";
import underhero from "../assets/underhero2.png";
import websites from "../assets/websites.png";
import { FaArrowRight } from "react-icons/fa";
export default function UnderHero() {
  return (
    <div className="w-screen bg-gradient-to-b from-blue-500 to-green-300 flex flex-col xl:flex-row lg:px-[12vw] py-12">
      <div className="w-[90%] mx-auto xl:w-1/2">
        <h1 className="py-6 font-coco text-2xl lg:text-4xl text-white text-center lg:text-left font-bold selection:bg-green-400 selection:text-white lg:py-10 flex flex-row items-center">
          <FaArrowRight className="mr-3" />
          Zamów unikalną stronę!
        </h1>
        <div className="overflow-hidden flex items-center justify-center rounded-xl">
          <Image
            src={underhero}
            width={1024}
            height={700}
            alt="Strony WWW w przystępnych cenach. Obrazek Quixy.pl"
            className="w-full h-auto "
          />
        </div>
      </div>
      <div className="w-full lg:w-[90vw] xl:w-1/2 relative mx-auto flex items-center flex-col justify-center">
        <div className="w-full text-md lg:text-xl font-coco selection:bg-green-400 selection:text-white text text-white text-center pl-6">
          Każda strona internetowa, tworzona we współpracy z{" "}
          <span className="font-bold text-yellow-400 italic"> Quixy </span>jest
          dostosowywana do
          <span className="font-bold text-yellow-400 italic">
            {" "}
            indywidualnych potrzeb każdego klienta{" "}
          </span>{" "}
          i otrzymuje unikalną szatę graficzną.
        </div>
        <button className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-3 mr-2 overflow-hidden rounded-lg text-sm font-medium group bg-gradient-to-br from-blue-400 to-green-600 group-hover:from-green-400 group-hover:to-blue-600 group-hover:scale-105 ease-in duration-100 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-green-800 hover:drop-shadow-lg hover:shadow-black z-[100]">
          <span className="relative px-6 py-3 transition-all ease-in duration-100 bg-black rounded-md group-hover:bg-opacity-0 text-2xl group-hover:scale-105 z-[100]">
            Sprawdź design!
          </span>
        </button>
      </div>
    </div>
  );
}
