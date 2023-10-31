"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
export default function UnderHero() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className="w-screen flex flex-col">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full h-full   bg-gradient-to-b from-blue-500 to-green-500">
        {" "}
        <Image
          src="/assets/underhero2.png"
          width={1024}
          height={700}
          alt="Strony WWW w przystępnych cenach. Obrazek Quixy.pl"
          className="w-full lg:w-[50vw] h-auto "
        />
        <div className="text-white text-4xl lg:min-w-[50vw] lg:text-5xl 2xl:text-[76px] font-coco font-bold flex flex-col items-center lg:items-start lg:justify-center px-12 py-24 lg:py-0 drop-shadow-xl shadow-black">
          <div data-aos="fade-left" data-aos-dealy={600} className="">
            {" "}
            Strony
          </div>
          <div data-aos="fade-left" data-aos-dealy={900} className="">
            {" "}
            internetowe
          </div>
          <div data-aos="fade-left" data-aos-dealy={1200} className="">
            {" "}
            w
          </div>
          <div data-aos="fade-left" data-aos-dealy={1500} className="">
            {" "}
            przystępnych
          </div>
          <div data-aos="fade-left" data-aos-dealy={1800} className="">
            {" "}
            cenach.
          </div>
        </div>{" "}
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full h-full  bg-green-400 bg-opacity-20">
        <div className="lg:min-w-[50vw] text-white text-4xl lg:text-5xl 2xl:text-[76px] font-coco font-bold flex flex-col lg:items-end items-center lg:justify-center px-12 py-24 lg:py-0 drop-shadow-xl shadow-black">
          <span data-aos="fade-right" data-aos-dealy={900} className="">
            {" "}
            Profesjonalni
          </span>
          <span data-aos="fade-right" data-aos-dealy={1200} className="">
            {" "}
            Developerzy
          </span>
          <span
            data-aos="fade-right"
            data-aos-dealy={1500}
            className="text-yellow-400"
          >
            {" "}
            Quixy
          </span>
        </div>
        <Image
          src="/assets/underhero3.png"
          width={1024}
          height={700}
          alt="Strony WWW w przystępnych cenach. Obrazek Quixy.pl"
          className="w-full lg:w-[50vw] h-auto  hidden lg:block"
        />
      </div>
      <div className="lg:h-screen w-screen bg-[#212121] flex items-center justify-center font-coco">
        <div className="bg-[#1b1b1b] w-full lg:w-[80%]  lg:rounded-xl lg:mb-12 lg:mt-12 lg:p-12 flex  2xl:text-left flex-col 2xl:flex-row justify-center">
          <div className="flex flex-col min-h-full items-start 2xl:pr-12 px-6 ">
            <h1 className="text-white text-3xl  font-coco mb-3 mt-12 2xl:mt-0">
              Jak wygląda nasza praca?
            </h1>
            <div className="flex flex-col justify-between h-full">
              <h2 className=" text-gray-500 ">
                Zadaniem webdevelopera jest tworzenie stron internetowych. W
                Quixy tworzymy strony internetowe które są responsywne, czyli
                dostosowane do urządzeń mobilnych. Oferujemy optymalizację stron
                internetowych pod kątem SEO, dzięki czemu Twoja strona będzie
                wyświetlać się wysoko w wynikach wyszukiwania.
              </h2>
              <Link
                href="/blog"
                className=" text-green-400 text-xl rounded-xl  mt-3 mb-12 2xl:mb-0 underline underline-offset-1 w-max"
              >
                Więcej na blogu
              </Link>
            </div>
          </div>
          <video
            src="/herovideo.mp4"
            autoPlay
            loop
            muted
            className="w-full 2xl:w-[70%] h-auto 2xl:pr-12"
          />
        </div>
      </div>
    </div>
  );
}
