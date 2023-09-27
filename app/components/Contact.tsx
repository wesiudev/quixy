"use client";
import { useState } from "react";
export default function Contact() {
  const [contactDetails, setContactDetails] = useState({
    step: 0,
  });
  return (
    <>
      <div
        className={`relative w-max h-full overflow-hidden bg-black duration-500 delay-300 ${
          contactDetails.step < 1 ? "bg-opacity-0" : "bg-opacity-50"
        }`}
      >
        <div
          className={`w-screen h-full flex items-center justify-center flex-col delay-300 duration-700 ${
            contactDetails.step === 1 ? "-translate-x-[100%]" : "-translate-x-0"
          }`}
        >
          <h1 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold font-coco drop-shadow-lg shadow-black">
            UTRZYJ NOSA KONKURENCJI
          </h1>
          <h2 className="text-sm   text-white  drop-shadow-lg shadow-black italic">
            w <strong className="font-extrabold text-yellow-400">Quixy</strong>{" "}
            znamy się na rzeczy
          </h2>
          <button
            onClick={() => setContactDetails({ ...contactDetails, step: 1 })}
            className="mt-12 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg text-sm font-medium group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 ease-in duration-200 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-green-800 hover:drop-shadow-lg hover:shadow-black"
          >
            <span className="relative px-6 py-3 transition-all ease-in duration-200 bg-black rounded-md group-hover:bg-opacity-0 text-2xl">
              Zamów stronę
            </span>
          </button>
        </div>
        <div
          className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center justify-center ${
            contactDetails.step === 1
              ? "-translate-y-[50%] opacity-100 z-50"
              : "-translate-y-[100%] opacity-0 z-[-50]"
          } duration-500 delay-1000`}
        >
          <h1 className=" text-white w-max text-2xl lg:text-4xl xl:text-5xl font-bold font-coco">
            SZUKASZ STRONY?
          </h1>
          <h2 className="text-sm mb-8 font-light italic">
            skonfiguruj stronę, by później ją zamówić
          </h2>
          <div className="flex flex-row items-center justify-center flex-wrap w-full">
            <button
              type="button"
              className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-lime-800 shadow-lg  shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 mb-6"
            >
              Strona wizytówka
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800 shadow-lg  shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 mb-6"
            >
              Sklep internetowy
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-pink-800 shadow-lg shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 mb-6"
            >
              Strona landingowa
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
