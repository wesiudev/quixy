"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

export default function Motivation() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className="bg-[#1b1b1b] text-white py-16 lg:py-24 w-full px-3 lg:px-[12vw] relative z-50 font-coco">
      <div className="absolute w-auto h-full hidden xl:block  right-0 2xl:right-[12vw] top-0">
        <Image
          src="/assets/watch-vector-gradient-free-image-quixy.png"
          width={1024}
          height={1024}
          alt="watch-vector-gradient-free-image-quixy"
          className="h-full w-auto opacity-10"
        />
      </div>
      <div className="w-full mx-auto lg:mx-0 relative z-50 lg:flex items-start justify-start">
        <div className="flex flex-row items-start w-full sm:px-6 lg:px-0">
          <div className="pr-2 sm:pr-4 text-white text-3xl sm:text-4xl lg:text-5xl 2xl:text-[66px] font-coco font-bold flex flex-col items-end lg:justify-center sm:w-max  drop-shadow-xl shadow-black ">
            <div data-aos="fade-left" data-aos-dealy={600} className="">
              Zajmiemy
            </div>
            <div data-aos="fade-left" data-aos-dealy={900} className="">
              się
            </div>
            <div data-aos="fade-left" data-aos-dealy={1200} className="">
              tym
            </div>
            <div data-aos="fade-left" data-aos-dealy={1500} className="">
              za
            </div>
            <div data-aos="fade-left" data-aos-dealy={1800} className="">
              Ciebie!
            </div>
          </div>{" "}
          <div className="flex flex-col pl-2 sm:pl-4  border-purple-500 border-l h-full">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full lg:w-[50vw]  mb-4  text-left font-coco">
              Nasze profesjonalne{" "}
              <span className="lg:font-bold bg-gradient-to-r from-purple-500 to-green-500 bg-clip-text text-transparent">
                usługi projektowania stron internetowych{" "}
              </span>
              zapewniają Twojej firmie wyjątkową obecność online. Z dumą
              tworzymy aplikacje internetowe, które przyciągają uwagę,
              zwiększają zaufanie klientów i wspierają rozwój Twojego biznesu.
            </p>
            <div className="hidden lg:flex w-full items-center gap-2 xl:gap-0 lg:flex-wrap xl:-ml-2 font-coco overflow-x-scroll lg:overflow-hidden scrollbar py-3 lg:py-0">
              {[
                "Tworzenie stron internetowych",
                "Frontend development",
                "SEO",
                "Backend development",
                "UI",
                "Kampanie reklamowe",
                "Reklamy online",
                "UX",
                "Programowanie",
                "Promowanie",
                "Kodowanie",
                "Design",
              ].map((item: any, i: any) => (
                <div
                  key={i}
                  className="bg-purple-700  p-1.5 px-3 text-white font-light xl:m-1"
                >
                  <div className="w-max">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="lg:hidden w-full items-center flex gap-2 xl:gap-0 lg:w-[75%] xl:w-[65%]  lg:flex-wrap xl:-ml-2 font-coco overflow-x-scroll lg:overflow-hidden scrollbar py-3 lg:py-0">
        {[
          "Tworzenie stron internetowych",
          "Frontend development",
          "SEO",
          "Backend development",
          "UI",
          "Kampanie reklamowe",
          "Reklamy online",
          "UX",
          "Programowanie",
          "Promowanie",
          "Kodowanie",
          "Design",
        ].map((item: any, i: any) => (
          <div
            key={i}
            className="bg-purple-700  p-1.5 px-3 text-white font-light xl:m-1"
          >
            <div className="w-max">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
