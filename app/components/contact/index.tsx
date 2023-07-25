"use client";
import { Info } from "./info";
import { useState } from "react";
import { Form } from "./form";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";
export const Contact = ({
  setContactOpen,
  isContactOpen,
}: {
  setContactOpen: (arg: boolean) => void;
  isContactOpen: boolean;
}) => {
  const [currentTab, setCurrentTab] = useState("info");
  function getTransitionState(isContactOpen: boolean) {
    if (isContactOpen) {
      return "scale-100 -translate-x-0";
    } else {
      return "scale-0 translate-x-full ";
    }
  }
  const transitionState = getTransitionState(isContactOpen);
  return (
    <div
      className={`z-[1500] sm:shadow-sm  font-sans min-h-[90vh] sm:min-h-[60vh] pt-6 sm:shadow-black w-full sm:w-2/3 lg:w-1/2  bg-gradient-to-br from-rose-400 to-red-400 sm:rounded-l-md fixed top-0 sm:top-[50%] right-0 z-50 sm:-translate-y-[50%] ease-in-out duration-[250ms] flex items-center justify-center lg:pt-6 
        ${transitionState}}
        `}
    >
      <div className="min-h-[90vh] sm:min-h-[60vh] w-full relative">
        <button
          onClick={() => setContactOpen(false)}
          className="hidden sm:flex absolute top-0 -left-12 h-12 w-12 bg-gradient-to-tr from-red-400 to-rose-600 rounded-l-md items-center justify-center"
        >
          <IoIosArrowDroprightCircle className="text-white w-7 h-7" />
        </button>
        <div className="w-full h-max px-6 pt-6 pb-0 text-white text-3xl flex flex-row items-center justify-between">
          <div className="flex flex-col w-full pt-3">
            <span className="w-max mx-auto -mt-6">Kontakt</span>
            <div className="h-1 w-2/3 sm:w-12  rounded-full mx-auto mt-4 mb-2 bg-rose-600"></div>
          </div>
        </div>
        <div className="w-full p-6 flex flex-row gap-x-3">
          <button
            onClick={() => setCurrentTab("info")}
            className={`rounded-md w-full ${
              currentTab !== "info" ? "hover:bg-red-500" : "bg-rose-600"
            } bg-rose-500 text-white py-3`}
          >
            Dane kontaktowe
          </button>
          <button
            onClick={() => setCurrentTab("email")}
            className={`rounded-md w-full ${
              currentTab !== "email" ? "hover:bg-red-500" : "bg-rose-600"
            } bg-rose-500 text-white py-3`}
          >
            Wyślij email
          </button>
        </div>

        {currentTab === "info" && <Info />}
        {currentTab === "email" && <Form />}
        {currentTab === "info" && (
          <div className="h-full flex items-center">
            <Link
              onClick={() => setContactOpen(false)}
              href="/faq"
              className="px-3 py-2 bg-rose-600 hover:bg-red-500 w-max m-6 rounded-md text-white text-center italic flex flex-row items-center"
            >
              <FaInfoCircle className="mr-2" />
              Sprawdź często zadawane pytania
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
