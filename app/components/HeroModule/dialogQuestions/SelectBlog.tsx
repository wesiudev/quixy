"use client";
import { setHeroDialogData } from "@/redux/slices/appState";
import Link from "next/link";
import { useState } from "react";
import { FaArrowCircleRight, FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const SelectBlog = ({
  dispatch,
  data,
}: {
  dispatch: any;
  data: any;
  updateDialogStep: Function;
}) => {
  const [isBlog, setBlog] = useState(true);
  const [isBlogAccepted, setBlogAccepted] = useState(false);
  return (
    <>
      <div
        className={`w-full absolute left-[50%] top-[50%] -translate-x-[50%] flex flex-col items-center duration-500 delay-500 justify-center ${
          data.step === 4
            ? "-translate-y-[50%] opacity-100 z-50"
            : "-translate-y-[200%] opacity-0 z-[-50]"
        }   `}
      >
        <div
          className={`flex flex-col duration-500 delay-300 ${
            isBlog && !isBlogAccepted
              ? "-translate-y-[-12px] opacity-100 "
              : "-translate-y-[50vh] opacity-0"
          }`}
        >
          <span className=" text-white text-2xl lg:text-4xl xl:text-5xl font-bold font-coco">
            Rozwój i pozycjonowanie
          </span>
          <span className={`text-sm font-light italic mb-2 text-center`}>
            czy na twojej stronie będzie blog?
          </span>
        </div>
        <div
          className={`flex flex-col -mt-12 duration-700  ${
            isBlog && isBlogAccepted
              ? "-translate-x-[0vh] opacity-100 delay-300"
              : "-translate-x-[25vw] opacity-0"
          }`}
        >
          <span className=" text-white text-center text-2xl lg:text-4xl xl:text-5xl font-bold font-coco ">
            Prowadzenie bloga
          </span>
          <span className={`text-sm font-light italic text-center `}>
            czy chcesz abyśmy tworzyli i publikowali posty za ciebie?
          </span>
          {/* <Link
            href="/pricing"
            className={`text-green-400 text-sm font-light italic my-1 delay-1000 select-none `}
          >
            Sprawdź cennik
          </Link> */}
        </div>

        <div className="flex flex-row items-center space-x-6 mt-3">
          <button
            onClick={() => {
              isBlogAccepted &&
                dispatch(
                  setHeroDialogData({
                    ...data,
                    step: 5,
                    blog: true,
                    blogServices: false,
                  })
                );
              !isBlogAccepted &&
                dispatch(
                  setHeroDialogData({
                    ...data,
                    step: 5,
                    blog: false,
                    blogServices: false,
                  })
                );
            }}
            type="button"
            className={`relative group bg-white text-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-white font-bold rounded-lg text-sm px-5 py-2.5 text-center mb-6 hover:scale-105 duration-100`}
          >
            <div
              className={`absolute -right-3 -top-3 rounded-full p-1 group-hover:block hidden bg-red-500 text-xl`}
            >
              <AiOutlineClose className="text-white" />
            </div>
            Nie
          </button>
          <button
            onClick={() => {
              !isBlogAccepted
                ? setBlogAccepted(true)
                : dispatch(
                    setHeroDialogData({
                      ...data,
                      step: 5,
                      blog: true,
                      blogServices: true,
                    })
                  );
            }}
            type="button"
            className={`${
              isBlog ? "bg-green-200" : "bg-white"
            } relative text-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none  focus:ring-white font-bold rounded-lg text-sm px-5 py-2.5 text-center mb-6 hover:scale-105 duration-100`}
          >
            <div
              className={`absolute -right-3 -top-3 rounded-full p-1  ${
                isBlog ? "block" : "hidden"
              } bg-green-400 text-xl`}
            >
              <FaCheck className="text-white" />
            </div>
            Tak
          </button>{" "}
        </div>
        <div className="flex flex-row space-x-6">
          <button
            onClick={(e) => {
              isBlogAccepted === false
                ? (dispatch(setHeroDialogData({ ...data, step: 3 })),
                  e.preventDefault(),
                  e.stopPropagation())
                : setBlogAccepted(false);
            }}
            title="Poprzedni krok"
            className={`rotate-180  mb-3 h-max w-max rounded-full  hover:shadow-green-400 hover:bg-green-500  duration-100`}
          >
            <FaArrowCircleRight className="w-12 h-12 text-white " />
          </button>
          <button
            title="Następny krok"
            onClick={(e) => {
              !isBlogAccepted
                ? (setBlogAccepted(true),
                  e.preventDefault(),
                  e.stopPropagation())
                : dispatch(
                    setHeroDialogData({
                      ...data,
                      step: 5,
                      blog: true,
                      blogServices: true,
                    })
                  );
            }}
            className={`mb-3 h-max w-max rounded-full  hover:shadow-green-400 hover:bg-green-500  duration-100`}
          >
            <FaArrowCircleRight className="w-12 h-12 text-white " />
          </button>
        </div>
        <Link
          className="text-sm mt-3 text-yellow-400"
          title="Dlaczego warto prowadzic bloga na stronie internetowej?"
          href="/blog/dlaczego-warto-prowadzic-bloga-korzysci-plynace-z-prowadzenia-bloga"
        >
          Dlaczego warto prowadzic bloga?
        </Link>
      </div>
    </>
  );
};
