import { setHeroDialogLang } from "@/redux/slices/appState";
import uaFlag from "../../../assets/ua.png";
import plFlag from "../../../assets/pl.png";
import enFlag from "../../../assets/en.png";
import enHover from "../../../assets/enHover.png";
import plHover from "../../../assets/plHover.png";
import uaHover from "../../../assets/uaHover.png";
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

export const Translations = ({
  heroDialogData,
  setHeroDialogData,
  chosenLang,
  setChosenLang,
  dispatch,
}: any) => {
  return (
    <div
      className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center duration-500 delay-500 justify-center ${
        heroDialogData.step === 2
          ? "-translate-y-[50%] opacity-100 z-50"
          : "-translate-y-[200%] opacity-0 z-[-50]"
      }   `}
    >
      <h1 className=" text-white w-max text-2xl lg:text-4xl xl:text-5xl font-bold font-coco">
        TŁUMACZENIE?
      </h1>
      <h2 className="text-sm font-light italic">
        wybierz języki {"(minimalnie jeden)"}
      </h2>

      <div
        className={`flex flex-col items-center justify-center flex-wrap w-full ${
          heroDialogData.step === 2
            ? "-translate-y-[-10%]"
            : "-translate-y-[-150%]"
        } duration-500 delay-500`}
      >
        <div className="flex flex-row items-center justify-center flex-wrap w-full space-x-6">
          {availableCountries.map((country: any, i: number) => (
            <div key={i}>
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
                  className={`max-h-[70px] w-auto absolute left-0 top-0 z-10 duration-100 ${
                    chosenLang.some(
                      (lang: any) => lang.name === country.name
                    ) && "scale-[1.2] -translate-y-2"
                  }`}
                />
                <Image
                  src={country.imgHover}
                  width={444}
                  height={444}
                  alt="country flag quixy strony www"
                  className={`max-h-[70px] w-auto absolute left-0 top-0 opacity-0 group-hover:opacity-100 duration-100 z-5 ${
                    chosenLang.some(
                      (lang: any) => lang.name === country.name
                    ) && "opacity-100 scale-[1.3] -translate-y-2"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>{" "}
        <button
          onClick={() => {
            dispatch(setHeroDialogLang(chosenLang)),
              dispatch(setHeroDialogData({ ...heroDialogData, step: 3 }));
          }}
          className={`h-max w-max rounded-full hover:disabled:shadow-sm hover:disabled:shadow-red-400 hover:disabled:bg-red-500 hover:disabled:cursor-not-allowed mt-2 ${
            chosenLang.length >= 1 && "bg-green-500 shadow-sm shadow-green-400"
          } duration-100`}
          disabled={chosenLang.length <= 0}
        >
          <FaArrowCircleRight className="w-12 h-12 text-white " />
        </button>
      </div>
    </div>
  );
};
