"use client";
import { setHeroDialogData, setHeroDialogLang } from "@/redux/slices/appState";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uaFlag from "../assets/ua.png";
import plFlag from "../assets/pl.png";
import enFlag from "../assets/en.png";
import enHover from "../assets/enHover.png";
import plHover from "../assets/plHover.png";
import uaHover from "../assets/uaHover.png";
import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

const availableCountries = [
  {
    name: "ua",
    img: uaFlag,
    imgHover: uaHover,
    fullName: "Ukraiński",
  },
  {
    name: "pl",
    img: plFlag,
    imgHover: plHover,
    fullName: "Polski",
  },
  {
    name: "en",
    img: enFlag,
    imgHover: enHover,
    fullName: "Angielski",
  },
];
export default function Contact() {
  const [userInput, setUserInput] = useState({
    heroDialogStep: 0,
    websiteName: "",
    languages: [],
    theme: [],
    about: "",
    seo: "",
    seoTarget: "",
    social: "",
    audience: "",
    blog: "",
    blogServices: "",
  });
  const [chosenLang, setChosenLang] = useState<any>([]);
  const { heroDialogData } = useSelector((state: any) => state.appState);
  const dispatch = useDispatch();

  function handleUserInput(e: any, inputType: string) {
    switch (inputType) {
      case "text":
        dispatch(
          setHeroDialogData({
            ...heroDialogData,
            [e.target.name]: e.target.value,
          })
        );
        break;
      default:
        break;
    }
  }
  function updateDialogStep() {
    dispatch(
      setHeroDialogData({ ...heroDialogData, step: heroDialogData.step + 1 })
    );
  }
  return (
    <>
      <div
        className={`relative w-max h-full overflow-hidden bg-black duration-500 delay-300 ${
          heroDialogData.step === 0 ? "bg-opacity-0" : "bg-opacity-50"
        }`}
      >
        <div
          className={`w-screen h-full flex items-center justify-center flex-col delay-300 duration-700 ${
            heroDialogData.step > 0 ? "-translate-x-[100%]" : "-translate-x-0"
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
            onClick={updateDialogStep}
            className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden rounded-lg text-sm font-medium group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 ease-in duration-200 hover:text-white text-white focus:ring-4 focus:outline-none  focus:ring-green-800 hover:drop-shadow-lg hover:shadow-black z-[100]"
          >
            <span className="relative px-6 py-3 transition-all ease-in duration-200 bg-black rounded-md group-hover:bg-opacity-0 text-2xl  z-[100]">
              Zamów stronę
            </span>
          </button>
        </div>
        <div
          className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center justify-center ${
            heroDialogData.step === 1
              ? "-translate-y-[50%] opacity-100 z-50"
              : "-translate-y-[200%] opacity-0 z-[-50]"
          } duration-500 delay-1000`}
        >
          <h1 className=" text-white w-max text-2xl lg:text-4xl xl:text-5xl font-bold font-coco">
            SZUKASZ STRONY?
          </h1>
          <h2 className="text-sm mb-8 font-light italic">
            skonfiguruj stronę, by później ją zamówić
          </h2>
          <div className="flex flex-row items-center justify-center flex-wrap w-full">
            <Buttons
              dispatch={dispatch}
              data={heroDialogData}
              updateDialogStep={updateDialogStep}
            />
          </div>
        </div>
        <div
          className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center duration-500 delay-1000 justify-center ${
            heroDialogData.step === 2
              ? "-translate-y-[50%] opacity-100 z-50"
              : "-translate-y-[200%] opacity-0 z-[-50]"
          }   `}
        >
          <h1 className=" text-white w-max text-2xl lg:text-4xl xl:text-5xl font-bold font-coco">
            STRONA MIĘDZYNARODOWA?
          </h1>
          <h2 className="text-sm font-light italic">
            wybierz języki {"(minimalnie jeden)"}
          </h2>

          <div
            className={`flex flex-col items-center justify-center flex-wrap w-full ${
              heroDialogData.step === 2
                ? "translate-y-[10%]"
                : "-translate-y-[100%]"
            } duration-700 delay-[1.2s] my-4`}
          >
            <div className="flex flex-row items-center justify-center flex-wrap w-full space-x-6">
              {availableCountries.map((country: any, i: number) => (
                <>
                  <button
                    onClick={() => {
                      chosenLang.some((lang: any) => lang.name === country.name)
                        ? // if there is object in the array
                          // than remove it...
                          setChosenLang((prevChosenLang: any[]) =>
                            prevChosenLang.filter(
                              (item) => item.name !== country.name
                            )
                          )
                        : //else add object to the array
                          setChosenLang((prevChosenLang: any[]) => [
                            ...prevChosenLang,
                            country,
                          ]);
                    }}
                    className="group relative w-[70px] h-[70px]"
                    key={i}
                  >
                    <Image
                      src={country.img}
                      width={444}
                      height={444}
                      alt="country flag quixy strony www"
                      className={`max-h-[70px] w-auto absolute left-0 top-0 z-10 duration-200 ${
                        chosenLang.some(
                          (lang: any) => lang.name === country.name
                        ) && "scale-[1.2] -translate-y-4"
                      }`}
                    />
                    <Image
                      src={country.imgHover}
                      width={444}
                      height={444}
                      alt="country flag quixy strony www"
                      className={`max-h-[70px] w-auto absolute left-0 top-0 opacity-0 group-hover:opacity-100 duration-200 z-5 ${
                        chosenLang.some(
                          (lang: any) => lang.name === country.name
                        ) && "opacity-100 scale-[1.3] -translate-y-4"
                      }`}
                    />
                  </button>
                </>
              ))}
            </div>{" "}
            <button
              onClick={() => {
                dispatch(setHeroDialogLang(chosenLang)),
                  dispatch(setHeroDialogData({ ...heroDialogData, step: 3 }));
              }}
              className={`rounded-full hover:disabled:shadow-sm hover:disabled:shadow-red-400 hover:disabled:bg-red-500 hover:disabled:cursor-not-allowed mt-8 ${
                chosenLang.length >= 1 &&
                "bg-green-500 shadow-sm shadow-green-400"
              } duration-300`}
              disabled={chosenLang.length <= 0}
            >
              <FaArrowCircleRight className="w-16 h-16 text-white " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const Buttons = ({
  dispatch,
  data,
  updateDialogStep,
}: {
  dispatch: any;
  data: any;
  updateDialogStep: Function;
}) => {
  return (
    <>
      <button
        onClick={() => {
          dispatch(
            setHeroDialogData({
              ...data,
              step: 2,
              websiteName:
                "Dzień dobry, poproszę o wycenę dla strony wizytówki, która będzie charakteryzowała się poniższymi cechami:",
            })
          );
        }}
        type="button"
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-lime-800 shadow-lg  shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 mb-6"
      >
        Strona wizytówka
      </button>
      <button
        onClick={() => {
          dispatch(
            setHeroDialogData({
              ...data,
              step: 2,
              websiteName:
                "Dzień dobry, poproszę o wycenę dla sklepu internetowego, który będzie charakteryzował się poniższymi cechami:",
            })
          );
        }}
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-red-800 shadow-lg  shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 mb-6"
      >
        Sklep internetowy
      </button>
      <button
        onClick={() => {
          dispatch(
            setHeroDialogData({
              ...data,
              step: 2,
              websiteName:
                "Dzień dobry, poproszę o wycenę dla strony landingowej, która będzie charakteryzowała poniższymi cechami:",
            })
          );
        }}
        type="button"
        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-pink-800 shadow-lg shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-4 mb-6"
      >
        Strona landingowa
      </button>{" "}
    </>
  );
};
