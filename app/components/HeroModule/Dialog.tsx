"use client";
import { setHeroDialogData } from "@/redux/slices/appState";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Translations } from "./dialogQuestions/Translations";
import { WebsiteTypeButtons } from "./dialogQuestions/WebsiteTypeButtons";
import { Audience } from "./dialogQuestions/Audience";
import { SelectBlog } from "./dialogQuestions/SelectBlog";
import Link from "next/link";
import { ContactType } from "./dialogQuestions/ContactType";
import ThankYouMessage from "./dialogQuestions/ThankYouMessage";

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
        className={`relative w-max h-[50vh] overflow-visible bg-black duration-500  delay-800 ${
          heroDialogData.step === 0 ? "bg-opacity-0" : "bg-opacity-50"
        }`}
      >
        <div
          className={`delay-800 ${
            heroDialogData.step === 0
              ? "bg-opacity-80 h-[40vh]"
              : "bg-opacity-100 h-[45vh]"
          } absolute w-[110vw] top-[-40vh] left-[-5vw] bg-black  duration-500`}
        ></div>
        <div
          className={`delay-800 ${
            heroDialogData.step === 0
              ? "bg-opacity-80 h-[40vh]"
              : "bg-opacity-100 h-[45vh]"
          } absolute w-[110vw]  bottom-[-40vh] left-[-5vw] bg-black  duration-500`}
        ></div>
        <div
          className={`w-screen h-full flex items-center justify-center flex-col duration-700 ${
            heroDialogData.step > 0 ? "-translate-x-[100%]" : "-translate-x-0"
          }`}
        >
          <h1 className="bg-gradient-to-tr from-yellow-600 via-yellow-300 to-yellow-600 bg-clip-text text-transparent text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-coco drop-shadow-lg shadow-black">
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
            <div className="mx-auto w-max relative px-6 py-3 mt-6  text-zinc-700 drop-shadow-md  shadow-black transition-all ease-in-out  bg-gradient-to-tr from-yellow-400 via-yellow-200 to-yellow-400 rounded-md text-sm md:text-xl z-[100] cursor-pointer duration-200 hover:shadow-yellow-600 shadow-lg">
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
          <h1 className=" text-white w-max text-3xl lg:text-4xl xl:text-5xl font-bold font-coco">
            SZUKASZ STRONY?
          </h1>
          <h2 className="text-sm mb-3  md:mb-5  mt-1 font-light italic">
            skonfiguruj stronę, by później ją zamówić
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center flex-wrap w-full">
              {/* strona wizytowka, strona landingowa, sklep [...] */}
              <WebsiteTypeButtons
                dispatch={dispatch}
                data={heroDialogData}
                updateDialogStep={updateDialogStep}
              />
            </div>
            <Link
              className="text-sm mt-3 text-yellow-400"
              title="Rodzaje stron internetowych - Quixy"
              href="/blog/jaki-rodzaj-strony-internetowej-wybrac-dla-biznesu"
            >
              Jak dobrać rodzaj strony?
            </Link>
          </div>
        </div>
        <Translations
          heroDialogData={heroDialogData}
          setHeroDialogData={setHeroDialogData}
          chosenLang={chosenLang}
          setChosenLang={setChosenLang}
          dispatch={dispatch}
        />
        <Audience
          dispatch={dispatch}
          data={heroDialogData}
          setHeroDialogData={setHeroDialogData}
        />
        <SelectBlog
          dispatch={dispatch}
          data={heroDialogData}
          updateDialogStep={updateDialogStep}
        />
        <ContactType
          dispatch={dispatch}
          data={heroDialogData}
          setHeroDialogData={setHeroDialogData}
        />
        <ThankYouMessage
          dispatch={dispatch}
          data={heroDialogData}
          setHeroDialogData={setHeroDialogData}
        />
      </div>
    </>
  );
}
