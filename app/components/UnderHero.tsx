"use client";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";
import { FaArtstation, FaLongArrowAltRight } from "react-icons/fa";
export default function UnderHero() {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <div className="w-screen flex flex-col">
      <div className=" flex flex-col-reverse lg:flex-row items-center w-full h-full  bg-[#212121]">
        {" "}
        <Image
          src="/assets/underhero4.png"
          width={1200}
          height={1200}
          alt="Strony WWW w przystępnych cenach. Obrazek Quixy.pl"
          className="w-full lg:w-[50vw] h-auto  lg:border-r-2 border-yellow-400 pt-12"
        />
        <div
          data-aos="fade-left"
          data-aos-duration="700"
          className="hidden mt-12 h-full text-white lg:min-w-[50vw] text-5xl sm:text-7xl lg:text-5xl xl:text-6xl font-coco font-bold lg:flex  flex-col items-center lg:items-start lg:justify-center lg:py-0 lg:px-6 xl:px-12"
        >
          <div className="drop-shadow-lg shadow-black"> Strony</div>
          <div className="drop-shadow-lg shadow-black"> internetowe</div>
          <div className="flex flex-row items-center">
            <div className="drop-shadow-lg shadow-black mr-2"> w</div>
            <div className="drop-shadow-lg shadow-black text-yellow-400">
              {" "}
              przystępnych
            </div>
          </div>
          <div className="drop-shadow-lg shadow-black"> cenach.</div>
        </div>{" "}
        <div className="lg:hidden mt-12 h-full text-white lg:min-w-[50vw] text-4xl sm:text-7xl lg:text-5xl xl:text-6xl font-coco font-bold flex  flex-col items-center lg:items-start lg:justify-center lg:py-0 lg:px-6 xl:px-12">
          <div className="drop-shadow-lg shadow-black"> Strony</div>
          <div className="drop-shadow-lg shadow-black"> internetowe</div>
          <div className="flex flex-row items-center">
            <div className="drop-shadow-lg shadow-black mr-2"> w</div>
            <div className="drop-shadow-lg shadow-black text-yellow-400">
              {" "}
              przystępnych
            </div>
          </div>
          <div className="drop-shadow-lg shadow-black"> cenach.</div>
        </div>{" "}
      </div>
      <div className="flex flex-col lg:flex-row items-center w-full h-full bg-[#212121]">
        <div className="hidden py-6 sm:py-16 lg:border-r-2 border-yellow-400 h-max w-full lg:h-[70vh] lg:min-w-[50vw] text-white text-5xl sm:text-7xl lg:text-6xl 2xl:text-[76px] font-coco font-bold lg:flex flex-col lg:items-end items-center lg:justify-center lg:px-6 xl:px-12 lg:py-0 ">
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            className=" flex flex-col items-end justify-end "
          >
            <span className="text-white drop-shadow-xl shadow-black">
              Profesjonalni
            </span>
            <span className="text-white drop-shadow-xl shadow-black">
              Developerzy
            </span>
            <span className="text-yellow-400 drop-shadow-xl shadow-black">
              {" "}
              Quixy
            </span>
          </div>
        </div>
        <div className="lg:hidden py-6 sm:py-16 lg:border-r-2 border-yellow-400 h-max w-full lg:h-[70vh] lg:min-w-[50vw] text-white text-4xl sm:text-7xl lg:text-6xl 2xl:text-[76px] font-coco font-bold flex flex-col lg:items-end items-center lg:justify-center lg:px-6 xl:px-12 lg:py-0 ">
          <span className="text-white drop-shadow-xl shadow-black">
            Profesjonalni
          </span>
          <span className="text-white drop-shadow-xl shadow-black">
            Developerzy
          </span>
          <span className="text-yellow-400 drop-shadow-xl shadow-black">
            {" "}
            Quixy
          </span>
        </div>
        <div className="bg-[#212121] flex  flex-col px-4 sm:px-6 xl:px-12">
          <p className="text-white text-lg sm:text-2xl lg:text-3xl font-coco h-max text-center mb-6 sm:mb-16 lg:mb-0 lg:text-left">
            {" "}
            Jesteśmy zespołem młodych, ambitnych i kreatywnych osób, które
            tworzą strony i progresywne aplikacje internetowe. Naszym celem jest
            dostarczenie produktu najwyższej jakości, który będzie spełniał
            oczekiwania klienta.
          </p>
          {/* <Link
            href="/quixy-team"
            className="my-4 p-3  flex items-end mx-auto lg:mx-0 text-white text-3xl font-bold"
          >
            Nasz zespół <FaLongArrowAltRight className="ml-3 text-yellow-400" />
          </Link> */}
        </div>
      </div>
      <div className="lg:h-max w-screen bg-[#212121] flex justify-center font-coco pb-12">
        <div className="bg-[#121212] w-full px-4  lg:w-[80%] lg:rounded-xl lg:border-2 border-yellow-400 lg:p-12 flex  2xl:text-left flex-col ">
          <div className="flex flex-col items-center lg:text-center lg:w-4/5 xl:w-3/5 mx-auto">
            <h2 className="text-white text-4xl font-coco mb-6 mt-12 2xl:mt-0 w-full ">
              Jak wygląda nasza praca?
            </h2>
            <p className=" text-gray-400  lg:border-none lg:my-0 w-full">
              Zadaniem Web Developerów jest tworzenie stron internetowych. W
              Quixy tworzymy strony internetowe które są responsywne, czyli
              dostosowane do urządzeń mobilnych. Oferujemy optymalizację stron
              internetowych pod kątem SEO, dzięki czemu Twoja strona będzie
              wyświetlać się wysoko w wynikach wyszukiwania.
            </p>
            <Link
              href="/blog"
              className=" text-yellow-400 text-xl rounded-xl  mt-3  w-full lg:w-max flex flex-row items-center"
            >
              <FaArtstation className="text-white mr-2" /> Więcej na blogu
            </Link>
          </div>
          <video
            src="/herovideo.mp4"
            autoPlay
            loop
            muted
            className="w-full mt-12 lg:w-[70%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
