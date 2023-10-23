"use client";
import { setHeroDialogData } from "@/redux/slices/appState";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Translations } from "./dialogQuestions/Translations";
import { WebsiteTypeButtons } from "./dialogQuestions/WebsiteTypeButtons";

export default function Dialog() {
  const [chosenLang, setChosenLang] = useState<any>([]);
  const { heroDialogData } = useSelector((state: any) => state.appState);

  const dispatch = useDispatch();

  function updateDialogStep() {
    dispatch(
      setHeroDialogData({ ...heroDialogData, step: heroDialogData.step + 1 })
    );
  }
  return (
    <>
      <div
        className={`relative w-max h-full overflow-hidden bg-black duration-500 delay-800 ${
          heroDialogData.step === 0 ? "bg-opacity-0" : "bg-opacity-50"
        }`}
      >
        <div
          className={`w-screen h-full flex items-center justify-center flex-col duration-700 ${
            heroDialogData.step > 0 ? "-translate-x-[100%]" : "-translate-x-0"
          }`}
        >
          <h1 className="text-white text-3xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold font-coco drop-shadow-lg shadow-black">
            UTRZYJ NOSA KONKURENCJI
          </h1>

          <h2 className="text-sm mt-2 text-white md:text-xl drop-shadow-lg shadow-black italic">
            w <strong className="font-extrabold text-yellow-400">Quixy</strong>{" "}
            znamy się na rzeczy
          </h2>
          <button
            onClick={updateDialogStep}
            className="flex flex-col-reverse md:flex-row md:items-center z-50 relative"
          >
            <div className="mx-auto w-max relative px-12 py-2 my-6  text-zinc-700 drop-shadow-md  shadow-black transition-all ease-in-out  bg-gradient-to-tr from-yellow-400 via-yellow-200 to-yellow-400 rounded-md text-2xl z-[100] cursor-pointer duration-200 hover:shadow-yellow-600 shadow-lg">
              Zamów stronę
            </div>
          </button>
        </div>
        <div
          className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center justify-center ${
            heroDialogData.step === 1
              ? "-translate-y-[50%] opacity-100 z-50"
              : "-translate-y-[200%] opacity-0 z-[-50]"
          } duration-500 delay-300`}
        >
          <h1 className=" text-white w-max text-2xl lg:text-4xl xl:text-5xl font-bold font-coco">
            SZUKASZ STRONY?
          </h1>
          <h2 className="text-sm mb-8 font-light italic">
            skonfiguruj stronę, by później ją zamówić
          </h2>
          <div className="flex flex-row items-center justify-center flex-wrap w-full">
            {/* strona wizytowka, strona landingowa, sklep [...] */}
            <WebsiteTypeButtons
              dispatch={dispatch}
              data={heroDialogData}
              updateDialogStep={updateDialogStep}
            />
          </div>
        </div>
        <Translations
          heroDialogData={heroDialogData}
          setHeroDialogData={setHeroDialogData}
          chosenLang={chosenLang}
          setChosenLang={setChosenLang}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}
