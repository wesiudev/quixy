"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useIsVisible } from "react-is-visible";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
export default function Technologies({ dictionary }: { dictionary: any }) {
  const nodeRefTop = useRef<any>();
  const nodeRefBottom = useRef<any>();
  const isTopVisible = useIsVisible(nodeRefTop);
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <section
      className={`${
        isTopVisible ? "lg:rounded-t-0" : "lg:rounded-t-[500px]"
      } duration-500 w-full bg-[#212121] min-h-screen flex flex-col relative overflow-hidden pb-12 sm:pb-12 lg:pb-24 mt-24 lg:mt-0`}
      aria-label="Technologies Section"
    >
      <div
        className="absolute top-48 lg:top-60 left-0 w-4 h-full"
        ref={nodeRefTop}
        aria-hidden="true"
      />
      <div className="h-max flex flex-col items-center justify-center w-full lg:w-3/4 lg:flex-row lg:mx-auto lg:mt-0 ">
        <div className="w-full bg-transparent h-max mx-auto lg:mx-0 ">
          <h2
            data-aos="fade-down"
            data-aos-delay="300"
            className="hidden lg:block text-center lg:text-left w-full px-3 pb-6 sm:px-0 sm:w-3/4 mx-auto lg:mx-0 text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg shadow-black text-white font-bold"
          >
            <span className="text-green-400">{"/*"}</span>
            {dictionary["TechnologiesPage"].h1}
            <span className="text-green-400">{"*/"}</span>
          </h2>
          <div className="h-[30vh] w-full overflow-hidden flex items-center justify-center lg:hidden mb-6 relative">
            <h2 className="absolute left-[50%] bg-black h-full bg-opacity-30 lg:bg-transparent -translate-x-[50%] top-[50%] -translate-y-[50%] text-center lg:text-left w-full flex items-center justify-center sm:w-3/4 mx-auto lg:mx-0 text-5xl sm:text-6xl xl:text-7xl drop-shadow-lg shadow-black text-white font-bold">
              <span className="text-green-400">{"/"}</span>
              {dictionary["TechnologiesPage"].h1}
            </h2>
            <Image
              src="/offer/laptop.webp"
              alt="Technologies Hero Image"
              width={1024}
              height={1024}
              className="w-full group-hover:-translate-y-3 group-hover:scale-105 duration-100 mx-auto"
            />
          </div>

          <p
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-full my-12 lg:mt-0 lg:mb-0 lg:pr-24 sm:text-center lg:text-left mx-auto lg:mx-0 text-lg lg:pt-12 drop-shadow-lg shadow-black text-white px-5 text-left"
          >
            {dictionary["TechnologiesPage"].h2}
          </p>
        </div>
        <div className="h-[90vh] w-1/2 items-center justify-center -skew-x-12 lg:flex hidden  rounded-lg">
          <img
            src="/offer/laptop.webp"
            alt="Technologies Hero Image"
            className="pl-12 w-full scale-150 group-hover:-translate-y-3 group-hover:scale-105 duration-100 py-6 mx-auto"
          />
        </div>
      </div>
      <div
        role="grid"
        className="w-full px-5 lg:w-3/4 grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto transition-all duration-100 relative overflow-hidden "
      >
        <div className="absolute -top-24 " id="1" aria-hidden="true"></div>
        {dictionary["Technologies"].map((tech: any, idx: number) => (
          <div
            data-aos="fade-up"
            data-aos-delay={200}
            key={idx}
            className="relative bg-zinc-600 flex flex-col duration-75 group sm:rounded-md shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-3 cursor-inherit"
            role="gridcell"
            aria-label={tech.name}
          >
            <div
              className="flex items-center justify-center py-6 bg-gradient-to-r from-zinc-600 via-zinc-400 to-zinc-600 h-[25vh] sm:rounded-t-md"
              aria-hidden="true"
            >
              <img
                src={tech.image}
                alt="Strona Internetowa"
                className="w-1/3 group-hover:sm:-translate-y-3 group-hover:sm:scale-105 duration-100 "
              />
            </div>
            <div className="flex flex-col relative">
              <Link
                href={tech.link}
                title="Zobacz stronę technlogii"
                target="_blank"
                className="pl-3 pt-3 text-green-400 flex flex-row items-center w-max"
              >
                {dictionary["TechnologiesPage"].docs}
              </Link>
              <div className="min-h-[12vh] w-full select-none">
                <div className=" text-gray-200 p-3 pt-1 min-h-[10vh] cursor-default flex flex-col">
                  {tech.description}{" "}
                  {idx === 4 && (
                    <>
                      <div className="text-sm mt-2 text-white">
                        Wykorzystana m.in. w naszym projekcie
                        <Link
                          href="https://decocanva.com"
                          title="Przejdź do decocanva"
                          target="_blank"
                          className="text-purple-500 font-bold ml-1"
                        >
                          Decocanva
                        </Link>
                      </div>
                    </>
                  )}
                  {idx === 5 && (
                    <>
                      <div className="text-sm mt-2 text-white">
                        Wykorzystana do renderowania modelu płótna 3D w jednej z
                        naszych realizacji:
                        <Link
                          href="https://blackbellart.com/shop/artwork/aztecki-szyk"
                          title="Przejdź do Blackbellart"
                          target="_blank"
                          className="text-orange-500 font-bold ml-1"
                        >
                          BlackbellArt
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
